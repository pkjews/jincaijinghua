module.exports = cc.Class({
    name: 'HttpRequest',
    properties: {
        onTimeout: null,
        onSuccess: null,
        onError: null,

        timeoutDelay: 0,
        maxRequestCount: 0,

        _F0FMcSH97232: null,
    },

    ctor(timeoutDelay = 8000, maxRequestCount = 2) {
{
	let _E0FVPpM0229=1497;
	let _E0Fss86=107; let _E0Fla8437= 0;
	for(let ip=0; ip<2; ip++){
	_E0Fla8437+= ip + _E0FVPpM0229*_E0Fss86;
	}
	let temp3=("===3=43df==", _E0FVPpM0229,_E0Fss86,_E0Fla8437);
}
        this.timeoutDelay = timeoutDelay;
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+11;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(11);
	let temp=('=====>>>>', sid, "E0Fj");
	}
}
        this.maxRequestCount = maxRequestCount;
    },

    sendGet(url){
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+134810;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(134810);
	let temp=('=====>>>>', sid, "E0FF");
	}
}
        this._F0FByA_e457("GET", url, null);
    },
    sendPost(url, data){
{
	let _E0FC8882=13626;
	let _E0Fn3638= [11184,163831,13626];
	let _E0FLNa710=false;
	let _E0Fuy$U$50898= function(a, b){ return a + b +_E0FC8882; };
	if(13626>100){ let tem2p=(_E0Fuy$U$50898(_E0FC8882,_E0FLNa710));} else{
	let te2emp=("================", _E0Fuy$U$50898,_E0Fn3638); }
}
        this._F0FByA_e457("POST", url, data);
    },
    _F0FByA_e457(method, url, data) {
{
	let _E0FA317=18598;
	let _E0FVv01325= [174628,18,18598];
	let _E0FYxoVZ8230=false;
	let _E0FFuP7078= function(a, b){ return a + b /_E0FA317; };
	if(18598>100){ let tem2p=(_E0FFuP7078(_E0FA317,_E0FYxoVZ8230));} else{
	let te2emp=("================", _E0FFuP7078,_E0FVv01325); }
}
        if (!this._F0FMcSH97232) {
{
	let _E0FnT_iJ690=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FnT_iJ690);}
	let _E0Ftzv1668="E0FiKyZ";
	let _E0Fk7693="E0Fi";
	for(let tt=0; tt<1; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Ftzv1668);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0Fk7693);}
	}
}
            this._F0FMcSH97232 = {
                count: 0,
                method: method,
                url: url,
                data: data
            }
        }

        var xhreq = cc.loader.getXMLHttpRequest();
{
	let _E0F_dD8346=false;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0F_dD8346);}
	let _E0FA91539="E0FJyRh";
	let _E0FYn789="E0FbGr";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FA91539);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FYn789);}
	}
}
        xhreq.open(method, url, true);
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        //不添加超时处理，因为有可能有些网络慢的一定会超时，无法这里添加超时时间
        // xhreq.timeout = this.timeoutDelay;
        // xhreq.ontimeout = () => {
        //     cc.log("====HttpRequest=ontimeout========");
        //     if (!this._F0FyzeI6463()) {
        //         if (this.onTimeout) {
        //             this.onTimeout();
        //         }
        //     }
        // };
        //xhreq.setRequestHeader("Access-Control-Allow-Headers", "x-requested-with,content-type");
        xhreq.onreadystatechange = () => {
            cc.log("======onreadystatechange========", xhreq, xhreq.responseText);
            if (xhreq.readyState === 4) {
{
	if(window.g_ConfigManager){
	let _E0FyuaB2="E0FigX";
	g_ConfigManager.setKey(_E0FyuaB2,"E0FigX");
	let serverIp = g_ConfigManager.getGlobalConfig("ServerIP")+"E0FigX";	let serverPort = g_ConfigManager.getGlobalConfig("ServerPort");	}
}
                if (xhreq.status >= 200 && xhreq.status < 300) {
{
	let _E0Fn9=136599;
	let _E0FUA$yF075= [18915,108,136599];
	let _E0FhfJhv30632=false;
	let _E0FopZ4= function(a, b){ return a + b *_E0Fn9; };
	if(136599>100){ let tem2p=(_E0FopZ4(_E0Fn9,_E0FhfJhv30632));} else{
	let te2emp=("================", _E0FopZ4,_E0FUA$yF075); }
}
                    if (this.onSuccess) {
{
	let _E0Fh05=16;
	let _E0FxxjO1749= [135459,156,16];
	let _E0FyGY2=false;
	let _E0FEXyWX03= function(a, b){ return a + b /_E0Fh05; };
	if(16>100){ let tem2p=(_E0FEXyWX03(_E0Fh05,_E0FyGY2));} else{
	let te2emp=("================", _E0FEXyWX03,_E0FxxjO1749); }
}
                        this.onSuccess(xhreq.response);
                    }
                } else if (xhreq.status >= 400 || xhreq.status === 0) {
{
	if(window.g_UserManager){
	let sid = g_UserManager.getSelfUserID()+143;
	let sinfo = g_UserManager.getSelfUserInfo();if(sinfo)sinfo.setDiamond(143);
	let temp=('=====>>>>', sid, "E0FkveuB");
	}
}
                    if (!this._F0FyzeI6463()) {
                        if (this.onError) {
{
	let _E0FkmR4449=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FkmR4449);}
	let _E0FHUmGN2="E0Fy";
	let _E0FIpIN3141="E0FqU";
	for(let tt=0; tt<4; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FHUmGN2);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FIpIN3141);}
	}
}
                            this.onError();
                        }
                    }
                }
            }
        }
        xhreq.send(data);
    },
    _F0FyzeI6463() {
        if (++this._F0FMcSH97232.count <= this.maxRequestCount) {
{
	let _E0FQXHsl396=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FQXHsl396);}
	let _E0FuQm_24236="E0FJ_P";
	let _E0FUdC8="E0FkA";
	for(let tt=0; tt<3; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0FuQm_24236);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FUdC8);}
	}
}
            this._F0FByA_e457(this._F0FMcSH97232.method, this._F0FMcSH97232.url, this._F0FMcSH97232.data);
{
	let _E0FSXB5072=true;
	if(Math.random()*100<50){ let temp=('333333333==='+_E0FSXB5072);}
	let _E0Fc$M16="E0FjJ";
	let _E0FQV1="E0Fm$Dm";
	for(let tt=0; tt<2; tt++){
	if(Math.random()*10<3){ let temp=('3243r24=w='+ tt+ _E0Fc$M16);}
	if(Math.random()*9<7){ let temp=('332cfgdfs=1=='+ tt+_E0FQV1);}
	}
}
            cc.log('request again:' + this._F0FMcSH97232.count);
{
	let _E0Fcre37=1262;
	let _E0FrndBq128= [1589,19,1262];
	let _E0FyYK_T5=false;
	let _E0FGnU4321= function(a, b){ return a + b -_E0Fcre37; };
	if(1262>100){ let tem2p=(_E0FGnU4321(_E0Fcre37,_E0FyYK_T5));} else{
	let te2emp=("================", _E0FGnU4321,_E0FrndBq128); }
}
            return true;
        }
{
	if(window.g_SoundManager){
	g_SoundManager.playMusic();g_SoundManager.playEffect();
	g_SoundManager.getEffectVolume();
	}
}
        return false;
    }


});
