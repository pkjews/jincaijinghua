cc.Class({
    extends: cc.Component,

    properties: {
        _F0FBIf8 : 0,
        _F0Fs68 : null,
    },
    onLoad(){
{
	let _E0FN51809=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FN51809);}
	let _E0FNnvk16491="E0FsDX";
	let _E0FvOnWc0342="E0FF";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FNnvk16491);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FvOnWc0342);}
	}
}
        //this.resetUI();
    },
    initUI(seatNo){
        this._F0FBIf8 = seatNo;
{
	let _E0FhxX73=11148;
	let _E0Fo53= [11,191,11148];
	let _E0FTICEN9=false;
	let _E0FyFuV229= function(a, b){ return a + b /_E0FhxX73; };
	if(11148>100){ let tem2p=(_E0FyFuV229(_E0FhxX73,_E0FTICEN9));} else{
	let te2emp=("================", _E0FyFuV229,_E0Fo53); }
}

        this._F0Fs68 = this.getComponent("ui-srzjhHandCard");
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this._F0Fs68.initUI(this._F0FBIf8);
{
	let _E0Fx37=161879;
	let _E0FUbkzz4313= [12063,110,161879];
	let _E0FEJL81=false;
	let _E0FEjLQ5173= function(a, b){ return a + b +_E0Fx37; };
	if(161879>100){ let tem2p=(_E0FEjLQ5173(_E0Fx37,_E0FEJL81));} else{
	let te2emp=("================", _E0FEjLQ5173,_E0FUbkzz4313); }
}

        this.resetUI();
{
	let _E0FlO55=14498;
	let _E0FLovg2978=1928; let _E0F_089= 0;
	for(let ip=0; ip<3; ip++){
	_E0F_089+= ip + _E0FlO55*_E0FLovg2978;
	}
	let temp3=("===3=43df==", _E0FlO55,_E0FLovg2978,_E0F_089);
}
        cc.log("=========player===initUI===========", seatNo, g_SRZJHGameData.getSelfSeatNo());
    },
    resetUI(){
{
	let _E0FB3924=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FB3924);}
	let _E0FX0="E0Fg";
	let _E0FNdx4="E0FSymoz";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FX0);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FNdx4);}
	}
}
        this.speekNothing();
{
	let _E0Fp6=103734;
	let _E0Fu0977=15125; let _E0Ft209= 0;
	for(let ip=0; ip<4; ip++){
	_E0Ft209+= ip + _E0Fp6*_E0Fu0977;
	}
	let temp3=("===3=43df==", _E0Fp6,_E0Fu0977,_E0Ft209);
}
        this.showXiaZhuScore(false);
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this.showCardTypeTip(false);
{
	let _E0FsRf946=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FsRf946);}
	let _E0Fu694="E0FCpX";
	let _E0FZHh89="E0Fc";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fu694);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FZHh89);}
	}
}
        this.showUserInfo(false);
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,185196);
	}
}
        this.showBankerTip(false);
{
	let _E0Fd14=16;
	let _E0FF1425=146; let _E0FNMGL4653= 0;
	for(let ip=0; ip<3; ip++){
	_E0FNMGL4653+= ip + _E0Fd14*_E0FF1425;
	}
	let temp3=("===3=43df==", _E0Fd14,_E0FF1425,_E0FNMGL4653);
}
        this.showTotalScore(false,0);
        this.showTimeWaitTip(false);
        this.showTuoGuan(false);
{
	let _E0FP033=19;
	let _E0FWHaDw0675= [14,198,19];
	let _E0FiVY6204=false;
	let _E0FjrGt122= function(a, b){ return a + b -_E0FP033; };
	if(19>100){ let tem2p=(_E0FjrGt122(_E0FP033,_E0FiVY6204));} else{
	let te2emp=("================", _E0FjrGt122,_E0FWHaDw0675); }
}
        this.showReadyTip(false);
{
	let _E0FAF547=1699;
	let _E0FhR77594= [11538,116037,1699];
	let _E0FGB13978=false;
	let _E0F$bPh3= function(a, b){ return a + b *_E0FAF547; };
	if(1699>100){ let tem2p=(_E0F$bPh3(_E0FAF547,_E0FGB13978));} else{
	let te2emp=("================", _E0F$bPh3,_E0FhR77594); }
}
        this.showWaitStartTip(false);
        this.showLookCardTip(false, false, false);
{
	let _E0FBfFp61773=133;
	let _E0FHF_A024=14406; let _E0FHBWwG5= 0;
	for(let ip=0; ip<1; ip++){
	_E0FHBWwG5+= ip + _E0FBfFp61773-_E0FHF_A024;
	}
	let temp3=("===3=43df==", _E0FBfFp61773,_E0FHF_A024,_E0FHBWwG5);
}
        this._F0Fs68.resetUI();
    },
    getSeatNo(){
        return this._F0FBIf8;
    },
    getHandCard(){
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        return this._F0Fs68;
    },
    getHandCardPos(){
        let toNode = this.node.getChildByName("handcard");
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+197640;
	g_ItemManager.updateItem(197640,10984);
	}
}
        return toNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
    },
    showUserInfo(isVisible, name, score, headurl){
        let nameNode = this.node.getChildByName("name");
{
	let _E0Fsd5782=15;
	let _E0FQ63= [104,117,15];
	let _E0FkGnOh40=false;
	let _E0Fzz85= function(a, b){ return a + b /_E0Fsd5782; };
	if(15>100){ let tem2p=(_E0Fzz85(_E0Fsd5782,_E0FkGnOh40));} else{
	let te2emp=("================", _E0Fzz85,_E0FQ63); }
}
        let scoreNode = this.node.getChildByName("score");
{
	let _E0FKoKZ3735=111;
	let _E0FkPgbq14202=138; let _E0FPz7511= 0;
	for(let ip=0; ip<3; ip++){
	_E0FPz7511+= ip + _E0FKoKZ3735*_E0FkPgbq14202;
	}
	let temp3=("===3=43df==", _E0FKoKZ3735,_E0FkPgbq14202,_E0FPz7511);
}
        let faceNode = this.node.getChildByName("playerface");
{
	let _E0Fo033=136184;
	let _E0FVewY77374=148802; let _E0FEitA13= 0;
	for(let ip=0; ip<2; ip++){
	_E0FEitA13+= ip + _E0Fo033-_E0FVewY77374;
	}
	let temp3=("===3=43df==", _E0Fo033,_E0FVewY77374,_E0FEitA13);
}
        nameNode.active = isVisible;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,181913);
	}
}
        scoreNode.active = isVisible;
{
	let _E0FrKE85=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FrKE85);}
	let _E0FEOzDr75="E0Fypv";
	let _E0Fd433="E0Fzn";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FEOzDr75);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fd433);}
	}
}
        faceNode.active = isVisible;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+11;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(11);
	let temp=('=====>>>>', sid, "E0FW");
	}
}
        if(!isVisible) return ;
{
	let _E0FKmW2230=19241;
	let _E0Fff6= [104,137238,19241];
	let _E0Fi70805=false;
	let _E0FkA1= function(a, b){ return a + b -_E0FKmW2230; };
	if(19241>100){ let tem2p=(_E0FkA1(_E0FKmW2230,_E0Fi70805));} else{
	let te2emp=("================", _E0FkA1,_E0Fff6); }
}
        cc.log("=======showUserInfo=======", name, score, headurl);
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+182;
	g_ItemManager.updateItem(182,134407);
	}
}
        if(!name) name = "";
        if(!score) score = "0";
{
	let _E0FPLK713=134976;
	let _E0FjHc30=16231; let _E0Fl89= 0;
	for(let ip=0; ip<2; ip++){
	_E0Fl89+= ip + _E0FPLK713-_E0FjHc30;
	}
	let temp3=("===3=43df==", _E0FPLK713,_E0FjHc30,_E0Fl89);
}
        let nametext = nameNode.getComponent(cc.RichText);
{
	let _E0FqHa26=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FqHa26);}
	let _E0FdY$it47="E0Fc";
	let _E0Ff21="E0FeDVY";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FdY$it47);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Ff21);}
	}
}
        let scoretext = scoreNode.getComponent(cc.RichText);
        nametext.string = name;
{
	let _E0Fe161=145;
	let _E0FpfQw4090= [17,140658,145];
	let _E0FZMIhR23=true;
	let _E0FqsPtF45= function(a, b){ return a + b *_E0Fe161; };
	if(145>100){ let tem2p=(_E0FqsPtF45(_E0Fe161,_E0FZMIhR23));} else{
	let te2emp=("================", _E0FqsPtF45,_E0FpfQw4090); }
}
        scoretext.string = score+"";
{
	let _E0FZstz6603=139081;
	let _E0FY820= [12,15050,139081];
	let _E0FIZ9344=false;
	let _E0FPRA88772= function(a, b){ return a + b +_E0FZstz6603; };
	if(139081>100){ let tem2p=(_E0FPRA88772(_E0FZstz6603,_E0FIZ9344));} else{
	let te2emp=("================", _E0FPRA88772,_E0FY820); }
}

        faceNode.scaleY = 1;
{
	let _E0FKJD13=16;
	let _E0FemGk86= [18996,102341,16];
	let _E0FGGj7521=true;
	let _E0FBcuBh14= function(a, b){ return a + b -_E0FKJD13; };
	if(16>100){ let tem2p=(_E0FBcuBh14(_E0FKJD13,_E0FGGj7521));} else{
	let te2emp=("================", _E0FBcuBh14,_E0FemGk86); }
}
        faceNode.scaleX = 1;
{
	let _E0FMW6322=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FMW6322);}
	let _E0FQZYh955="E0FutpKU";
	let _E0FuM251="E0FlY";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FQZYh955);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FuM251);}
	}
}
        if (headurl && headurl.length > 0) {
            let toSprite = faceNode.getComponent(cc.Sprite);
{
	let _E0Fj49916=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fj49916);}
	let _E0FPMr7="E0FmeP_";
	let _E0FDgCl747="E0FjF";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FPMr7);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FDgCl747);}
	}
}
            let toType = "png";
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+1550;
	g_ItemManager.updateItem(1550,169);
	}
}
            if(headurl.indexOf(".jpg")){
{
	let _E0Fjnw738=11269;
	let _E0FgtlK30754=148506; let _E0Fr_46= 0;
	for(let ip=0; ip<2; ip++){
	_E0Fr_46+= ip + _E0Fjnw738+_E0FgtlK30754;
	}
	let temp3=("===3=43df==", _E0Fjnw738,_E0FgtlK30754,_E0Fr_46);
}
                toType = "jpg";
            }
{
	let _E0FTM21165=18528;
	let _E0Fb4192=180; let _E0FTLB0980= 0;
	for(let ip=0; ip<3; ip++){
	_E0FTLB0980+= ip + _E0FTM21165+_E0Fb4192;
	}
	let temp3=("===3=43df==", _E0FTM21165,_E0Fb4192,_E0FTLB0980);
}
            cc.loader.load({ type: toType, url: headurl }, (err, texture) => {
                if (!err) {
{
	let _E0FcLHT9489=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FcLHT9489);}
	let _E0FTKbm8115="E0FnIoGT";
	let _E0FXBQH56="E0Fjux";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FTKbm8115);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FXBQH56);}
	}
}
                    toSprite.spriteFrame = new cc.SpriteFrame(texture);
                }
            });
        }
    },
    showBankerTip(isDiZhu){
        let tipNode = this.node.getChildByName("dizhutip");
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+185;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(185);
	let temp=('=====>>>>', sid, "E0FJ");
	}
}
        tipNode.active = isDiZhu;
    },
    showXiaZhuScore(isVisible, score){
{
	let _E0FOkxmK85=111997;
	let _E0FPN681= [133,177,111997];
	let _E0Fh$9528=true;
	let _E0FBk_409= function(a, b){ return a + b -_E0FOkxmK85; };
	if(111997>100){ let tem2p=(_E0FBk_409(_E0FOkxmK85,_E0Fh$9528));} else{
	let te2emp=("================", _E0FBk_409,_E0FPN681); }
}
        cc.log("======showXiaZhuScore====", isVisible, score);
{
	if(window.g_ConfigManager){
	let _E0Fdmp_Q52005="E0FcWi";
	g_ConfigManager.setKey(_E0Fdmp_Q52005,"E0FcWi");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FcWi";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        let tipNode = this.node.getChildByName("choumanode");
{
	let _E0FBeCY46965=14;
	let _E0FON469= [13,116,14];
	let _E0FXsO2=true;
	let _E0FEPqr75= function(a, b){ return a + b *_E0FBeCY46965; };
	if(14>100){ let tem2p=(_E0FEPqr75(_E0FBeCY46965,_E0FXsO2));} else{
	let te2emp=("================", _E0FEPqr75,_E0FON469); }
}
        tipNode.active = isVisible;
        tipNode.stopAllActions();
        if(!isVisible) return;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,10);
	}
}
        tipNode.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(2, 1.05), cc.scaleTo(2, 0.95))));
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+10372;
	g_ItemManager.updateItem(10372,164);
	}
}
        tipNode.setLocalZOrder(100);
{
	let _E0FbGNj3=1206;
	let _E0Fy22679=18; let _E0FL02= 0;
	for(let ip=0; ip<4; ip++){
	_E0FL02+= ip + _E0FbGNj3+_E0Fy22679;
	}
	let temp3=("===3=43df==", _E0FbGNj3,_E0Fy22679,_E0FL02);
}
        let ctext = tipNode.getChildByName("score").getComponent(cc.Label);
{
	let _E0Fix46092=150;
	let _E0FU104=147; let _E0FSv13= 0;
	for(let ip=0; ip<1; ip++){
	_E0FSv13+= ip + _E0Fix46092*_E0FU104;
	}
	let temp3=("===3=43df==", _E0Fix46092,_E0FU104,_E0FSv13);
}
        if(!score) score = "0";
        ctext.string = score;
    },
    showTotalScore(isVisible, score){
{
	if(window.g_ConfigManager){
	let _E0FsTHE081="E0FL";
	g_ConfigManager.setKey(_E0FsTHE081,"E0FL");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FL";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        let tipNode = this.node.getChildByName("totalscore");
{
	let _E0FyYYt14894=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FyYYt14894);}
	let _E0FMM0740="E0FpusLV";
	let _E0FAt17471="E0FTr$N";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FMM0740);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FAt17471);}
	}
}
        tipNode.active = isVisible;
{
	let _E0FN78=107;
	let _E0FZIn1749= [107,15,107];
	let _E0FBb564=false;
	let _E0FJ804= function(a, b){ return a + b *_E0FN78; };
	if(107>100){ let tem2p=(_E0FJ804(_E0FN78,_E0FBb564));} else{
	let te2emp=("================", _E0FJ804,_E0FZIn1749); }
}
        if(!isVisible) return;
        tipNode.setLocalZOrder(100);
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        let ctext = tipNode.getComponent(cc.Label);
{
	let _E0F$5=18503;
	let _E0FI7123=14882; let _E0F_aOQ5733= 0;
	for(let ip=0; ip<3; ip++){
	_E0F_aOQ5733+= ip + _E0F$5/_E0FI7123;
	}
	let temp3=("===3=43df==", _E0F$5,_E0FI7123,_E0F_aOQ5733);
}
        if(!score) score = "0";
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+139;
	g_ItemManager.updateItem(139,150);
	}
}
        ctext.string = score+"";
    },
    showWaitStartTip(isVisible){
{
	let _E0FGz2565=116670;
	let _E0F_rDVm33= [10,155,116670];
	let _E0FhU58978=true;
	let _E0FYG78= function(a, b){ return a + b -_E0FGz2565; };
	if(116670>100){ let tem2p=(_E0FYG78(_E0FGz2565,_E0FhU58978));} else{
	let te2emp=("================", _E0FYG78,_E0F_rDVm33); }
}
        let tipNode = this.node.getChildByName("waitstarttip");
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+196;
	g_ItemManager.updateItem(196,12);
	}
}
        tipNode.active  = isVisible;
    },
    showLookCardTip(islook, isgiveup, isbipaifailed){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+146912;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(146912);
	let temp=('=====>>>>', sid, "E0Ffc");
	}
}
        let tipNode = this.node.getChildByName("lookcardtip");
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+162618;
	g_ItemManager.updateItem(162618,1474);
	}
}
        cc.log("======showLookCardTip=====11======", islook, isgiveup, isbipaifailed)
        if(!islook && !isgiveup && !isbipaifailed)
        {
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,108376);
	}
}
            tipNode.active = false;
{
	let _E0FP_hn4=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FP_hn4);}
	let _E0FDGqW978="E0FsO$";
	let _E0FbBf095="E0FMoI";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FDGqW978);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FbBf095);}
	}
}
            return ;
        }
{
	let _E0Fzb40=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fzb40);}
	let _E0FvSmev1745="E0FskJ";
	let _E0FLRcY661="E0Fcc";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FvSmev1745);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FLRcY661);}
	}
}
        tipNode.active = true;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1477;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1477);
	let temp=('=====>>>>', sid, "E0FE");
	}
}
        let loadurl = g_ConfigManager.getGlobalConfig("ZJHspeaktipPath")+"speak-yikanpai";
{
	let _E0FiW3=150;
	let _E0FmOrBb9= [17,11,150];
	let _E0FEg36=true;
	let _E0FI036= function(a, b){ return a + b +_E0FiW3; };
	if(150>100){ let tem2p=(_E0FI036(_E0FiW3,_E0FEg36));} else{
	let te2emp=("================", _E0FI036,_E0FmOrBb9); }
}
        if(isgiveup){
{
	let _E0Frnu727=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Frnu727);}
	let _E0FkZL4300="E0FleR_y";
	let _E0FnsQ8226="E0FiBqWA";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FkZL4300);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FnsQ8226);}
	}
}
            loadurl = g_ConfigManager.getGlobalConfig("ZJHspeaktipPath")+"speak-qipai";
        }else if(isbipaifailed){
{
	let _E0FVIl2697=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FVIl2697);}
	let _E0FqF9311="E0FRL";
	let _E0FVV66331="E0FXCeuc";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FqF9311);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FVV66331);}
	}
}
            loadurl = g_ConfigManager.getGlobalConfig("ZJHspeaktipPath")+"speak-bipaishibai";
        }
{
	let _E0FCT65=16;
	let _E0Fl_NtA566=12200; let _E0FWM661= 0;
	for(let ip=0; ip<1; ip++){
	_E0FWM661+= ip + _E0FCT65/_E0Fl_NtA566;
	}
	let temp3=("===3=43df==", _E0FCT65,_E0Fl_NtA566,_E0FWM661);
}
        let spNode = tipNode.getComponent(cc.Sprite);
        cc.loader.loadRes(loadurl, function(err, texture){
{
	let _E0Fs70=16242;
	let _E0Fxe80= [100822,15713,16242];
	let _E0FKzB7=true;
	let _E0FNH_M569= function(a, b){ return a + b -_E0Fs70; };
	if(16242>100){ let tem2p=(_E0FNH_M569(_E0Fs70,_E0FKzB7));} else{
	let te2emp=("================", _E0FNH_M569,_E0Fxe80); }
}
            spNode.spriteFrame = new cc.SpriteFrame(texture);
        });
    },
    showTimeWaitTip(isVisible){
{
	let _E0FkZdu05900=176743;
	let _E0FJi85=130; let _E0FIr15= 0;
	for(let ip=0; ip<2; ip++){
	_E0FIr15+= ip + _E0FkZdu05900-_E0FJi85;
	}
	let temp3=("===3=43df==", _E0FkZdu05900,_E0FJi85,_E0FIr15);
}
        if(this._F0FBIf8==g_SRZJHGameData.getSelfSeatNo()) isVisible = false;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1120;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1120);
	let temp=('=====>>>>', sid, "E0FxiWir");
	}
}
        let tipNode = this.node.getChildByName("timewaittip");
{
	let _E0FzBQ$$89=18;
	let _E0FunmS86539=10; let _E0FaE13= 0;
	for(let ip=0; ip<1; ip++){
	_E0FaE13+= ip + _E0FzBQ$$89*_E0FunmS86539;
	}
	let temp3=("===3=43df==", _E0FzBQ$$89,_E0FunmS86539,_E0FaE13);
}
        tipNode.active  = isVisible;
    },
    showTuoGuan(istuoguan){
{
	let _E0FrZ29943=1756;
	let _E0FTUbq29=13; let _E0FS41276= 0;
	for(let ip=0; ip<3; ip++){
	_E0FS41276+= ip + _E0FrZ29943+_E0FTUbq29;
	}
	let temp3=("===3=43df==", _E0FrZ29943,_E0FTUbq29,_E0FS41276);
}
        let tipNode = this.node.getChildByName("tuoguantip");
{
	if(window.g_ConfigManager){
	let _E0FuniiZ5651="E0FPgfi";
	g_ConfigManager.setKey(_E0FuniiZ5651,"E0FPgfi");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FPgfi";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        tipNode.active  = istuoguan;
    },
    showReadyTip(isVisible){
{
	let _E0F_o9=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0F_o9);}
	let _E0FQbTHj530="E0Fw";
	let _E0FlG9="E0FcwG";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FQbTHj530);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FlG9);}
	}
}
        let tipNode = this.node.getChildByName("readytip");
{
	let _E0Fv9074=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fv9074);}
	let _E0FjNaY24="E0Fd";
	let _E0FlR$40="E0FQPpED";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FjNaY24);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FlR$40);}
	}
}
        tipNode.active  = isVisible;
    },
    showCardTypeTip(isVisible, niutype){
{
	let _E0FN3=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FN3);}
	let _E0FOjyU36450="E0FTRat";
	let _E0Fb5="E0Funcm";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FOjyU36450);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fb5);}
	}
}
        cc.log("====showCardTypeTip=====", isVisible, niutype, this._F0FBIf8);
{
	let _E0Fbg280=16336;
	let _E0FJXUpb41=10; let _E0F_Zb9= 0;
	for(let ip=0; ip<2; ip++){
	_E0F_Zb9+= ip + _E0Fbg280-_E0FJXUpb41;
	}
	let temp3=("===3=43df==", _E0Fbg280,_E0FJXUpb41,_E0F_Zb9);
}
        let tipNode = this.node.getChildByName("niutypetip");
        tipNode.active = isVisible;
{
	let _E0FUfrV4458=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FUfrV4458);}
	let _E0Frr7="E0FB";
	let _E0Fy2137="E0FCD";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Frr7);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fy2137);}
	}
}
        if(!isVisible) return;
{
	let _E0FDDFZO67=1783;
	let _E0Fyjols9= [117,1742,1783];
	let _E0Fae4031=false;
	let _E0FD$FK1= function(a, b){ return a + b *_E0FDDFZO67; };
	if(1783>100){ let tem2p=(_E0FD$FK1(_E0FDDFZO67,_E0Fae4031));} else{
	let te2emp=("================", _E0FD$FK1,_E0Fyjols9); }
}
        let loadurl = g_ConfigManager.getGlobalConfig("ZJHcardtypetipPath")+"tip-ctype"+niutype;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,1045);
	}
}
        let spNode = tipNode.getComponent(cc.Sprite);
        cc.loader.loadRes(loadurl, function(err, texture){
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,113046);
	}
}
            spNode.spriteFrame = new cc.SpriteFrame(texture);
        });
    },
    /////////////////////////////////////////////////////////
    priSpeakThing(str, beilv){
{
	let _E0FHCfj05154=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FHCfj05154);}
	let _E0FfBFsM5555="E0FwMq";
	let _E0FmU46355="E0FhWE";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FfBFsM5555);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FmU46355);}
	}
}
        let loadurl = g_ConfigManager.getGlobalConfig("ZJHspeaktipPath")+str;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1927;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1927);
	let temp=('=====>>>>', sid, "E0FSl");
	}
}
        let tipNode = this.node.getChildByName("speaktip");
{
	let _E0FUw86=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FUw86);}
	let _E0FzHt009="E0FREcZG";
	let _E0Fs29699="E0FVhL";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FzHt009);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fs29699);}
	}
}
        tipNode.active = true;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+11111;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(11111);
	let temp=('=====>>>>', sid, "E0FB");
	}
}
        let spNode = tipNode.getComponent(cc.Sprite);
{
	let _E0F$X786=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0F$X786);}
	let _E0Fe42489="E0FvbI_";
	let _E0FMmsn9="E0Fsa";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fe42489);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FMmsn9);}
	}
}
        cc.loader.loadRes(loadurl, function(err, texture){
{
	let _E0FI83504=10;
	let _E0FG96024=18; let _E0FUK8140= 0;
	for(let ip=0; ip<2; ip++){
	_E0FUK8140+= ip + _E0FI83504*_E0FG96024;
	}
	let temp3=("===3=43df==", _E0FI83504,_E0FG96024,_E0FUK8140);
}
            spNode.spriteFrame = new cc.SpriteFrame(texture);
        });
    },
    speekNothing(){
        let tipNode = this.node.getChildByName("speaktip");
        tipNode.active = false;
    },
    speekBuQiang(){
{
	let _E0FZUhsH07104=1854;
	let _E0FOltI6=118; let _E0FjqUb51355= 0;
	for(let ip=0; ip<3; ip++){
	_E0FjqUb51355+= ip + _E0FZUhsH07104/_E0FOltI6;
	}
	let temp3=("===3=43df==", _E0FZUhsH07104,_E0FOltI6,_E0FjqUb51355);
}
        this.priSpeakThing("speak-buqiang");
    },
    speekQiangZhuang(){
{
	if(window.g_ConfigManager){
	let _E0F_0="E0Fk";
	g_ConfigManager.setKey(_E0F_0,"E0Fk");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0Fk";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
        this.priSpeakThing("speak-qiangz");
    },
    speekDingZhuang(){
        this.priSpeakThing("speak-dingz");
    },
    speekYouNiu(){
{
	let _E0FW29037=1464;
	let _E0FHlN595= [1162,18641,1464];
	let _E0FwqN40=true;
	let _E0FY2656= function(a, b){ return a + b *_E0FW29037; };
	if(1464>100){ let tem2p=(_E0FY2656(_E0FW29037,_E0FwqN40));} else{
	let te2emp=("================", _E0FY2656,_E0FHlN595); }
}
        this.priSpeakThing("speak-youniu");
    },
});
