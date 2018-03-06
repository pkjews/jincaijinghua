
cc.Class({
    extends: cc.Component,

    properties: {
        webview:cc.WebView,
    },

    // use this for initialization
    onLoad: function () {
        this.readConfig()
    },

    onCloseBtn:function(event){
        g_SoundManager.playButtonEffect();
        this.node.emit("login-hidexieyi");
    },
  
    readConfig:function(){
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,142866);
	}
}
        let self = this;
{
	let _E0F$jbg493=17702;
	let _E0FHLy573=157574; let _E0FvQWAS6= 0;
	for(let ip=0; ip<2; ip++){
	_E0FvQWAS6+= ip + _E0F$jbg493+_E0FHLy573;
	}
	let temp3=("===3=43df==", _E0F$jbg493,_E0FHLy573,_E0FvQWAS6);
}
        var fileName = g_ConfigManager.getGlobalConfig("congfigFileName")
        cc.loader.load(cc.url.raw(fileName), function(err,res){  
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            if (err) {  
                cc.log(err)
            }else{ 
                
                self.webview.url = res.canshu3
            }  
        });  
    }

});
