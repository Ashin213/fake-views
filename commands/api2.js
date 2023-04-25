/*CMD
  command: api2
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

 var user_link = Libs.commonLib.getNameFor(user) 
var result = JSON.parse(content)
var id = result.order
var button= [{ title:"Check ✅ Status", command: "Status"}]
Bot.sendInlineKeyboard(button,"your order id is "+id+"")
Api.sendMessage({chat_id:"@Tg_views_by_"bot.name+"",text:"*User="+user_link+"\norder id: "+id+"\nViews by @"+bot.name+"*",parse_mode: "Markdown",disable_web_page_preview:true})

