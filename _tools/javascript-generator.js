const { exec } = require("node:child_process");
const fs = require("fs");
const fse = require("fs-extra");
const glob = require("glob");
const path = require("path");
const { promisify } = require('util');
const babel = require('@babel/core');

const viteTypescriptSourcePath = `../typescript/vite`;
const outputPath = `../javascript/vite`;
const templateFile = `./javascript`;
const outputSourcePath = `../javascript/vite/src`;

const filesToCopy = [
  "src/auth",
  "src/components",
  "src/config",
  "src/styles",
  "src/errors",
  "src/hooks",
  "src/i18n",
  "src/layouts",
  "src/pages",
  "src/partials",
  "src/plugins",
  "src/providers",
  "src/routing",
  "src/utils",
  "src/App.tsx",
  "src/main.tsx",
  ".env",
  "tailwind.config.js",
  "postcss.config.js",
  "index.html",
  "public",
];

const removeAsync = promisify(fse.remove);

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
      await removeAsync(templateFile);
      console.log('>> Folder removed successfully. <<');
    } catch (error) {
      console.error(`>> Error removing folder: ${error} <<`);
    }

    exec(`npm create vite@latest javascript -- --template react`,
      async (err) => {
        if (err) {
          console.error(`>> Could not execute command: ${err} <<`);
          return;
        }

        await fse.copy(`javascript`, outputPath);

        console.log(">> Successfully created empty vite javascript project <<");

        try {
          await Promise.all(filesToCopy.map(async (file) => {
            return await fse.copy(`${viteTypescriptSourcePath}/${file}`, `${outputPath}/${file}`)
          }));

          await fse.copy(`${viteTypescriptSourcePath}/vite.config.ts`, `${outputPath}/vite.config.js`);
          let tailWindConfigContent = fs.readFileSync(`${outputPath}/tailwind.config.js`, 'utf-8');
          tailWindConfigContent = tailWindConfigContent.replace("./src/**/*.{ts,tsx}", "./src/**/*.{js,jsx}");
          fs.writeFileSync(`${outputPath}/tailwind.config.js`, tailWindConfigContent, 'utf-8');

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

          const sourcePackageJson = fse.readJsonSync(`${viteTypescriptSourcePath}/package.json`);
          let destinationPackageJson = fse.readJsonSync(`${outputPath}/package.json`);

          destinationPackageJson.dependencies = {
            ...destinationPackageJson.dependencies,
            ...sourcePackageJson.dependencies,
          };

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