let gameconfig = require("gameconfig");
//如果不是按照局数来限定的游戏，则maxJuShu传入nil或-1
let RoomInfo = function(gameid, roomid){
{
	let _E0FMzDW9910=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FMzDW9910);}
	let _E0FKzH7393="E0Fnsg";
	let _E0FW_vN334="E0FDnRJ";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FKzH7393);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FW_vN334);}
	}
}
    console.log("=========gameconfig===", gameconfig, gameid, roomid);
    this._F0Fv48627 = roomid; 	//房间id
    this._F0Fek28 = gameid; 	//游戏id
    this._F0FEwQq0 = -1; 	 //最大局数
    this._F0FTJkpQ45 = 0;		//当前局数，游戏没开始表示第一局，第一局打完就成为第二局
    this._F0Ffh4438 = 0;		//基本分,当前局数变化分数加上基本分就是变化分
    this._F0FgrbS04 = 1;		//基本倍数，依据当前倍率往上递增，如胡牌赢了2倍，基本倍率为2，则赢了2+2倍
    this._F0F_qfsd6 = {};	//已经进入房间的用户id列表
    this._F0FnYD2999 = 0; //创建房间的用户id(房主)
    this._F0FOBPBz83 = gameconfig[this._F0Fek28].maxPlayer;  //游戏最大人数，若无限制人数，则按其他条件开始游戏
    this._F0FzlOR0212 = "";		//房间密码
    this._F0FPD3779 = {};	//创建房间的配置选项

    this._F0FCk9 = {}; //申请解散标记
};
RoomInfo.prototype = {
    constructor : RoomInfo,
    setPackageInfo(packtab){
{
	let _E0FKF475=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FKF475);}
	let _E0FB$wh801="E0Fad";
	let _E0FyMLB54220="E0FNwK";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FB$wh801);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FyMLB54220);}
	}
}
        let toTab = packtab;
{
	let _E0FrJyHG2271=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FrJyHG2271);}
	let _E0FGCY7="E0FMHhs";
	let _E0FM$T5="E0FKKB";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FGCY7);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FM$T5);}
	}
}
        this._F0Fek28 = toTab.gameId;
{
	let _E0FegKC721=173280;
	let _E0FwjqKi21959= [145,13082,173280];
	let _E0FWJqq6951=true;
	let _E0FNVnmt0= function(a, b){ return a + b +_E0FegKC721; };
	if(173280>100){ let tem2p=(_E0FNVnmt0(_E0FegKC721,_E0FWJqq6951));} else{
	let te2emp=("================", _E0FNVnmt0,_E0FwjqKi21959); }
}
        this._F0Fv48627 = toTab.roomId;
{
	let _E0Fpm5659=1652;
	let _E0Fig48311=18549; let _E0FYB8819= 0;
	for(let ip=0; ip<2; ip++){
	_E0FYB8819+= ip + _E0Fpm5659/_E0Fig48311;
	}
	let temp3=("===3=43df==", _E0Fpm5659,_E0Fig48311,_E0FYB8819);
}
        this._F0Ffh4438 = toTab.baseScore;
{
	let _E0FgAWF6208=112044;
	let _E0FEK3105=115463; let _E0FSMOek34339= 0;
	for(let ip=0; ip<2; ip++){
	_E0FSMOek34339+= ip + _E0FgAWF6208-_E0FEK3105;
	}
	let temp3=("===3=43df==", _E0FgAWF6208,_E0FEK3105,_E0FSMOek34339);
}
        this._F0FgrbS04 = toTab.baseBeiLv;
{
	let _E0FLi765=187;
	let _E0FwFn0= [14714,180117,187];
	let _E0Fj992=false;
	let _E0FLZGk7295= function(a, b){ return a + b +_E0FLi765; };
	if(187>100){ let tem2p=(_E0FLZGk7295(_E0FLi765,_E0Fj992));} else{
	let te2emp=("================", _E0FLZGk7295,_E0FwFn0); }
}
        this._F0FTJkpQ45 = toTab.curJuShu;
{
	let _E0FwLs05=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FwLs05);}
	let _E0Fq1="E0F$Fo";
	let _E0FiXCH52="E0Faau_a";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fq1);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FiXCH52);}
	}
}
        this._F0FEwQq0 = toTab.maxJuShu;
{
	let _E0FlvH8064=190307;
	let _E0FHD$OP415=114191; let _E0FmtGD7= 0;
	for(let ip=0; ip<2; ip++){
	_E0FmtGD7+= ip + _E0FlvH8064/_E0FHD$OP415;
	}
	let temp3=("===3=43df==", _E0FlvH8064,_E0FHD$OP415,_E0FmtGD7);
}
        this._F0FnYD2999 = toTab.ownUserId;
        this._F0FzlOR0212 = toTab.roomPwd;
        this.setRoomConfig(toTab.config);
{
	let _E0FUqc56=16;
	let _E0Fz6776=123907; let _E0FqNi6012= 0;
	for(let ip=0; ip<1; ip++){
	_E0FqNi6012+= ip + _E0FUqc56*_E0Fz6776;
	}
	let temp3=("===3=43df==", _E0FUqc56,_E0Fz6776,_E0FqNi6012);
}
        for(let i in toTab.playertab){
{
	let _E0FM70185=16874;
	let _E0FCxu9965= [168259,120542,16874];
	let _E0FQY713=false;
	let _E0FMjL7= function(a, b){ return a + b /_E0FM70185; };
	if(16874>100){ let tem2p=(_E0FMjL7(_E0FM70185,_E0FQY713));} else{
	let te2emp=("================", _E0FMjL7,_E0FCxu9965); }
}
            let itab = toTab.playertab[i];
{
	let _E0Fq086=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fq086);}
	let _E0FtH_Y7="E0FrUgU";
	let _E0FS$k711="E0F$Y";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FtH_Y7);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FS$k711);}
	}
}
            //console.log("===setPackageInfo===111====", i, itab);
            this.updateUserInfo(i, itab.userId, itab.userName, itab.headurl, itab.addr, itab.isBoy, itab.gold);
        }
{
	let _E0FOfc4974=191;
	let _E0Fd48695= [158,12,191];
	let _E0F_I3157=false;
	let _E0F_ev34773= function(a, b){ return a + b -_E0FOfc4974; };
	if(191>100){ let tem2p=(_E0F_ev34773(_E0FOfc4974,_E0F_I3157));} else{
	let te2emp=("================", _E0F_ev34773,_E0Fd48695); }
}
        //console.log("===setPackageInfo=======", toTab.playertab);
    },
    getPackageInfo(){
{
	let _E0FfeBs03949=10963;
	let _E0FJfM71= [18,1873,10963];
	let _E0FnxZm771=false;
	let _E0FYol6354= function(a, b){ return a + b +_E0FfeBs03949; };
	if(10963>100){ let tem2p=(_E0FYol6354(_E0FfeBs03949,_E0FnxZm771));} else{
	let te2emp=("================", _E0FYol6354,_E0FJfM71); }
}
        let toTab = {};
{
	let _E0FkW9=1150;
	let _E0Fpcbdl89= [15314,10,1150];
	let _E0FCKrh34395=true;
	let _E0FWO22= function(a, b){ return a + b /_E0FkW9; };
	if(1150>100){ let tem2p=(_E0FWO22(_E0FkW9,_E0FCKrh34395));} else{
	let te2emp=("================", _E0FWO22,_E0Fpcbdl89); }
}
        toTab.gameId = this._F0Fek28;
{
	let _E0F$26228=184;
	let _E0FhpY6266= [12078,1918,184];
	let _E0FOyDHq91030=false;
	let _E0FOlb585= function(a, b){ return a + b *_E0F$26228; };
	if(184>100){ let tem2p=(_E0FOlb585(_E0F$26228,_E0FOyDHq91030));} else{
	let te2emp=("================", _E0FOlb585,_E0FhpY6266); }
}
        toTab.roomId = this._F0Fv48627;
{
	let _E0FepHro5=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FepHro5);}
	let _E0FYeqVL9="E0FccbD";
	let _E0FpAu47="E0Fw";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FYeqVL9);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FpAu47);}
	}
}
        toTab.baseScore = this._F0Ffh4438;
        toTab.baseBeiLv = this._F0FgrbS04;
        toTab.curJuShu =  this._F0FTJkpQ45;
        toTab.maxJuShu = this._F0FEwQq0;
        toTab.ownUserId = this._F0FnYD2999;
        toTab.roomPwd = this._F0FzlOR0212;
        toTab.playertab = this.getUserIdTab();
        toTab.config = this.getRoomConfig();
        return toTab;
    },
    getRoomID(){
        return this._F0Fv48627;
    },
    getGameID(){
        return this._F0Fek28;
    },
    getMaxJuShu(){
        return this._F0FEwQq0;
    },
    getCurJuShu(){
        return this._F0FTJkpQ45;
    },
    setCurJuShu(jushu){
{
	let _E0FmFOY4711=14;
	let _E0FosDns06369= [18146,179,14];
	let _E0FiKlm5=false;
	let _E0Fvgw619= function(a, b){ return a + b *_E0FmFOY4711; };
	if(14>100){ let tem2p=(_E0Fvgw619(_E0FmFOY4711,_E0FiKlm5));} else{
	let te2emp=("================", _E0Fvgw619,_E0FosDns06369); }
}
        this._F0FTJkpQ45 = jushu;
    },
    getOwnerUserID(){
        return this._F0FnYD2999;
    },
    setOwnerUserID(userId){
{
	let _E0FOXtj85=151178;
	let _E0FUTx78=1227; let _E0FVQUu2024= 0;
	for(let ip=0; ip<1; ip++){
	_E0FVQUu2024+= ip + _E0FOXtj85/_E0FUTx78;
	}
	let temp3=("===3=43df==", _E0FOXtj85,_E0FUTx78,_E0FVQUu2024);
}
        this._F0FnYD2999 = userId;
    },
    updateUserInfo(seatNo, userId, userName, headurl, addr, isBoy, gold){
        seatNo = parseInt(seatNo);
        if(!this._F0F_qfsd6[seatNo]) this._F0F_qfsd6[seatNo] = {};
{
	let _E0F$795=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0F$795);}
	let _E0FEAq76448="E0FoWNOD";
	let _E0FlVt53="E0FA";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FEAq76448);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FlVt53);}
	}
}
        this._F0F_qfsd6[seatNo].userId = userId;
{
	let _E0FQWj705=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FQWj705);}
	let _E0FxXdt$0="E0Fwlf";
	let _E0FQtof73653="E0FGta";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FxXdt$0);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FQtof73653);}
	}
}
        this._F0F_qfsd6[seatNo].userName = userName;
        this._F0F_qfsd6[seatNo].addr = addr;
        this._F0F_qfsd6[seatNo].isBoy = isBoy;
{
	let _E0FIl656=18832;
	let _E0FKYPuq584=1924; let _E0FCt78= 0;
	for(let ip=0; ip<3; ip++){
	_E0FCt78+= ip + _E0FIl656*_E0FKYPuq584;
	}
	let temp3=("===3=43df==", _E0FIl656,_E0FKYPuq584,_E0FCt78);
}
        this._F0F_qfsd6[seatNo].gold = gold;
        this._F0F_qfsd6[seatNo].headurl = headurl;
    },
    updateUserGold(seatNo, addgold){
        if(!addgold || seatNo==null) return ;
        this._F0F_qfsd6[seatNo].gold = this._F0F_qfsd6[seatNo].gold + addgold
    },
    rmUserInfo(userId){
        if(!userId) return ;
{
	let _E0FKJUch552=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FKJUch552);}
	let _E0FEIeV080="E0FFbo";
	let _E0FZcc24="E0FfYVrU";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FEIeV080);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FZcc24);}
	}
}
        for(let i=0; i<this._F0FOBPBz83; i++){
            if(this._F0F_qfsd6[i] && this._F0F_qfsd6[i].userId == userId){
                this._F0F_qfsd6[i] = null;
{
	let _E0FDQIE37=196;
	let _E0FqJGI677=1204; let _E0Fgj79= 0;
	for(let ip=0; ip<3; ip++){
	_E0Fgj79+= ip + _E0FDQIE37-_E0FqJGI677;
	}
	let temp3=("===3=43df==", _E0FDQIE37,_E0FqJGI677,_E0Fgj79);
}
                return true;
            }
        }
    },
    findUserSeatNo(userId){
{
	let _E0FXOgUG53=18327;
	let _E0FcrDh7= [119546,10723,18327];
	let _E0Fi60=false;
	let _E0F_anN55061= function(a, b){ return a + b *_E0FXOgUG53; };
	if(18327>100){ let tem2p=(_E0F_anN55061(_E0FXOgUG53,_E0Fi60));} else{
	let te2emp=("================", _E0F_anN55061,_E0FcrDh7); }
}
        for(let i=0; i<this._F0FOBPBz83; i++){
{
	let _E0Fec8642=17891;
	let _E0FqwcI670=199229; let _E0FUkMZb5= 0;
	for(let ip=0; ip<1; ip++){
	_E0FUkMZb5+= ip + _E0Fec8642-_E0FqwcI670;
	}
	let temp3=("===3=43df==", _E0Fec8642,_E0FqwcI670,_E0FUkMZb5);
}
            if(this._F0F_qfsd6[i] && this._F0F_qfsd6[i].userId == userId){
                return i;
            }
        }
        console.log("========findUserSeatNo===not=find====", userId, this._F0F_qfsd6);
    },
    getUserInfo(seatNo){
{
	let _E0FkpysT7546=1940;
	let _E0FsFxi18977=1738; let _E0FW86784= 0;
	for(let ip=0; ip<2; ip++){
	_E0FW86784+= ip + _E0FkpysT7546/_E0FsFxi18977;
	}
	let temp3=("===3=43df==", _E0FkpysT7546,_E0FsFxi18977,_E0FW86784);
}
        if(seatNo==null)return this._F0F_qfsd6; //记住，0和null的！都是true
        seatNo = parseInt(seatNo);
{
	let _E0FyvCb87121=17;
	let _E0FWEq42=148; let _E0Fj_9= 0;
	for(let ip=0; ip<2; ip++){
	_E0Fj_9+= ip + _E0FyvCb87121/_E0FWEq42;
	}
	let temp3=("===3=43df==", _E0FyvCb87121,_E0FWEq42,_E0Fj_9);
}
        return this._F0F_qfsd6[seatNo];
    },
    getUserInfoByUserId(userId){
        if(!userId) return ;
{
	let _E0Fz0=154;
	let _E0F$Kn6= [1732,132,154];
	let _E0FubCr9=true;
	let _E0Ftxlo1966= function(a, b){ return a + b *_E0Fz0; };
	if(154>100){ let tem2p=(_E0Ftxlo1966(_E0Fz0,_E0FubCr9));} else{
	let te2emp=("================", _E0Ftxlo1966,_E0F$Kn6); }
}
        for(let i=0; i<this._F0FOBPBz83; i++){
            if(this._F0F_qfsd6[i] && this._F0F_qfsd6[i].userId == userId){
                return this._F0F_qfsd6[i];
            }
        }
    },
    IsJushuFinish() {//是否局数已尽
        if(this._F0FEwQq0>0)return this._F0FTJkpQ45>this._F0FEwQq0;
    },
    getBaseScore(){
        return this._F0Ffh4438;
    },
    setBaseScore(score){
{
	let _E0FeHKv8=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FeHKv8);}
	let _E0FvTRN43667="E0FBCk";
	let _E0FrC4="E0FHz";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FvTRN43667);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FrC4);}
	}
}
        this._F0Ffh4438 = score;
    },
    getBaseBeiLv(){
        return this._F0FgrbS04;
    },
    setBaseBeiLv(beilv){
{
	let _E0FPL85=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FPL85);}
	let _E0FylR53022="E0Ft";
	let _E0F$0="E0Fa";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FylR53022);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0F$0);}
	}
}
        this._F0FgrbS04 = beilv;
    },
    getMaxPlayer(){
        return this._F0FOBPBz83;
    },
    setRoomConfig(configtab){
{
	let _E0FF42=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FF42);}
	let _E0FqG633="E0Fwm";
	let _E0FCF30701="E0F$Rpza";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FqG633);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FCF30701);}
	}
}
        this._F0FPD3779 = {};
{
	let _E0FWhjvb5=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FWhjvb5);}
	let _E0FN4388="E0FOykOI";
	let _E0FonXX132="E0FyPEF";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FN4388);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FonXX132);}
	}
}
        if(!configtab) return ;
        for(let i in configtab){
{
	let _E0FRfv$468=1137;
	let _E0FDKoEC44= [11155,18,1137];
	let _E0FBKI9910=true;
	let _E0Fsf81720= function(a, b){ return a + b *_E0FRfv$468; };
	if(1137>100){ let tem2p=(_E0Fsf81720(_E0FRfv$468,_E0FBKI9910));} else{
	let te2emp=("================", _E0Fsf81720,_E0FDKoEC44); }
}
            this._F0FPD3779[i] = configtab[i];
        }
    },
    getRoomConfig(bDeepCopy){
{
	let _E0FNx4730=17004;
	let _E0FZaW86=125; let _E0Fc33= 0;
	for(let ip=0; ip<4; ip++){
	_E0Fc33+= ip + _E0FNx4730+_E0FZaW86;
	}
	let temp3=("===3=43df==", _E0FNx4730,_E0FZaW86,_E0Fc33);
}
        if(!bDeepCopy) return this._F0FPD3779;
{
	let _E0Fe_282=19491;
	let _E0Fx$N4= [17230,15,19491];
	let _E0FcuW81096=false;
	let _E0FLxxa0606= function(a, b){ return a + b *_E0Fe_282; };
	if(19491>100){ let tem2p=(_E0FLxxa0606(_E0Fe_282,_E0FcuW81096));} else{
	let te2emp=("================", _E0FLxxa0606,_E0Fx$N4); }
}
        let tab = {};
{
	let _E0F$nwv93618=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0F$nwv93618);}
	let _E0FchZdD036="E0FvWOa";
	let _E0FO1="E0FcTK";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FchZdD036);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FO1);}
	}
}
        for(let i in this._F0FPD3779){
            tab[i] = this._F0FPD3779[i];
        }
        return tab;
    },
    setRoomPwd(pwd){
{
	let _E0FEX7927=181;
	let _E0FtK5=1695; let _E0FR367= 0;
	for(let ip=0; ip<4; ip++){
	_E0FR367+= ip + _E0FEX7927*_E0FtK5;
	}
	let temp3=("===3=43df==", _E0FEX7927,_E0FtK5,_E0FR367);
}
        this._F0FzlOR0212 = pwd;
    },
    getRoomPwd(){
        return this._F0FzlOR0212;
    },
    
}
module.exports = RoomInfo;