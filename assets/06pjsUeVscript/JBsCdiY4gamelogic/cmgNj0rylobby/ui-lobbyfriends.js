cc.Class({
    extends: cc.Component,

    properties: {

        O_friendsLayer : cc.Node,
        O_addFriendsLayer : cc.Node,
        O_applyLayer : cc.Node,
        O_searchUserNode : cc.Node,
        O_manLayer : cc.Node,
        O_shenqingTipsNode:cc.Node,

        O_friendscrollview : cc.ScrollView,
        O_applyscrollview : cc.ScrollView,

        //玩家本人信息
        O_headImg : cc.Sprite,
        O_userName : cc.Label,
        O_userID : cc.Label,

        O_searchEditbox : cc.EditBox,

        O_curFriendsCount : cc.Label,
        O_curApplyNum : cc.Label,
        O_limitFriendNum : cc.Label,

        O_friendsLinePrefab : cc.Prefab,
        O_addFriendsLinePrefab : cc.Prefab,
        O_otherApplyFriendPrefab:cc.Prefab,

        O_roomToggle : cc.Toggle,

        _F0FdrDN6 : null,

        _F0Ft00 : null,
        _F0FO9271 : null,

        _F0F_dQFy6005 : [],
        _F0FGSbZ3 : [],
    },

    // use this for initialization
    onLoad: function () {
{
	let _E0FL77518=11678;
	let _E0Fq50685=13673; let _E0F_075= 0;
	for(let ip=0; ip<2; ip++){
	_E0F_075+= ip + _E0FL77518-_E0Fq50685;
	}
	let temp3=("===3=43df==", _E0FL77518,_E0Fq50685,_E0F_075);
}
        //接收协议显示好友人数
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Friend,g_ProtDef.AFriend_S2CQueryFriend,this.onProtQueryAllFriendEvent,this);
{
	let _E0FaBL9=1728;
	let _E0FjH4= [1452,17279,1728];
	let _E0FDw11339=true;
	let _E0FhQ39= function(a, b){ return a + b -_E0FaBL9; };
	if(1728>100){ let tem2p=(_E0FhQ39(_E0FaBL9,_E0FDw11339));} else{
	let te2emp=("================", _E0FhQ39,_E0FjH4); }
}
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Friend,g_ProtDef.AFriend_S2CQueryUser,this.onProtQueryUserEvent,this);
{
	let _E0FklKN995=11;
	let _E0FSrAx72=14; let _E0FAECve80= 0;
	for(let ip=0; ip<1; ip++){
	_E0FAECve80+= ip + _E0FklKN995-_E0FSrAx72;
	}
	let temp3=("===3=43df==", _E0FklKN995,_E0FSrAx72,_E0FAECve80);
}
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Friend,g_ProtDef.AFriend_S2CDeleteFriend,this.onProtDeleteFriend,this);
{
	if(window.g_ConfigManager){
	let _E0FACW022="E0FuQ";
	g_ConfigManager.setKey(_E0FACW022,"E0FuQ");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FuQ";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Friend,g_ProtDef.AFriend_S2CLoginStatus,this.onProtLoginStatus,this);

        this.O_curFriendsCount.string = 0;
{
	let _E0FoN42=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FoN42);}
	let _E0FHgYr14="E0FFws";
	let _E0FeU68="E0FZ";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FHgYr14);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FeU68);}
	}
}
        this.O_curApplyNum.string = 0;
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this.O_limitFriendNum.string = 0; 

        let userInfo = g_UserManager.getSelfUserInfo();
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+17115;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(17115);
	let temp=('=====>>>>', sid, "E0FcMXS");
	}
}
        this.O_userID.string = userInfo.getUserID();
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+140578;
	g_ItemManager.updateItem(140578,19840);
	}
}
        this.O_userName.string = userInfo.getUserName();
{
	let _E0FnD8=1009;
	let _E0FTY5975=119; let _E0FKAxEb80= 0;
	for(let ip=0; ip<3; ip++){
	_E0FKAxEb80+= ip + _E0FnD8+_E0FTY5975;
	}
	let temp3=("===3=43df==", _E0FnD8,_E0FTY5975,_E0FKAxEb80);
}
        let headImgUrl = userInfo.getHeadURL();

        let headImg = this.O_headImg.spriteFrame;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+11;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(11);
	let temp=('=====>>>>', sid, "E0FBY");
	}
}
        if(headImgUrl && headImgUrl.length > 0) {
{
	let _E0Fk492=1530;
	let _E0FSuqtx624=151839; let _E0FzNU07= 0;
	for(let ip=0; ip<4; ip++){
	_E0FzNU07+= ip + _E0Fk492/_E0FSuqtx624;
	}
	let temp3=("===3=43df==", _E0Fk492,_E0FSuqtx624,_E0FzNU07);
}
            let imgType = "png";
{
	let _E0FONX7523=160;
	let _E0FyT$6555=1037; let _E0FiFVtV73= 0;
	for(let ip=0; ip<1; ip++){
	_E0FiFVtV73+= ip + _E0FONX7523/_E0FyT$6555;
	}
	let temp3=("===3=43df==", _E0FONX7523,_E0FyT$6555,_E0FiFVtV73);
}
            if(headImgUrl.indexOf(".jpg")) {
{
	let _E0FK534=19456;
	let _E0FprvA9612= [155,199080,19456];
	let _E0FnJ20=false;
	let _E0FSO965= function(a, b){ return a + b /_E0FK534; };
	if(19456>100){ let tem2p=(_E0FSO965(_E0FK534,_E0FnJ20));} else{
	let te2emp=("================", _E0FSO965,_E0FprvA9612); }
}
                imgType = "jpg";
            }
{
	let _E0FY72=1924;
	let _E0FQC32132= [18,15,1924];
	let _E0FI41=true;
	let _E0Fixj$H09= function(a, b){ return a + b /_E0FY72; };
	if(1924>100){ let tem2p=(_E0Fixj$H09(_E0FY72,_E0FI41));} else{
	let te2emp=("================", _E0Fixj$H09,_E0FQC32132); }
}

            cc.loader.load({ type : imgType,url : headImgUrl},(err,texture) => {
                if(!err) {
{
	if(window.g_ConfigManager){
	let _E0Fmz67090="E0FHqOc";
	g_ConfigManager.setKey(_E0Fmz67090,"E0FHqOc");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FHqOc";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
                    headImg = new cc.SpriteFrame(texture);
                }
            });
        }
{
	let _E0FvvRit0=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FvvRit0);}
	let _E0FTcOSi23147="E0FZdlY";
	let _E0FaXzu239="E0FjGKdv";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FTcOSi23147);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FaXzu239);}
	}
}

        this._F0Ft00 = this.O_friendscrollview.getComponent('ui-scrollview');
        cc.log("==========this._F0Ft00========",this._F0Ft00);
{
	let _E0F$g09493=1240;
	let _E0FgF17627=188; let _E0FbbgV85468= 0;
	for(let ip=0; ip<4; ip++){
	_E0FbbgV85468+= ip + _E0F$g09493-_E0FgF17627;
	}
	let temp3=("===3=43df==", _E0F$g09493,_E0FgF17627,_E0FbbgV85468);
}
        this._F0Ft00.setHeightInter(10);
        this._F0FO9271 = this.O_applyscrollview.getComponent('ui-scrollview');
{
	if(window.g_ConfigManager){
	let _E0FAivVo10="E0FxqQ";
	g_ConfigManager.setKey(_E0FAivVo10,"E0FxqQ");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FxqQ";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        this._F0FO9271.setHeightInter(10);
    },

    openFriendsView() {
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+11;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(11);
	let temp=('=====>>>>', sid, "E0FxzIX");
	}
}
        this.node.active = true;
        if(this.O_roomToggle.isChecked){
            this.O_shenqingTipsNode.active = false;
        }
{
	if(window.g_ConfigManager){
	let _E0FSb54="E0FYSJB";
	g_ConfigManager.setKey(_E0FSb54,"E0FYSJB");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FYSJB";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        this.onToggleFriendsEvent(null);
    },
    hideAllLayer(){
{
	let _E0FpSUj545=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FpSUj545);}
	let _E0FLLGvN82="E0FG";
	let _E0FSzvt1="E0FEflVV";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FLLGvN82);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FSzvt1);}
	}
}
        this.O_friendsLayer.active = false;
        this.O_addFriendsLayer.active = false;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+11161;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(11161);
	let temp=('=====>>>>', sid, "E0FAq");
	}
}
        this.O_applyLayer.active = false;
    },

    onToggleFriendsEvent : function (event) {
{
	let _E0FR7748=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FR7748);}
	let _E0FM_lV60863="E0FKNO";
	let _E0FK0284="E0Fn";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FM_lV60863);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FK0284);}
	}
}
        if(event)g_SoundManager.playButtonEffect();
{
	let _E0FRrh471=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FRrh471);}
	let _E0FDwJGh3="E0FNyUVm";
	let _E0FX32="E0FANKR";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FDwJGh3);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FX32);}
	}
}
        this.hideAllLayer();
{
	let _E0FzYOby1262=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FzYOby1262);}
	let _E0FuOCA_9213="E0FIUDwC";
	let _E0FjfBSV501="E0FYLZP";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FuOCA_9213);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FjfBSV501);}
	}
}
        this.O_friendsLayer.active = true;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+160;
	g_ItemManager.updateItem(160,186);
	}
}

        this.O_searchUserNode.removeAllChildren();
    },

    onToggleAddFriendEvent : function (event) {
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        g_SoundManager.playButtonEffect();
{
	let _E0Fdd23859=124618;
	let _E0FskcFd44= [110779,147,124618];
	let _E0FM$aQ35752=false;
	let _E0FKm2754= function(a, b){ return a + b +_E0Fdd23859; };
	if(124618>100){ let tem2p=(_E0FKm2754(_E0Fdd23859,_E0FM$aQ35752));} else{
	let te2emp=("================", _E0FKm2754,_E0FskcFd44); }
}
        this.hideAllLayer();
{
	let _E0FG75434=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FG75434);}
	let _E0FyODp39121="E0FB";
	let _E0FNCPMb25="E0FMe";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FyODp39121);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FNCPMb25);}
	}
}
        this.O_addFriendsLayer.active = true;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+1532;
	g_ItemManager.updateItem(1532,1233);
	}
}
        this.O_searchUserNode.removeAllChildren();
    },

    onToggleApplyEvent : function(event) {
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+137;
	g_ItemManager.updateItem(137,124668);
	}
}
        this.O_shenqingTipsNode.active = false;
{
	if(window.g_ConfigManager){
	let _E0FxkaH014="E0Fue";
	g_ConfigManager.setKey(_E0FxkaH014,"E0Fue");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Fue";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        g_SoundManager.playButtonEffect();
{
	let _E0Fx86378=185938;
	let _E0FFRn8= [19,12,185938];
	let _E0FqQr271=false;
	let _E0FalFL6517= function(a, b){ return a + b -_E0Fx86378; };
	if(185938>100){ let tem2p=(_E0FalFL6517(_E0Fx86378,_E0FqQr271));} else{
	let te2emp=("================", _E0FalFL6517,_E0FFRn8); }
}

        //别人申请成为玩家本人的好友
        this.hideAllLayer();
{
	let _E0FsbyIo12=173373;
	let _E0Fm85=16; let _E0FalAje9264= 0;
	for(let ip=0; ip<4; ip++){
	_E0FalAje9264+= ip + _E0FsbyIo12*_E0Fm85;
	}
	let temp3=("===3=43df==", _E0FsbyIo12,_E0Fm85,_E0FalAje9264);
}
        this.O_applyLayer.active = true;
{
	let _E0FjqMYX09822=1368;
	let _E0FSUAWr31528= [191412,198564,1368];
	let _E0FixWZp8535=false;
	let _E0Fl92= function(a, b){ return a + b /_E0FjqMYX09822; };
	if(1368>100){ let tem2p=(_E0Fl92(_E0FjqMYX09822,_E0FixWZp8535));} else{
	let te2emp=("================", _E0Fl92,_E0FSUAWr31528); }
}

        this.O_searchUserNode.removeAllChildren();
{
	let _E0FR4=13;
	let _E0Fazs68639= [18,106494,13];
	let _E0FZSzwC527=true;
	let _E0FrIt04511= function(a, b){ return a + b -_E0FR4; };
	if(13>100){ let tem2p=(_E0FrIt04511(_E0FR4,_E0FZSzwC527));} else{
	let te2emp=("================", _E0FrIt04511,_E0Fazs68639); }
}
        if(this.O_curApplyNum.string == 0) {
{
	let _E0FtKST632=15;
	let _E0FRt120=14; let _E0FeDGWR59551= 0;
	for(let ip=0; ip<2; ip++){
	_E0FeDGWR59551+= ip + _E0FtKST632+_E0FRt120;
	}
	let temp3=("===3=43df==", _E0FtKST632,_E0FRt120,_E0FeDGWR59551);
}
            this.O_manLayer.active = true;
            this._F0FO9271.clearAllNode();
        }
    },
    onFriendButtonEvent(detail){
{
	let _E0Fud$c714=117627;
	let _E0FsQwDh1= [127982,11216,117627];
	let _E0FWsmq19=false;
	let _E0Frtce295= function(a, b){ return a + b /_E0Fud$c714; };
	if(117627>100){ let tem2p=(_E0Frtce295(_E0Fud$c714,_E0FWsmq19));} else{
	let te2emp=("================", _E0Frtce295,_E0FsQwDh1); }
}
        cc.log("====onFriendButtonEvent======", detail);
{
	let _E0FcqkNs51=142447;
	let _E0Fud21=17588; let _E0FqiFh834= 0;
	for(let ip=0; ip<4; ip++){
	_E0FqiFh834+= ip + _E0FcqkNs51+_E0Fud21;
	}
	let temp3=("===3=43df==", _E0FcqkNs51,_E0Fud21,_E0FqiFh834);
}
        this._F0FO9271.rmScrollNode(detail.node);
{
	let _E0Fqxl96098=1951;
	let _E0FBz2=1475; let _E0FJX8342= 0;
	for(let ip=0; ip<1; ip++){
	_E0FJX8342+= ip + _E0Fqxl96098-_E0FBz2;
	}
	let temp3=("===3=43df==", _E0Fqxl96098,_E0FBz2,_E0FJX8342);
}
        this.O_curApplyNum.string = this._F0FO9271.getListSize();
{
	let _E0FCcH7=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FCcH7);}
	let _E0FhomB2590="E0FXDE";
	let _E0FD8="E0F_k";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FhomB2590);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FD8);}
	}
}

        let toReqList =[];
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1608;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1608);
	let temp=('=====>>>>', sid, "E0Fhw");
	}
}
        if(detail.flag == 2) {
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,19);
	}
}
            for(let i = 0;i < this._F0FGSbZ3.length;i++){
{
	let _E0Fc5841=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fc5841);}
	let _E0FkRT5976="E0FDKA";
	let _E0FGpaXU426="E0Frw";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FkRT5976);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FGpaXU426);}
	}
}

                if(detail.userId != this._F0FGSbZ3[i].userId){
{
	let _E0FbLD29=178356;
	let _E0Fpni137= [173,14073,178356];
	let _E0FJFtG07=false;
	let _E0F_Tc46= function(a, b){ return a + b +_E0FbLD29; };
	if(178356>100){ let tem2p=(_E0F_Tc46(_E0FbLD29,_E0FJFtG07));} else{
	let te2emp=("================", _E0F_Tc46,_E0Fpni137); }
}
                    toReqList.push(this._F0FGSbZ3[i]);
                }
            }
{
	let _E0FTUH5=142830;
	let _E0Fugo1687=18055; let _E0Fw18095= 0;
	for(let ip=0; ip<1; ip++){
	_E0Fw18095+= ip + _E0FTUH5-_E0Fugo1687;
	}
	let temp3=("===3=43df==", _E0FTUH5,_E0Fugo1687,_E0Fw18095);
}
            this._F0FGSbZ3 = toReqList;
        }
    },
    ///////////////////////////////////////////////////////////////////////
    onProtLoginStatus:function (mainId, assistId, protTab){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+14096;
	g_ItemManager.updateItem(14096,14);
	}
}

        //this._F0FdrDN6 = protTab.online;
    },

    onProtQueryAllFriendEvent : function(mainId, assistId, protTab){
{
	let _E0Fj9=1007;
	let _E0FvP6= [1087,115,1007];
	let _E0FjL15=true;
	let _E0FPww5951= function(a, b){ return a + b *_E0Fj9; };
	if(1007>100){ let tem2p=(_E0FPww5951(_E0Fj9,_E0FjL15));} else{
	let te2emp=("================", _E0FPww5951,_E0FvP6); }
}
        if(protTab.limit){
{
	let _E0FZb369=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FZb369);}
	let _E0FQ47707="E0F$Ehs";
	let _E0FtX295="E0Fks";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FQ47707);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FtX295);}
	}
}
            this.O_limitFriendNum.string = protTab.limit;            
        }
        
        //this.O_content.removeAllChildren();
        cc.log("====ui-lobbyfriends.js=======onProtQueryAllFriendEvent======protTab======",protTab);
        //获取玩家好友数量
        //初始化好友列表
        if(protTab.ftab && protTab.ftab.length > 0){
{
	let _E0FRfM78262=1052;
	let _E0FQ134= [168378,14,1052];
	let _E0FJuWvS166=true;
	let _E0Fzd33= function(a, b){ return a + b -_E0FRfM78262; };
	if(1052>100){ let tem2p=(_E0Fzd33(_E0FRfM78262,_E0FJuWvS166));} else{
	let te2emp=("================", _E0Fzd33,_E0FQ134); }
}
            for(let i = 0;i < protTab.ftab.length ;i++){
{
	let _E0FcUrZV8=192277;
	let _E0Fo768= [171661,106,192277];
	let _E0FSdzYg633=true;
	let _E0Fp568= function(a, b){ return a + b -_E0FcUrZV8; };
	if(192277>100){ let tem2p=(_E0Fp568(_E0FcUrZV8,_E0FSdzYg633));} else{
	let te2emp=("================", _E0Fp568,_E0Fo768); }
}
                let isalreadyin = false;
{
	let _E0FngRfw127=190377;
	let _E0FGcuP9= [16435,12,190377];
	let _E0Fw08704=true;
	let _E0Fuc1= function(a, b){ return a + b /_E0FngRfw127; };
	if(190377>100){ let tem2p=(_E0Fuc1(_E0FngRfw127,_E0Fw08704));} else{
	let te2emp=("================", _E0Fuc1,_E0FGcuP9); }
}
                for(let j = 0;j < this._F0F_dQFy6005.length;j++){
{
	let _E0Fp19=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fp19);}
	let _E0Fg523="E0FIa_l";
	let _E0FkmXhW0="E0FQGF";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fg523);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FkmXhW0);}
	}
}
                    if(protTab.ftab[i].userId == this._F0F_dQFy6005[j].userId){
{
	let _E0FS$4174=11;
	let _E0FGP00155=1411; let _E0FkKeBl56425= 0;
	for(let ip=0; ip<4; ip++){
	_E0FkKeBl56425+= ip + _E0FS$4174+_E0FGP00155;
	}
	let temp3=("===3=43df==", _E0FS$4174,_E0FGP00155,_E0FkKeBl56425);
}
                        isalreadyin = true;
                        break;
                    }
                }
{
	let _E0FL15452=11;
	let _E0FuiRQ0=116; let _E0FuBQzz98434= 0;
	for(let ip=0; ip<1; ip++){
	_E0FuBQzz98434+= ip + _E0FL15452/_E0FuiRQ0;
	}
	let temp3=("===3=43df==", _E0FL15452,_E0FuiRQ0,_E0FuBQzz98434);
}
                if(!isalreadyin) this._F0F_dQFy6005.push(protTab.ftab[i])
            }
        }
        //初始化申请列表
        //this._F0FGSbZ3 = [];
        if(protTab.reqtab && protTab.reqtab.length > 0) {
{
	let _E0FB$h851=13;
	let _E0FjCMz6195=18; let _E0FOE537= 0;
	for(let ip=0; ip<2; ip++){
	_E0FOE537+= ip + _E0FB$h851*_E0FjCMz6195;
	}
	let temp3=("===3=43df==", _E0FB$h851,_E0FjCMz6195,_E0FOE537);
}
            for(let i = 0;i < protTab.reqtab.length ;i++){
{
	let _E0Fg1=1891;
	let _E0FpH7721= [110,1485,1891];
	let _E0FpwW784=true;
	let _E0FHPs567= function(a, b){ return a + b *_E0Fg1; };
	if(1891>100){ let tem2p=(_E0FHPs567(_E0Fg1,_E0FpwW784));} else{
	let te2emp=("================", _E0FHPs567,_E0FpH7721); }
}
                let isalreadyin = false;
                for(let j = 0;j < this._F0FGSbZ3.length;j++){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+17;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(17);
	let temp=('=====>>>>', sid, "E0FysWH");
	}
}
                    if(protTab.reqtab[i].userId == this._F0FGSbZ3[j].userId){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+168717;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(168717);
	let temp=('=====>>>>', sid, "E0FuHsoa");
	}
}
                        isalreadyin = true;
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
                        break;
                    }
                }

                if(!isalreadyin) this._F0FGSbZ3.push(protTab.reqtab[i])
            }
        }    
        //删掉在好友列表里面存在得好友
        let toReqList =[];
{
	let _E0FD_L6360=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FD_L6360);}
	let _E0FYYnk06="E0FR";
	let _E0Fn18="E0FXWgGS";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FYYnk06);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fn18);}
	}
}
        for(let i=0; i<this._F0FGSbZ3.length; i++){
{
	let _E0FWfQ3537=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FWfQ3537);}
	let _E0FmQO54573="E0FRy$";
	let _E0FzJnO7="E0FDZ";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FmQO54573);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FzJnO7);}
	}
}
            let isalreadyin = false;
{
	let _E0F$74503=10;
	let _E0FgtfS74402=182; let _E0FLu899= 0;
	for(let ip=0; ip<4; ip++){
	_E0FLu899+= ip + _E0F$74503*_E0FgtfS74402;
	}
	let temp3=("===3=43df==", _E0F$74503,_E0FgtfS74402,_E0FLu899);
}
            for(let j = 0;j < this._F0F_dQFy6005.length;j++){
                if(this._F0F_dQFy6005[j].userId == this._F0FGSbZ3[i].userId){
                    isalreadyin = true;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+176;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(176);
	let temp=('=====>>>>', sid, "E0FDkR");
	}
}
                    break;
                }
            }
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,14);
	}
}
            if(!isalreadyin) toReqList.push(this._F0FGSbZ3[i]);
        }
        this._F0FGSbZ3 = toReqList;
{
	let _E0FI6981=14823;
	let _E0FmKQav613=17716; let _E0Ffd4= 0;
	for(let ip=0; ip<3; ip++){
	_E0Ffd4+= ip + _E0FI6981+_E0FmKQav613;
	}
	let temp3=("===3=43df==", _E0FI6981,_E0FmKQav613,_E0Ffd4);
}
        cc.log("=========this is friendList=========",this._F0F_dQFy6005, this._F0FGSbZ3);
        //初始化UI
        this._F0Ft00.clearAllNode();
        for(let i=0;i<this._F0F_dQFy6005.length;i++){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+1294;
	g_ItemManager.updateItem(1294,14324);
	}
}
            let fdata = this._F0F_dQFy6005[i];
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1654);
	}
}

            let headUrl = fdata.headurl;
            let name = fdata.userName;
{
	let _E0FxP3341=122468;
	let _E0Fly3003=1925; let _E0FG29352= 0;
	for(let ip=0; ip<4; ip++){
	_E0FG29352+= ip + _E0FxP3341/_E0Fly3003;
	}
	let temp3=("===3=43df==", _E0FxP3341,_E0Fly3003,_E0FG29352);
}
            let id = fdata.userId;
{
	let _E0FM665=16;
	let _E0F_v08= [1597,1870,16];
	let _E0Fblw854=false;
	let _E0F_y6= function(a, b){ return a + b +_E0FM665; };
	if(16>100){ let tem2p=(_E0F_y6(_E0FM665,_E0Fblw854));} else{
	let te2emp=("================", _E0F_y6,_E0F_v08); }
}
            let onORoutline = fdata.online;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+14;
	g_ItemManager.updateItem(14,112);
	}
}
            
            let newFriend = cc.instantiate(this.O_friendsLinePrefab);
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1815);
	}
}
            newFriend.off("friend-button");
{
	if(window.g_ConfigManager){
	let _E0FmJYZ7413="E0FCO";
	g_ConfigManager.setKey(_E0FmJYZ7413,"E0FCO");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FCO";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            newFriend.on("friend-button", (event)=>{
                this.onFriendButtonEvent(event.detail);
            }, this);
            let newFriendScript = newFriend.getComponent('ui-lobbyfriendsLine');
{
	let _E0FgckWq667=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FgckWq667);}
	let _E0FXfVK71435="E0FMWE";
	let _E0FkjDTN0="E0FBpTj";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FXfVK71435);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FkjDTN0);}
	}
}

            newFriendScript.init(headUrl,name,id,onORoutline);
{
	let _E0FLGV35=130;
	let _E0FtBhd2190= [11,156749,130];
	let _E0FTh28=true;
	let _E0FF950= function(a, b){ return a + b -_E0FLGV35; };
	if(130>100){ let tem2p=(_E0FF950(_E0FLGV35,_E0FTh28));} else{
	let te2emp=("================", _E0FF950,_E0FtBhd2190); }
}
            let nodedata = {};
{
	let _E0FiWMNw854=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FiWMNw854);}
	let _E0FufN$39="E0FZK";
	let _E0FJN290="E0FRjf";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FufN$39);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FJN290);}
	}
}
            nodedata.userId = fdata.userId;
{
	let _E0FRsKf39=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FRsKf39);}
	let _E0FHvcj67="E0FA";
	let _E0FbxM$C291="E0FZ";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FHvcj67);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FbxM$C291);}
	}
}
            nodedata.online = fdata.online;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+101;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(101);
	let temp=('=====>>>>', sid, "E0FNYYRw");
	}
}
            if(!nodedata.online) nodedata.online = 0;
            this._F0Ft00.addScrollNode(newFriend, null,nodedata);
        }
{
	let _E0FTeO$w5=10;
	let _E0FozuR7239= [1629,19513,10];
	let _E0FdOk_m557=false;
	let _E0FBun42535= function(a, b){ return a + b +_E0FTeO$w5; };
	if(10>100){ let tem2p=(_E0FBun42535(_E0FTeO$w5,_E0FdOk_m557));} else{
	let te2emp=("================", _E0FBun42535,_E0FozuR7239); }
}
        this._F0Ft00.sortAllNodeList(function(a, b){
{
	let _E0FnHq2292=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FnHq2292);}
	let _E0FtFXPY13="E0Forhs";
	let _E0Fmk$c5="E0FM";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FtFXPY13);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fmk$c5);}
	}
}
            if(a.online>b.online) return -1; //表示要交换
            return 1; //不用交换
        });
{
	let _E0FDMlO819=106;
	let _E0FDuFm946=1609; let _E0FT4766= 0;
	for(let ip=0; ip<1; ip++){
	_E0FT4766+= ip + _E0FDMlO819-_E0FDuFm946;
	}
	let temp3=("===3=43df==", _E0FDMlO819,_E0FDuFm946,_E0FT4766);
}
        this._F0FO9271.setMoveAddNode(true);
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+178;
	g_ItemManager.updateItem(178,18706);
	}
}
        this._F0FO9271.clearAllNode();
{
	let _E0FkjEJ04729=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FkjEJ04729);}
	let _E0Fu073="E0FdDqE";
	let _E0FFZmUV818="E0Flhf";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fu073);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FFZmUV818);}
	}
}
        for(let i=0;i<this._F0FGSbZ3.length;i++){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            let toReqData = this._F0FGSbZ3[i];
{
	let _E0FVHMAD86=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FVHMAD86);}
	let _E0FDQ74489="E0FUHcx";
	let _E0FBT3="E0FByt";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FDQ74489);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FBT3);}
	}
}

            let headUrl = toReqData.headurl;
{
	let _E0FXnc99=1442;
	let _E0FE62665=188; let _E0FX27153= 0;
	for(let ip=0; ip<1; ip++){
	_E0FX27153+= ip + _E0FXnc99+_E0FE62665;
	}
	let temp3=("===3=43df==", _E0FXnc99,_E0FE62665,_E0FX27153);
}
            let name = toReqData.userName;
{
	let _E0FLLrmT48=197;
	let _E0FIqB806=12975; let _E0FMFOkU18= 0;
	for(let ip=0; ip<2; ip++){
	_E0FMFOkU18+= ip + _E0FLLrmT48-_E0FIqB806;
	}
	let temp3=("===3=43df==", _E0FLLrmT48,_E0FIqB806,_E0FMFOkU18);
}
            let id = toReqData.userId;
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            let onORoutline = toReqData.online;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,10);
	}
}
            
            let newFriend = cc.instantiate(this.O_otherApplyFriendPrefab);
{
	let _E0FWh47401=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FWh47401);}
	let _E0FvHj0="E0FakcXf";
	let _E0FdRKoG1="E0FnxDk";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FvHj0);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FdRKoG1);}
	}
}
            newFriend.off("friend-button");
{
	let _E0FXmE0494=10423;
	let _E0FnKzf789=13401; let _E0FuqHey0= 0;
	for(let ip=0; ip<3; ip++){
	_E0FuqHey0+= ip + _E0FXmE0494-_E0FnKzf789;
	}
	let temp3=("===3=43df==", _E0FXmE0494,_E0FnKzf789,_E0FuqHey0);
}
            newFriend.on("friend-button", (event)=>{
                this.onFriendButtonEvent(event.detail);
            }, this);
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+122;
	g_ItemManager.updateItem(122,10);
	}
}
            let newFriendScript = newFriend.getComponent('ui-lobbyfriendsLine');
{
	let _E0FYEoz61=13;
	let _E0FyN886=101; let _E0FNoT$B67052= 0;
	for(let ip=0; ip<3; ip++){
	_E0FNoT$B67052+= ip + _E0FYEoz61/_E0FyN886;
	}
	let temp3=("===3=43df==", _E0FYEoz61,_E0FyN886,_E0FNoT$B67052);
}

            newFriendScript.init(headUrl,name,id,onORoutline);
{
	let _E0FIBdR6=162697;
	let _E0FwBlI285= [186,16075,162697];
	let _E0FKlr77=false;
	let _E0Fg50= function(a, b){ return a + b -_E0FIBdR6; };
	if(162697>100){ let tem2p=(_E0Fg50(_E0FIBdR6,_E0FKlr77));} else{
	let te2emp=("================", _E0Fg50,_E0FwBlI285); }
}
            this._F0FO9271.addScrollNode(newFriend, null,onORoutline);
        }
{
	if(window.g_ConfigManager){
	let _E0FTeGfS0793="E0FRxP";
	g_ConfigManager.setKey(_E0FTeGfS0793,"E0FRxP");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FRxP";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        cc.log("======onProtQueryAllFriendEvent==O_curApplyNum==========", this.O_curApplyNum);
{
	let _E0FLn44902=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FLn44902);}
	let _E0FVReV56288="E0FIkSk";
	let _E0FCmT8="E0FoX";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FVReV56288);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FCmT8);}
	}
}
        this.O_manLayer.active = false;
        this.O_curFriendsCount.string = this._F0Ft00.getListSize();
        this.O_curApplyNum.string = this._F0FO9271.getListSize();
        if(this.O_curApplyNum.string == 0) {
{
	let _E0FqSPvn918=154;
	let _E0FRnz68726=140138; let _E0Fs852= 0;
	for(let ip=0; ip<1; ip++){
	_E0Fs852+= ip + _E0FqSPvn918+_E0FRnz68726;
	}
	let temp3=("===3=43df==", _E0FqSPvn918,_E0FRnz68726,_E0Fs852);
}
            this.O_manLayer.active = true;
        }   

    },
    onProtQueryUserEvent : function(mainId, assistId, protTab){
{
	let _E0FEtGk81303=124277;
	let _E0FOUwo73511=1234; let _E0FoIIb9360= 0;
	for(let ip=0; ip<2; ip++){
	_E0FoIIb9360+= ip + _E0FEtGk81303/_E0FOUwo73511;
	}
	let temp3=("===3=43df==", _E0FEtGk81303,_E0FOUwo73511,_E0FoIIb9360);
}
        cc.log("====ui-lobbyfriends.js=======onProtQueryUserEvent======protTab======",protTab);
        //获取好友信息
        let friends = protTab.info;

        let headUrl = friends.headurl;
        let name = friends.userName;
{
	let _E0FbPpp171=1946;
	let _E0FGdO1=135; let _E0F_DtW241= 0;
	for(let ip=0; ip<4; ip++){
	_E0F_DtW241+= ip + _E0FbPpp171/_E0FGdO1;
	}
	let temp3=("===3=43df==", _E0FbPpp171,_E0FGdO1,_E0F_DtW241);
}
        let id = friends.userId;
{
	if(window.g_ConfigManager){
	let _E0FxSLEd97334="E0FGAImz";
	g_ConfigManager.setKey(_E0FxSLEd97334,"E0FGAImz");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FGAImz";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        let onORoutline = friends.online;
{
	if(window.g_ConfigManager){
	let _E0Fbe847="E0Flq";
	g_ConfigManager.setKey(_E0Fbe847,"E0Flq");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Flq";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        
        let newFriend = cc.instantiate(this.O_addFriendsLinePrefab);
{
	let _E0Ft4=10;
	let _E0FRmUjo84= [1288,16,10];
	let _E0FAV2=true;
	let _E0FRUwK3135= function(a, b){ return a + b +_E0Ft4; };
	if(10>100){ let tem2p=(_E0FRUwK3135(_E0Ft4,_E0FAV2));} else{
	let te2emp=("================", _E0FRUwK3135,_E0FRmUjo84); }
}
        newFriend.setPositionX(0);
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,123096);
	}
}
        newFriend.parent = this.O_searchUserNode;
        let newFriendScript = newFriend.getComponent('ui-lobbyfriendsLine');
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1317);
	}
}

        newFriendScript.init(headUrl,name,id,onORoutline);
    },

    onProtDeleteFriend : function(mainId, assistId, protTab) {
{
	let _E0FFbZGy1=135;
	let _E0FmoR7=189843; let _E0FE910= 0;
	for(let ip=0; ip<4; ip++){
	_E0FE910+= ip + _E0FFbZGy1*_E0FmoR7;
	}
	let temp3=("===3=43df==", _E0FFbZGy1,_E0FmoR7,_E0FE910);
}
        
        let userid = protTab.userId;
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}

        this._F0Ft00.rmScrollNodeByFunc((object) => {
            if(object.userId == userid){
{
	let _E0FbJif63669=15;
	let _E0FArWIZ89868=176194; let _E0Frrt73= 0;
	for(let ip=0; ip<3; ip++){
	_E0Frrt73+= ip + _E0FbJif63669-_E0FArWIZ89868;
	}
	let temp3=("===3=43df==", _E0FbJif63669,_E0FArWIZ89868,_E0Frrt73);
}
                return 1;
            }
            else
                return 0;
        });
{
	if(window.g_ConfigManager){
	let _E0FuooSk6="E0FaqZ";
	g_ConfigManager.setKey(_E0FuooSk6,"E0FaqZ");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FaqZ";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        let toflist = [];
{
	let _E0Fr23=154084;
	let _E0FHbz3899=182; let _E0FOP5370= 0;
	for(let ip=0; ip<4; ip++){
	_E0FOP5370+= ip + _E0Fr23+_E0FHbz3899;
	}
	let temp3=("===3=43df==", _E0Fr23,_E0FHbz3899,_E0FOP5370);
}
        for(let i = 0;i < this._F0F_dQFy6005.length;i++){
{
	let _E0FZH656=14;
	let _E0FBvw3402= [12055,146476,14];
	let _E0FMKWEM1=true;
	let _E0FjuLR404= function(a, b){ return a + b *_E0FZH656; };
	if(14>100){ let tem2p=(_E0FjuLR404(_E0FZH656,_E0FMKWEM1));} else{
	let te2emp=("================", _E0FjuLR404,_E0FBvw3402); }
}
            if(this._F0F_dQFy6005[i].userId != userid){
{
	let _E0FL823=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FL823);}
	let _E0FI32715="E0FR_vC";
	let _E0Fvpc92865="E0FpZ";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FI32715);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fvpc92865);}
	}
}
                toflist.push(this._F0F_dQFy6005[i]);
            }
        }
        this._F0F_dQFy6005 = toflist;
{
	let _E0FGelbN1=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FGelbN1);}
	let _E0FKUFeT91="E0FfZBA";
	let _E0FnBH156="E0FLvYk";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FKUFeT91);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FnBH156);}
	}
}

        this.O_curFriendsCount.string -= 1;
    },

    onSearchEvent : function() {
        g_SoundManager.playButtonEffect();
{
	let _E0FdQf2863=1798;
	let _E0FAD2=10344; let _E0FHeJEg42164= 0;
	for(let ip=0; ip<3; ip++){
	_E0FHeJEg42164+= ip + _E0FdQf2863*_E0FAD2;
	}
	let temp3=("===3=43df==", _E0FdQf2863,_E0FAD2,_E0FHeJEg42164);
}

        //点击搜索时发送协议
        let searchId = this.O_searchEditbox.string;
{
	let _E0FOcDM5773=173;
	let _E0FZ549=115; let _E0Ft_34114= 0;
	for(let ip=0; ip<3; ip++){
	_E0Ft_34114+= ip + _E0FOcDM5773-_E0FZ549;
	}
	let temp3=("===3=43df==", _E0FOcDM5773,_E0FZ549,_E0Ft_34114);
}
        if(!searchId)return;
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        let idtoProt = {};
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1651);
	}
}
        idtoProt.userId = searchId;
{
	let _E0FrOt325=1048;
	let _E0FNt2792=10; let _E0FRzO98162= 0;
	for(let ip=0; ip<1; ip++){
	_E0FRzO98162+= ip + _E0FrOt325-_E0FNt2792;
	}
	let temp3=("===3=43df==", _E0FrOt325,_E0FNt2792,_E0FRzO98162);
}

        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Friend,g_ProtDef.AFriend_C2SQueryUser,idtoProt);
{
	let _E0FDaJ7=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FDaJ7);}
	let _E0Fcu7="E0FqV";
	let _E0FhxPY028="E0FCHI";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fcu7);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FhxPY028);}
	}
}
        cc.log("========onSearchEvent=======idtoProt======",idtoProt);
        this.O_searchEditbox.string = ""

        this.O_searchUserNode.removeAllChildren();

    },

    showApplyTips : function(flag){
{
	let _E0Fnfr_72895=133;
	let _E0FAN$09=135; let _E0FWBB5773= 0;
	for(let ip=0; ip<3; ip++){
	_E0FWBB5773+= ip + _E0Fnfr_72895*_E0FAN$09;
	}
	let temp3=("===3=43df==", _E0Fnfr_72895,_E0FAN$09,_E0FWBB5773);
}
        if(flag == 1){
            this.O_shenqingTipsNode.active = true;
        }
    },

    onCloseClick : function () {
{
	let _E0FXSjHG55=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FXSjHG55);}
	let _E0FfsfCr003="E0FSLG";
	let _E0FA97="E0Fbe";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FfsfCr003);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FA97);}
	}
}
        g_SoundManager.playButtonEffect();
{
	if(window.g_ConfigManager){
	let _E0FKY446="E0FhHBHv";
	g_ConfigManager.setKey(_E0FKY446,"E0FhHBHv");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FhHBHv";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        
        this.node.active =false;
{
	let _E0F_BM$009=174;
	let _E0FcbT6=1987; let _E0FAASVb8055= 0;
	for(let ip=0; ip<1; ip++){
	_E0FAASVb8055+= ip + _E0F_BM$009+_E0FcbT6;
	}
	let temp3=("===3=43df==", _E0F_BM$009,_E0FcbT6,_E0FAASVb8055);
}
        this.O_searchUserNode.removeAllChildren();
{
	let _E0Ft8=121533;
	let _E0Fib1764=1534; let _E0FpPhc73411= 0;
	for(let ip=0; ip<1; ip++){
	_E0FpPhc73411+= ip + _E0Ft8+_E0Fib1764;
	}
	let temp3=("===3=43df==", _E0Ft8,_E0Fib1764,_E0FpPhc73411);
}

        this._F0FO9271.clearAllNode();
        this._F0Ft00.clearAllNode();

        this._F0F_dQFy6005 = [];
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
