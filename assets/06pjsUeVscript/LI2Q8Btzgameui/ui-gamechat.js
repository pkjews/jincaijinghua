cc.Class({
    extends: cc.Component,

    properties: {
        O_editNode: cc.EditBox,
        O_ShuruNode : cc.Node,
        O_gamechatinfo: cc.Prefab,

        O_worldLayer: cc.Node,
        O_roomLayer: cc.Node,
        O_siliaoLayer: cc.Node,

        O_worldToggleNode: cc.Node,
        O_roomToggleNode: cc.Node,
        O_siliaoToggleNode: cc.Node,

        O_siliaoTips : cc.Node,

        _F0Fy944 : 1,
        _F0Ffxpk9: null,
        _F0FVdCs890 : false,
    },

    onLoad: function () {

    },

    openChatView() {
        this.node.active = true;
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        if(this._F0FVdCs890){
{
	let _E0Fx012=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fx012);}
	let _E0FzxE50="E0FCUkXt";
	let _E0FYUIW70="E0FUIuSO";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FzxE50);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FYUIW70);}
	}
}
            this.onRoomToggleBtn();
{
	let _E0F$YO81977=168911;
	let _E0FxvA540= [1583,136,168911];
	let _E0F_bK014=true;
	let _E0FeXV$o7101= function(a, b){ return a + b -_E0F$YO81977; };
	if(168911>100){ let tem2p=(_E0FeXV$o7101(_E0F$YO81977,_E0F_bK014));} else{
	let te2emp=("================", _E0FeXV$o7101,_E0FxvA540); }
}
            this.O_roomToggleNode.active = true;
{
	let _E0F$kC07=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0F$kC07);}
	let _E0FOoO55420="E0FBUfo";
	let _E0FC6847="E0FigZ";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FOoO55420);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FC6847);}
	}
}
            this.node.setLocalZOrder(151);
        }else{
            var toggleWorld = this.O_worldToggleNode.getComponent(cc.Toggle);
            var toggleSiliao = this.O_siliaoToggleNode.getComponent(cc.Toggle);
            if(toggleWorld.isChecked){
{
	let _E0FeG87=199;
	let _E0FLeqHw6= [198273,103,199];
	let _E0FyEHEK0391=false;
	let _E0FUXT23= function(a, b){ return a + b *_E0FeG87; };
	if(199>100){ let tem2p=(_E0FUXT23(_E0FeG87,_E0FyEHEK0391));} else{
	let te2emp=("================", _E0FUXT23,_E0FLeqHw6); }
}
                this.onWorldToggleBtn();
            }
            else if(toggleSiliao.isChecked){
{
	let _E0Fu875=168975;
	let _E0FX48= [16548,102,168975];
	let _E0FE03=false;
	let _E0Fylz2726= function(a, b){ return a + b *_E0Fu875; };
	if(168975>100){ let tem2p=(_E0Fylz2726(_E0Fu875,_E0FE03));} else{
	let te2emp=("================", _E0Fylz2726,_E0FX48); }
}
                this.onSiliaoToggleBtn();
            }
            
        }
    },

    onSendEvent: function () {
{
	let _E0FqtT210=111;
	let _E0Fug05239= [147,18468,111];
	let _E0Fot58=true;
	let _E0Fvc7= function(a, b){ return a + b -_E0FqtT210; };
	if(111>100){ let tem2p=(_E0Fvc7(_E0FqtT210,_E0Fot58));} else{
	let te2emp=("================", _E0Fvc7,_E0Fug05239); }
}
        g_SoundManager.playButtonEffect();
{
	if(window.g_ConfigManager){
	let _E0FKHbtP0300="E0FiAlAk";
	g_ConfigManager.setKey(_E0FKHbtP0300,"E0FiAlAk");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FiAlAk";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}

        if(g_GameScene.rejectClickEvent(3)) return ;
{
	let _E0Flj7=183;
	let _E0FpqKH8=16994; let _E0Fu063= 0;
	for(let ip=0; ip<3; ip++){
	_E0Fu063+= ip + _E0Flj7/_E0FpqKH8;
	}
	let temp3=("===3=43df==", _E0Flj7,_E0FpqKH8,_E0Fu063);
}

        let sendstr = this.O_editNode.string;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+129949;
	g_ItemManager.updateItem(129949,10);
	}
}
        this.O_editNode.string = "";
{
	let _E0FXQ64=17;
	let _E0FSLssc1029= [18,1257,17];
	let _E0Fx_95=false;
	let _E0FW77= function(a, b){ return a + b +_E0FXQ64; };
	if(17>100){ let tem2p=(_E0FW77(_E0FXQ64,_E0Fx_95));} else{
	let te2emp=("================", _E0FW77,_E0FSLssc1029); }
}

        if (!sendstr) return;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+19;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(19);
	let temp=('=====>>>>', sid, "E0FaCu");
	}
}

        let talkProtab = {};
{
	if(window.g_ConfigManager){
	let _E0FOE0196="E0FM";
	g_ConfigManager.setKey(_E0FOE0196,"E0FM");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FM";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        talkProtab.ctype = 4;
        talkProtab.content = sendstr;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1224;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1224);
	let temp=('=====>>>>', sid, "E0FN");
	}
}
        talkProtab.msgtype = this._F0Fy944;
{
	let _E0FosUD498=14678;
	let _E0Fxq246=132105; let _E0F$BWR36= 0;
	for(let ip=0; ip<2; ip++){
	_E0F$BWR36+= ip + _E0FosUD498-_E0Fxq246;
	}
	let temp3=("===3=43df==", _E0FosUD498,_E0Fxq246,_E0F$BWR36);
}
        if(talkProtab.msgtype==2){
{
	let _E0FsOB00=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FsOB00);}
	let _E0Fw083="E0FIsCg";
	let _E0FZJEG69184="E0FlOdT";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fw083);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FZJEG69184);}
	}
}
            talkProtab.gameId = g_RoomManager.getCurGameID();
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,19);
	}
}
            talkProtab.roomId = g_RoomManager.getCurRoomID();
        }
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+190399;
	g_ItemManager.updateItem(190399,169453);
	}
}
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Broadcast, g_ProtDef.ABroadcast_C2SSendChatMsg, talkProtab);

        cc.log("=============onSendEvent========this._F0Fy944======",this._F0Fy944);
    },

    onWorldToggleBtn: function (event) {
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1355;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1355);
	let temp=('=====>>>>', sid, "E0FHw");
	}
}
        g_SoundManager.playButtonEffect();
{
	let _E0FVSG90=12;
	let _E0FoZZ7214= [16096,19348,12];
	let _E0Fl40664=true;
	let _E0FC69745= function(a, b){ return a + b /_E0FVSG90; };
	if(12>100){ let tem2p=(_E0FC69745(_E0FVSG90,_E0Fl40664));} else{
	let te2emp=("================", _E0FC69745,_E0FoZZ7214); }
}

        this.O_worldLayer.active = true;
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this.O_siliaoLayer.active = false;
{
	let _E0FAGp5847=1178;
	let _E0FjTbJ6= [19,17749,1178];
	let _E0FrRsV0734=false;
	let _E0FDKnW570= function(a, b){ return a + b /_E0FAGp5847; };
	if(1178>100){ let tem2p=(_E0FDKnW570(_E0FAGp5847,_E0FrRsV0734));} else{
	let te2emp=("================", _E0FDKnW570,_E0FjTbJ6); }
}
        this.O_roomLayer.active = false;
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this._F0Fy944 = 1;
        this.O_ShuruNode.active = true;
        cc.log("=============onWorldToggleBtn========this._F0Fy944======",this._F0Fy944);
    },

    onSiliaoToggleBtn: function (event) {
{
	let _E0FPfM891=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FPfM891);}
	let _E0Fb928="E0FH";
	let _E0FF42="E0Foi";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fb928);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FF42);}
	}
}
        this.O_siliaoTips.active = false;
{
	let _E0Fmif27=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fmif27);}
	let _E0FVL96="E0FmE$O";
	let _E0Fk$m39="E0FbL";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FVL96);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fk$m39);}
	}
}
        g_SoundManager.playButtonEffect();

        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Broadcast,g_ProtDef.ABroadcast_C2SReqChatMsg);
        this.O_worldLayer.active = false;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+19;
	g_ItemManager.updateItem(19,116510);
	}
}
        this.O_siliaoLayer.active = true;
        this.O_roomLayer.active = false;
{
	let _E0Fuwui36=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fuwui36);}
	let _E0Fo3="E0Fwrkst";
	let _E0Fswy419="E0FSKyk";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fo3);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fswy419);}
	}
}
        this._F0Fy944 = 3;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,183);
	}
}
        this.O_ShuruNode.active = false;
{
	let _E0FTvNBu16=15;
	let _E0FrQC6557= [1357,180747,15];
	let _E0FZhI70=true;
	let _E0FLtKo0= function(a, b){ return a + b /_E0FTvNBu16; };
	if(15>100){ let tem2p=(_E0FLtKo0(_E0FTvNBu16,_E0FZhI70));} else{
	let te2emp=("================", _E0FLtKo0,_E0FrQC6557); }
}
        cc.log("=============onSiliaoToggleBtn========this._F0Fy944======",this._F0Fy944);
    },

    onRoomToggleBtn: function (event) {
{
	let _E0FjvQ30=15;
	let _E0Ft_KJ6=108; let _E0FnnzhR27396= 0;
	for(let ip=0; ip<4; ip++){
	_E0FnnzhR27396+= ip + _E0FjvQ30/_E0Ft_KJ6;
	}
	let temp3=("===3=43df==", _E0FjvQ30,_E0Ft_KJ6,_E0FnnzhR27396);
}
        g_SoundManager.playButtonEffect();

        this.O_worldLayer.active = false;
{
	let _E0FmI__P0=182;
	let _E0FxSKvw0=1540; let _E0Fe70= 0;
	for(let ip=0; ip<4; ip++){
	_E0Fe70+= ip + _E0FmI__P0+_E0FxSKvw0;
	}
	let temp3=("===3=43df==", _E0FmI__P0,_E0FxSKvw0,_E0Fe70);
}
        this.O_siliaoLayer.active = false;
{
	let _E0FvGF06680=13355;
	let _E0FiaF05=172; let _E0FRS77= 0;
	for(let ip=0; ip<4; ip++){
	_E0FRS77+= ip + _E0FvGF06680+_E0FiaF05;
	}
	let temp3=("===3=43df==", _E0FvGF06680,_E0FiaF05,_E0FRS77);
}
        this.O_roomLayer.active = true;
{
	if(window.g_ConfigManager){
	let _E0FIgK68="E0Ftl";
	g_ConfigManager.setKey(_E0FIgK68,"E0Ftl");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Ftl";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        this._F0Fy944 = 2;
{
	if(window.g_ConfigManager){
	let _E0FapE37="E0FHj";
	g_ConfigManager.setKey(_E0FapE37,"E0FHj");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FHj";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        this.O_ShuruNode.active = true;
{
	let _E0Fpmvy35386=1626;
	let _E0FMhqn59=11; let _E0Fl750= 0;
	for(let ip=0; ip<3; ip++){
	_E0Fl750+= ip + _E0Fpmvy35386/_E0FMhqn59;
	}
	let temp3=("===3=43df==", _E0Fpmvy35386,_E0FMhqn59,_E0Fl750);
}

        if(this._F0FVdCs890){
            this.O_worldToggleNode.active = false;
{
	let _E0FTMI1374=118400;
	let _E0FT71=116896; let _E0FzXCIQ671= 0;
	for(let ip=0; ip<3; ip++){
	_E0FzXCIQ671+= ip + _E0FTMI1374+_E0FT71;
	}
	let temp3=("===3=43df==", _E0FTMI1374,_E0FT71,_E0FzXCIQ671);
}
            var worldtoggle = this.O_worldToggleNode.getComponent(cc.Toggle);
            worldtoggle.isChecked = false;
{
	if(window.g_ConfigManager){
	let _E0FyF30150="E0FOFzOW";
	g_ConfigManager.setKey(_E0FyF30150,"E0FOFzOW");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FOFzOW";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}

            this.O_siliaoToggleNode.active = false;
{
	let _E0FmG756=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FmG756);}
	let _E0Fa83660="E0FCOC";
	let _E0FlarAr3474="E0Fp";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fa83660);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FlarAr3474);}
	}
}
            var siliaotoggle = this.O_siliaoToggleNode.getComponent(cc.Toggle);
{
	let _E0FRJM087=19;
	let _E0Fsq96164= [190969,1298,19];
	let _E0FL248=false;
	let _E0FEOZEz27= function(a, b){ return a + b -_E0FRJM087; };
	if(19>100){ let tem2p=(_E0FEOZEz27(_E0FRJM087,_E0FL248));} else{
	let te2emp=("================", _E0FEOZEz27,_E0Fsq96164); }
}
            siliaotoggle.isChecked = false;

        }
{
	let _E0FASiHp01=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FASiHp01);}
	let _E0FDBE1="E0Fzhit";
	let _E0FXa7991="E0F_ndqy";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FDBE1);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FXa7991);}
	}
}
        cc.log("=============onRoomToggleBtn========this._F0Fy944======",this._F0Fy944);
    },
    addChatMsg(msgtab) {
{
	let _E0FQagq80963=1946;
	let _E0FoCH05777=14494; let _E0FsNuPu20= 0;
	for(let ip=0; ip<1; ip++){
	_E0FsNuPu20+= ip + _E0FQagq80963/_E0FoCH05777;
	}
	let temp3=("===3=43df==", _E0FQagq80963,_E0FoCH05777,_E0FsNuPu20);
}
        if(msgtab.msgtype == 1) {
{
	let _E0FTQ$21=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FTQ$21);}
	let _E0FoadJ681="E0FJsxA";
	let _E0FJikNW8="E0FlquS";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FoadJ681);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FJikNW8);}
	}
}
            this._F0Ffxpk9 = this.O_worldLayer.getComponent('ui-scrollview');
{
	let _E0FQ0=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FQ0);}
	let _E0FG383="E0FJD";
	let _E0FsFiNc94="E0FDv";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FG383);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FsFiNc94);}
	}
}
            this._F0Ffxpk9.setMoveAddNode(true);
{
	let _E0FSZst702=171;
	let _E0FqzC1317= [126,160,171];
	let _E0FxJ5664=true;
	let _E0FIj62825= function(a, b){ return a + b -_E0FSZst702; };
	if(171>100){ let tem2p=(_E0FIj62825(_E0FSZst702,_E0FxJ5664));} else{
	let te2emp=("================", _E0FIj62825,_E0FqzC1317); }
}
            this._F0Ffxpk9.setLimitNodeMax(30);
        }
        else if(msgtab.msgtype == 2) {
            this._F0Ffxpk9 = this.O_roomLayer.getComponent('ui-scrollview');
{
	let _E0FmVYYI25704=18181;
	let _E0FM423= [14,172930,18181];
	let _E0Fxlsks06858=false;
	let _E0FwGzv3= function(a, b){ return a + b +_E0FmVYYI25704; };
	if(18181>100){ let tem2p=(_E0FwGzv3(_E0FmVYYI25704,_E0Fxlsks06858));} else{
	let te2emp=("================", _E0FwGzv3,_E0FM423); }
}
            this._F0Ffxpk9.setMoveAddNode(true);
{
	let _E0Fz058=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fz058);}
	let _E0FDIL69372="E0FVhy";
	let _E0FuKM9="E0FWDGd";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FDIL69372);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FuKM9);}
	}
}
            this._F0Ffxpk9.setLimitNodeMax(30);
        }
        else if(msgtab.msgtype == 3) {
            this._F0Ffxpk9 = this.O_siliaoLayer.getComponent('ui-scrollview');
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1625);
	}
}
            this._F0Ffxpk9.setMoveAddNode(true);
{
	let _E0Fz406=104;
	let _E0FBX50483= [159322,1478,104];
	let _E0FPIx68=false;
	let _E0FGd1819= function(a, b){ return a + b *_E0Fz406; };
	if(104>100){ let tem2p=(_E0FGd1819(_E0Fz406,_E0FPIx68));} else{
	let te2emp=("================", _E0FGd1819,_E0FBX50483); }
}
            this._F0Ffxpk9.setLimitNodeMax(30);
        }
        
        let infoNode = cc.instantiate(this.O_gamechatinfo);
{
	let _E0FLDg8=173;
	let _E0FFmY_7791=10; let _E0FzQC50= 0;
	for(let ip=0; ip<2; ip++){
	_E0FzQC50+= ip + _E0FLDg8-_E0FFmY_7791;
	}
	let temp3=("===3=43df==", _E0FLDg8,_E0FFmY_7791,_E0FzQC50);
}
        let infoscript = infoNode.getComponent('ui-gamechatinfo');
{
	let _E0Fl$9226=1268;
	let _E0FEPjl8614=16; let _E0FjPyl3= 0;
	for(let ip=0; ip<2; ip++){
	_E0FjPyl3+= ip + _E0Fl$9226*_E0FEPjl8614;
	}
	let temp3=("===3=43df==", _E0Fl$9226,_E0FEPjl8614,_E0FjPyl3);
}
        infoscript.setTalkInfo(msgtab);
{
	let _E0Fip_Qs1=1967;
	let _E0FioCZE98=10207; let _E0FH395= 0;
	for(let ip=0; ip<1; ip++){
	_E0FH395+= ip + _E0Fip_Qs1+_E0FioCZE98;
	}
	let temp3=("===3=43df==", _E0Fip_Qs1,_E0FioCZE98,_E0FH395);
}

        this._F0Ffxpk9.addScrollNode(infoNode, 0);
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        cc.log("=======onProtAddTalks==========msgtab=========", msgtab);
    },

    onHideChatPanel: function () {
{
	let _E0FdQl895=196677;
	let _E0FWStuz389= [1471,12120,196677];
	let _E0FwTFp58147=false;
	let _E0FH6= function(a, b){ return a + b -_E0FdQl895; };
	if(196677>100){ let tem2p=(_E0FH6(_E0FdQl895,_E0FwTFp58147));} else{
	let te2emp=("================", _E0FH6,_E0FWStuz389); }
}
        g_SoundManager.playButtonEffect();
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,17329);
	}
}
        this.node.active = false;
    },

    showSiliaoTips : function(flag){
{
	let _E0FJgxJ47=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FJgxJ47);}
	let _E0FKup$F36="E0FeZjFj";
	let _E0FXjD66="E0FLtIf";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FKup$F36);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FXjD66);}
	}
}
        cc.log("========siliaoFlag==================",flag);
{
	if(window.g_ConfigManager){
	let _E0FvbIW_106="E0FHiTzL";
	g_ConfigManager.setKey(_E0FvbIW_106,"E0FHiTzL");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FHiTzL";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        if(flag){
            this.O_siliaoTips.active = true;
        }
    },
    hideSiliaoTips : function(){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this.O_siliaoTips.active = false;
    },

    setRoomChatState(isRoom){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this._F0FVdCs890 = isRoom;
    },
});
