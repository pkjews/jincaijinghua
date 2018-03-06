
console.log("============require======include=====================");
let SocketClient  = require("SocketClient");

window.g_RoomManager = require("RoomManager"); //房间信息管理
window.g_UserManager = require("UserManager"); //用户信息管理
window.g_ItemManager = require("ItemManager"); //物品管理器
window.g_ConfigManager = require("ConfigManager"); //本地配置数据
window.g_SoundManager = require("SoundManager");    //音频管理器
window.g_NetManager = new SocketClient(); //网络连接管理
window.g_ProtDef = require("mprotocol"); //协议模块和协议的定义

window.g_GameScene = null; //当前场景得全局句柄