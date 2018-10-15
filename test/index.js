const path = require('path')
const Watermarkimg=require('../index');

let img=new Watermarkimg(210,154);
let canvas=img.canvas;
canvas.fill(0x00, 0x0ff, 0x00);
img.drawImg(path.resolve(__dirname,'./watermarkImg.png'))
.save(path.resolve(__dirname,'./a.png'))