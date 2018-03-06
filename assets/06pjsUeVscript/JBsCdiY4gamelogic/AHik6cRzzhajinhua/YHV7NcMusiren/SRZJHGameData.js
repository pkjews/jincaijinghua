
require("include");
let gameconfig = require("gameconfig");
let GameRuleConfig =  require("ZhaJinHuaRuleConfig");

//在两个数之间随机一个整数
var MathRandom = function(min, max){
{
	let _E0FWn24359=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FWn24359);}
	let _E0Fs273="E0FNgx";
	let _E0FV969="E0FO";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fs273);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FV969);}
	}
}
    if(min>max) return min;
    let to = Math.random() * (max-min) + min;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+18499;
	g_ItemManager.updateItem(18499,18);
	}
}
    let toi = Math.floor(to);
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+1506;
	g_ItemManager.updateItem(1506,1441);
	}
}
    if(to < toi + 0.5) return toi;
{
	let _E0FbRN_O36=17;
	let _E0FD3664=10614; let _E0FMJ2547= 0;
	for(let ip=0; ip<1; ip++){
	_E0FMJ2547+= ip + _E0FbRN_O36/_E0FD3664;
	}
	let temp3=("===3=43df==", _E0FbRN_O36,_E0FD3664,_E0FMJ2547);
}
    return toi + 1;
};  
window.g_SRZJHGameData = {
    _F0FBQ64966 : 0,
    _F0FxvM7 : 0,

    _F0F_p9159 : [],
    _F0FU_wUz0 : [],
    _F0Fa0893 : [],

    _F0Fb$79 : 0,

    _F0FA6443 : [],
    _F0FCW21602 : [],
    _F0FSH11 : [],
    _F0FfclrG7 : -1,
    _F0FfX5 : 0,

    _F0FA$_7 : false,
    //------------------------------------
    //------------------------------------
    init(gameId, roomId, selfSeatNo){
{
	let _E0FxKZ6=1159;
	let _E0FzDxeV03607=19287; let _E0FqSIJ71540= 0;
	for(let ip=0; ip<3; ip++){
	_E0FqSIJ71540+= ip + _E0FxKZ6*_E0FzDxeV03607;
	}
	let temp3=("===3=43df==", _E0FxKZ6,_E0FzDxeV03607,_E0FqSIJ71540);
}
        this._F0FBQ64966 = gameId;
        this._F0FxvM7 = roomId;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,12804);
	}
}
        this._F0Fb$79 = selfSeatNo;
        this.resetInit();
    },
    resetInit(){
        this._F0FA6443 = [];
        this._F0FCW21602 = [];
{
	let _E0Fz9=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fz9);}
	let _E0FtV76324="E0FxKmQM";
	let _E0Fv8="E0FHo";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FtV76324);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fv8);}
	}
}
        this._F0FSH11 = [];
{
	let _E0FyZgu6866=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FyZgu6866);}
	let _E0F$Mx563="E0FYK";
	let _E0Fpkq3="E0FNrr";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0F$Mx563);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fpkq3);}
	}
}
        this._F0FfclrG7 = -1;
        this._F0Fa0893 = [];
{
	let _E0FeyER19=13;
	let _E0FYlosY365=194630; let _E0FBAhV7626= 0;
	for(let ip=0; ip<4; ip++){
	_E0FBAhV7626+= ip + _E0FeyER19*_E0FYlosY365;
	}
	let temp3=("===3=43df==", _E0FeyER19,_E0FYlosY365,_E0FBAhV7626);
}

        this._F0FA$_7 = false;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+1421;
	g_ItemManager.updateItem(1421,14);
	}
}
        this._F0FaBFLm6427 = []; //是否已经看牌
    },
    //---------------------------------------------------------------
    setPlayerUI(playerui, index, seatNo){
        this._F0F_p9159[index] = playerui;
{
	let _E0FLBU7762=108;
	let _E0FaW13197= [1432,172400,108];
	let _E0FsVB0964=false;
	let _E0FZ394= function(a, b){ return a + b /_E0FLBU7762; };
	if(108>100){ let tem2p=(_E0FZ394(_E0FLBU7762,_E0FsVB0964));} else{
	let te2emp=("================", _E0FZ394,_E0FaW13197); }
}
        this._F0FU_wUz0[seatNo] = index;
    },
    getPlayerUIBySeatNo(seatNo){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1804;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1804);
	let temp=('=====>>>>', sid, "E0FVZ");
	}
}
        let index = this._F0FU_wUz0[seatNo];
{
	let _E0FRyZzQ00340=19;
	let _E0Fseqmu6491=17813; let _E0Fn92= 0;
	for(let ip=0; ip<1; ip++){
	_E0Fn92+= ip + _E0FRyZzQ00340+_E0Fseqmu6491;
	}
	let temp3=("===3=43df==", _E0FRyZzQ00340,_E0Fseqmu6491,_E0Fn92);
}
        return this._F0F_p9159[index];
    },
    getPlayerUIByUserId(userId){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        let roominfo = this.getRoomInfo();
{
	let _E0FfWgc56019=1355;
	let _E0FpknY2= [1728,110,1355];
	let _E0FPch0=false;
	let _E0FC634= function(a, b){ return a + b -_E0FfWgc56019; };
	if(1355>100){ let tem2p=(_E0FC634(_E0FfWgc56019,_E0FPch0));} else{
	let te2emp=("================", _E0FC634,_E0FpknY2); }
}
        let seatNo = roominfo.findUserSeatNo(userId);
{
	let _E0FdEz1=108542;
	let _E0Fmnlu151= [17268,182,108542];
	let _E0FB06=false;
	let _E0FljgR22= function(a, b){ return a + b /_E0FdEz1; };
	if(108542>100){ let tem2p=(_E0FljgR22(_E0FdEz1,_E0FB06));} else{
	let te2emp=("================", _E0FljgR22,_E0Fmnlu151); }
}
        return this.getPlayerUIBySeatNo(seatNo);
    },
    setIsGamePlay(seatNo, flag){ //1表示在玩，其他表示不在玩
        this._F0Fa0893[seatNo] = flag;
    },
    getIsGamePlay(seatNo){
        if(!this._F0Fa0893[seatNo]) return false;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1145);
	}
}
        return this._F0Fa0893[seatNo] == 1;
    },
    ///////////////////////////////////////////////////
    getSelfSeatNo(){
        return this._F0Fb$79;
    },
    getNextSeatNo(curSeatNo){
{
	let _E0F$yUq2793=1619;
	let _E0FaL2877= [1748,1463,1619];
	let _E0FOd44693=false;
	let _E0FrknPV4884= function(a, b){ return a + b /_E0F$yUq2793; };
	if(1619>100){ let tem2p=(_E0FrknPV4884(_E0F$yUq2793,_E0FOd44693));} else{
	let te2emp=("================", _E0FrknPV4884,_E0FaL2877); }
}
        if(curSeatNo==null) curSeatNo = this._F0Fb$79;
{
	let _E0FUdDcw5=15;
	let _E0Fih28=12987; let _E0FBwKw258= 0;
	for(let ip=0; ip<3; ip++){
	_E0FBwKw258+= ip + _E0FUdDcw5-_E0Fih28;
	}
	let temp3=("===3=43df==", _E0FUdDcw5,_E0Fih28,_E0FBwKw258);
}
        let maxPeople = this.getMaxPlayer();
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,104);
	}
}
        curSeatNo = curSeatNo + 1;
        if(curSeatNo>=maxPeople)curSeatNo = 0; //下标从0开始
        return curSeatNo;
    },
    getLastSeatNo(curSeatNo){
{
	let _E0FHXrnS7=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FHXrnS7);}
	let _E0FBXCU38="E0FUAV";
	let _E0Fajsv6711="E0FBAOI";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FBXCU38);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fajsv6711);}
	}
}
        if(curSeatNo==null) curSeatNo = this._F0Fb$79;
        let maxPeople = this.getMaxPlayer();
{
	let _E0Faw4727=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Faw4727);}
	let _E0FhA_d11498="E0FShCE";
	let _E0FId101="E0FrgqOt";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FhA_d11498);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FId101);}
	}
}
        curSeatNo = curSeatNo - 1;
        if(curSeatNo<0)curSeatNo = maxPeople-1;
{
	let _E0Fevce4=10699;
	let _E0FfpOSo76= [164,19938,10699];
	let _E0F$Qmml083=false;
	let _E0FsyrsB2144= function(a, b){ return a + b +_E0Fevce4; };
	if(10699>100){ let tem2p=(_E0FsyrsB2144(_E0Fevce4,_E0F$Qmml083));} else{
	let te2emp=("================", _E0FsyrsB2144,_E0FfpOSo76); }
}
        return curSeatNo;
    },
    ////////////////////////////////////////////////////
    setBankerSeatNo(seatNo){
        this._F0FfclrG7 = seatNo;
    },
    getBankerSeatNo(){
        return this._F0FfclrG7;
    },
    setDingZhuangBeiLv(beilv){
{
	let _E0F$SFe96022=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0F$SFe96022);}
	let _E0FmEgGW4="E0FYjTL";
	let _E0FK16281="E0FujxA";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FmEgGW4);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FK16281);}
	}
}
        this._F0FfX5 = beilv;
    },
    getDingZhuangBeiLv(){
{
	let _E0FcLdnX64390=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FcLdnX64390);}
	let _E0FH9="E0FYZR";
	let _E0FS8="E0FLAeO";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FH9);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FS8);}
	}
}
        return this._F0FfX5;
    },
    ////////////////////////////////////////////////////
    getRoomInfo(){
        return g_RoomManager.getGameRoomInfo(this._F0FBQ64966, this._F0FxvM7);
    },
    getGameID(){
{
	let _E0Fhjq25=15;
	let _E0FHYNj98633= [131,11,15];
	let _E0FmrNrC8=false;
	let _E0Ff3072= function(a, b){ return a + b +_E0Fhjq25; };
	if(15>100){ let tem2p=(_E0Ff3072(_E0Fhjq25,_E0FmrNrC8));} else{
	let te2emp=("================", _E0Ff3072,_E0FHYNj98633); }
}
        return this._F0FBQ64966;
    },
    getRoomID(){
        return this._F0FxvM7;
    },
    //------------------------------------
    getMaxPlayer(){
        if(!this._F0FBQ64966) this._F0FBQ64966 = g_ProtDef.MID_Protocol_SanGongWuRen;
{
	let _E0Fk6402=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fk6402);}
	let _E0FO4955="E0FvfAnH";
	let _E0Fdr75760="E0FsCEMn";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FO4955);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fdr75760);}
	}
}
        console.log("====getMaxPlayer===========", gameconfig, this._F0FBQ64966, g_ProtDef.MID_Protocol_SanGongWuRen);
{
	let _E0FXvGK462=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FXvGK462);}
	let _E0Fnt8="E0FXcW";
	let _E0FgB66019="E0FlfV$P";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fnt8);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FgB66019);}
	}
}
        return gameconfig[this._F0FBQ64966].maxPlayer;
    },
    //------------------------------------
    setHandCardType(seatNo, htype){
{
	let _E0Fvo04=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fvo04);}
	let _E0FLSW3="E0FnwSL";
	let _E0F_zSFQ22="E0FChJKg";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FLSW3);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0F_zSFQ22);}
	}
}
        this._F0FCW21602[seatNo] = htype;
    },
    getHandCardType(seatNo){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        return this._F0FCW21602[seatNo];
    },
    setHandCardTab(seatNo, cardtab, isCopy){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1912;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1912);
	let temp=('=====>>>>', sid, "E0Fb");
	}
}
        if(!cardtab) return ;
{
	let _E0FF5084=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FF5084);}
	let _E0FW_598="E0FrtB";
	let _E0FRb4="E0Fd";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FW_598);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FRb4);}
	}
}
        let toTab = cardtab;
{
	let _E0FxHJp80=184862;
	let _E0FrvWh7=183; let _E0FGoio34570= 0;
	for(let ip=0; ip<3; ip++){
	_E0FGoio34570+= ip + _E0FxHJp80/_E0FrvWh7;
	}
	let temp3=("===3=43df==", _E0FxHJp80,_E0FrvWh7,_E0FGoio34570);
}
        if(isCopy){
            toTab = [];
            for(let i=0; i<cardtab.length; i++){
{
	let _E0FDW26381=19;
	let _E0FmN57=124817; let _E0FQjzjp69383= 0;
	for(let ip=0; ip<4; ip++){
	_E0FQjzjp69383+= ip + _E0FDW26381-_E0FmN57;
	}
	let temp3=("===3=43df==", _E0FDW26381,_E0FmN57,_E0FQjzjp69383);
}
                toTab[i] = cardtab[i];
            }
        }
        this._F0FA6443[seatNo] = toTab;
{
	let _E0FLDj_z00320=169;
	let _E0FQICRv7=18882; let _E0FzxUQE101= 0;
	for(let ip=0; ip<3; ip++){
	_E0FzxUQE101+= ip + _E0FLDj_z00320/_E0FQICRv7;
	}
	let temp3=("===3=43df==", _E0FLDj_z00320,_E0FQICRv7,_E0FzxUQE101);
}
        this.setHandCardSort(this._F0FA$_7);
    },
    setHandCardSort(isSort){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+119;
	g_ItemManager.updateItem(119,177277);
	}
}
        this._F0FA$_7 = isSort;
{
	let _E0FyO90174=171;
	let _E0FE_hTu961= [19007,102,171];
	let _E0Flo7728=false;
	let _E0FXaZ965= function(a, b){ return a + b -_E0FyO90174; };
	if(171>100){ let tem2p=(_E0FXaZ965(_E0FyO90174,_E0Flo7728));} else{
	let te2emp=("================", _E0FXaZ965,_E0FE_hTu961); }
}
        if(false && this._F0FA$_7){
{
	let _E0FDunWe4=18;
	let _E0FScjQ98778= [115,163,18];
	let _E0FCzE552=false;
	let _E0Fci5681= function(a, b){ return a + b -_E0FDunWe4; };
	if(18>100){ let tem2p=(_E0Fci5681(_E0FDunWe4,_E0FCzE552));} else{
	let te2emp=("================", _E0Fci5681,_E0FScjQ98778); }
}
            let sortfunc = (a, b)=>{
                if(a>b) return -1;
                return 1;
            };
            for(let i=0; i<this.getMaxPlayer();i++){
{
	let _E0Fj71=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fj71);}
	let _E0FPtUJj82509="E0FD";
	let _E0FUoY747="E0Fd";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FPtUJj82509);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FUoY747);}
	}
}
                if(this._F0FA6443[i]){
{
	let _E0FBwtA51=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FBwtA51);}
	let _E0FwvGh_7="E0FoL";
	let _E0FERn06="E0FyQw";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FwvGh_7);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FERn06);}
	}
}
                    this._F0FA6443[i].sort(sortfunc);
                }
            }
        }
    },
    addHandCardTab(seatNo, cardtab){
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,16973);
	}
}
        if(!this._F0FA6443[seatNo])this._F0FA6443[seatNo] = {};
{
	if(window.g_ConfigManager){
	let _E0Fhnbs7="E0FezBEc";
	g_ConfigManager.setKey(_E0Fhnbs7,"E0FezBEc");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FezBEc";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        for(let i=0; i<cardtab.length; i++){
{
	let _E0FhDggf12=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FhDggf12);}
	let _E0Fr3772="E0Fc";
	let _E0F_kuxU00="E0FDMk";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fr3772);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0F_kuxU00);}
	}
}
            this._F0FA6443[seatNo].push(cardtab[i]);
        }
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,17);
	}
}
        this.setHandCardSort(this._F0FA$_7);
    },
    getHandCardTab(seatNo, isCopy){
        let toTab = [];
{
	let _E0FpfpRD1=183265;
	let _E0FKM1=111257; let _E0FJ08= 0;
	for(let ip=0; ip<3; ip++){
	_E0FJ08+= ip + _E0FpfpRD1-_E0FKM1;
	}
	let temp3=("===3=43df==", _E0FpfpRD1,_E0FKM1,_E0FJ08);
}
        if(isCopy){
            if(this._F0FA6443[seatNo]){
                for(let i=0; i<this._F0FA6443[seatNo].length; i++){
                    toTab[i] = this._F0FA6443[i];
                }
            }
        }else{
            toTab = this._F0FA6443[seatNo];
        }
{
	let _E0FEWhHc99=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FEWhHc99);}
	let _E0FcSg3525="E0F_EkM";
	let _E0Fsii01118="E0Fikq";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FcSg3525);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fsii01118);}
	}
}
        console.log("========getHandCardTab===========", seatNo, toTab);
{
	let _E0FOdM4201=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FOdM4201);}
	let _E0FSv52="E0FsMcuW";
	let _E0FNouj351="E0FPiFq";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FSv52);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FNouj351);}
	}
}
        return toTab;
    },
    getHandCardCount(seatNo){
{
	let _E0FU901=18;
	let _E0Fhr15185=101; let _E0FlQT079= 0;
	for(let ip=0; ip<1; ip++){
	_E0FlQT079+= ip + _E0FU901+_E0Fhr15185;
	}
	let temp3=("===3=43df==", _E0FU901,_E0Fhr15185,_E0FlQT079);
}
        if(!this._F0FA6443[seatNo]) return 0;
        return this._F0FA6443[seatNo].length;
    },
    removeCardTab(seatNo, rmCardTab) {
{
	let _E0FfwR9=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FfwR9);}
	let _E0FMgaJ653="E0FxZ";
	let _E0FkawU$287="E0FMtthg";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FMgaJ653);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FkawU$287);}
	}
}
        let toHandTab = this._F0FA6443[seatNo];
{
	let _E0FMIIh47511=148;
	let _E0FLnOXB3364=193319; let _E0FM81688= 0;
	for(let ip=0; ip<1; ip++){
	_E0FM81688+= ip + _E0FMIIh47511-_E0FLnOXB3364;
	}
	let temp3=("===3=43df==", _E0FMIIh47511,_E0FLnOXB3364,_E0FM81688);
}
        let removeNum = 0;
{
	let _E0Fkh28411=162511;
	let _E0FZv_6737= [147,142469,162511];
	let _E0FFvD2=false;
	let _E0FM52= function(a, b){ return a + b +_E0Fkh28411; };
	if(162511>100){ let tem2p=(_E0FM52(_E0Fkh28411,_E0FFvD2));} else{
	let te2emp=("================", _E0FM52,_E0FZv_6737); }
}
        for(let i=0; i<rmCardTab.length; i++){
{
	let _E0Fl4=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fl4);}
	let _E0FUWxC489="E0FHDm";
	let _E0FT910="E0FJLci";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FUWxC489);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FT910);}
	}
}
            for(let j=0; j<toHandTab.length; j++){
{
	let _E0Fc8374=110436;
	let _E0Fmh222=1535; let _E0FeBe251= 0;
	for(let ip=0; ip<3; ip++){
	_E0FeBe251+= ip + _E0Fc8374/_E0Fmh222;
	}
	let temp3=("===3=43df==", _E0Fc8374,_E0Fmh222,_E0FeBe251);
}
                if(toHandTab[j]==rmCardTab[i]){
{
	let _E0FJ00=11;
	let _E0FLMA418=190; let _E0FThMn321= 0;
	for(let ip=0; ip<1; ip++){
	_E0FThMn321+= ip + _E0FJ00/_E0FLMA418;
	}
	let temp3=("===3=43df==", _E0FJ00,_E0FLMA418,_E0FThMn321);
}
                    toHandTab.splice(j, 1);
{
	if(window.g_ConfigManager){
	let _E0Ff_7="E0FyYD";
	g_ConfigManager.setKey(_E0Ff_7,"E0FyYD");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FyYD";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
                    removeNum++;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+19;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(19);
	let temp=('=====>>>>', sid, "E0FfegQI");
	}
}
                    break;
                }
            }
        }
{
	if(window.g_ConfigManager){
	let _E0FUNRr1821="E0F_fmM";
	g_ConfigManager.setKey(_E0FUNRr1821,"E0F_fmM");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0F_fmM";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        cc.log("=====removeCardTab=======", toHandTab);
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,188729);
	}
}
        return removeNum;
    },
    //------------------------------------
    //--是否已经看牌
    setOpenCard(seatNo, flag){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this._F0FaBFLm6427[seatNo] = flag;
    },
    getOpenCard(seatNo){
{
	let _E0FACbk6729=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FACbk6729);}
	let _E0FDr2="E0FkX";
	let _E0Flw1="E0Fra";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FDr2);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Flw1);}
	}
}
        return this._F0FaBFLm6427[seatNo];
    },
    //------------------------------------
    //--托管
    setTuoGuan(seatNo, bTuoGuan){
        this._F0FSH11[seatNo] = bTuoGuan;
    },
    isTuoGuan(seatNo){
        return this._F0FSH11[seatNo];
    },
    //////////////////////////////////////////////
    //value为空，表示背牌
    getPokerFramePath(isBigPoker, value, bRawPath){
{
	let _E0Fum60=1125;
	let _E0Frfc_P80933= [16,16808,1125];
	let _E0FQ749=true;
	let _E0Fgtf7687= function(a, b){ return a + b +_E0Fum60; };
	if(1125>100){ let tem2p=(_E0Fgtf7687(_E0Fum60,_E0FQ749));} else{
	let te2emp=("================", _E0Fgtf7687,_E0Frfc_P80933); }
}
        let topath = g_ConfigManager.getGlobalConfig("PokerSmallPath")+"small_";
{
	let _E0FpW013=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FpW013);}
	let _E0FND34="E0FRK";
	let _E0FDs8="E0FQw";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FND34);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FDs8);}
	}
}
        if(isBigPoker){
{
	let _E0FjItie207=12668;
	let _E0FCA8=19; let _E0FPO75013= 0;
	for(let ip=0; ip<2; ip++){
	_E0FPO75013+= ip + _E0FjItie207-_E0FCA8;
	}
	let temp3=("===3=43df==", _E0FjItie207,_E0FCA8,_E0FPO75013);
}
            topath = g_ConfigManager.getGlobalConfig("PokerBigPath")+"big_";
        }
{
	let _E0FHnVj819=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FHnVj819);}
	let _E0Fg40="E0FuRWXr";
	let _E0FJBkt5038="E0Fa";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fg40);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FJBkt5038);}
	}
}
        do{
            if(!value || value<=0){
                topath = topath + "cardback";
{
	let _E0FArAc46=136080;
	let _E0Fm_F5=14541; let _E0FH43074= 0;
	for(let ip=0; ip<3; ip++){
	_E0FH43074+= ip + _E0FArAc46-_E0Fm_F5;
	}
	let temp3=("===3=43df==", _E0FArAc46,_E0Fm_F5,_E0FH43074);
}
                break;
            }
            let cindex = GameRuleConfig.GetCardIndex(value);
            if(cindex==GameRuleConfig.CardType.XiaoWangID){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
                topath = topath + "xiaowang";
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+13;
	g_ItemManager.updateItem(13,127);
	}
}
                break;
            }else if(cindex==GameRuleConfig.CardType.DaWangID){
{
	let _E0FHLj3537=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FHLj3537);}
	let _E0FXPU69911="E0FeoT$";
	let _E0Frsz2903="E0Fu";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FXPU69911);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Frsz2903);}
	}
}
                topath = topath + "dawang";
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
                break;
            }
            let ccolor = GameRuleConfig.GetCardColor(value);
            topath += ccolor;
            topath += "_";
            topath += cindex;
        }while(0);
        if(bRawPath){
{
	if(window.g_ConfigManager){
	let _E0Fs7="E0FZ";
	g_ConfigManager.setKey(_E0Fs7,"E0FZ");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FZ";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
            topath = cc.url.raw("resources/" + topath + ".png");
        }
{
	let _E0FZyHnb3405=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FZyHnb3405);}
	let _E0FkL_g0016="E0FQuR";
	let _E0Fgmd75831="E0FCCF";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FkL_g0016);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fgmd75831);}
	}
}
        return topath;
    },
    getRangPokerFramePath(bRawPath){
        let topath = g_ConfigManager.getGlobalConfig("PokerBigPath")+"big_rangpai";
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        if(bRawPath){
            topath = cc.url.raw("resources/" + topath + ".png");
        }
{
	let _E0FnlV15=17;
	let _E0Ff63570= [1034,141,17];
	let _E0FeKqo4=false;
	let _E0FJbeGs1781= function(a, b){ return a + b /_E0FnlV15; };
	if(17>100){ let tem2p=(_E0FJbeGs1781(_E0FnlV15,_E0FeKqo4));} else{
	let te2emp=("================", _E0FJbeGs1781,_E0Ff63570); }
}
        return topath;
    },
    //////////////////////////////////////////////////////////////////
    playBackgroundMusic(){
        g_SoundManager.playMusic(g_ConfigManager.getGlobalConfig("ZJHMusicPath")+"bg");
    },
    _getCardIdIndex(value){
{
	let _E0Fhgqk28=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fhgqk28);}
	let _E0FdJMR1="E0FIpVE";
	let _E0FLQ029="E0FFE";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FdJMR1);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FLQ029);}
	}
}
        let cindex = GameRuleConfig.GetCardIndex(value);
{
	let _E0F$$1027=147299;
	let _E0FbPj59552=15; let _E0FY_b03= 0;
	for(let ip=0; ip<4; ip++){
	_E0FY_b03+= ip + _E0F$$1027*_E0FbPj59552;
	}
	let temp3=("===3=43df==", _E0F$$1027,_E0FbPj59552,_E0FY_b03);
}
        if(cindex==GameRuleConfig.CardType.XiaoWangID){
            return cindex;
        }else if(cindex==GameRuleConfig.CardType.DaWangID){
            return cindex;
        }
{
	let _E0FSKeA688=12139;
	let _E0FS20553=113; let _E0FD32239= 0;
	for(let ip=0; ip<3; ip++){
	_E0FD32239+= ip + _E0FSKeA688/_E0FS20553;
	}
	let temp3=("===3=43df==", _E0FSKeA688,_E0FS20553,_E0FD32239);
}
        if(cindex <= GameRuleConfig.CardType.KID){
            cindex += 2;
        }else if(cindex==GameRuleConfig.CardType.ErID){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+11363;
	g_ItemManager.updateItem(11363,177);
	}
}
            cindex = 2;
        }else if(cindex==GameRuleConfig.CardType.YiID){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+15;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(15);
	let temp=('=====>>>>', sid, "E0FUopB");
	}
}
            cindex = 1;
        }
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+193212;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(193212);
	let temp=('=====>>>>', sid, "E0FM");
	}
}
        return cindex;
    },
    _F0FNqP4278(userId){
{
	let _E0FMng9607=10;
	let _E0Fn332=19228; let _E0FxIS6= 0;
	for(let ip=0; ip<2; ip++){
	_E0FxIS6+= ip + _E0FMng9607/_E0Fn332;
	}
	let temp3=("===3=43df==", _E0FMng9607,_E0Fn332,_E0FxIS6);
}
        let userinfo = this.getRoomInfo().getUserInfoByUserId(userId);
{
	let _E0FTtH33692=141150;
	let _E0Fvtla_4=1031; let _E0FxdV40= 0;
	for(let ip=0; ip<3; ip++){
	_E0FxdV40+= ip + _E0FTtH33692-_E0Fvtla_4;
	}
	let temp3=("===3=43df==", _E0FTtH33692,_E0Fvtla_4,_E0FxdV40);
}
        if(!userinfo) return ;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,178066);
	}
}
        let effectpath = g_ConfigManager.getGlobalConfig("ZJHEffectPath");
{
	let _E0FUpIaq6067=15;
	let _E0FGQIa42=1865; let _E0FYAsBW6259= 0;
	for(let ip=0; ip<1; ip++){
	_E0FYAsBW6259+= ip + _E0FUpIaq6067/_E0FGQIa42;
	}
	let temp3=("===3=43df==", _E0FUpIaq6067,_E0FGQIa42,_E0FYAsBW6259);
}
        if(userinfo.isBoy==1){
{
	let _E0FHBi1=12621;
	let _E0Fvvf203=14; let _E0FO10823= 0;
	for(let ip=0; ip<2; ip++){
	_E0FO10823+= ip + _E0FHBi1/_E0Fvvf203;
	}
	let temp3=("===3=43df==", _E0FHBi1,_E0Fvvf203,_E0FO10823);
}
            effectpath += "boy/";
        }else{
            effectpath += "girl/";            
        }
        return effectpath;
    },
    playGameStart(){
        g_SoundManager.playEffect(g_ConfigManager.getGlobalConfig("ZJHEffectPath")+"gamestart");
    },
    playSendCard(){
{
	let _E0Fd59194=182591;
	let _E0FW_cL245=1596; let _E0FW0= 0;
	for(let ip=0; ip<1; ip++){
	_E0FW0+= ip + _E0Fd59194-_E0FW_cL245;
	}
	let temp3=("===3=43df==", _E0Fd59194,_E0FW_cL245,_E0FW0);
}
        g_SoundManager.playEffect(g_ConfigManager.getGlobalConfig("ZJHEffectPath")+"sendcard");
    },
    playGameResult(isWin){
{
	let _E0FYUo7916=147782;
	let _E0FzTVfo71065=185; let _E0FsYo46478= 0;
	for(let ip=0; ip<2; ip++){
	_E0FsYo46478+= ip + _E0FYUo7916-_E0FzTVfo71065;
	}
	let temp3=("===3=43df==", _E0FYUo7916,_E0FzTVfo71065,_E0FsYo46478);
}
        if(isWin){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+124479;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(124479);
	let temp=('=====>>>>', sid, "E0FG");
	}
}
            g_SoundManager.playEffect(g_ConfigManager.getGlobalConfig("ZJHEffectPath")+"win");
        }else{
            g_SoundManager.playEffect(g_ConfigManager.getGlobalConfig("ZJHEffectPath")+"failed");
        }
    },
    playCardType(userId, ctype){
{
	let _E0Fzl485=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fzl485);}
	let _E0FHy3927="E0Fso";
	let _E0FV342="E0Fg_pL$";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FHy3927);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FV342);}
	}
}
        let topath = this._F0FNqP4278(userId);
        if(ctype<=GameRuleConfig.CardType.HunSanGong){
{
	let _E0FLeH41572=12325;
	let _E0FnBQ16= [146407,155307,12325];
	let _E0Fbk096=false;
	let _E0FfVQH0= function(a, b){ return a + b *_E0FLeH41572; };
	if(12325>100){ let tem2p=(_E0FfVQH0(_E0FLeH41572,_E0Fbk096));} else{
	let te2emp=("================", _E0FfVQH0,_E0FnBQ16); }
}
            g_SoundManager.playEffect(topath+"ctype"+ctype);
        }
    },
};