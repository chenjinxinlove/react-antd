
md_content = `# JavaScript编码规范




[1 前言](#user-content-1-%E5%89%8D%E8%A8%80)

[2 代码风格](#user-content-2-%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC)

　　[2.1 文件](#user-content-21-%E6%96%87%E4%BB%B6)

　　[2.2 结构](#user-content-22-%E7%BB%93%E6%9E%84)

　　　　[2.2.1 缩进](#user-content-221-%E7%BC%A9%E8%BF%9B)

　　　　[2.2.2 空格](#user-content-222-%E7%A9%BA%E6%A0%BC)

　　　　[2.2.3 换行](#user-content-223-%E6%8D%A2%E8%A1%8C)

　　　　[2.2.4 语句](#user-content-224-%E8%AF%AD%E5%8F%A5)

　　[2.3 命名](#user-content-23-%E5%91%BD%E5%90%8D)

　　[2.4 注释](#user-content-24-%E6%B3%A8%E9%87%8A)

　　　　[2.4.1 单行注释](#user-content-241-%E5%8D%95%E8%A1%8C%E6%B3%A8%E9%87%8A)

　　　　[2.4.2 多行注释](#user-content-242-%E5%A4%9A%E8%A1%8C%E6%B3%A8%E9%87%8A)

　　　　[2.4.3 文档化注释](#user-content-243-%E6%96%87%E6%A1%A3%E5%8C%96%E6%B3%A8%E9%87%8A)

　　　　[2.4.4 类型定义](#user-content-244-%E7%B1%BB%E5%9E%8B%E5%AE%9A%E4%B9%89)

　　　　[2.4.5 文件注释](#user-content-245-%E6%96%87%E4%BB%B6%E6%B3%A8%E9%87%8A)

　　　　[2.4.6 命名空间注释](#user-content-246-%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4%E6%B3%A8%E9%87%8A)

　　　　[2.4.7 类注释](#user-content-247-%E7%B1%BB%E6%B3%A8%E9%87%8A)

　　　　[2.4.8 函数/方法注释](#user-content-248-%E5%87%BD%E6%95%B0/%E6%96%B9%E6%B3%95%E6%B3%A8%E9%87%8A)

　　　　[2.4.9 事件注释](#user-content-249-%E4%BA%8B%E4%BB%B6%E6%B3%A8%E9%87%8A)

　　　　[2.4.10 常量注释](#user-content-2410-%E5%B8%B8%E9%87%8F%E6%B3%A8%E9%87%8A)

　　　　[2.4.11 复杂类型注释](#user-content-2411-%E5%A4%8D%E6%9D%82%E7%B1%BB%E5%9E%8B%E6%B3%A8%E9%87%8A)

　　　　[2.4.12 AMD 模块注释](#user-content-2412-amd-%E6%A8%A1%E5%9D%97%E6%B3%A8%E9%87%8A)

　　　　[2.4.13 细节注释](#user-content-2413-%E7%BB%86%E8%8A%82%E6%B3%A8%E9%87%8A)

[3 语言特性](#user-content-3-%E8%AF%AD%E8%A8%80%E7%89%B9%E6%80%A7)

　　[3.1 变量](#user-content-31-%E5%8F%98%E9%87%8F)

　　[3.2 条件](#user-content-32-%E6%9D%A1%E4%BB%B6)

　　[3.3 循环](#user-content-33-%E5%BE%AA%E7%8E%AF)

　　[3.4 类型](#user-content-34-%E7%B1%BB%E5%9E%8B)

　　　　[3.4.1 类型检测](#user-content-341-%E7%B1%BB%E5%9E%8B%E6%A3%80%E6%B5%8B)

　　　　[3.4.2 类型转换](#user-content-342-%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2)

　　[3.5 字符串](#user-content-35-%E5%AD%97%E7%AC%A6%E4%B8%B2)

　　[3.6 对象](#user-content-36-%E5%AF%B9%E8%B1%A1)

　　[3.7 数组](#user-content-37-%E6%95%B0%E7%BB%84)

　　[3.8 函数](#user-content-38-%E5%87%BD%E6%95%B0)

　　　　[3.8.1 函数长度](#user-content-381-%E5%87%BD%E6%95%B0%E9%95%BF%E5%BA%A6)

　　　　[3.8.2 参数设计](#user-content-382-%E5%8F%82%E6%95%B0%E8%AE%BE%E8%AE%A1)

　　　　[3.8.3 闭包](#user-content-383-%E9%97%AD%E5%8C%85)

　　　　[3.8.4 空函数](#user-content-384-%E7%A9%BA%E5%87%BD%E6%95%B0)

　　[3.9 面向对象](#user-content-39-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1)

　　[3.10 动态特性](#user-content-310-%E5%8A%A8%E6%80%81%E7%89%B9%E6%80%A7)

　　　　[3.10.1 eval](#user-content-3101-eval)

　　　　[3.10.2 动态执行代码](#user-content-3102-%E5%8A%A8%E6%80%81%E6%89%A7%E8%A1%8C%E4%BB%A3%E7%A0%81)

　　　　[3.10.3 with](#user-content-3103-with)

　　　　[3.10.4 delete](#user-content-3104-delete)

　　　　[3.10.5 对象属性](#user-content-3105-%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7)

[4 浏览器环境](#user-content-4-%E6%B5%8F%E8%A7%88%E5%99%A8%E7%8E%AF%E5%A2%83)

　　[4.1 模块化](#user-content-41-%E6%A8%A1%E5%9D%97%E5%8C%96)

　　　　[4.1.1 AMD](#user-content-411-amd)

　　　　[4.1.2 define](#user-content-412-define)

　　　　[4.1.3 require](#user-content-413-require)

　　[4.2 DOM](#user-content-42-dom)

　　　　[4.2.1 元素获取](#user-content-421-%E5%85%83%E7%B4%A0%E8%8E%B7%E5%8F%96)

　　　　[4.2.2 样式获取](#user-content-422-%E6%A0%B7%E5%BC%8F%E8%8E%B7%E5%8F%96)

　　　　[4.2.3 样式设置](#user-content-423-%E6%A0%B7%E5%BC%8F%E8%AE%BE%E7%BD%AE)

　　　　[4.2.4 DOM 操作](#user-content-424-dom-%E6%93%8D%E4%BD%9C)

　　　　[4.2.5 DOM 事件](#user-content-425-dom-%E4%BA%8B%E4%BB%B6)





## 1 前言


JavaScript 在百度一直有着广泛的应用，特别是在浏览器端的行为管理。本文档的目标是使 JavaScript 代码风格保持一致，容易被理解和被维护。

虽然本文档是针对 JavaScript 设计的，但是在使用各种 JavaScript 的预编译语言时(如 TypeScript 等)时，适用的部分也应尽量遵循本文档的约定。





## 2 代码风格






### 2.1 文件

`
var markdown = require( "markdown" ).markdown;
html_content = markdown.toHTML( md_content );





