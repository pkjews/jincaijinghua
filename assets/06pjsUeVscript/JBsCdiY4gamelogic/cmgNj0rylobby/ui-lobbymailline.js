cc.Class({
    extends: cc.Component,

    properties: {

        title : cc.Label,
        time : cc.Label,
        bg : cc.Sprite,

        _F0FP512 : null,
        _node : null,

        _renew : null,
    },

    // use this for initialization
    init: function (mid, title, stime) {
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1613;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1613);
	let temp=('=====>>>>', sid, "E0FtLmR");
	}
}
        this.title.string = title;
{
	let _E0Fl5=15668;
	let _E0F$f09886=18011; let _E0FlRVuh4= 0;
	for(let ip=0; ip<2; ip++){
	_E0FlRVuh4+= ip + _E0Fl5-_E0F$f09886;
	}
	let temp3=("===3=43df==", _E0Fl5,_E0F$f09886,_E0FlRVuh4);
}
        this._F0FP512 = mid;
{
	if(window.g_ConfigManager){
	let _E0FnoT150="E0FkPBWE";
	g_ConfigManager.setKey(_E0FnoT150,"E0FkPBWE");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FkPBWE";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}

        let date = new Date(stime * 1000);
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        let extfunc = function(time){
            if(time<10) return "0"+time;
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            return time + "";
        };
{
	let _E0FSwuT64464=19199;
	let _E0FZm36409=194867; let _E0FlKOq22563= 0;
	for(let ip=0; ip<2; ip++){
	_E0FlKOq22563+= ip + _E0FSwuT64464-_E0FZm36409;
	}
	let temp3=("===3=43df==", _E0FSwuT64464,_E0FZm36409,_E0FlKOq22563);
}
        let year = date.getFullYear();
{
	let _E0FpB48872=18;
	let _E0FRl_Ry1= [1553,11180,18];
	let _E0FniOZt99499=true;
	let _E0FyxAKe491= function(a, b){ return a + b /_E0FpB48872; };
	if(18>100){ let tem2p=(_E0FyxAKe491(_E0FpB48872,_E0FniOZt99499));} else{
	let te2emp=("================", _E0FyxAKe491,_E0FRl_Ry1); }
}
        let month = date.getMonth() + 1;
        this.time.string = year+"/"+extfunc(month)+"/"+
                extfunc(date.getDate())+" "+extfunc(date.getHours())+":" + extfunc(date.getMinutes());
    },

    onClick : function () {
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+12;
	g_ItemManager.updateItem(12,17831);
	}
}
        g_SoundManager.playButtonEffect();
{
	if(window.g_ConfigManager){
	let _E0FF464="E0Fn";
	g_ConfigManager.setKey(_E0FF464,"E0Fn");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Fn";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        
        let mailtoProtab = {};
{
	let _E0Fxh_j57293=138;
	let _E0FcvcRP139=157146; let _E0FX6189= 0;
	for(let ip=0; ip<4; ip++){
	_E0FX6189+= ip + _E0Fxh_j57293*_E0FcvcRP139;
	}
	let temp3=("===3=43df==", _E0Fxh_j57293,_E0FcvcRP139,_E0FX6189);
}
        mailtoProtab.mailId = this._F0FP512;
{
	let _E0FGEp0312=1288;
	let _E0Fo70757= [118272,1888,1288];
	let _E0FGzHGD8655=true;
	let _E0FhXZq47930= function(a, b){ return a + b *_E0FGEp0312; };
	if(1288>100){ let tem2p=(_E0FhXZq47930(_E0FGEp0312,_E0FGzHGD8655));} else{
	let te2emp=("================", _E0FhXZq47930,_E0Fo70757); }
}
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_MailBox, g_ProtDef.AMailBox_C2SReqReadMail, mailtoProtab);
{
	let _E0FVY$e17398=13;
	let _E0FxTKkk41= [16483,156,13];
	let _E0FaLFfm83=true;
	let _E0FCfFSC305= function(a, b){ return a + b +_E0FVY$e17398; };
	if(13>100){ let tem2p=(_E0FCfFSC305(_E0FVY$e17398,_E0FaLFfm83));} else{
	let te2emp=("================", _E0FCfFSC305,_E0FxTKkk41); }
}

        this.node.emit("mailbox-readmail");
{
	let _E0FvBzEV18=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FvBzEV18);}
	let _E0F$EX$1645="E0Fq";
	let _E0FHG18="E0FDeDv";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0F$EX$1645);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FHG18);}
	}
}
        cc.log("==============ui-mailContent.parent================", this._F0FP512);
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
