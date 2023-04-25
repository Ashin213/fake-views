/*CMD
  command: st2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var r = JSON.parse(content) 
var oid= r.status
var rem= r.remains
Bot.sendMessage("*status:"+oid+"\nRemains:"+rem+"*) 
