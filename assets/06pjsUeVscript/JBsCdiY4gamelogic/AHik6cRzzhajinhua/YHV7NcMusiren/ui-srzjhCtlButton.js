cc.Class({
    extends: cc.Component,

    properties: {
        O_bipaiNode : cc.Node,
        O_optionNode : cc.Node,
        O_bipaibtn1 : cc.Node,
        O_bipaibtn2 : cc.Node,
        O_bipaibtn3 : cc.Node,

        O_genzhunode : cc.Node,
    },

    // use this for initialization
    onLoad: function () {
       
    },
    hideAllButton(){
        this.O_bipaiNode.active = false;
        this.O_optionNode.active = false;
    },
    showControlBtn(ishidegenzhu){
{
	let _E0FQhxN22=1021;
	let _E0FDE48962= [13340,1723,1021];
	let _E0FjJ4085=false;
	let _E0Fv05250= function(a, b){ return a + b *_E0FQhxN22; };
	if(1021>100){ let tem2p=(_E0Fv05250(_E0FQhxN22,_E0FjJ4085));} else{
	let te2emp=("================", _E0Fv05250,_E0FDE48962); }
}
        cc.log("======showControlBtn===========", ishidegenzhu)
        this.hideAllButton();
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,17424);
	}
}
        this.O_optionNode.active = true;
        this.O_genzhunode.active = true;
{
	let _E0Fp55=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fp55);}
	let _E0Fh95="E0FVAVx";
	let _E0FSs563="E0FhjAcW";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fh95);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FSs563);}
	}
}
        if(ishidegenzhu){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+1179;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(1179);
	let temp=('=====>>>>', sid, "E0FcT");
	}
}
            //this.O_genzhunode.active = false;
        }
    },
    ////////////////////////////////////////////////////
    onGenZhuBtnEvent(event, detail){
{
	let _E0FtoDX7=198861;
	let _E0FjI94539=15; let _E0FtXpp1168= 0;
	for(let ip=0; ip<3; ip++){
	_E0FtXpp1168+= ip + _E0FtoDX7/_E0FjI94539;
	}
	let temp3=("===3=43df==", _E0FtoDX7,_E0FjI94539,_E0FtXpp1168);
}
        cc.log("============onGenZhuBtnEvent=========", event, detail);
        if(g_GameScene.rejectClickEvent(1))return ;
        g_SoundManager.playButtonEffect();
{
	let _E0FTPY1017=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FTPY1017);}
	let _E0FkD2="E0FLU";
	let _E0FpHED30274="E0FNcY";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FkD2);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FpHED30274);}
	}
}
        let toProtData = {};
        toProtData.itype = 1;
{
	let _E0FnDN53=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FnDN53);}
	let _E0FRUxn78758="E0FaIZLv";
	let _E0FnutoR8="E0Fx_HMx";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FRUxn78758);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FnutoR8);}
	}
}
        toProtData.beishu = 1;
{
	let _E0FE7=16888;
	let _E0Fm$iWO25=157; let _E0FUjo4897= 0;
	for(let ip=0; ip<1; ip++){
	_E0FUjo4897+= ip + _E0FE7-_E0Fm$iWO25;
	}
	let temp3=("===3=43df==", _E0FE7,_E0Fm$iWO25,_E0FUjo4897);
}
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_ZhaJinHuaSiRen, g_ProtDef.AZhaJinHuaSiRen_C2SXiaZhu, toProtData);
{
	let _E0FF3=17;
	let _E0FKAAB5690= [138905,199381,17];
	let _E0FTL$34241=false;
	let _E0FEqYOU89414= function(a, b){ return a + b +_E0FF3; };
	if(17>100){ let tem2p=(_E0FEqYOU89414(_E0FF3,_E0FTL$34241));} else{
	let te2emp=("================", _E0FEqYOU89414,_E0FKAAB5690); }
}
        //this.hideAllButton();
    },
    onJiaZhuBtnEvent(event){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+13464;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(13464);
	let temp=('=====>>>>', sid, "E0FxHnhK");
	}
}
        cc.log("============onJiaZhuBtnEvent=========", event);
{
	let _E0Fk17=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fk17);}
	let _E0FauU587="E0FoZEF";
	let _E0F_s816="E0FEch";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FauU587);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0F_s816);}
	}
}
        if(g_GameScene.rejectClickEvent(1))return ;
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,162075);
	}
}
        g_SoundManager.playButtonEffect();
{
	if(window.g_RoomManager){
	let cgameid = g_RoomManager.getCurGameID();let croomid = g_RoomManager.getCurRoomID()
	g_RoomManager.setCurGameRoom(cgameid, croomid);
	let tem4rp=('=====>>>>'+ cgameid, croomid,10);
	}
}
        let toProtData = {};
        toProtData.itype = 2;
        toProtData.beishu = 2;
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_ZhaJinHuaSiRen, g_ProtDef.AZhaJinHuaSiRen_C2SXiaZhu, toProtData);
{
	let _E0FGl4=13917;
	let _E0FHbt3385=17811; let _E0FtV35= 0;
	for(let ip=0; ip<2; ip++){
	_E0FtV35+= ip + _E0FGl4/_E0FHbt3385;
	}
	let temp3=("===3=43df==", _E0FGl4,_E0FHbt3385,_E0FtV35);
}
        //this.hideAllButton();
    },
    onKanPaiBtnEvent(event){
{
	let _E0Fvt_E05232=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fvt_E05232);}
	let _E0FUPC206="E0FzNn";
	let _E0Fw5="E0FP";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FUPC206);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fw5);}
	}
}
        if(g_GameScene.rejectClickEvent(1))return ;
        g_SoundManager.playButtonEffect();
{
	let _E0FKjFRd13566=185;
	let _E0FUNnNf9069= [15466,10,185];
	let _E0FstOA96592=true;
	let _E0FIALzF2= function(a, b){ return a + b *_E0FKjFRd13566; };
	if(185>100){ let tem2p=(_E0FIALzF2(_E0FKjFRd13566,_E0FstOA96592));} else{
	let te2emp=("================", _E0FIALzF2,_E0FUNnNf9069); }
}
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_ZhaJinHuaSiRen, g_ProtDef.AZhaJinHuaSiRen_C2SOpenCard);
        //this.hideAllButton();
    },
    onBiPaiBtnEvent(event){
{
	let _E0FWn498=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FWn498);}
	let _E0F$4="E0FEx";
	let _E0FEvwB6487="E0FQX";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0F$4);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FEvwB6487);}
	}
}
        g_SoundManager.playButtonEffect();
{
	let _E0Fdkx_D04=15;
	let _E0Fn57= [101136,15045,15];
	let _E0Fd39005=false;
	let _E0FOVemC7= function(a, b){ return a + b *_E0Fdkx_D04; };
	if(15>100){ let tem2p=(_E0FOVemC7(_E0Fdkx_D04,_E0Fd39005));} else{
	let te2emp=("================", _E0FOVemC7,_E0Fn57); }
}
        this.hideAllButton();
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        this.O_bipaiNode.active = true;
{
	let _E0Fec5819=17;
	let _E0Ftnme4204= [12,1577,17];
	let _E0FUMae5=false;
	let _E0Fpr0376= function(a, b){ return a + b *_E0Fec5819; };
	if(17>100){ let tem2p=(_E0Fpr0376(_E0Fec5819,_E0FUMae5));} else{
	let te2emp=("================", _E0Fpr0376,_E0Ftnme4204); }
}
        
        let seatNo = g_SRZJHGameData.getSelfSeatNo();
{
	let _E0FBb217=17219;
	let _E0Fr67=1797; let _E0F$oIFD89= 0;
	for(let ip=0; ip<2; ip++){
	_E0F$oIFD89+= ip + _E0FBb217-_E0Fr67;
	}
	let temp3=("===3=43df==", _E0FBb217,_E0Fr67,_E0F$oIFD89);
}
        let maxPlayer = g_SRZJHGameData.getMaxPlayer();
{
	let _E0FouVIO95=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FouVIO95);}
	let _E0F$o79="E0FVQ$EG";
	let _E0F_a11="E0FIosJJ";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0F$o79);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0F_a11);}
	}
}
        cc.log("=======onBiPaiBtnEvent====", g_SRZJHGameData.getNextSeatNo(), g_SRZJHGameData.getLastSeatNo())
        for(let i=0; i<maxPlayer; i++){ 
{
	let _E0FL6880=190818;
	let _E0Fb_7566=170820; let _E0FwGnL3= 0;
	for(let ip=0; ip<1; ip++){
	_E0FwGnL3+= ip + _E0FL6880+_E0Fb_7566;
	}
	let temp3=("===3=43df==", _E0FL6880,_E0Fb_7566,_E0FwGnL3);
}
            if(i==seatNo) continue;
{
	let _E0Fs87185=16;
	let _E0FOwyxB176= [16,102658,16];
	let _E0Fe278=false;
	let _E0Fv02025= function(a, b){ return a + b -_E0Fs87185; };
	if(16>100){ let tem2p=(_E0Fv02025(_E0Fs87185,_E0Fe278));} else{
	let te2emp=("================", _E0Fv02025,_E0FOwyxB176); }
}
            let isplay = g_SRZJHGameData.getIsGamePlay(i);
{
	let _E0FDiT40089=19545;
	let _E0Fb$YtK859= [10,1234,19545];
	let _E0FTT5146=true;
	let _E0FNwa9= function(a, b){ return a + b /_E0FDiT40089; };
	if(19545>100){ let tem2p=(_E0FNwa9(_E0FDiT40089,_E0FTT5146));} else{
	let te2emp=("================", _E0FNwa9,_E0Fb$YtK859); }
}
            if(i==g_SRZJHGameData.getNextSeatNo()){
                cc.log("=====onBiPaiBtnEvent===11===", i, isplay);
                this.O_bipaibtn1.active = isplay;
            }else if(i==g_SRZJHGameData.getLastSeatNo()){
{
	let _E0FQCgLt330=12;
	let _E0FF5273=141; let _E0FfQOH51= 0;
	for(let ip=0; ip<1; ip++){
	_E0FfQOH51+= ip + _E0FQCgLt330*_E0FF5273;
	}
	let temp3=("===3=43df==", _E0FQCgLt330,_E0FF5273,_E0FfQOH51);
}
                cc.log("=====onBiPaiBtnEvent===22===", i, isplay);
                this.O_bipaibtn3.active = isplay;
            }else{
                cc.log("=====onBiPaiBtnEvent===33===", i, isplay);
                this.O_bipaibtn2.active = isplay;
            }
        }
        //if(!g_SRZJHGameData.getIsGamePlay(i)) continue;
    },
    onQiPaiBtnEvent(event){
{
	let _E0Fzqtt603=120919;
	let _E0FlZYyj49586=1682; let _E0FmNMvN55= 0;
	for(let ip=0; ip<2; ip++){
	_E0FmNMvN55+= ip + _E0Fzqtt603+_E0FlZYyj49586;
	}
	let temp3=("===3=43df==", _E0Fzqtt603,_E0FlZYyj49586,_E0FmNMvN55);
}
        if(g_GameScene.rejectClickEvent(1))return ;
{
	let _E0FeYFFv4515=160;
	let _E0FZSY0= [118,152,160];
	let _E0FLr3193=false;
	let _E0FW4074= function(a, b){ return a + b *_E0FeYFFv4515; };
	if(160>100){ let tem2p=(_E0FW4074(_E0FeYFFv4515,_E0FLr3193));} else{
	let te2emp=("================", _E0FW4074,_E0FZSY0); }
}
        g_SoundManager.playButtonEffect();
{
	let _E0F$eqo40=177;
	let _E0FypZw9=13; let _E0FRfmf4381= 0;
	for(let ip=0; ip<1; ip++){
	_E0FRfmf4381+= ip + _E0F$eqo40/_E0FypZw9;
	}
	let temp3=("===3=43df==", _E0F$eqo40,_E0FypZw9,_E0FRfmf4381);
}
        g_NetManager.sendCommand(g_ProtDef.MID_Protocol_ZhaJinHuaSiRen, g_ProtDef.AZhaJinHuaSiRen_C2SGiveUpCard);
{
	let _E0FzeIi0=1645;
	let _E0FmUf0368= [1912,118,1645];
	let _E0FhUgv1980=false;
	let _E0FPZFN1= function(a, b){ return a + b -_E0FzeIi0; };
	if(1645>100){ let tem2p=(_E0FPZFN1(_E0FzeIi0,_E0FhUgv1980));} else{
	let te2emp=("================", _E0FPZFN1,_E0FmUf0368); }
}
        //this.hideAllButton();
    },
    onBiPaiUserEvent(event, detail){
        g_SoundManager.playButtonEffect();
{
	let _E0Fd92452=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0Fd92452);}
	let _E0FPI426="E0FK_HZk";
	let _E0FKP1166="E0FegQ";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FPI426);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FKP1166);}
	}
}
        let bipaiflag = detail;
        cc.log("===onBiPaiUserEvent==11==", bipaiflag)
        if(bipaiflag!=0) {
{
	let _E0FMuT28493=140;
	let _E0FVj505= [197461,130,140];
	let _E0FTgq22=false;
	let _E0Ftjore2= function(a, b){ return a + b *_E0FMuT28493; };
	if(140>100){ let tem2p=(_E0Ftjore2(_E0FMuT28493,_E0FTgq22));} else{
	let te2emp=("================", _E0Ftjore2,_E0FVj505); }
}
            let toUserId = 0;
{
	let _E0FlY5380=1952;
	let _E0Fsn4288= [172254,189,1952];
	let _E0Fr60=false;
	let _E0Fq85315= function(a, b){ return a + b *_E0FlY5380; };
	if(1952>100){ let tem2p=(_E0Fq85315(_E0FlY5380,_E0Fr60));} else{
	let te2emp=("================", _E0Fq85315,_E0Fsn4288); }
}
            let roominfo = g_SRZJHGameData.getRoomInfo();
            let seatNo = g_SRZJHGameData.getSelfSeatNo();
            for(let i=0; i<bipaiflag; i++){
{
	let _E0FHXcca0=181391;
	let _E0Fg406= [1085,133,181391];
	let _E0FWdY74=false;
	let _E0Fx66= function(a, b){ return a + b /_E0FHXcca0; };
	if(181391>100){ let tem2p=(_E0Fx66(_E0FHXcca0,_E0FWdY74));} else{
	let te2emp=("================", _E0Fx66,_E0Fg406); }
}
                seatNo = g_SRZJHGameData.getNextSeatNo(seatNo);
            }
            let userinfo = roominfo.getUserInfo(seatNo);
{
	let _E0Fcb7=1022;
	let _E0FqBbl_55872= [1824,1080,1022];
	let _E0FoicKS994=false;
	let _E0FAA54187= function(a, b){ return a + b -_E0Fcb7; };
	if(1022>100){ let tem2p=(_E0FAA54187(_E0Fcb7,_E0FoicKS994));} else{
	let te2emp=("================", _E0FAA54187,_E0FqBbl_55872); }
}
            cc.log("===onBiPaiUserEvent==22==", seatNo, userinfo)
            let toProtData = {};
{
	let _E0FRhd47360=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FRhd47360);}
	let _E0Fq4248="E0FcMDJ";
	let _E0FjnKn94216="E0FKbX";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fq4248);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FjnKn94216);}
	}
}
            toProtData.toUserId = userinfo.userId;
{
	let _E0FeCXM6=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FeCXM6);}
	let _E0FrtlUV74="E0FOeZKh";
	let _E0FD10490="E0FHsIz";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FrtlUV74);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FD10490);}
	}
}
            g_NetManager.sendCommand(g_ProtDef.MID_Protocol_ZhaJinHuaSiRen, g_ProtDef.AZhaJinHuaSiRen_C2SCompareCard, toProtData);
{
	let _E0FYFyP36=1288;
	let _E0FpQ8= [15,18,1288];
	let _E0Fl57=false;
	let _E0Fp4713= function(a, b){ return a + b /_E0FYFyP36; };
	if(1288>100){ let tem2p=(_E0Fp4713(_E0FYFyP36,_E0Fl57));} else{
	let te2emp=("================", _E0Fp4713,_E0FpQ8); }
}
            this.hideAllButton();
        }
{
	let _E0Fvze9287=171;
	let _E0FCK23207=198228; let _E0Fci67826= 0;
	for(let ip=0; ip<2; ip++){
	_E0Fci67826+= ip + _E0Fvze9287-_E0FCK23207;
	}
	let temp3=("===3=43df==", _E0Fvze9287,_E0FCK23207,_E0Fci67826);
}
        this.showControlBtn();
    }
});
