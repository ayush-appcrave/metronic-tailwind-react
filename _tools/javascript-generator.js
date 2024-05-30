const { exec } = require("node:child_process");
const fs = require("fs");
const fse = require("fs-extra");
const glob = require("glob");
const path = require("path");
const { promisify } = require('util');
const babel = require('@babel/core');
const ts = require('typescript');

const viteTypescriptSourcePath = `../typescript/vite`;
const outputPath = `../javascript/vite`;
const outputSourcePath = `../javascript/vite/src`;

const filesToCopy = [
  "src/auth",
  "src/components",
  "src/css",
  "src/config",
  "src/hooks",
  "src/i18n",
  "src/layouts",
  "src/modules",
  "src/pages",
  "src/providers",
  "src/routing",
  "src/utils",
  "src/partials",
  "src/App.tsx",
  "src/main.tsx",
  "src/index.css",
  ".env",
  "tailwind.config.d.ts",
  "tailwind.config.js",
  "postcss.config.cjs",
  "index.html",
  "public",
];

const removeAsync = promisify(fse.remove);

// Function to recursively search for files in a directory
async function searchFiles(directory) {
    const files = fs.readdirSync(directory);
  
    files.forEach(async (file) => {
      const filePath = path.join(directory, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        searchFiles(filePath); // Recursively search subdirectories
      } else if (stats.isFile() && filePath.endsWith('.tsx')) {
        let fileContent = fs.readFileSync(filePath, 'utf-8');
        // Convert TSX to JSX using Babel
        const jsxCode = babel.transformSync(fileContent, {
          filename: filePath,
          presets: ['@babel/preset-typescript'],
        }).code;

        const jsxFilePath = filePath.replace('.tsx', '.jsx');
        fs.writeFileSync(jsxFilePath, jsxCode, 'utf-8');

        fs.unlinkSync(filePath);
      } else if(filePath.includes("types")) {
        fs.unlinkSync(filePath);
      } else if (filePath.includes("index.ts")) {
        let result = require('@babel/core').transformSync(
            fs.readFileSync(filePath),
            {
              filename: filePath,
              presets: ['@babel/preset-typescript'],
              plugins: ['@babel/plugin-transform-typescript'],
            }
        ).code;
        result = result.replaceAll(".tsx", "");
        result = result.replace("export * from './types';", "");
        const jsFilePath = filePath.replace('.ts', '.js');
        fs.writeFileSync(jsFilePath, result, 'utf-8');
        fs.unlinkSync(filePath);
      } else if (filePath.includes(".ts")) {
        let result = require('@babel/core').transformSync(
            fs.readFileSync(filePath),
            {
              filename: filePath,
              presets: ['@babel/preset-typescript'],
              plugins: ['@babel/plugin-transform-typescript'],
            }
        );
        const jsxFilePath = filePath.replace('.ts', '.js');
        fs.writeFileSync(jsxFilePath, result.code, 'utf-8');
        fs.unlinkSync(filePath);
      }
    });
}

const generateJsVersion = async () => {
    console.log(">> Deleting folder <<");
    try {
      await removeAsync(outputPath);
      console.log('>> Folder removed successfully. <<');
    } catch (error) {
      console.error(`>> Error removing folder: ${error} <<`);
    }

    // create new javascript vite project
    exec(`npm create vite@latest javascript -- --template react`,
      async (err, output) => {
        if (err) {
          console.error(`>> Could not execute command: ${err} <<`);
          return;
        }

        await fse.copy(`javascript`, outputPath);

        console.log(">> Successfully created empty vite javascript project <<");

        try {
          // copy entire src folder from vite
          await Promise.all(filesToCopy.map(async (file) => {
            return await fse.copy(`${viteTypescriptSourcePath}/${file}`, `${outputPath}/${file}`)
          }));

          await fse.copy(`${viteTypescriptSourcePath}/vite.config.ts`, `${outputPath}/vite.config.js`);

          // update tailwind configuration
          let tailWindConfigContent = fs.readFileSync(`${outputPath}/tailwind.config.js`, 'utf-8');
          tailWindConfigContent = tailWindConfigContent.replace("./src/**/*.{ts,tsx}", "./src/**/*.{js,jsx}");
          fs.writeFileSync(`${outputPath}/tailwind.config.js`, tailWindConfigContent, 'utf-8');

          // update index.html
          let indexHTMLContent = fs.readFileSync(`${outputPath}/index.html`, 'utf-8');
          indexHTMLContent = indexHTMLContent.replace("main.tsx", "main.jsx");
          fs.writeFileSync(`${outputPath}/index.html`, indexHTMLContent, 'utf-8');

          glob(path.join(outputSourcePath, '**/*'), { nodir: true }, (error, files) => {
            if (error) {
              console.error('Error:', error);
            } else {
              console.log('All files:', files);

              searchFiles(outputSourcePath);
            }
          });

          // Read the content of the source package.json file
          const sourcePackageJson = fse.readJsonSync(`${viteTypescriptSourcePath}/package.json`);

          // Read the content of the destination package.json file
          let destinationPackageJson = fse.readJsonSync(`${outputPath}/package.json`);

          // Merge dependencies from source to destination
          destinationPackageJson.dependencies = {
            ...destinationPackageJson.dependencies,
            ...sourcePackageJson.dependencies,
          };

          // Merge devDependencies if needed
          destinationPackageJson.devDependencies = {
            ...destinationPackageJson.devDependencies,
            ...sourcePackageJson.devDependencies,
          };

          fse.writeJsonSync(`${outputPath}/package.json`, destinationPackageJson, { spaces: 2 });
        } catch (error) {
          console.log(error.message);
        }
      });
}
  
generateJsVersion();