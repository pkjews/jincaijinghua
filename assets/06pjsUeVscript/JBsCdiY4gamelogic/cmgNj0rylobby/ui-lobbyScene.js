let utilIconv = require("util-iconv")
cc.Class({
    extends: require("ui-roomscene"),

    properties: {

        O_bottmBtns: cc.Node,

        O_isRoomExitPrefab : cc.Prefab,
        O_createRoomprefab: cc.Prefab,
        O_joinRoomprefab: cc.Prefab,
        O_userinfoprefab: cc.Prefab,

        //bottomButtons Prefab
        O_friendsPrefab: cc.Prefab,
        O_kefuPrefab: cc.Prefab,
        O_zhanjiPrefab: cc.Prefab,
        O_mailPrefab: cc.Prefab,
        O_messagePrefab : cc.Prefab,

        //topButtons Prefab
        O_settingPrefab: cc.Prefab,
        O_rulePrefab: cc.Prefab,

        O_noticeMaskNode: cc.Node,
        O_namelabel: cc.Label,
        O_useridlabel : cc.Label,
        
        O_paihangbangPrefab: cc.Prefab,
        O_showChat: cc.Node,
        ///////////////////////////////////////////////////////
        _F0FBdPT98: null,
        _F0FR8: null,
        _F0FAq84: null,
        _F0F_Ag9894 : null,
        _F0FN13 : null,
        _F0FwJL6693 : null,
        

        _F0FFNR5955: null,
        _F0Fazik6 : null,
    },

    // use this for initialization
    onLoad() {
        this._super(); //调用父类的
        this.O_bottmBtns.setLocalZOrder(5);
{
	let _E0FDs783=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FDs783);}
	let _E0Fx_Zd61="E0FG";
	let _E0FdspYw44703="E0FArimc";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fx_Zd61);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FdspYw44703);}
	}
}
        this.O_showChat.setLocalZOrder(5);
{
	let _E0FBxFK20437=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FBxFK20437);}
	let _E0Fe5="E0FuQL";
	let _E0Fg98084="E0FWFGu";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fe5);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fg98084);}
	}
}
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Lobby,g_ProtDef.ALobby_S2CQueryMyDesk,this.onProtCurrentRoomExit,this);
        //注册回调函数
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Lobby, g_ProtDef.ALobby_S2CCreatDesk, this.onProtCreateRoom, this);
        //排行榜协议
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Rank, g_ProtDef.ARank_S2CReqRankList, this.onProtReqRankList, this);
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1456;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1456);
	let temp=('=====>>>>', sid, "E0FiQI");
	}
}
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_MailBox, g_ProtDef.AMailBox_S2CQueryAllMail, this.onProtMailList, this);
{
	let _E0FvIuU76439=18894;
	let _E0FUKO1803= [103,161012,18894];
	let _E0FLU4120=true;
	let _E0Fh$$117= function(a, b){ return a + b +_E0FvIuU76439; };
	if(18894>100){ let tem2p=(_E0Fh$$117(_E0FvIuU76439,_E0FLU4120));} else{
	let te2emp=("================", _E0Fh$$117,_E0FUKO1803); }
}
        //大厅公告
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_Broadcast,g_ProtDef.ABroadcast_S2ClobbyNotice,this.onProtLobbyNotice,this);

        //初始化数据
        let userinfo = g_UserManager.getSelfUserInfo();
{
	if(window.g_ConfigManager){
	let _E0FqH7205="E0FTfaYW";
	g_ConfigManager.setKey(_E0FqH7205,"E0FTfaYW");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FTfaYW";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        this.O_namelabel.string = userinfo.getUserName();
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,116397);
	}
}
        this.O_useridlabel.string = "ID:"+userinfo.getUserID();
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+14337;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(14337);
	let temp=('=====>>>>', sid, "E0FXAhe");
	}
}
        cc.log("=====lobbbyscene===onLoad=======", this.O_namelabel.string);
{
	let _E0Fx001=148;
	let _E0F_4599=10; let _E0FXKlb447= 0;
	for(let ip=0; ip<1; ip++){
	_E0FXKlb447+= ip + _E0Fx001*_E0F_4599;
	}
	let temp3=("===3=43df==", _E0Fx001,_E0F_4599,_E0FXKlb447);
}
        this.showGameRank(false);
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1750);
	}
}

        g_SoundManager.playMusic(g_ConfigManager.getGlobalConfig("LobbySceneMusic"));
{
	let _E0FbVaU952=1992;
	let _E0Fsum15032= [12800,10813,1992];
	let _E0FYtR2=true;
	let _E0Fasp882= function(a, b){ return a + b -_E0FbVaU952; };
	if(1992>100){ let tem2p=(_E0Fasp882(_E0FbVaU952,_E0FYtR2));} else{
	let te2emp=("================", _E0Fasp882,_E0Fsum15032); }
}
        //请求一些信息
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Rank, g_ProtDef.ARank_C2SReqRankList);
{
	let _E0FsaMgo64=127;
	let _E0FjALrw1=146; let _E0FYaIu435= 0;
	for(let ip=0; ip<4; ip++){
	_E0FYaIu435+= ip + _E0FsaMgo64+_E0FjALrw1;
	}
	let temp3=("===3=43df==", _E0FsaMgo64,_E0FjALrw1,_E0FYaIu435);
}
        //
        // let toBcProtTab = {}
        // toBcProtTab.AppGameID = g_ConfigManager.getGlobalConfig("AppGameID");
        // g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Broadcast,g_ProtDef.ABroadcast_C2SlobbyNotice, toBcProtTab);

