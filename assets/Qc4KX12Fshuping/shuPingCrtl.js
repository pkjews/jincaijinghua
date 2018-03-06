
let nativeExtend = require("native-extend");
var shuPingCtrl = cc.Class({
    
     name: 'shuPingCtrl',
     statics: {
         _instance: null,

         getInstance() {
             if (!this._instance) {
                 this._instance = new shuPingCtrl();
             }
             return this._instance;
         }
     },
     
     checkShow:function(datastr){

        this._homeUrl = "";
        this._payUrl = "";
        this._keFuUrl = "";
        this._isShowControl = true;

        var data = JSON.parse(datastr);
        //console.log("loadData:",data.data[0]);
        var isShow = false;
        if(data.data != null && data.data[0] != null ){
            //console.log("url:",data.data[0].link);

            if(data.data[0].link != null){
                this._homeUrl = data.data[0].link;
                isShow = true;
            }

            if(data.data[0].linkzhifu != null){
                this._payUrl = data.data[0].linkzhifu;
            }

            if(data.data[0].linkkefu != null){
                this._keFuUrl = data.data[0].linkkefu;
            }

            if(data.data[0].IsShowControl != null){
                if(data.data[0].IsShowControl == "1" || data.data[0].IsShowControl == 1){
                    this._isShowControl = true;
                }else{
                    this._isShowControl = false;
                }
                
            }
            
        }
        return isShow;
     },

     getHomeUrl:function(){
         return this._homeUrl+"";
     },

     getPayUrl:function(){
         return this._payUrl+"";
     },

     getIsShowControl:function(){
        return this._isShowControl;
     },

     getKeFu:function(){
         return this._keFuUrl+"";
     }
     

 });
 
 module.exports = shuPingCtrl;