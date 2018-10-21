 node-watermarkimg
=================
干什么的
-----
在一个固定宽，高，背景色的空白图上，叠加若干图片。让这些图片自适应，并居中。适合用做图片水印

使用方法
-----
```sh
npm install node-watermarkimg
```
```js
const path = require('path')
const Watermarkimg=require('node-watermarkimg');

//[r,g,b,alpha]
let bakColor=[0xff,0xff,0xff,1];
let img=new Watermarkimg(210,154,bakColor);
img
    .drawImg(path.resolve(__dirname,'./600x800.jpg'))
    .drawImg(path.resolve(__dirname,'./watermarkImg.png'))
    .drawImg(path.resolve(__dirname,'./logo.png'))
    .save(path.resolve(__dirname,'./a.png'))
```

运行实例
-----
```sh
cd test
node index.js  #就会生成a.png
```

参考
-----
1.[node-images](https://github.com/zhangyuanwei/node-images)



