
//邮箱、邮件
let prottab = {}
module.exports = prottab

//////////////////////////////////////////////////-
prottab.AMailBox_C2SQueryAllMail = 10  //查询自己的所有邮件
prottab.AMailBox_C2SReqReadMail = 11   //读取邮件

prottab.AMailBox_S2CQueryAllMail = 100	//查询自己的所有邮件

//////////////////////////////////////////////////-
/*
local C2SQueryAllMail = {
	
}
--[[
title = title,
content = content,
maxId = maxId,
stime = os.time(),
--]]
local S2CQueryAllMail = {
	mailtab = {}, --邮件列表，每个邮件里面内容如上
}
local C2SReqReadMail = {
	mailId = 0,	--读取邮件信息
}
*/