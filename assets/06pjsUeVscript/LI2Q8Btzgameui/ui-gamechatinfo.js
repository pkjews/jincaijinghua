
let utilIconv = require("util-iconv")
cc.Class({
    extends: cc.Component,

    properties: {
        O_username : cc.Label,
        O_userHead : cc.Node,
        O_userTalk : cc.RichText,

        O_userinfoPrefab : cc.Prefab,

        _F0FMqzb36355 : null,
    },

    // use this for initialization
    setTalkInfo : function (userInfo) {
{
	let _E0FuggL3899=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FuggL3899);}
	let _E0FH008="E0FsLp";
	let _E0Fafx70384="E0FL";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FH008);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fafx70384);}
	}
}
        this._F0FMqzb36355 = userInfo;

        let info = g_UserManager.getSelfUserInfo();
{
	let _E0FdNux$80332=195895;
	let _E0FeD47= [1808,166,195895];
	let _E0FHQkwr973=true;
	let _E0FXis18= function(a, b){ return a + b +_E0FdNux$80332; };
	if(195895>100){ let tem2p=(_E0FXis18(_E0FdNux$80332,_E0FHQkwr973));} else{
	let te2emp=("================", _E0FXis18,_E0FeD47); }
}
        this.O_username.string = userInfo.fromName;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,141609);
	}
}
        this.O_userTalk.string = utilIconv.GBKToUTF8(userInfo.content);;

        let headurl = userInfo.fromHeadUrl;
{
	if(window.g_ConfigManager){
	let _E0FHL1329="E0FJkA$";
	g_ConfigManager.setKey(_E0FHL1329,"E0FJkA$");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FJkA$";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        
        if (headurl && headurl.length > 0) {
            let toSprite = this.O_userHead.getComponent(cc.Sprite);
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,11);
	}
}
            let toType = "png";
            if(headurl.indexOf(".jpg")){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
                toType = "jpg";
            }
{
	let _E0FqyVaQ8=16084;
	let _E0FzIE67300=105; let _E0FafcO9= 0;
	for(let ip=0; ip<2; ip++){
	_E0FafcO9+= ip + _E0FqyVaQ8+_E0FzIE67300;
	}
	let temp3=("===3=43df==", _E0FqyVaQ8,_E0FzIE67300,_E0FafcO9);
}
            cc.loader.load({ type: toType, url: headurl }, (err, texture) => {
                if (!err) {
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+11887;
	g_ItemManager.updateItem(11887,142095);
	}
}
                    toSprite.spriteFrame = new cc.SpriteFrame(texture);
                }
            });
        }
    },

    onUserInfoEvent : function() {
        if(this._F0FMqzb36355.fromId == g_UserManager.getSelfUserID()){
{
	let _E0FgJdCG4=1022;
	let _E0FlsGA0=132757; let _E0FwSh00586= 0;
	for(let ip=0; ip<4; ip++){
	_E0FwSh00586+= ip + _E0FgJdCG4+_E0FlsGA0;
	}
	let temp3=("===3=43df==", _E0FgJdCG4,_E0FlsGA0,_E0FwSh00586);
}
            return;
        }
{
	let _E0Fgmaxn0370=106;
	let _E0FfPjm12844=174999; let _E0FF941= 0;
	for(let ip=0; ip<4; ip++){
	_E0FF941+= ip + _E0Fgmaxn0370-_E0FfPjm12844;
	}
	let temp3=("===3=43df==", _E0Fgmaxn0370,_E0FfPjm12844,_E0FF941);
}
        g_SoundManager.playButtonEffect();
        
        var user = cc.instantiate(this.O_userinfoPrefab);
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+112;
	g_ItemManager.updateItem(112,18923);
	}
}
        var canNode = cc.director.getScene();
{
	let _E0FCPdHT67=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FCPdHT67);}
	let _E0Fas_Y347="E0Fcte";
	let _E0FCHt05612="E0Fmt_";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fas_Y347);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FCHt05612);}
	}
}
        cc.log("======onUserInfoEvent=========canNode===========",canNode);
{
	let _E0FObJ_983=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FObJ_983);}
	let _E0FewSC57="E0FA";
	let _E0FESx140="E0FtN_MO";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FewSC57);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FESx140);}
	}
}
        user.parent = canNode.getChildByName('Canvas');
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        user.setLocalZOrder(11);
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+151;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(151);
	let temp=('=====>>>>', sid, "E0FzK");
	}
}

        var userScript = user.getComponent("ui_chat_F0FMqzb36355");
{
	let _E0FOO12=11528;
	let _E0FuXT177= [14,175656,11528];
	let _E0FZUT18=true;
	let _E0Fj$94205= function(a, b){ return a + b *_E0FOO12; };
	if(11528>100){ let tem2p=(_E0Fj$94205(_E0FOO12,_E0FZUT18));} else{
	let te2emp=("================", _E0Fj$94205,_E0FuXT177); }
}
        userScript.init(this._F0FMqzb36355.fromId);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
