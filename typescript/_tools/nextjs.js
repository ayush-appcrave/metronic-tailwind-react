const { exec } = require("node:child_process");
const fs = require("fs");
const fse = require("fs-extra");
const glob = require("glob");
const path = require("path");
const { promisify } = require('util');

const vitePath = `../vite/src`;
const nextJs = `nextjs/src`;

const filesToCopy = [
  "auth",
  "components",
  "config",
  "hooks",
  "i18n",
  "layouts",
  "modules",
  "pages",
  "providers",
  "utils",
];

const layouts = [
   "auth/AuthLayout.tsx",
   "demo1/Demo1Layout.tsx",
   "error/AuthLayout.tsx",
]

const pages = {
  "pages/AuthPages1.tsx": "auth/AuthLayout.tsx",
  "pages/AuthPage2.tsx": "auth/AuthLayout.tsx",
  "pages/DashboardPage.tsx": "demo1/Demo1Layout.tsx",
  "pages/EcommercePage.tsx": "demo1/Demo1Layout.tsx",
  "pages/MarketingPage.tsx": "demo1/Demo1Layout.tsx",
}

const removeAsync = promisify(fse.remove);

// Function to replace imports and usage in a file
async function replaceImports(filePath) {
  let fileContent = fs.readFileSync(filePath, 'utf-8');

  if(fileContent.includes("<Routes>")){
    console.log("file removed with routes" + filePath);
    fs.unlink(filePath, function(err){
          if(err) return console.log(err);
          console.log('file deleted successfully ' + filePath);
    });
    return;
  }

  fileContent = fileContent.replace("import { Link, useLocation, useNavigate } from 'react-router-dom';", "import { useRouter } from 'next/router';\nimport Link from 'next/link';");
  fileContent = fileContent.replace("import { useLocation, useNavigate } from 'react-router';", "import { useRouter } from 'next/router';");
  fileContent = fileContent.replace("import { Link } from 'react-router-dom';", "import Link from 'next/link';");
  fileContent = fileContent.replace("import { useNavigate } from 'react-router';';", "import { useRouter } from 'next/router';");
  fileContent = fileContent.replace("import { useSearchParams } from 'react-router-dom';", "import { useRouter } from 'next/router';");
  fileContent = fileContent.replace("import { useSearchParams } from 'react-router-dom';", "import { useRouter } from 'next/router';");
  fileContent = fileContent.replace("import { useParams } from 'react-router-dom';", "import { useRouter } from 'next/router';");
  fileContent = fileContent.replace("import { Link as RouterLink, useLocation } from 'react-router-dom';", "import { useRouter } from 'next/router';\nimport Link as RouterLink from 'next/link';");
  fileContent = fileContent.replace("import { matchPath, useLocation } from 'react-router-dom';", "import { useRouter } from 'next/router';");
  fileContent = fileContent.replace("import { Link as RouterLink } from 'react-router-dom';", "import Link as RouterLink from 'next/link';");
  fileContent = fileContent.replace("import { Box, Link } from '@mui/material';", "import { Box, Link as MUILink } from '@mui/material';")
  
  fileContent = fileContent.replace("import { useLocation } from 'react-router';", "import { useRouter } from 'next/router';");
  fileContent = fileContent.replace("import { useNavigate } from 'react-router';", "import { useRouter } from 'next/router';");
  fileContent = fileContent.replace("import { useNavigate, useParams } from 'react-router';", "import { useRouter } from 'next/router';");
  fileContent = fileContent.replace("import { useParams } from 'react-router';", "import { useRouter } from 'next/router';");
  fileContent = fileContent.replace("import Link as RouterLink from 'next/link';", "import Link from 'next/link';");
  fileContent = fileContent.replace("import { Box, Chip, Link, Typography, useTheme } from '@mui/material';", "import { Box, Chip, Link as MUILInk, Typography, useTheme } from '@mui/material';");

  fileContent = fileContent.replace("import.meta.env.", "process.env.")
  
  fileContent = fileContent.replace("useLocation()", 'useRouter().asPath');
  fileContent = fileContent.replace("useNavigate()", 'useRouter().push');
  fileContent = fileContent.replace("useSearchParams()", 'useRouter().query');
  fileContent = fileContent.replace("useParams()", 'useRouter().query');

  fileContent = fileContent.replace ("const { pathname } = useRouter().asPath;", "const pathname = useRouter().asPath;")

  if(filePath.includes("pages")) {
    console.log(filePath);
    fileContent = fileContent.replace(/export \{[^}]+\};/g, match => match.replace(/export \{([^}]+)\};/, 'export default $1;'));
  }

  pages.map(item => {
    
  })

  // Write the modified content back to the file
  fs.writeFileSync(filePath, fileContent, 'utf-8');
}

