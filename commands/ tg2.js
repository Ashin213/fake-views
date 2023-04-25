/*CMD
  command:  tg2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: post link.

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("post", message)
Bot.runCommand("Api check")

