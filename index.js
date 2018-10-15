const images = require('images');
const path = require('path');
class Watermarkimg{
    constructor(canvasWidth,canvasHeight){
        this._canvasWidth=canvasWidth;
        this._canvasHeight=canvasHeight;
        this._canvas=new images(canvasWidth,canvasHeight);
        //images
       //this._img = images(sourceImg);
       //console.log(this._img.width(),this._img.height())
    }
    get canvas(){
        return this._canvas;
    }
    drawImg(sourceImg){
        let img = images(sourceImg);
        let {w,h}=this._resize(img);
        console.log('drawImg _resize w:'+w+' h:'+h)
        img.size(w, h);
        let x=(this._canvasWidth-w)/2,y=(this._canvasHeight-h)/2;
        this._canvas.draw(img, x, y)
        return this;
    }
    save(filepath){
        this._canvas.save(filepath);
    }
    _resize(img){
        let imgW=img.width();
        let imgH=img.height();
        let imgWH=imgW/imgH;
        let endW=imgW;
        let endH=imgH;
        if (imgW>imgH){
            if (imgW>this._canvasWidth){
                endW=this._canvasWidth;
                endH=Math.floor(endW*imgWH);
            }
        }else{
            if (imgH>this._canvasHeight){
                endH=this._canvasHeight;
                endW=Math.floor(endH/imgWH);
            }
        }
        return {w:endW,h:endH}
    }
}
module.exports=Watermarkimg;