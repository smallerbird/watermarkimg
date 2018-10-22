const images = require('images');
const path = require('path');
const isDebug=true;
class Watermarkimg{
    constructor(canvasWidth,canvasHeight,bakColor){
        this._canvasWidth=canvasWidth;
        this._canvasHeight=canvasHeight;
        this._canvas=new images(canvasWidth,canvasHeight);
        this._canvas.fill(bakColor[0], bakColor[1], bakColor[2],bakColor[3]);
        //images
        //this._img = images(sourceImg);
        //console.log(this._img.width(),this._img.height())
        this.imgWH=0;
    }
    get canvas(){
        return this._canvas;
    }
    drawImg(sourceImg){
        let img = images(sourceImg);
        let imgW=img.width();
        let imgH=img.height();
        this.imgWH=imgW/imgH;
        let w=imgW;
        let h=imgH;
        if(imgW>imgH||(imgW==imgH&&this._canvasWidth<this._canvasHeight)){
            w=this._canvasWidth;
            h=Math.ceil(w/this.imgWH);
        }else if(imgW<imgH||(imgW==imgH&&this._canvasWidth>this._canvasHeight)||(this._canvasWidth==this._canvasHeight)){
            h=this._canvasHeight;
            w=Math.ceil(h*this.imgWH);
        }
        img.size(w, h);
        let x=(this._canvasWidth-w)/2,y=(this._canvasHeight-h)/2;
        if(isDebug){
            console.log(`_canvasWidth:${this._canvasWidth},canvasHeight:${this._canvasHeight}`);
            console.log('drawImg _resize w:'+w+' h:'+h+' x:'+x+' y:'+y)
        }
        this._canvas.draw(img, x, y)
        return this;
    }
    save(filepath){
        this._canvas.save(filepath);
    }
}
module.exports=Watermarkimg;