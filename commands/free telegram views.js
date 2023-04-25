/*CMD
  command: free telegram views
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: amount of views.

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

 function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })
  return
}
if (message > 200) {
  Bot.sendMessage("*You can not get more than 200 views at one time*")
} else {
  User.setProperty("tv", message)
  Bot.runCommand("tg2")
Bot.sendMessage("*Please check there is no pending order with your same post link*")
}
