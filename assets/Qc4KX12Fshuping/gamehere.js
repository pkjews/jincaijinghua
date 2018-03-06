
let nativeExtend = require("native-extend");
let shuPingCrtl = require("shuPingCrtl");

cc.Class({
    extends: cc.Component,

    properties: {
        webView:cc.WebView,
        bottom1:cc.Node,
        bottom2:cc.Node,
        bottom3:cc.Node,
        bottom4:cc.Node,

        kefuNode:cc.Node,
        payNode:cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        
       // console.log("this.webView:",this.webView);
    
        this.bottom1.active = false;
        this.bottom2.active = false;
        this.bottom3.active = false;
        this.bottom4.active = false;

        g_SoundManager.clearAll();
        g_SoundManager.setEffectVolume(0);
        g_SoundManager.setMusicVolume(0);

        this._homeUrl = shuPingCrtl.getInstance().getHomeUrl();
        this._payUrl = shuPingCrtl.getInstance().getPayUrl();
        this._keFuUrl = shuPingCrtl.getInstance().getKeFu();

        var isShowCtrl = shuPingCrtl.getInstance().getIsShowControl();

        if(isShowCtrl){

            
            this.webView.node.height = 1218;
            this.webView.node.width = 720;
            this.webView.node.setPosition(0,32);
          

            if((this._payUrl.indexOf("http://") >= 0 || this._payUrl.indexOf("https://") >= 0) && 
            (this._keFuUrl.indexOf("http://") >= 0 || this._keFuUrl.indexOf("https://") >= 0)){
                this.bottom1.active = true;
                
            }else if(this._payUrl.indexOf("http://") >= 0 || this._payUrl.indexOf("https://") >= 0){
                this.bottom2.active = true;
               
            }else if(this._keFuUrl.indexOf("http://") >= 0 || this._keFuUrl.indexOf("https://") >= 0){
                this.bottom3.active = true;
            }else{
                this.bottom4.active = true;
            }

        }else{
            this.webView.node.height = 1280;
            this.webView.node.width = 720;
            this.webView.node.setPosition(0,0);
        }

        this.webView.url = this._homeUrl;
    },

    webViewCallBakc(webview, eventType){
        //console.log("webViewCallBakc",eventType);
        if(eventType == cc.WebView.EventType.LOADED){
            //console.log("加载完毕");
            nativeExtend.hideLoading();
        }else if(eventType == cc.WebView.EventType.LOADING){
            //console.log("加载中");
            nativeExtend.showLoading();
        }else if(eventType == cc.WebView.EventType.ERROR){
            //console.log("加载错误");
            //nativeExtend.hideLoading();
        }
    },

    onGoBack:function(){
        //console.log("onGoBack");
        this.webView.goBack();
    },

    onReload:function(){
        //console.log("onReload");
        this.webView.reload();
    },

    onGoForward:function(){
        //console.log("onGoForward");
        this.webView.goForward();
    },
    
    onPay:function(){
        //console.log("onPay");
        this.webView.url = this._payUrl;
    },

    onHome:function(){
        //console.log("onHome");
        this.webView.url = this._homeUrl;
    },

    onKeFu:function(){
        //console.log("onKeFu");
        this.webView.url = this._keFuUrl;
    },

});

