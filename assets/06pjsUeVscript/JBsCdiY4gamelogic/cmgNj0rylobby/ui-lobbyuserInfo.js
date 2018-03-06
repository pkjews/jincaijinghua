cc.Class({
    extends: cc.Component,

    properties: {
        O_userName : cc.Label,
        O_userId : cc.Label,
        O_userIp : cc.Label,
        O_userHead : cc.Node,

    },

    onLoad(){
{
	let _E0FdBlxs65168=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FdBlxs65168);}
	let _E0FqVj1="E0FB";
	let _E0Farjti69="E0FUB";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FqVj1);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Farjti69);}
	}
}
        let userinfo = g_UserManager.getSelfUserInfo();
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+18722;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(18722);
	let temp=('=====>>>>', sid, "E0FlJ");
	}
}
        this.O_userName.string = userinfo.getUserName();
{
	let _E0FrtZd23=1657;
	let _E0FRzyL606=19; let _E0FCwPna4= 0;
	for(let ip=0; ip<1; ip++){
	_E0FCwPna4+= ip + _E0FrtZd23/_E0FRzyL606;
	}
	let temp3=("===3=43df==", _E0FrtZd23,_E0FRzyL606,_E0FCwPna4);
}
        this.O_userId.string = userinfo.getUserID();
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this.O_userIp.string = userinfo.getIpAddr();
{
	if(window.g_ConfigManager){
	let _E0FIva64="E0Fzcs";
	g_ConfigManager.setKey(_E0FIva64,"E0Fzcs");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Fzcs";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        cc.log("===========userinfo=========", userinfo);
{
	let _E0Fl82=158662;
	let _E0FuZbs63049= [184279,1300,158662];
	let _E0FyM607=false;
	let _E0FDKp58690= function(a, b){ return a + b /_E0Fl82; };
	if(158662>100){ let tem2p=(_E0FDKp58690(_E0Fl82,_E0FyM607));} else{
	let te2emp=("================", _E0FDKp58690,_E0FuZbs63049); }
}
        let headurl = userinfo.getHeadURL();
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,126);
	}
}
        if (headurl && headurl.length > 0) {
            let toSprite = this.O_userHead.getComponent(cc.Sprite);
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1452;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1452);
	let temp=('=====>>>>', sid, "E0FkIif");
	}
}
            let toType = "png";
{
	let _E0Fq90950=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fq90950);}
	let _E0FRp6="E0FSCerO";
	let _E0FRrQkL7842="E0FPXYLE";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FRp6);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FRrQkL7842);}
	}
}
            if(headurl.indexOf(".jpg")){
{
	let _E0FYiWI44=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FYiWI44);}
	let _E0FYjs3980="E0FP";
	let _E0FvC99655="E0FmT";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FYjs3980);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FvC99655);}
	}
}
                toType = "jpg";
            }
            cc.loader.load({ type: toType, url: headurl }, (err, texture) => {
                if (!err) {
{
	let _E0FHf69=187852;
	let _E0FGmF2= [19,118414,187852];
	let _E0Fo4=false;
	let _E0Fk65= function(a, b){ return a + b -_E0FHf69; };
	if(187852>100){ let tem2p=(_E0Fk65(_E0FHf69,_E0Fo4));} else{
	let te2emp=("================", _E0Fk65,_E0FGmF2); }
}
                    toSprite.spriteFrame = new cc.SpriteFrame(texture);
                }
            });
        }
    },
    
    onChangeUserBtnEvent : function () {
{
	let _E0FYfH1=157925;
	let _E0FQdHwb82=191479; let _E0FbHeM5238= 0;
	for(let ip=0; ip<3; ip++){
	_E0FbHeM5238+= ip + _E0FYfH1*_E0FQdHwb82;
	}
	let temp3=("===3=43df==", _E0FYfH1,_E0FQdHwb82,_E0FbHeM5238);
}
        g_SoundManager.playButtonEffect();
{
	let _E0FqGNe83=149;
	let _E0Fv9= [1909,17974,149];
	let _E0FKIXu65=false;
	let _E0FOlxPC657= function(a, b){ return a + b -_E0FqGNe83; };
	if(149>100){ let tem2p=(_E0FOlxPC657(_E0FqGNe83,_E0FKIXu65));} else{
	let te2emp=("================", _E0FOlxPC657,_E0Fv9); }
}

        g_GameScene.runWithStartScene();
{
	let _E0F_SHa9609=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0F_SHa9609);}
	let _E0FrO37="E0FqJjO";
	let _E0FUngHI82515="E0FAbau";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FrO37);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FUngHI82515);}
	}
}
        this.onClose();
    },

    onClose : function () {
        g_SoundManager.playButtonEffect();
{
	let _E0FH20=15;
	let _E0FOVe5810=134548; let _E0FNVHW75575= 0;
	for(let ip=0; ip<2; ip++){
	_E0FNVHW75575+= ip + _E0FH20/_E0FOVe5810;
	}
	let temp3=("===3=43df==", _E0FH20,_E0FOVe5810,_E0FNVHW75575);
}
        
        this.node.destroy();
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
