/*CMD
  command:   Status
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer:  order id

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

 HTTP.get({url:"https://telesubs.com/api/v2?key=c2a2f7c9599e4fd2ee2668e465ec7fde&action=status&order="+message+"", success:"st2"})

