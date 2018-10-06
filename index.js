const Discord = require("discord.js");
const client = new Discord.Client();
var schedule = require('node-schedule-tz');
client.login('NDc2MzQ0MTMzOTcyMjYyOTI4.Dk44RQ.VdPES2YiOT2i0bWVEOkf6wwOFC0');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('fait des COOKIES');
});








client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', message => {
if(message.author.id != client.user.id) {
  const sty = [ "Xd",
                  'XD',
                  'xd',
                  "xD",
                  "Trop drole :joy:",
      ];

  const swearWords = ["XD", "Xd", "xD", "xd"];

  

if( swearWords.some(word => message.content.includes(word)) ) {

  const chance = ["2"];
  
  const yut = Math.floor((Math.random() * 6) + 0)

  if ( chance > yut ) {

  var result = Math.floor((Math.random() * sty.length) + 0);
  message.reply(sty[result])
  .catch(console.log(yut));
  
  }else {
   console.log(yut);
   }
}
}
})

client.on('message', message => {
  if (message.content.includes("Le Manga c'est de la littérature")) {

    const chance = ["1"];

    const yut = Math.floor((Math.random() * 6) + 0)

    const blague = [ "Tg le manga c'est réelement de la littérature",
                      "Je t'emmerde connasse \nCordialement, La direction", 
                      "Mais c'est que c'est rigolo, DEBILE !",
                      "T'a vraiment un humour de merde ma pauvre"
     ];

    var result = Math.floor((Math.random() * blague.length) + 0);

    if ( chance > yut ) {

      message.reply(blague[result])

    }
  }
})

client.on('message', message => {
  if (message.content.includes("raconte", "blague")) {

    const blague = [ "C'est l'histoire d'un pinguin qui respire par le cul, il s'assoie et il meurt.",
                     "Qu'elle est la différence entre un arbre et un avion ? \nBen jsais pas :/",
                     "Comment appele-t'on une maison remplie de chats ?\nUn terrain minée",
     ];

    var result = Math.floor((Math.random() * blague.length) + 0);

    message.reply(blague[result])
   }
})



//=============================================[TIME MESSAGE ZONE]=============================================//

//==========[MATIN]==========//

var ruleName = new schedule.RecurrenceRule();
ruleName.hour = 19;
ruleName.minute = 00;
ruleName.tz = 'CET';

var r = schedule.scheduleJob(ruleName, function() {

  const faim1 = [ "J'ai faim !!!!",
                  "c'est quand qu'on mange ?",
                  "Quelqu'un à des cookies :cookie:?",
                  "MANGER !!!!!!!!",
  ];

  const chance = ["2"];
  
  const yut = Math.floor((Math.random() * 4) + 0)

  

    var result = Math.floor((Math.random() * faim1.length) + 0);

    client.channels.find("name", "general").send(faim1[result])
  
})



//=============================================[END TIME MESSAGE ZONE]=============================================//