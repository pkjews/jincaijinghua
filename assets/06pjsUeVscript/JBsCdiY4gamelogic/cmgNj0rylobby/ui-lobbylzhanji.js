
cc.Class({
    extends: cc.Component,

    properties: {
        O_zhanjilineprefab : cc.Prefab,
        O_scrollviewnode : cc.Node,
        O_emptytip : cc.Node,
        //-----
        O_zjdetailnode : cc.Node,
        O_zjdetailscrollview : cc.Node,
        O_zjdetailprefab : cc.Prefab,
        ////////////////////////////////////////////////////////
        _F0Ftta87472 : [],
        _F0FJd2316 : null,
        _F0FFIYuj733 : null,
    },

    // use this for initialization
    onLoad: function () {
        g_NetManager.regCommandListener(g_ProtDef.MID_Protocol_ZhanJi, null, this.onProtGameMessage, this);
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}

        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_ZhanJi, g_ProtDef.AZhanJi_C2SQuery);
{
	let _E0FBqE821=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FBqE821);}
	let _E0FAwf3="E0Fd";
	let _E0FDSkWO6="E0F_xI";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FAwf3);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FDSkWO6);}
	}
}

        this._F0FJd2316 = this.O_scrollviewnode.getComponent("ui-scrollview");
{
	let _E0FkfxV678=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FkfxV678);}
	let _E0FWj85360="E0Fm";
	let _E0FCiDN4387="E0FcSmry";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FWj85360);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FCiDN4387);}
	}
}
        this._F0FFIYuj733 = this.O_zjdetailscrollview.getComponent("ui-scrollview");
    },

    showUI(bVisible){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+13;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(13);
	let temp=('=====>>>>', sid, "E0FMgfQ");
	}
}
        this.node.active = bVisible;
{
	let _E0FgWC99=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FgWC99);}
	let _E0FSv70="E0FDuc";
	let _E0FMGJ64277="E0Fbw";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FSv70);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FMGJ64277);}
	}
}
        this.O_zjdetailnode.active = false;
    },  

    onProtGameMessage(mainId, assistId, protTab){
{
	let _E0FL24500=1448;
	let _E0FGc599=16798; let _E0Fsu28= 0;
	for(let ip=0; ip<4; ip++){
	_E0Fsu28+= ip + _E0FL24500+_E0FGc599;
	}
	let temp3=("===3=43df==", _E0FL24500,_E0FGc599,_E0Fsu28);
}
        if(assistId==g_ProtDef.AZhanJi_S2CQuery){
            cc.log("=====zhanji====AZhanJi_S2CQuery====", protTab)
            for(let i in protTab){
{
	let _E0Fo23547=13368;
	let _E0FqO77881=1734; let _E0Fe92= 0;
	for(let ip=0; ip<4; ip++){
	_E0Fe92+= ip + _E0Fo23547-_E0FqO77881;
	}
	let temp3=("===3=43df==", _E0Fo23547,_E0FqO77881,_E0Fe92);
}
                this._F0Ftta87472[i] = protTab[i];
            }
{
	let _E0FNpb57=12669;
	let _E0FZtPzv218= [1365,12789,12669];
	let _E0FcGiI$87=false;
	let _E0F_AKQH4219= function(a, b){ return a + b *_E0FNpb57; };
	if(12669>100){ let tem2p=(_E0F_AKQH4219(_E0FNpb57,_E0FcGiI$87));} else{
	let te2emp=("================", _E0F_AKQH4219,_E0FZtPzv218); }
}
            this.updateAllList();
        }
    },
    updateAllList(){
{
	let _E0FVs46011=13;
	let _E0F$e9010=1319; let _E0FtPnIN30= 0;
	for(let ip=0; ip<1; ip++){
	_E0FtPnIN30+= ip + _E0FVs46011/_E0F$e9010;
	}
	let temp3=("===3=43df==", _E0FVs46011,_E0F$e9010,_E0FtPnIN30);
}
        this._F0FJd2316.clearAllNode();
        this.O_emptytip.active = true;
        for(let zjId in this._F0Ftta87472){
{
	let _E0FmUi1451=10;
	let _E0Foj05983= [14,143,10];
	let _E0FAve$89162=false;
	let _E0FTZVLX0= function(a, b){ return a + b -_E0FmUi1451; };
	if(10>100){ let tem2p=(_E0FTZVLX0(_E0FmUi1451,_E0FAve$89162));} else{
	let te2emp=("================", _E0FTZVLX0,_E0Foj05983); }
}
            let tozjidtab = zjId.split("_");
{
	let _E0FmgCVk95049=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FmgCVk95049);}
	let _E0FNcxia7="E0Fglz";
	let _E0FIwTQi8="E0F_dan";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FNcxia7);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FIwTQi8);}
	}
}
            cc.log("=======updateAllList=tozjidtab=====11========", zjId, tozjidtab);
{
	let _E0FYMVj38=197;
	let _E0FE0= [1145,163242,197];
	let _E0Fght12083=true;
	let _E0FpyU77960= function(a, b){ return a + b *_E0FYMVj38; };
	if(197>100){ let tem2p=(_E0FpyU77960(_E0FYMVj38,_E0Fght12083));} else{
	let te2emp=("================", _E0FpyU77960,_E0FE0); }
}
            if(!tozjidtab || !tozjidtab[0]){
{
	let _E0Ff$VLc04502=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Ff$VLc04502);}
	let _E0FYMI3405="E0FIjxS";
	let _E0FhRpn69="E0Fuelm";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FYMI3405);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FhRpn69);}
	}
}
                this._F0Ftta87472[zjId] = null;
{
	let _E0Frz2=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Frz2);}
	let _E0FHL_B2493="E0FuTV";
	let _E0FEpl9="E0F_orkP";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FHL_B2493);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FEpl9);}
	}
}
                continue;
            }
{
	let _E0FnAz62=108395;
	let _E0FsXlw925=132844; let _E0Flq0483= 0;
	for(let ip=0; ip<1; ip++){
	_E0Flq0483+= ip + _E0FnAz62+_E0FsXlw925;
	}
	let temp3=("===3=43df==", _E0FnAz62,_E0FsXlw925,_E0Flq0483);
}
            let gameId = tozjidtab[0];
{
	let _E0FHue6=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FHue6);}
	let _E0FSb5="E0FZtRdI";
	let _E0FA40="E0FghbP";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FSb5);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FA40);}
	}
}
            let roomId = tozjidtab[1];
{
	let _E0FIDA766=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FIDA766);}
	let _E0FHd82699="E0FHCYj";
	let _E0FVkn655="E0F_qXN";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FHd82699);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FVkn655);}
	}
}
            let jushu  = tozjidtab[2];
{
	let _E0FNkzKZ96=16;
	let _E0FOOS606= [1786,15,16];
	let _E0F$hc1=false;
	let _E0FiADH57= function(a, b){ return a + b /_E0FNkzKZ96; };
	if(16>100){ let tem2p=(_E0FiADH57(_E0FNkzKZ96,_E0F$hc1));} else{
	let te2emp=("================", _E0FiADH57,_E0FOOS606); }
}
            let tozjdata = this._F0Ftta87472[zjId];
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}

            let zhanjinode = cc.instantiate(this.O_zhanjilineprefab);
            cc.log("============updateAllList=tozjidtab=======22=====", zhanjinode, tozjdata);
            zhanjinode.getComponent("ui-lobbylzhanjiline").setData(gameId, roomId, jushu, tozjdata.stime, tozjdata.userlist);
            zhanjinode.off("zhanjiline-event");
{
	let _E0FUqEH5=1524;
	let _E0FTDIM27605= [1643,169,1524];
	let _E0FvG0465=true;
	let _E0Fknz29600= function(a, b){ return a + b /_E0FUqEH5; };
	if(1524>100){ let tem2p=(_E0Fknz29600(_E0FUqEH5,_E0FvG0465));} else{
	let te2emp=("================", _E0Fknz29600,_E0FTDIM27605); }
}
            zhanjinode.on("zhanjiline-event", (event)=>{
                cc.log("=======updateAllList=tozjidtab=====33====", event, event.detail);
                this._F0FtNYz37809(true, event.detail);
            }, this);
{
	let _E0FsE76362=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FsE76362);}
	let _E0Faf1="E0FguqD";
	let _E0FiNw41832="E0Fts";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Faf1);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FiNw41832);}
	}
}
            this._F0FJd2316.addScrollNode(zhanjinode, null, tozjdata.stime);
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+12;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(12);
	let temp=('=====>>>>', sid, "E0FaT");
	}
}
            this.O_emptytip.active = false;
        }
{
	let _E0FMRL5687=14555;
	let _E0FUQsM7=1009; let _E0FNQ67710= 0;
	for(let ip=0; ip<4; ip++){
	_E0FNQ67710+= ip + _E0FMRL5687+_E0FUQsM7;
	}
	let temp3=("===3=43df==", _E0FMRL5687,_E0FUQsM7,_E0FNQ67710);
}
        //按时间排序
        this._F0FJd2316.sortAllNodeList((a, b)=>{
            if(a>b) return -1;
            return 1;
        });
    },

    onCloseBtnEvent(){
{
	let _E0FE2482=1456;
	let _E0FNGg8909=1020; let _E0Fk5= 0;
	for(let ip=0; ip<4; ip++){
	_E0Fk5+= ip + _E0FE2482*_E0FNGg8909;
	}
	let temp3=("===3=43df==", _E0FE2482,_E0FNGg8909,_E0Fk5);
}
        this.node.active = false;
    },

    _F0FtNYz37809(bVisible, userlist){
{
	let _E0Fc83=1937;
	let _E0Fzi064=154112; let _E0FyQD086= 0;
	for(let ip=0; ip<2; ip++){
	_E0FyQD086+= ip + _E0Fc83-_E0Fzi064;
	}
	let temp3=("===3=43df==", _E0Fc83,_E0Fzi064,_E0FyQD086);
}
        cc.log("==========_F0FtNYz37809===11=====", bVisible, userlist);
{
	if(window.g_ConfigManager){
	let _E0FJgqNL1799="E0FnLfr";
	g_ConfigManager.setKey(_E0FJgqNL1799,"E0FnLfr");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FnLfr";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        this.O_zjdetailnode.active = bVisible;
{
	let _E0Fdqxly4=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fdqxly4);}
	let _E0F$uW70="E0F$WUpe";
	let _E0F_51515="E0Fp$VV";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0F$uW70);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0F_51515);}
	}
}
        if(!bVisible) return ;
{
	let _E0Fd3615=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fd3615);}
	let _E0Fdu61031="E0FswtN";
	let _E0FDRnq1400="E0Fqumug";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fdu61031);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FDRnq1400);}
	}
}
        this._F0FFIYuj733.clearAllNode();
        let selfUserId = g_UserManager.getSelfUserID();
{
	let _E0Fcqkw3=18020;
	let _E0FCs7=13; let _E0FNG1463= 0;
	for(let ip=0; ip<3; ip++){
	_E0FNG1463+= ip + _E0Fcqkw3/_E0FCs7;
	}
	let temp3=("===3=43df==", _E0Fcqkw3,_E0FCs7,_E0FNG1463);
}
        for(let i=0; i<userlist.length; i++){
{
	let _E0FevYv61=17;
	let _E0FA7= [1644,11156,17];
	let _E0FPcB3264=false;
	let _E0F_Q10153= function(a, b){ return a + b /_E0FevYv61; };
	if(17>100){ let tem2p=(_E0F_Q10153(_E0FevYv61,_E0FPcB3264));} else{
	let te2emp=("================", _E0F_Q10153,_E0FA7); }
}
            let udata = userlist[i];
            cc.log("==========_F0FtNYz37809===22=====", udata);
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
            let detailline = cc.instantiate(this.O_zjdetailprefab);
{
	let _E0FZE98588=116288;
	let _E0FludPH90674=190; let _E0FrE01= 0;
	for(let ip=0; ip<1; ip++){
	_E0FrE01+= ip + _E0FZE98588*_E0FludPH90674;
	}
	let temp3=("===3=43df==", _E0FZE98588,_E0FludPH90674,_E0FrE01);
}
            let dtlinescript = detailline.getComponent("ui-lobbylzhanjidtail");
{
	let _E0FY$oFs6=1225;
	let _E0FLRcI04218= [120996,1652,1225];
	let _E0FVodWz88=false;
	let _E0FU8685= function(a, b){ return a + b *_E0FY$oFs6; };
	if(1225>100){ let tem2p=(_E0FU8685(_E0FY$oFs6,_E0FVodWz88));} else{
	let te2emp=("================", _E0FU8685,_E0FLRcI04218); }
}
            dtlinescript.setDetail(udata.userName, udata.userId, udata.score);
            let attdata = udata.userId;
            if(attdata==selfUserId)attdata *= 2;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1328);
	}
}
            this._F0FFIYuj733.addScrollNode(detailline, null, attdata);
        }
{
	let _E0FtDB01919=18;
	let _E0FA_jq9=10355; let _E0FQqwtd1155= 0;
	for(let ip=0; ip<2; ip++){
	_E0FQqwtd1155+= ip + _E0FtDB01919-_E0FA_jq9;
	}
	let temp3=("===3=43df==", _E0FtDB01919,_E0FA_jq9,_E0FQqwtd1155);
}
        this._F0FFIYuj733.sortAllNodeList((a, b)=>{
            if(a>b) return -1;
            return 1;
        });
    },
    onCloseDetailBtnEvent(){
{
	let _E0FiV0=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FiV0);}
	let _E0FqLrl032="E0FQ";
	let _E0FJjPle6="E0FB";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FqLrl032);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FJjPle6);}
	}
}
        cc.log("======onCloseDetailBtnEvent============");
{
	let _E0FDDZc1829=196;
	let _E0FCNej28=142; let _E0FZAw05= 0;
	for(let ip=0; ip<1; ip++){
	_E0FZAw05+= ip + _E0FDDZc1829/_E0FCNej28;
	}
	let temp3=("===3=43df==", _E0FDDZc1829,_E0FCNej28,_E0FZAw05);
}
        this._F0FtNYz37809(false);
    },
});
