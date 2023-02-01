# Reference Image Presenter for Artistic Creation
基于 `NodeJS` 的本地的艺术创作参考图展示工具 

NodeJS-based local art creation reference map display tool

## 使用教程

在 `fileNameLoader.js` 同目录使用 `nodemon fileNameLoader.js` 命令启动 `8088` 端口，需要保证 `nodemon` 安装和 `8088` 端口闲置，之后打开 `index.html` 即可打开展示工具

Use the 'nodemon fileNameLoader.js' command to start the '8088' port in the same directory as 'fileNameLoader.js', you need to ensure that the 'nodemon' installation and '8088' port are idle, and then open 'index.html' to open the display tool


## 使用效果

<table align=center>
    <tr>
<td>
<div align=center>
<img decoding="async" src="./readme_file/material_index.jpg" height="200px" >
</div>
</td>
<td>
<div align=center>
<img decoding="async" src="./readme_file/material.jpg" height="200px"border-radius="3px" >
</div>
</td>
    </tr>
    <tr>
<td>
<div align=center>
索引页面
</div>
</td>
<td>
<div align=center>
点击索引内容后的内容页面（以建筑为例）
</div>
</td>
    </tr>
</table>

## 环境依赖
>    "axios": "^1.2.5",\
    "express": "^4.18.2",\
    "fs": "^0.0.1-security",\
    "nodemon": "^2.0.20",\
    "path": "^0.12.7"

## 安排隐藏文件

<table align=center>
    <tr>
<td>
<div align=center>
<img decoding="async" src="./readme_file/lock.jpg" height="100px" >
</div>
</td>
<td>
<div align=center>
<img decoding="async" src="./readme_file/input.jpg" height="100px"border-radius="3px" >
</div>
</td>
<td>
<div align=center>
<img decoding="async" src="./readme_file/unlocked.jpg" height="100px"border-radius="3px" >
</div>
</td>
    </tr>
    <tr>
<td>
<div align=center>
点击 锁 图像
</div>
</td>
<td>
<div align=center>
输入密钥

默认为 0000
</div>
</td>
<td>
<div align=center>
点击 “隐藏-已解锁内容” 

跳转到隐藏文件夹
</div>
</td>
    </tr>
</table>