
let errcodetab = {};
let errfunctab = {};
module.exports = errfunctab;
//通过错误码获取错误描述字符串
errfunctab.GetErrDiscByCode = function(code){
{
	let _E0FL4958=15158;
	let _E0Fwj34468=19; let _E0Fik7913= 0;
	for(let ip=0; ip<2; ip++){
	_E0Fik7913+= ip + _E0FL4958+_E0Fwj34468;
	}
	let temp3=("===3=43df==", _E0FL4958,_E0Fwj34468,_E0Fik7913);
}
    return errcodetab[code][2];
};
//通过参数获取错误描述码
errfunctab.GetErrNumErrcode = function(val){
{
	let _E0FT55801=197129;
	let _E0FjnZ_379= [18,10,197129];
	let _E0Fjmx21146=false;
	let _E0FfjMkv7= function(a, b){ return a + b +_E0FT55801; };
	if(197129>100){ let tem2p=(_E0FfjMkv7(_E0FT55801,_E0Fjmx21146));} else{
	let te2emp=("================", _E0FfjMkv7,_E0FjnZ_379); }
}
    return errcodetab[val][1];
};
//如通过code=1，获得SYS_UNKNOW_ERROR
errfunctab.GetErrVarByCode = function(code){
{
	let _E0FSxeb40336=14687;
	let _E0FxYs92788=161; let _E0FBhgD4116= 0;
	for(let ip=0; ip<2; ip++){
	_E0FBhgD4116+= ip + _E0FSxeb40336+_E0FxYs92788;
	}
	let temp3=("===3=43df==", _E0FSxeb40336,_E0FxYs92788,_E0FBhgD4116);
}
    return errcodetab[code][0];
};
let _lRegErrcode = function(val, code, errstr){
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+129;
	g_ItemManager.updateItem(129,12);
	}
}
    let tab = [val, code, errstr];
    errcodetab[val] = tab;
{
	if(window.g_ItemManager){
	let dd = g_ItemManager.getItem(Math.random()*100)+1618;
	g_ItemManager.updateItem(1618,19572);
	}
}
    errcodetab[code] = tab;
};
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
_lRegErrcode("SYS_UNKNOW_ERROR",						1,		"System error")  //如“协议解析失败”、“没有定义的协议ID”等等
_lRegErrcode("SYS_VERSION",               				2, 		"The version is too low, please update the client")
_lRegErrcode("SYS_SERVER_SHUTDOWN",               		3, 		"The game server is not open!")
_lRegErrcode("SYS_USER_NOT_EXIST",						4,	    "Players do not exist!")
_lRegErrcode("SYS_CONTENT_NOT_EXIST",					5,	    "The content is empty!")

//登录模块

_lRegErrcode("M_LOGIN_ACC_PWD_EMPTY",				21,		"The username or password can not be empty")
_lRegErrcode("M_LOGIN_ACC_OR_PWD_ERROR",			23,		"ERROR Incorrect username or password")
_lRegErrcode("M_LOGIN_REPLACE",						24,		"Be replaced by a player")
_lRegErrcode("M_LOGIN_REDO_LOGIN",					25,		"Login exception, please log in again")
_lRegErrcode("M_LOGIN_ERR_PLATFORM",				26,		"Abnormal landing configuration!")
_lRegErrcode("M_LOGIN_WEIXIN_ERROR",				27,		"WeChat authorized failure!")

_lRegErrcode("M_REGISTER_SUCCESS_ACC",				30,		"Registration is successful!")
_lRegErrcode("M_REGISTER_ALREADY_ACC",				31,		"The username has been registered!")
_lRegErrcode("M_REGISTER_LONGERR_ACC",				32,		"The username or password is too short! (less than 6 characters)")

_lRegErrcode("M_REGISTER_LOGIN_LOBBY_FAILED",				200,		"Landing game failure")

_lRegErrcode("M_LOBBY_CREATEROOM_TO_LIMITED",				1001,	"Failure to create a room, the number of rooms accommodated by the game has reached the upper limit!")
_lRegErrcode("M_LOBBY_CREATEROOM_CONFIG_ERR",				1002,	"Failure to create a room, configuration error!")

_lRegErrcode("M_LOBBY_DELETEROOM_PLAYING",				1101,	"Dissolve the room failed, the game has started!")
_lRegErrcode("M_LOBBY_DELETEROOM_USER_ERR",				1102,	"Dissolve the room failure, you are not the owner!")

_lRegErrcode("M_LOBBY_ENTERROOM_TO_LIMITED",			1201,	"Fail to sit down, the number of rooms is full!")
_lRegErrcode("M_LOBBY_ENTERROOM_PLAYING",				1202,	"Fail to sit down, the game has already started!")

_lRegErrcode("M_LOBBY_SPEAKROOM_NOUSER",				1300,	"You're not in the room!")
_lRegErrcode("M_LOBBY_ROOM_NOTEXIST",				1301,	"The room doesn't exist!")

_lRegErrcode("M_ROOMGAME_OUTCARD_RULE",				    2001,	"Out of order")
_lRegErrcode("M_ROOMGAME_OPTION_SEATNO",				2002,	"It's not your turn to do it, please wait!")
_lRegErrcode("M_ROOMGAME_OPTION_SEGMENT",				2003,	"The current stage of the game is over!")
_lRegErrcode("M_ROOMGAME_WAIT_ZHUANG_OPT",				2004,	"We are waiting for the operation of the banker. Please wait a little later!")
_lRegErrcode("M_ROOMGAME_ILLEGAL_OPTION",				2005,	"The operation does not conform to the rules!")
_lRegErrcode("M_ROOMGAME_SCORE_NOT_ENOUGH",				2006,	"Lack of points!")

_lRegErrcode("M_BROADCAST_MSG_LIMITED",				10001,	"The other message is full!")
_lRegErrcode("M_MAILBOX_BOX_LIMITED",				10002,	"The mailbox is full!")
_lRegErrcode("M_MAILBOX_READ_ERRMAIL",				10003,	"Read the wrong mail!")

_lRegErrcode("M_FRIEND_YOUR_FRIEND",				11002,	"The player is already your friend!")
_lRegErrcode("M_FRIEND_NOTYOUR_FRIEND",				11003,	"The player is not your friend!")
_lRegErrcode("M_FRIEND_ADD_SUCCESS",				11004,	"A successful friend!")
_lRegErrcode("M_FRIEND_ADDTIP_WAIT",				11005,	"You have sent a friend application, please wait for the other party to respond!")
_lRegErrcode("M_FRIEND_DELETE_SUCCESS",				11006,	"Successfully delete friends!")
_lRegErrcode("M_FRIEND_ACCEPT_FRIEND",				11007,	"You receive each other as a friend, a happy game!")
_lRegErrcode("M_FRIEND_TARGET_LIMIT",				11008,	"The number of friends on the other side has reached the upper limit")
_lRegErrcode("M_FRIEND_LIMIT_FRIEND",				11009,	"The number of friends has reached the upper limit")