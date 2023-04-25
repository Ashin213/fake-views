/*CMD
  command: Api check
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

var post = User.getProperty("post")
var tv = User.getProperty("tv")
HTTP.get({
  url:
    "https://telesubs.com/api/v2?key=c2a2f7c9599e4fd2ee2668e465ec7fde&action=add&service=89&link=" +
    post +
    "&quantity="+tv+"",
  success: "api2"
})

