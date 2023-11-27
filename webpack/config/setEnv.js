const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');
const path = require('path');

const { exec } = require('node:child_process');
const execPromise = util.promisify(exec);

const envPath = path.resolve(__dirname, '../setting/env.js');

async function init() {
  const env = fs.readFileSync(envPath, 'utf8');
  const projectPath = env.match(/projectPath\s*=\s*['"]([^'"]+)['"]/)[1];
  console.log(`projectPath的值为：${projectPath}`);
  const { changePath } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'changePath',
      message: '路径是否需要改变？',
      default: false
    }
  ]);
  if (!changePath) {
    return;
  }
  const { newPath } = await inquirer.prompt([
    {
      type: 'input',
      name: 'newPath',
      message: '请输入新的路径：'
    }
  ]);
  const newEnv = env.replace(
    /projectPath\s*=\s*['"][^'"]+['"]/,
    `projectPath = '${newPath}'`
  );
  fs.writeFileSync(envPath, newEnv, 'utf8');
  console.log('路径已更新为：', newPath);
}

init();