{
	if(window.g_ConfigManager){
	let _E0FDq84176="E0F$";
	g_ConfigManager.setKey(_E0FDq84176,"E0F$");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0F$";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        this.runNoticeLabelAction()
    },
    
    runNoticeLabelAction(str, repeatnum) {
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+170;
	g_ItemManager.updateItem(170,10206);
	}
}
        let noticelabel = this.O_noticeMaskNode.getChildByName("label");
{
	let _E0FZFhF66104=1287;
	let _E0FQSuY9358=113853; let _E0FYhiJ89674= 0;
	for(let ip=0; ip<3; ip++){
	_E0FYhiJ89674+= ip + _E0FZFhF66104+_E0FQSuY9358;
	}
	let temp3=("===3=43df==", _E0FZFhF66104,_E0FQSuY9358,_E0FYhiJ89674);
}
        if(str){
            noticelabel.getComponent(cc.Label).string = str;
        }
{
	let _E0Fep26=1686;
	let _E0FDTRQW149=11; let _E0FI12384= 0;
	for(let ip=0; ip<2; ip++){
	_E0FI12384+= ip + _E0Fep26*_E0FDTRQW149;
	}
	let temp3=("===3=43df==", _E0Fep26,_E0FDTRQW149,_E0FI12384);
}
        noticelabel.stopAllActions();
{
	let _E0Fsl17=101;
	let _E0Fmee49876=121; let _E0FJt4= 0;
	for(let ip=0; ip<2; ip++){
	_E0FJt4+= ip + _E0Fsl17/_E0Fmee49876;
	}
	let temp3=("===3=43df==", _E0Fsl17,_E0Fmee49876,_E0FJt4);
}
        let maskWidth = this.O_noticeMaskNode.width;
        if (maskWidth < noticelabel.width) maskWidth = noticelabel.width;
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        let toPosY = noticelabel.position.y;
{
	let _E0FD36=185;
	let _E0FwXUtf86269=10; let _E0FP5= 0;
	for(let ip=0; ip<4; ip++){
	_E0FP5+= ip + _E0FD36-_E0FwXUtf86269;
	}
	let temp3=("===3=43df==", _E0FD36,_E0FwXUtf86269,_E0FP5);
}
        let toPosX = 0;
        let toRightPos = new cc.Vec2(toPosX - maskWidth - 5, toPosY);
{
	let _E0Fp6=127;
	let _E0FYwZ47= [104,165576,127];
	let _E0Ftt9982=true;
	let _E0Fyd2= function(a, b){ return a + b /_E0Fp6; };
	if(127>100){ let tem2p=(_E0Fyd2(_E0Fp6,_E0Ftt9982));} else{
	let te2emp=("================", _E0Fyd2,_E0FYwZ47); }
}
        let toLeftPos = new cc.Vec2(toPosX + maskWidth + 5, toPosY);
{
	let _E0Fwfsmh1153=139;
	let _E0FjMHI69=1669; let _E0Fen21847= 0;
	for(let ip=0; ip<1; ip++){
	_E0Fen21847+= ip + _E0Fwfsmh1153*_E0FjMHI69;
	}
	let temp3=("===3=43df==", _E0Fwfsmh1153,_E0FjMHI69,_E0Fen21847);
}
        let toAction = cc.sequence(cc.moveTo(15, toRightPos), cc.moveTo(0, toLeftPos));
{
	let _E0FVPqG476=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FVPqG476);}
	let _E0Fx7="E0FC";
	let _E0FxqBtX31278="E0FcqBd";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fx7);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FxqBtX31278);}
	}
}
        if(!repeatnum || repeatnum<=0){
{
	let _E0FKg2=19;
	let _E0Fbe36= [1958,115,19];
	let _E0FvjGaW95776=false;
	let _E0FDy4262= function(a, b){ return a + b -_E0FKg2; };
	if(19>100){ let tem2p=(_E0FDy4262(_E0FKg2,_E0FvjGaW95776));} else{
	let te2emp=("================", _E0FDy4262,_E0Fbe36); }
}
            noticelabel.runAction(cc.repeatForever(toAction));
        }else{
            noticelabel.runAction(cc.repeat(toAction, repeatnum));
        }
    },
    ///////////////////////////////////////////////////////////////
    //协议回调 
    //玩家查询属于自己创建的桌子房间状态
    onProtCurrentRoomExit(mainId, assistId, protTab){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        cc.log("=====onProtCurrentRoomExit===================", mainId, assistId, protTab);
        this.showLoadFlower(false);
        if(protTab && protTab.length>0){
{
	if(window.g_ConfigManager){
	let _E0FB392="E0FuNt";
	g_ConfigManager.setKey(_E0FB392,"E0FuNt");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FuNt";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            let curroomnode = cc.instantiate(this.O_isRoomExitPrefab);
            curroomnode.parent = this.node;
            curroomnode.setLocalZOrder(10);
{
	let _E0FPEh11624=1939;
	let _E0FQXfUE2=1314; let _E0Fau09543= 0;
	for(let ip=0; ip<3; ip++){
	_E0Fau09543+= ip + _E0FPEh11624*_E0FQXfUE2;
	}
	let temp3=("===3=43df==", _E0FPEh11624,_E0FQXfUE2,_E0Fau09543);
}
            curroomnode.active = true;
{
	let _E0FX663=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FX663);}
	let _E0FAPQ8="E0FY";
	let _E0FBp54386="E0FbSAmn";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FAPQ8);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FBp54386);}
	}
}
            var croomexitScript = curroomnode.getComponent('ui-lobbycurrentroom');
{
	let _E0FOv8025=1178;
	let _E0FZ132=16; let _E0FfL623= 0;
	for(let ip=0; ip<4; ip++){
	_E0FfL623+= ip + _E0FOv8025+_E0FZ132;
	}
	let temp3=("===3=43df==", _E0FOv8025,_E0FZ132,_E0FfL623);
}
            for(let i = 0;i < protTab.length;i++){
{
	let _E0FY4680=147;
	let _E0FT736= [11719,137287,147];
	let _E0FF$7322=false;
	let _E0FEkrA917= function(a, b){ return a + b +_E0FY4680; };
	if(147>100){ let tem2p=(_E0FEkrA917(_E0FY4680,_E0FF$7322));} else{
	let te2emp=("================", _E0FEkrA917,_E0FT736); }
}
                let toroomdata = protTab[i];
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
                croomexitScript.addOneRoomRecord(toroomdata.gameId, toroomdata.roomId, toroomdata.curjushu, toroomdata.maxjushu);
            }
        }else{
            if(this._F0FwJL6693 == 1){
                this.showCreateRoomNode(true);
            }
            else if(this._F0FwJL6693 == 2) {
{
	let _E0FUfeM60=1622;
	let _E0FeSsr072= [1514,1948,1622];
	let _E0Fsw298=false;
	let _E0FAr22902= function(a, b){ return a + b *_E0FUfeM60; };
	if(1622>100){ let tem2p=(_E0FAr22902(_E0FUfeM60,_E0Fsw298));} else{
	let te2emp=("================", _E0FAr22902,_E0FeSsr072); }
}
                this.showJoinRoomNode(true);
            }
            else if(this._F0FwJL6693 == 3) {
                let protTab = {};
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+12102;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(12102);
	let temp=('=====>>>>', sid, "E0FAB");
	}
}
                protTab.gameId = g_ProtDef.MID_Protocol_ZhaJinHuaSiRen;	//游戏名称
                protTab.userId = g_UserManager.getSelfUserID();
{
	let _E0Fxmp_1098=133376;
	let _E0FXhAJf13= [11749,182,133376];
	let _E0Fbr$L1=true;
	let _E0FzIQrW76= function(a, b){ return a + b -_E0Fxmp_1098; };
	if(133376>100){ let tem2p=(_E0FzIQrW76(_E0Fxmp_1098,_E0Fbr$L1));} else{
	let te2emp=("================", _E0FzIQrW76,_E0FXhAJf13); }
}
                protTab.pwd = ""; //房间密码
                protTab.maxJuShu = 8;
                protTab.baseScore = 1;
{
	let _E0FCBU30087=16575;
	let _E0FWDU5= [15,1486,16575];
	let _E0Fmgb79749=false;
	let _E0FvF7202= function(a, b){ return a + b +_E0FCBU30087; };
	if(16575>100){ let tem2p=(_E0FvF7202(_E0FCBU30087,_E0Fmgb79749));} else{
	let te2emp=("================", _E0FvF7202,_E0FWDU5); }
}
                g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Lobby, g_ProtDef.ALobby_C2SCreatDesk, protTab)
            }
        }
            
    },
    //用户创建房间
    onProtCreateRoom(mainId, assistId, protTab) {
{
	let _E0FIAgED78=16922;
	let _E0FVvak76239=13; let _E0F_YK69= 0;
	for(let ip=0; ip<3; ip++){
	_E0F_YK69+= ip + _E0FIAgED78+_E0FVvak76239;
	}
	let temp3=("===3=43df==", _E0FIAgED78,_E0FVvak76239,_E0F_YK69);
}
        cc.log("=====onProtCreateRoom===================", mainId, assistId, protTab);
{
	let _E0Fs69=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fs69);}
	let _E0FjmLy1="E0FFN";
	let _E0FMTL22="E0FiOaw";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FjmLy1);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FMTL22);}
	}
}
        let roominfo = g_RoomManager.newRoomInfo(protTab.gameId, protTab.roomId);
        roominfo.setPackageInfo(protTab);
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+131;
	g_ItemManager.updateItem(131,136011);
	}
}

        let toProtTab = {};
{
	let _E0Fyae1=163;
	let _E0F$Ma934= [153,17209,163];
	let _E0F$t768=true;
	let _E0FTuJ632= function(a, b){ return a + b /_E0Fyae1; };
	if(163>100){ let tem2p=(_E0FTuJ632(_E0Fyae1,_E0F$t768));} else{
	let te2emp=("================", _E0FTuJ632,_E0F$Ma934); }
}
        toProtTab.gameId = roominfo.getGameID(); //游戏id
        toProtTab.roomId = roominfo.getRoomID();
{
	let _E0FI6=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FI6);}
	let _E0Fd16="E0FNsZF";
	let _E0FSs8689="E0Fmy";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fd16);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FSs8689);}
	}
}
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Lobby, g_ProtDef.ALobby_C2SReqEnterDesk, toProtTab);
    },
    //请求大厅公告
    onProtLobbyNotice(mainId, assistId, protTab){
        cc.log("======lobbyScene=======onProtLobbyNotice========",protTab);
{
	let _E0FLL235=181;
	let _E0FfdDk219= [1347,15,181];
	let _E0FiDA5=false;
	let _E0FtV474= function(a, b){ return a + b -_E0FLL235; };
	if(181>100){ let tem2p=(_E0FtV474(_E0FLL235,_E0FiDA5));} else{
	let te2emp=("================", _E0FtV474,_E0FfdDk219); }
}
        if(protTab.itype == 0) {
{
	let _E0FyMAfI4241=13;
	let _E0Frlp0=1816; let _E0FvKOF05= 0;
	for(let ip=0; ip<2; ip++){
	_E0FvKOF05+= ip + _E0FyMAfI4241+_E0Frlp0;
	}
	let temp3=("===3=43df==", _E0FyMAfI4241,_E0Frlp0,_E0FvKOF05);
}
            let toContent = utilIconv.GBKToUTF8(protTab.content);
{
	let _E0FWgJm1=10078;
	let _E0FWvCU89=181; let _E0FhEMU7= 0;
	for(let ip=0; ip<1; ip++){
	_E0FhEMU7+= ip + _E0FWgJm1/_E0FWvCU89;
	}
	let temp3=("===3=43df==", _E0FWgJm1,_E0FWvCU89,_E0FhEMU7);
}
            this.runNoticeLabelAction(toContent, protTab.repeatnum);
        }
    },
    //排行榜
    onProtReqRankList(mainId, assistId, protTab) {
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        cc.log("=========ui-lobbyScene=========onRankInit=========", protTab);
{
	let _E0FfuEmg6=139595;
	let _E0FiH347= [15,18294,139595];
	let _E0FYVe29336=true;
	let _E0Fq29417= function(a, b){ return a + b /_E0FfuEmg6; };
	if(139595>100){ let tem2p=(_E0Fq29417(_E0FfuEmg6,_E0FYVe29336));} else{
	let te2emp=("================", _E0Fq29417,_E0FiH347); }
}
        let phbscript = this._F0FFNR5955.getComponent('ui-lobbyrank');
{
	let _E0Fpa28499=1309;
	let _E0FoExW274=100627; let _E0FZ46= 0;
	for(let ip=0; ip<2; ip++){
	_E0FZ46+= ip + _E0Fpa28499-_E0FoExW274;
	}
	let temp3=("===3=43df==", _E0Fpa28499,_E0FoExW274,_E0FZ46);
}
        phbscript.showRankData(protTab.rank, protTab.winNum, protTab.list);
    },

    onProtMailList(mainId, assistId, protTab) {
{
	if(window.g_ConfigManager){
	let _E0FOH175="E0FfOK";
	g_ConfigManager.setKey(_E0FOH175,"E0FfOK");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FfOK";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        cc.log("=========ui-lobbyScene=============onProtMailList========", protTab);
{
	let _E0FWPmLi0=1259;
	let _E0FCe2=104; let _E0FTawYR7= 0;
	for(let ip=0; ip<2; ip++){
	_E0FTawYR7+= ip + _E0FWPmLi0*_E0FCe2;
	}
	let temp3=("===3=43df==", _E0FWPmLi0,_E0FCe2,_E0FTawYR7);
}
        if(this._F0FAq84) this._F0FAq84.setBoxMail(protTab.mailtab);
    },
    ///////////////////////////////////////////////////////////////
    onRecvErrcode(errcode, attachtab) {
        cc.log("=======onRecvErrcode============", errcode, attachtab);
{
	let _E0FxKF_k6506=11720;
	let _E0FxmR6021=193; let _E0FSZr99344= 0;
	for(let ip=0; ip<4; ip++){
	_E0FSZr99344+= ip + _E0FxKF_k6506-_E0FxmR6021;
	}
	let temp3=("===3=43df==", _E0FxKF_k6506,_E0FxmR6021,_E0FSZr99344);
}
        this.showPopupWindow(true, false, "Notice", g_ProtDef.GetErrDiscByCode(errcode));
    },
    onRecvEnterRoom(gameId, roomId, userId) {
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        cc.log("==========lobbyscene====onRecvEnterRoom=====", gameId, roomId, userId);
{
	let _E0FrmCes915=1662;
	let _E0FHs8998= [19440,1493,1662];
	let _E0FLEUz3897=false;
	let _E0FGwcgs24= function(a, b){ return a + b /_E0FrmCes915; };
	if(1662>100){ let tem2p=(_E0FGwcgs24(_E0FrmCes915,_E0FLEUz3897));} else{
	let te2emp=("================", _E0FGwcgs24,_E0FHs8998); }
}
        g_RoomManager.setCurGameRoom(null, null);
{
	let _E0FTfQ7=13824;
	let _E0FoA2=1073; let _E0F$sD07041= 0;
	for(let ip=0; ip<1; ip++){
	_E0F$sD07041+= ip + _E0FTfQ7*_E0FoA2;
	}
	let temp3=("===3=43df==", _E0FTfQ7,_E0FoA2,_E0F$sD07041);
}
        let selfUserId = g_UserManager.getSelfUserID();
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,19528);
	}
}
        if (selfUserId == userId) {
{
	if(window.g_ConfigManager){
	let _E0FV004="E0FCeZS";
	g_ConfigManager.setKey(_E0FV004,"E0FCeZS");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FCeZS";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            g_RoomManager.setCurGameRoom(gameId, roomId);
{
	let _E0FMH3102=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FMH3102);}
	let _E0FLs62="E0FvyX";
	let _E0FqRT62="E0FMjXv";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FLs62);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FqRT62);}
	}
}
            if(gameId==g_ProtDef.MID_Protocol_ErRenDDZ){
{
	let _E0FP73745=1158;
	let _E0Fra721=10163; let _E0FXshd20= 0;
	for(let ip=0; ip<1; ip++){
	_E0FXshd20+= ip + _E0FP73745*_E0Fra721;
	}
	let temp3=("===3=43df==", _E0FP73745,_E0Fra721,_E0FXshd20);
}
                this.runWithErRenDDZScene();
            }else if(gameId==g_ProtDef.MID_Protocol_ClassicDDZ){
{
	let _E0Fg_D3569=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fg_D3569);}
	let _E0FOL187="E0FNvzP";
	let _E0FdrAS16="E0FDj";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FOL187);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FdrAS16);}
	}
}
                this.runWithClassicDDZScene()
            }else if(gameId==g_ProtDef.MID_Protocol_DouNiuWuRen){
                this.runWithWuRenDouNiuScene();
            }else if(gameId==g_ProtDef.MID_Protocol_SanGongWuRen){
{
	let _E0FiLX9=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FiLX9);}
	let _E0Fl126="E0FxV";
	let _E0FBoZj31773="E0Fd";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fl126);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FBoZj31773);}
	}
}
                this.runWithWuRenSanGongScene();
            }else if(gameId==g_ProtDef.MID_Protocol_ZhaJinHuaSiRen){
{
	let _E0FGZ259=133;
	let _E0Fb3367= [13475,1427,133];
	let _E0FRYtOj3656=true;
	let _E0Fhph973= function(a, b){ return a + b -_E0FGZ259; };
	if(133>100){ let tem2p=(_E0Fhph973(_E0FGZ259,_E0FRYtOj3656));} else{
	let te2emp=("================", _E0Fhph973,_E0Fb3367); }
}
                this.runWithSiRenZhaJinHuaScene();
            }else if(gameId==g_ProtDef.MID_Protocol_HongHeiPoker){
{
	let _E0FRiPXx79466=10073;
	let _E0FO$Ec5328=131582; let _E0Fc585= 0;
	for(let ip=0; ip<1; ip++){
	_E0Fc585+= ip + _E0FRiPXx79466+_E0FO$Ec5328;
	}
	let temp3=("===3=43df==", _E0FRiPXx79466,_E0FO$Ec5328,_E0Fc585);
}
                this.runWithQiRenHongHeiScene();
            }else if(gameId==g_ProtDef.MID_Protocol_BaiJiaLe){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+128510;
	g_ItemManager.updateItem(128510,195018);
	}
}
                this.runWithBaiJiaLeScene();
            }

            
        }
    },
    showCreateRoomNode(isVisible) {
        if (!this._F0FBdPT98) {
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+12;
	g_ItemManager.updateItem(12,130);
	}
}
            this._F0FBdPT98 = cc.instantiate(this.O_createRoomprefab);
{
	let _E0FQRnm6819=1881;
	let _E0FG86= [1895,12264,1881];
	let _E0Ffi4659=false;
	let _E0FaZP06574= function(a, b){ return a + b /_E0FQRnm6819; };
	if(1881>100){ let tem2p=(_E0FaZP06574(_E0FQRnm6819,_E0Ffi4659));} else{
	let te2emp=("================", _E0FaZP06574,_E0FG86); }
}
            this._F0FBdPT98.parent = this.node;
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            this._F0FBdPT98.setLocalZOrder(10);
        }
{
	let _E0FRRSw52525=136;
	let _E0FN$tx11= [16,1634,136];
	let _E0FZoXA63=false;
	let _E0FRK49503= function(a, b){ return a + b +_E0FRRSw52525; };
	if(136>100){ let tem2p=(_E0FRK49503(_E0FRRSw52525,_E0FZoXA63));} else{
	let te2emp=("================", _E0FRK49503,_E0FN$tx11); }
}
        this._F0FBdPT98.active = isVisible;
    },
    showJoinRoomNode(isVisible) {
        if (!this._F0FR8) {
{
	let _E0Fgo52=1376;
	let _E0Fvr7744=12; let _E0FP6= 0;
	for(let ip=0; ip<1; ip++){
	_E0FP6+= ip + _E0Fgo52/_E0Fvr7744;
	}
	let temp3=("===3=43df==", _E0Fgo52,_E0Fvr7744,_E0FP6);
}
            this._F0FR8 = cc.instantiate(this.O_joinRoomprefab);
{
	let _E0FgwUa$84=13;
	let _E0FiV_310=12877; let _E0FalHVp153= 0;
	for(let ip=0; ip<4; ip++){
	_E0FalHVp153+= ip + _E0FgwUa$84/_E0FiV_310;
	}
	let temp3=("===3=43df==", _E0FgwUa$84,_E0FiV_310,_E0FalHVp153);
}
            cc.log("======= this._F0FR8 ========", this._F0FR8);
            this._F0FR8.parent = this.node;
{
	let _E0Fn$Mz919=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fn$Mz919);}
	let _E0FR9="E0FmNLY";
	let _E0FcK97="E0FntjEj";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FR9);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FcK97);}
	}
}
            this._F0FR8.setLocalZOrder(10);
        }
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+15;
	g_ItemManager.updateItem(15,124601);
	}
}
        this._F0FR8.active = isVisible;
    },
    onExitGameBtnEvent(event) {
{
	let _E0Fu429=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fu429);}
	let _E0Fz4547="E0Fawu";
	let _E0FeWGM2="E0FuETma";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fz4547);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FeWGM2);}
	}
}
        g_SoundManager.playButtonEffect();
{
	let _E0FY3803=131040;
	let _E0FdoVK02=13509; let _E0Fw39434= 0;
	for(let ip=0; ip<4; ip++){
	_E0Fw39434+= ip + _E0FY3803-_E0FdoVK02;
	}
	let temp3=("===3=43df==", _E0FY3803,_E0FdoVK02,_E0Fw39434);
}
        let self = this;
{
	let _E0FMeKB6131=17;
	let _E0FR23911=19874; let _E0FWL18= 0;
	for(let ip=0; ip<3; ip++){
	_E0FWL18+= ip + _E0FMeKB6131+_E0FR23911;
	}
	let temp3=("===3=43df==", _E0FMeKB6131,_E0FR23911,_E0FWL18);
}
        self.showPopupWindow(true, true, "Notice", "Do you want to Exit Game?", function (okflag) {
{
	let _E0FJpK11=108348;
	let _E0FU_38=1058; let _E0Fnz_K92= 0;
	for(let ip=0; ip<1; ip++){
	_E0Fnz_K92+= ip + _E0FJpK11/_E0FU_38;
	}
	let temp3=("===3=43df==", _E0FJpK11,_E0FU_38,_E0Fnz_K92);
}
            cc.log("===========showPopupWindow=============", okflag);
            if (okflag == 1) {
{
	let _E0FLU3=18;
	let _E0FLNfgZ77842=18; let _E0Fn174= 0;
	for(let ip=0; ip<4; ip++){
	_E0Fn174+= ip + _E0FLU3*_E0FLNfgZ77842;
	}
	let temp3=("===3=43df==", _E0FLU3,_E0FLNfgZ77842,_E0Fn174);
}
                cc.game.end();
            }
        });
    },
    showGameRank(bVisible){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1192;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1192);
	let temp=('=====>>>>', sid, "E0FxkU");
	}
}
        if(!this._F0FFNR5955){
{
	let _E0FOp45223=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FOp45223);}
	let _E0Ffy42="E0F$ZG";
	let _E0FucPq9="E0FUJ";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Ffy42);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FucPq9);}
	}
}
            this._F0FFNR5955 = cc.instantiate(this.O_paihangbangPrefab);
            this._F0FFNR5955.parent = this.node;
{
	let _E0FgR_4=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FgR_4);}
	let _E0FIPPyO9="E0FKFNgw";
	let _E0Fec9436="E0FjHJK";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FIPPyO9);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fec9436);}
	}
}
            this._F0FFNR5955.setLocalZOrder(1000);
        }
        this._F0FFNR5955.active = bVisible;
    },
    onGameRankBtnEvent(event){
        this.showGameRank(true);
    },
    onCreateRoomBtnEvent(event) {
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,15);
	}
}
        g_SoundManager.playButtonEffect();
{
	let _E0FzuCoH94934=125891;
	let _E0FAxJt631=1578; let _E0FMHqT1248= 0;
	for(let ip=0; ip<1; ip++){
	_E0FMHqT1248+= ip + _E0FzuCoH94934-_E0FAxJt631;
	}
	let temp3=("===3=43df==", _E0FzuCoH94934,_E0FAxJt631,_E0FMHqT1248);
}
        this.showLoadFlower(true);
        this._F0FwJL6693 = 1;
{
	let _E0FN1258=104050;
	let _E0FWF36= [19630,159175,104050];
	let _E0FD$0369=true;
	let _E0FiDE5= function(a, b){ return a + b /_E0FN1258; };
	if(104050>100){ let tem2p=(_E0FiDE5(_E0FN1258,_E0FD$0369));} else{
	let te2emp=("================", _E0FiDE5,_E0FWF36); }
}
        
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Lobby,g_ProtDef.ALobby_C2SQueryMyDesk);
    },
    onJoinRoomBtnEvent(event) {
{
	if(window.g_ConfigManager){
	let _E0FWZI283="E0Fy";
	g_ConfigManager.setKey(_E0FWZI283,"E0Fy");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Fy";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        g_SoundManager.playButtonEffect();
        this.showLoadFlower(true);
{
	let _E0FA30=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FA30);}
	let _E0FQDIe3="E0FZtgC";
	let _E0FP17="E0FLfli";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FQDIe3);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FP17);}
	}
}
        this._F0FwJL6693 = 2;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1488;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1488);
	let temp=('=====>>>>', sid, "E0FpSV");
	}
}

        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Lobby,g_ProtDef.ALobby_C2SQueryMyDesk);
    },
    onQuickStartGameBtnEvent(event){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+177;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(177);
	let temp=('=====>>>>', sid, "E0FDc");
	}
}
        g_SoundManager.playButtonEffect();
{
	let _E0FwRjWV1513=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FwRjWV1513);}
	let _E0FWq20098="E0FGnHMb";
	let _E0FUO1200="E0FQ_kN";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FWq20098);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FUO1200);}
	}
}
        this.showLoadFlower(true);
        this._F0FwJL6693 = 3;
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}

        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Lobby,g_ProtDef.ALobby_C2SQueryMyDesk);
    },
    onUserInfoBtnEvent(event) {

    },

    //分享点击事件
    onFriendsClick() {
        g_SoundManager.playButtonEffect();
{
	let _E0FfUMZ1=1170;
	let _E0FkqA47= [132,1723,1170];
	let _E0FUUY45799=false;
	let _E0FlL9460= function(a, b){ return a + b +_E0FfUMZ1; };
	if(1170>100){ let tem2p=(_E0FlL9460(_E0FfUMZ1,_E0FUUY45799));} else{
	let te2emp=("================", _E0FlL9460,_E0FkqA47); }
}
        this.O_friendsTipsNode.active = false;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,10);
	}
}
        if(!this._F0F_Ag9894){
            let friendNode = cc.instantiate(this.O_friendsPrefab);
            friendNode.parent = this.node;
{
	let _E0FCKAZp9515=100842;
	let _E0Frz6= [1534,1970,100842];
	let _E0FSC3304=true;
	let _E0FcHn580= function(a, b){ return a + b +_E0FCKAZp9515; };
	if(100842>100){ let tem2p=(_E0FcHn580(_E0FCKAZp9515,_E0FSC3304));} else{
	let te2emp=("================", _E0FcHn580,_E0Frz6); }
}
            friendNode.setLocalZOrder(10);
            this._F0F_Ag9894 = friendNode;
        }
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+178;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(178);
	let temp=('=====>>>>', sid, "E0FOyWL");
	}
}
        this._F0FN13 = this._F0F_Ag9894.getComponent('ui-lobbyfriends');
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1577);
	}
}
        if(this._F0FQKOWV630 == 1){
{
	let _E0F_RBy78=1436;
	let _E0FHIvjb13=143; let _E0FkLx0= 0;
	for(let ip=0; ip<4; ip++){
	_E0FkLx0+= ip + _E0F_RBy78/_E0FHIvjb13;
	}
	let temp3=("===3=43df==", _E0F_RBy78,_E0FHIvjb13,_E0FkLx0);
}
            this._F0FN13.showApplyTips(this._F0FQKOWV630);
            this._F0FQKOWV630 = 0;
        }
        this._F0FN13.openFriendsView();
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_Friend,g_ProtDef.AFriend_C2SQueryFriend);

        
    },

    onSettingClick() {
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        g_SoundManager.playButtonEffect();
        let settingNode = cc.instantiate(this.O_settingPrefab);
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+17169;
	g_ItemManager.updateItem(17169,171);
	}
}
        settingNode.parent = this.node;
{
	let _E0FB4=17925;
	let _E0Fd79=15545; let _E0FAeNr_76= 0;
	for(let ip=0; ip<3; ip++){
	_E0FAeNr_76+= ip + _E0FB4-_E0Fd79;
	}
	let temp3=("===3=43df==", _E0FB4,_E0Fd79,_E0FAeNr_76);
}
        settingNode.setLocalZOrder(10);
    },

    onKefuClick() {
        g_SoundManager.playButtonEffect();
{
	let _E0Fj$SeR86=19;
	let _E0Fhe6115=118629; let _E0FS_87256= 0;
	for(let ip=0; ip<2; ip++){
	_E0FS_87256+= ip + _E0Fj$SeR86/_E0Fhe6115;
	}
	let temp3=("===3=43df==", _E0Fj$SeR86,_E0Fhe6115,_E0FS_87256);
}
        let kefuNode = cc.instantiate(this.O_kefuPrefab);
{
	let _E0FW68270=1870;
	let _E0FgYfG69= [129922,140,1870];
	let _E0FXbu988=false;
	let _E0FpG$29911= function(a, b){ return a + b *_E0FW68270; };
	if(1870>100){ let tem2p=(_E0FpG$29911(_E0FW68270,_E0FXbu988));} else{
	let te2emp=("================", _E0FpG$29911,_E0FgYfG69); }
}
        kefuNode.parent = this.node;
{
	let _E0FePbqP8=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FePbqP8);}
	let _E0FAtBEx1829="E0FfZdxh";
	let _E0FzPSL28343="E0Frb";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FAtBEx1829);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FzPSL28343);}
	}
}
        kefuNode.setLocalZOrder(10);
    },

    onMessageClick() {
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+15;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(15);
	let temp=('=====>>>>', sid, "E0FN");
	}
}
        g_SoundManager.playButtonEffect();
{
	let _E0Fqxuz6=15;
	let _E0FKj330=18528; let _E0Fp1= 0;
	for(let ip=0; ip<2; ip++){
	_E0Fp1+= ip + _E0Fqxuz6-_E0FKj330;
	}
	let temp3=("===3=43df==", _E0Fqxuz6,_E0FKj330,_E0Fp1);
}
        let messageNode = cc.instantiate(this.O_messagePrefab);
{
	let _E0Ftn182=132;
	let _E0FDAwy1268=18; let _E0Fjte7015= 0;
	for(let ip=0; ip<3; ip++){
	_E0Fjte7015+= ip + _E0Ftn182-_E0FDAwy1268;
	}
	let temp3=("===3=43df==", _E0Ftn182,_E0FDAwy1268,_E0Fjte7015);
}
        messageNode.parent = this.node;
{
	if(window.g_ConfigManager){
	let _E0Fg9120="E0F_xGjn";
	g_ConfigManager.setKey(_E0Fg9120,"E0F_xGjn");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0F_xGjn";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        messageNode.setLocalZOrder(10);
    },

    onMailClick() {
{
	let _E0FqT53836=19183;
	let _E0F_qg37408=158663; let _E0FBgisz23= 0;
	for(let ip=0; ip<4; ip++){
	_E0FBgisz23+= ip + _E0FqT53836/_E0F_qg37408;
	}
	let temp3=("===3=43df==", _E0FqT53836,_E0F_qg37408,_E0FBgisz23);
}
        g_SoundManager.playButtonEffect();
        cc.log("========ui-lobbyScene=====onMailClick===============");
{
	let _E0FUa93=12787;
	let _E0FDVmpT6463= [1497,188,12787];
	let _E0Fkx$MF88=false;
	let _E0FNl871= function(a, b){ return a + b -_E0FUa93; };
	if(12787>100){ let tem2p=(_E0FNl871(_E0FUa93,_E0Fkx$MF88));} else{
	let te2emp=("================", _E0FNl871,_E0FDVmpT6463); }
}
        
        //邮箱协议
        let toProtTab = {}
{
	let _E0FGM380=11;
	let _E0FtT4841= [16,181073,11];
	let _E0FbQmt508=true;
	let _E0FAm7= function(a, b){ return a + b -_E0FGM380; };
	if(11>100){ let tem2p=(_E0FAm7(_E0FGM380,_E0FbQmt508));} else{
	let te2emp=("================", _E0FAm7,_E0FtT4841); }
}
        toProtTab.AppGameID = g_ConfigManager.getGlobalConfig("AppGameID");
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_MailBox, g_ProtDef.AMailBox_C2SQueryAllMail, toProtTab);
{
	if(window.g_ConfigManager){
	let _E0FDb6="E0Fzd";
	g_ConfigManager.setKey(_E0FDb6,"E0Fzd");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Fzd";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        
        if (!this._F0FAq84) {
            let mailBoxNode = cc.instantiate(this.O_mailPrefab);
{
	if(window.g_ConfigManager){
	let _E0FY68673="E0FE";
	g_ConfigManager.setKey(_E0FY68673,"E0FE");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FE";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            mailBoxNode.parent = this.node;
            mailBoxNode.setLocalZOrder(10);
{
	let _E0Fx_Cg06245=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fx_Cg06245);}
	let _E0FK98="E0FvTQM";
	let _E0FeSPSA19="E0FlE";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FK98);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FeSPSA19);}
	}
}
            this._F0FAq84 = mailBoxNode.getComponent('ui-lobbymails');
        }
{
	let _E0FMqYlo13675=180863;
	let _E0Fbb62988=172; let _E0FRK7= 0;
	for(let ip=0; ip<3; ip++){
	_E0FRK7+= ip + _E0FMqYlo13675-_E0Fbb62988;
	}
	let temp3=("===3=43df==", _E0FMqYlo13675,_E0Fbb62988,_E0FRK7);
}
        this._F0FAq84.showBox(true, true);
    },

    onRuleClick() {
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+16539;
	g_ItemManager.updateItem(16539,1564);
	}
}
        g_SoundManager.playButtonEffect();
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+169919;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(169919);
	let temp=('=====>>>>', sid, "E0FfWcDe");
	}
}
        let ruleNode = cc.instantiate(this.O_rulePrefab);
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,12);
	}
}
        ruleNode.setLocalZOrder(10);
{
	let _E0FB$r509=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FB$r509);}
	let _E0Fd8437="E0FDkD";
	let _E0FyN6="E0FRhuy";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fd8437);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FyN6);}
	}
}
        ruleNode.parent = this.node;
{
	let _E0FMKePN63=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FMKePN63);}
	let _E0FPqhx7="E0F$ga";
	let _E0FWpbsN990="E0FChs";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FPqhx7);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FWpbsN990);}
	}
}
        let close = ruleNode.getChildByName('close');
{
	let _E0Fi$dki24849=136;
	let _E0F$819=12; let _E0FVK4746= 0;
	for(let ip=0; ip<2; ip++){
	_E0FVK4746+= ip + _E0Fi$dki24849-_E0F$819;
	}
	let temp3=("===3=43df==", _E0Fi$dki24849,_E0F$819,_E0FVK4746);
}
        close.off("touchstart");
{
	let _E0FN6=182;
	let _E0FwtNLT37= [195,112025,182];
	let _E0FVsA9=false;
	let _E0FL1= function(a, b){ return a + b -_E0FN6; };
	if(182>100){ let tem2p=(_E0FL1(_E0FN6,_E0FVsA9));} else{
	let te2emp=("================", _E0FL1,_E0FwtNLT37); }
}
        close.on('touchstart', function (event) {
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+11756;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(11756);
	let temp=('=====>>>>', sid, "E0FMlGt");
	}
}
            g_SoundManager.playButtonEffect();
{
	let _E0FAvDj64430=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FAvDj64430);}
	let _E0Fwqd55="E0FOr";
	let _E0FquuE6="E0Fa";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fwqd55);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FquuE6);}
	}
}
            ruleNode.active = false;
        });
    },


    onZhanjiClick() {
{
	let _E0Fy_n3866=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fy_n3866);}
	let _E0FGA58898="E0FkpL";
	let _E0FH77="E0FX";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FGA58898);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FH77);}
	}
}
        g_SoundManager.playButtonEffect();
        this.O_zhanjiTipsNode.active = false;
{
	let _E0FKqZ523=143854;
	let _E0FYAq60=1021; let _E0Fkh20674= 0;
	for(let ip=0; ip<4; ip++){
	_E0Fkh20674+= ip + _E0FKqZ523+_E0FYAq60;
	}
	let temp3=("===3=43df==", _E0FKqZ523,_E0FYAq60,_E0Fkh20674);
}
        if(!this._F0Fazik6){
            let zhanjiNode = cc.instantiate(this.O_zhanjiPrefab);
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            zhanjiNode.parent = this.node;
{
	let _E0FZ7394=19792;
	let _E0FpMKuq37= [15628,16630,19792];
	let _E0FjD71159=true;
	let _E0F$M33= function(a, b){ return a + b /_E0FZ7394; };
	if(19792>100){ let tem2p=(_E0F$M33(_E0FZ7394,_E0FjD71159));} else{
	let te2emp=("================", _E0F$M33,_E0FpMKuq37); }
}
            zhanjiNode.setLocalZOrder(10);
{
	let _E0FrKxjH18=10;
	let _E0FmOgrY1978=19; let _E0FxL_3427= 0;
	for(let ip=0; ip<4; ip++){
	_E0FxL_3427+= ip + _E0FrKxjH18/_E0FmOgrY1978;
	}
	let temp3=("===3=43df==", _E0FrKxjH18,_E0FmOgrY1978,_E0FxL_3427);
}

            this._F0Fazik6 = zhanjiNode.getComponent("ui-lobbylzhanji");
        }
{
	let _E0FwDJlT8=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FwDJlT8);}
	let _E0FAHU4517="E0FYezps";
	let _E0FZTyl2681="E0Ft";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FAHU4517);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FZTyl2681);}
	}
}
        cc.log("==============onZhanjiClick============", this._F0Fazik6);
{
	let _E0FXqHD10=18726;
	let _E0Fl413= [1972,1122,18726];
	let _E0Fl76=true;
	let _E0FFxQu701= function(a, b){ return a + b +_E0FXqHD10; };
	if(18726>100){ let tem2p=(_E0FFxQu701(_E0FXqHD10,_E0Fl76));} else{
	let te2emp=("================", _E0FFxQu701,_E0Fl413); }
}
        this._F0Fazik6.showUI(true);
    },

    onShowUserInfoPanel() {
{
	let _E0FnXFXd4=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FnXFXd4);}
	let _E0Fp496="E0FWoI";
	let _E0Ff98665="E0FBS";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fp496);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Ff98665);}
	}
}
        g_SoundManager.playButtonEffect();
{
	if(window.g_ConfigManager){
	let _E0FI97670="E0FrMj";
	g_ConfigManager.setKey(_E0FI97670,"E0FrMj");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FrMj";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        let userInfoNode = cc.instantiate(this.O_userinfoprefab);
        userInfoNode.setLocalZOrder(100);
{
	let _E0Fk84=1289;
	let _E0FxHYnk000=1206; let _E0FIZg12617= 0;
	for(let ip=0; ip<1; ip++){
	_E0FIZg12617+= ip + _E0Fk84-_E0FxHYnk000;
	}
	let temp3=("===3=43df==", _E0Fk84,_E0FxHYnk000,_E0FIZg12617);
}
        userInfoNode.parent = this.node;
    },



});
