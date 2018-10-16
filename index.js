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
    }
    get canvas(){
        return this._canvas;
    }
    drawImg(sourceImg){
        let img = images(sourceImg);
        let {w,h}=this._resize(img.width(),img.height());;

        img.size(w, h);
        let x=(this._canvasWidth-w)/2,y=(this._canvasHeight-h)/2;
        if(isDebug) console.log('drawImg _resize w:'+w+' h:'+h+' x:'+x+' y:'+y)
        this._canvas.draw(img, x, y)
        return this;
    }
    save(filepath){
        this._canvas.save(filepath);
    }
    _resize(imgW,imgH){

        if(isDebug) console.log('img w:'+imgW+' h:'+imgH+' resize to:');

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
        if (endW>this._canvasWidth||endH>this._canvasHeight){
            return this._resize(endW,endH);
        }
        return {w:endW,h:endH}
    }
}
module.exports=Watermarkimg;