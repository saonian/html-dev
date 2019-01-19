## 基于Gulp的前端开发环境

本开发环境主要用于传统服务端页面渲染的web前端开发

前后端分离的使用对应框架的cli来生成开发环境

基于Gulp4，不兼容之前版本

### 主要功能：

1. 支持SASS/LESS
2. JS文件支持ES6（HTML文件内不支持）
3. 支持图片压缩
4. 支持静态文件布局器
5. 支持js合并（需手动配置具体合并文件）
6. 开发环境热加载

### Gulp安装

1. 如果之前有全局安装Gulp的，先卸载

   `npm rm --global gulp`

2. 确保已经安装了node

3. 安装gulp-cli

   `npm install --global gulp-cli`

### Usage

1. 安装项目依赖

`npm install`

2. 启动本地开发，在`dist`目录下生成未压缩的代码，会自动打开浏览器并显示dist目录下的index.htm页`localhost:3000`

`npm run dev`

3. 编译，在`dist`目录下生成压缩后的代码

`npm run build`