// Function to recursively search for files in a directory
function searchFiles(directory) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      searchFiles(filePath); // Recursively search subdirectories
    } else if (stats.isFile() && filePath.endsWith('.tsx')) {
      replaceImports(filePath); // Replace imports and usage in TypeScript files
    }
  });
}


const generateNextjs = async () => {

  console.log("deleting folder");

  try {
    await removeAsync('./nextjs');
    console.log('Folder removed successfully.');
  } catch (error) {
    console.error(`Error removing folder: ${error}`);
  }

console.log("creating new nextjs projecs");
// create new nextjs project
exec(
  `npx create-next-app nextjs --ts --no-tailwind --eslint --app --src-dir --import-alias @/*`,
  async (err, output) => {
    if (err) {
      console.error("Could not execute command: ", err);
      return;
    }
    console.log("Output: \n", output);
    console.log(">>> Created empty nextjs project <<<\n");

    try {

        // copy entire src folder from vite
        await Promise.all(filesToCopy.map(async (file) => {
          return await fse.copy(`${vitePath}/${file}`, `${nextJs}/${file}`)
        }));

        await fse.copy(`../vite/.env`, `nextjs/.env`);
        await fse.copy(`../vite/tailwind.config.d.ts`, `nextjs/tailwind.config.d.ts`);
        await fse.copy(`../vite/tailwind.config.js`, `nextjs/tailwind.config.js`);
        await fse.copy(`../vite/postcss.config.cjs`, `nextjs/postcss.config.cjs`);

        console.log('Folder copied successfully.');

        glob(path.join(nextJs, '**/*'), { nodir: true }, (error, files) => {
          if (error) {
            console.error('Error:', error);
          } else {
            console.log('All files:', files);

            searchFiles(nextJs);  
          }
        });

        try {
          await removeAsync('./nextjs/src/app');
          console.log('app folder removed successfully.');
        } catch (error) {
          console.error(`Error removing folder: ${error}`);
        }

        await fse.copy(`nextjs-related-files/_app.tsx`, `${nextJs}/pages/_app.tsx`);
        await fse.copy(`nextjs-related-files/index.ts`, `${nextJs}/pages/index.ts`);
        await fse.copy(`nextjs-related-files/next.config.mjs`, `nextjs/next.config.mjs`);
        await fse.copy(`nextjs-related-files/useMatchPath.ts`, `${nextJs}/hooks/useMatchPath.ts`);
        await fse.copy(`nextjs-related-files/wrapper/Wrapper.tsx`, `${nextJs}/layouts/demo1/wrapper/Wrapper.tsx`);

        // Read the content of the source package.json file
        const sourcePackageJson = fse.readJsonSync(`../vite/package.json`);

        // Read the content of the destination package.json file
        let destinationPackageJson = fse.readJsonSync(`nextjs/package.json`);

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

        fse.writeJsonSync(`nextjs/package.json`, destinationPackageJson, { spaces: 2 });   

      } catch (error) {
        console.log(error.message);
      }    
});
}

generateNextjs();




// create simple nextjs project to test routing

// setup routing
//  1. parse routing/AppRouter.tsx
//  2. collect all files into array route/files
//  3. setup pages folder
//  4. replace imports react-route to next/router and next/link

// merge dependencies
