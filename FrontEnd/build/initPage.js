/**
 * @author: LK
 * @desc: 使用命令创建3个文件(vue、scss、js)
 * npm run init-page pages/index/index
 */

// 引入相关模块
const path = require("path");
const fs = require("fs");
// 参数解析
const argparse = require("argparse");
const parser = new argparse.ArgumentParser({
  version: "1.0.0",
  description: "init-page",
});
parser.addArgument("target", {
  metavar: "TARGET",
  nargs: 1,
});

// 读取文件函数
readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", function (error, data) {
      if (error) {
        console.log(error);
        reject(error);
        return false;
      }
      resolve(data.toString());
    });
  });
};

// 写入文件函数
let writeFile = (fileName, content) => {
  // 写入文件
  fs.writeFile(fileName, content, "utf8", (error) => {
    if (error) {
      console.log(error);
      return false;
    }
    console.log(`${fileName} 文件创建成功`);
  });
};

// 同步创建目录
let mkdirsSync = (dirname) => {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
};

// 初始化模板
let initTemplate = () => {
  // 创建目录
  mkdirsSync(targetPath);
  // 创建 js
  readFile("./build/template/index.js").then((content) => {
    writeFile(`${targetFile}.js`, content);
  });
  // 创建 vue
  readFile("./build/template/index.vue").then((content) => {
    content = content
      .replace(/fileName/g, targetFileName)
      .replace(/templateId/g, templateId);
    writeFile(`${targetFile}.vue`, content);
  });
  // 创建 scss
  readFile("./build/template/index.scss").then((content) => {
    content = content.replace(/fileName/g, templateId);
    writeFile(`${targetFile}.scss`, content);
  });
};

// 更新页面路由模块pages.json
let updatePagesJson = (name) => {
  let pagesPath = path.join(__dirname, "../src/pages.json");
  let pagesJson = fs.readFileSync(pagesPath);
  pagesJson = JSON.parse(pagesJson);
  let pages = pagesJson.pages || [];
  let exists = pages.some((item) => item.path == name);
  if (!exists) {
    pages.push({
      path: name,
      style: {
        navigationBarTitleText: "",
      },
    });
    pagesJson.condition.list[0].path = name;
    fs.writeFileSync(pagesPath, JSON.stringify(pagesJson, null, 2));
  }
};

const args = parser.parseArgs();
let pagePath = args.target[0];
let templateId = pagePath.replace(/\//g, "-");
let index = pagePath.lastIndexOf("/");
let basePath = path.join(__dirname, "../src");
let targetPath = path.join(basePath, pagePath.substring(0, index));
let targetFile = path.join(basePath, pagePath);
let targetFileName = pagePath.substring(index + 1, pagePath.length);

// 参数合法性
if (!pagePath.includes("/") || targetFileName == "") {
  console.error("参数无效，示例：npm run init-page /pages/index/index ");
  return;
}

// 文件检测
if (fs.existsSync(`${targetFile}.vue`)) {
  console.error(`创建失败, ${targetFile} 已经存在`);
  return;
}

// 初始化模版
initTemplate();
// 更新 pages.json 配置
updatePagesJson(pagePath);
