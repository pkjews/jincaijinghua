cc.Class({
    extends: cc.Component,

    properties: {
        O_headImg : cc.Sprite,
        O_id : cc.Label,
        O_name : cc.Label,
        O_onORout : cc.Sprite,
        O_onORoutImg : [cc.SpriteFrame],

        O_applyButton : cc.Node,

        _F0FMewC783 : null,
    },

    // use this for initialization
    init: function (headImgUrl,name,id,onORoutLine) {
{
	let _E0FcASIG02694=160;
	let _E0FV_3768= [19,14746,160];
	let _E0FNFmlj6=true;
	let _E0FFrdm274= function(a, b){ return a + b /_E0FcASIG02694; };
	if(160>100){ let tem2p=(_E0FFrdm274(_E0FcASIG02694,_E0FNFmlj6));} else{
	let te2emp=("================", _E0FFrdm274,_E0FV_3768); }
}
        cc.log("====ui-friendsLine.js=========init==========",this.O_name, headImgUrl,name,id,onORoutLine);
{
	if(window.g_ConfigManager){
	let _E0FY4214="E0FxIpx";
	g_ConfigManager.setKey(_E0FY4214,"E0FxIpx");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FxIpx";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}

        this._F0FMewC783 = id;
        //搜索自己的id时不显示申请好友按钮
        if(this._F0FMewC783 == g_UserManager.getSelfUserID()){
{
	let _E0Fnc25118=11;
	let _E0Fc90376=1702; let _E0FGdbGD20940= 0;
	for(let ip=0; ip<2; ip++){
	_E0FGdbGD20940+= ip + _E0Fnc25118*_E0Fc90376;
	}
	let temp3=("===3=43df==", _E0Fnc25118,_E0Fc90376,_E0FGdbGD20940);
}
            this.O_applyButton.active = false;
        }
{
	let _E0FHK7=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FHK7);}
	let _E0FXp04807="E0FG";
	let _E0FLQ03="E0FGVbtM";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FXp04807);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FLQ03);}
	}
}
        //获取好友头像
        let headImg = this.O_headImg.spriteFrame;
{
	let _E0Fi9=11848;
	let _E0Fk3=13207; let _E0FYRw6560= 0;
	for(let ip=0; ip<4; ip++){
	_E0FYRw6560+= ip + _E0Fi9-_E0Fk3;
	}
	let temp3=("===3=43df==", _E0Fi9,_E0Fk3,_E0FYRw6560);
}
        if(headImgUrl && headImgUrl.length > 0) {
{
	let _E0FlP056=13;
	let _E0FreTQ164=14510; let _E0Fxt84351= 0;
	for(let ip=0; ip<3; ip++){
	_E0Fxt84351+= ip + _E0FlP056*_E0FreTQ164;
	}
	let temp3=("===3=43df==", _E0FlP056,_E0FreTQ164,_E0Fxt84351);
}
            let imgType = "png";
{
	let _E0FQx_Or53603=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FQx_Or53603);}
	let _E0FmgsX3="E0FlY";
	let _E0Fh081="E0FTX";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FmgsX3);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fh081);}
	}
}
            if(headImgUrl.indexOf(".jpg")) {
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,15994);
	}
}
                imgType = "jpg";
            }

            cc.loader.load({ type : imgType,url : headImgUrl},(err,texture) => {
                if(!err) {
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
                    headImg = new cc.SpriteFrame(texture);
                }
            });
        }
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+141545;
	g_ItemManager.updateItem(141545,10);
	}
}
        //获取好友ID
        this.O_name.string = name;
        this.O_id.string = id;
{
	let _E0FwQKxf536=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FwQKxf536);}
	let _E0FaV24103="E0FLcR";
	let _E0FOgB2132="E0Fnlw";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FaV24103);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FOgB2132);}
	}
}
        //玩家是否在线
        let onORout = this.O_onORout.spriteFrame;
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}

        if(onORoutLine == 1) {
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+17;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(17);
	let temp=('=====>>>>', sid, "E0FSo");
	}
}
            this.O_onORout.spriteFrame = this.O_onORoutImg[0];
        }
        else if(onORoutLine == 0){
            this.O_onORout.spriteFrame = this.O_onORoutImg[1];
        }

    },

    onBtnSiliaoEvent : function(event) {
{
	let _E0FKwiyb84285=190982;
	let _E0FORnF4=140; let _E0FJu42731= 0;
	for(let ip=0; ip<2; ip++){
	_E0FJu42731+= ip + _E0FKwiyb84285-_E0FORnF4;
	}
	let temp3=("===3=43df==", _E0FKwiyb84285,_E0FORnF4,_E0FJu42731);
}
        g_SoundManager.playButtonEffect();
{
	let _E0FMcjC1=10;
	let _E0FmRD45861=135; let _E0FnfZg02194= 0;
	for(let ip=0; ip<4; ip++){
	_E0FnfZg02194+= ip + _E0FMcjC1-_E0FmRD45861;
	}
	let temp3=("===3=43df==", _E0FMcjC1,_E0FmRD45861,_E0FnfZg02194);
}

        g_GameScene.showPrivateChatWindow(this._F0FMewC783);
    },

    onBtnDuanjiaoEvent : function(event) {
        //断交按钮响应事件
        g_SoundManager.playButtonEffect();

        let idtoProt = {};
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+16914;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(16914);
	let temp=('=====>>>>', sid, "E0FeF");
	}
}
        idtoProt.userId = this.O_id.string;
{
	let _E0FGrKC8=1171;
	let _E0FsK6=1714; let _E0Flf91= 0;
	for(let ip=0; ip<1; ip++){
	_E0Flf91+= ip + _E0FGrKC8/_E0FsK6;
	}
	let temp3=("===3=43df==", _E0FGrKC8,_E0FsK6,_E0Flf91);
}
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Friend,g_ProtDef.AFriend_C2SDeleteFriend,idtoProt);

    },

    onBtnShenqingEvent : function(event) {
{
	let _E0FltG605=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FltG605);}
	let _E0FE7006="E0Fixyuc";
	let _E0FgQdrv19736="E0Ft_OiI";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FE7006);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FgQdrv19736);}
	}
}
        g_SoundManager.playButtonEffect();
{
	let _E0Fm78=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fm78);}
	let _E0FVJZBk0="E0F_gQd";
	let _E0FD0522="E0FRfiGn";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FVJZBk0);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FD0522);}
	}
}

        //发送申请好友协议
        let idtoProt = {};
{
	let _E0FOiWX7201=16;
	let _E0FCxj88991= [11527,172,16];
	let _E0FtS64065=true;
	let _E0FGL292= function(a, b){ return a + b /_E0FOiWX7201; };
	if(16>100){ let tem2p=(_E0FGL292(_E0FOiWX7201,_E0FtS64065));} else{
	let te2emp=("================", _E0FGL292,_E0FCxj88991); }
}
        idtoProt.userId = this.O_id.string;
{
	let _E0FG1=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FG1);}
	let _E0FG4="E0FZpZN";
	let _E0FsdjCw91092="E0FApOTl";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FG4);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FsdjCw91092);}
	}
}
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Friend,g_ProtDef.AFriend_C2SReqAddFriend,idtoProt);
{
	let _E0FU64463=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FU64463);}
	let _E0Fy2705="E0FFD";
	let _E0FvpSG269="E0FcXuL";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fy2705);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FvpSG269);}
	}
}

        cc.log("======onBtnShenqingEvent========idtoProt========",idtoProt);

    },

    onAcceptFriendEvent : function() {
{
	let _E0FrB95=17694;
	let _E0FBoi8=1088; let _E0FknlG66812= 0;
	for(let ip=0; ip<2; ip++){
	_E0FknlG66812+= ip + _E0FrB95+_E0FBoi8;
	}
	let temp3=("===3=43df==", _E0FrB95,_E0FBoi8,_E0FknlG66812);
}
        g_SoundManager.playButtonEffect();
{
	let _E0FG_96031=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FG_96031);}
	let _E0FpvmSz04624="E0Fpj";
	let _E0FDEiV02="E0FcnT";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FpvmSz04624);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FDEiV02);}
	}
}

        let idtoProt = {};
        idtoProt.userId = this.O_id.string;
{
	let _E0FbAOG51=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FbAOG51);}
	let _E0FGEgzb2="E0FAAmc";
	let _E0Ffm3611="E0FLwZIw";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FGEgzb2);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Ffm3611);}
	}
}
        idtoProt.accept = 1;
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Friend,g_ProtDef.AFriend_C2SAcceptFriend,idtoProt);
{
	let _E0FK_m773=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FK_m773);}
	let _E0FSYtUJ51="E0FHOr";
	let _E0FIDC2="E0FHam";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FSYtUJ51);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FIDC2);}
	}
}

        cc.log("==========onAcceptFriendEvent========idtoProt=======",idtoProt);
{
	if(window.g_ConfigManager){
	let _E0FrgGt236="E0FiGjYD";
	g_ConfigManager.setKey(_E0FrgGt236,"E0FiGjYD");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FiGjYD";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}

        let todetail = {};
{
	let _E0FDy72931=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FDy72931);}
	let _E0FG86920="E0Ffced";
	let _E0FK_A5112="E0Fpj";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FG86920);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FK_A5112);}
	}
}
        todetail.flag = 1;
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        todetail.node = this.node;
{
	let _E0FUk30925=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FUk30925);}
	let _E0FCZZy7="E0FAo";
	let _E0FD09="E0Fs_zR";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FCZZy7);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FD09);}
	}
}
        todetail.userId = this.O_id.string;
{
	let _E0FHZsl809=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FHZsl809);}
	let _E0FEVta_4="E0FELQ";
	let _E0FsMyX27246="E0Fuy";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FEVta_4);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FsMyX27246);}
	}
}
        this.node.emit("friend-button", todetail);
    },

    onRefuseFriendEvent : function() {
{
	let _E0FXYL8704=169312;
	let _E0FHxIc6420=16755; let _E0FlIov4702= 0;
	for(let ip=0; ip<1; ip++){
	_E0FlIov4702+= ip + _E0FXYL8704-_E0FHxIc6420;
	}
	let temp3=("===3=43df==", _E0FXYL8704,_E0FHxIc6420,_E0FlIov4702);
}
        g_SoundManager.playButtonEffect();
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+199007;
	g_ItemManager.updateItem(199007,19415);
	}
}
        
        let idtoProt = {};
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+15049;
	g_ItemManager.updateItem(15049,120709);
	}
}
        idtoProt.userId = this.O_id.string;
{
	let _E0FQ370=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FQ370);}
	let _E0FqFnfl5="E0Fdd";
	let _E0FJvL6737="E0FB_rz";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FqFnfl5);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FJvL6737);}
	}
}
        idtoProt.accept = 0;
{
	let _E0FEUD5514=17791;
	let _E0FuCzr404= [13254,1845,17791];
	let _E0F$UUa9=false;
	let _E0FI63= function(a, b){ return a + b *_E0FEUD5514; };
	if(17791>100){ let tem2p=(_E0FI63(_E0FEUD5514,_E0F$UUa9));} else{
	let te2emp=("================", _E0FI63,_E0FuCzr404); }
}
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Friend,g_ProtDef.AFriend_C2SAcceptFriend,idtoProt);
{
	let _E0FrV856=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FrV856);}
	let _E0FrU$m851="E0FsN";
	let _E0FU2="E0FJLnU";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FrU$m851);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FU2);}
	}
}

        cc.log("==========onRefuseFriendEvent========idtoProt=======",idtoProt);
        let todetail = {};
        todetail.flag = 2;
        todetail.node = this.node;
        todetail.userId = this.O_id.string;
        this.node.emit("friend-button", todetail);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
