const path = require('path')
const Watermarkimg=require('../index');

let bakColor=[0xff,0xff,0xff,1];
let img=new Watermarkimg(500,500,bakColor);
img
    //.drawImg(path.resolve(__dirname,'./800x600.jpg'))
    //.drawImg(path.resolve(__dirname,'./600x800.jpg'))
    .drawImg(path.resolve(__dirname,'./abc.png'))
    //.drawImg(path.resolve(__dirname,'./watermarkImg.png'))
    .drawImg(path.resolve(__dirname,'./logo.png'))
    .save(path.resolve(__dirname,'./a.png'))