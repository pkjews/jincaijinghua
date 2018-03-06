cc.Class({
    extends: cc.Component,

    properties: {
        messageLabel : cc.Label,
    },

    // use this for initialization
    init: function (message) {
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+11;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(11);
	let temp=('=====>>>>', sid, "E0FQvaq");
	}
}
        if(message){
{
	let _E0Fsf0405=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fsf0405);}
	let _E0FH7="E0Fe";
	let _E0FQy0617="E0Fvles";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FH7);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FQy0617);}
	}
}
            this.messageLabel.string = message;
        }
    },

    onCloseClick : function () {
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        g_SoundManager.playButtonEffect();
{
	let _E0FHNzV973=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FHNzV973);}
	let _E0Fz493="E0FRu";
	let _E0F$ULNU0="E0FQD";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fz493);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0F$ULNU0);}
	}
}
        
        this.node.active = false;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
