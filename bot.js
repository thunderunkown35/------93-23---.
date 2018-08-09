const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`BOT: ${client.user.username} adı ile giriş yaptı!`);
});

client.on("ready", () => {
  console.log('[------------] Sohbet Ve Eglence [-------------]');
  console.log(`${client.guilds.size} tane sunucuya hizmet veriyor`);
  console.log(`${client.users.size} kullaniciya hizmet veriyor`);
  console.log(`${client.channels.size} kanala hizmet veriyor`);
  console.log("Prefix: " + prefix);
  console.log("Bot ID'si: " + client.user.id);
  console.log("Bot Isim: " + client.user.username);
  console.log('[------------] Sohbet Ve Eğlence [-------------]');
});

client.on('message', msg => {
  console.log(`LOG: S: ${msg.guild.name} M: ${msg.content} Y: ${msg.author.tag}`);
  if (msg.author.id === ayarlar.id) return;
  if (msg.author.bot) return;

  if (!msg.content.startsWith(prefix)) {
	  return;
  }
  if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.reply('❤Ping! **' + client.ping + '** ms');
  }
  if (msg.content.toLowerCase() === prefix + 'davet') {
    msg.reply('https://discordapp.com/api/oauth2/authorize?client_id=476292417839038464&permissions=8&scope=bot');
  }
//Koruma
client.on("message", msg => {
  if (msg.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g) && !msg.author.bot && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
    msg.delete(30).then(deletedMsg => {
      deletedMsg.reply(":x: Discord davet linki paylaştığını algıladık. Bu sunucu Sohbet Ve Eglence BOT tarafından korunmakta. :x: ").catch(e => {
        console.error(e);
      });
    }).catch(e => {
      console.error(e);
    });
  }
});
//Koruma
//temizleme
  if (msg.content.toLowerCase() === prefix + 'temizle') {
    msg.channel.bulkDelete(100);
    msg.channel.sendMessage("100 adet mesaj silindi😎");
  }
//temizleme
//yardım
  if (msg.content.toLowerCase() === prefix + 'yardım') {
    msg.channel.sendMessage("*Ben özel botum ve 7/24 açığım.İşte komutlarım ve özelliklerim ; \!davet = Davet linkimi gösterir. \!yardım = Bu menüyü açar. \!temizle = 100 adet mesaj siler. \!kaçcm = kaçcm olduğunu gösterir.\!beniseviyormusun = seni nekadar çok sevdiğini gösterir. \!ping = Pingimi gösterir.\!bilardo = bilardo oynarsın \Ayrıca Bot Sunucuya Geldiğinde Otomatik Olarak Reklam Koruması Aktif Olur. \Bu bot  ByGold#3095tarafından yapılmıştır.*");
  }
	
	if (msg.content.startsWith("!konuştur")) {
   if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.reply("Yetkin yok! Gerekli yetki: `MANAGE_MESSAGES`");
     msg.delete();
     let args = msg.content.split(" ").splice(1);
     let say = args.join(" ");
     msg.channel.send(msg.author.username + ": " + say);
  }

	client.on('message', message => {
if (message.content.toLowerCase() === prefix + "zekam") {
    var sans = ["11", "15", "20", "24", "28", "31", "39", "45", "49", "54", "58", "63", "67", "77", "73", "84", "80", "83", "96", "94", "99", "Albert Einstein mısın krdşm"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Zekan___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});

	client.on("message", message => {
    if (message.content.toLowerCase() === prefix + "sunucubilgi") {
        const embed = new Discord.RichEmbed()
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Sunucu Adı:', message.guild.name)
    .addField('Sunucu ID:', message.guild.id)
    .addField('Ana kanal:', message.guild.defaultChannel)
    .addField('Sunucu Bölgesi:', message.guild.region)
    .addField('Üye sayısı:', message.guild.memberCount)
    .addField('Sahibi:', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('Kanal sayısı:', message.guild.channels.size)
    .addField('Oluşturulma tarihi:', message.guild.createdAt)
            .setColor("RANDOM")

        return message.channel.sendEmbed(embed)
    }
    
    if (message.content.toLowerCase() === prefix + "botbilgi") {
        const embed = new Discord.RichEmbed()
            .addField("Bot Sahibi", `<@430011871555223553>`, true)
            .addField("Version", "0.0.1", true)
            .addField("Toplam Sunucu Sayısı", client.guilds.size, true)
            .addField("Toplam Kullanıcı Sayısı", client.users.size, true)
            .addField("Toplam Kanal Sayısı", client.channels.size, true)
            .addField("Kitaplık Türü", "discord.js")
            .setColor("RANDOM")
        return message.channel.sendEmbed(embed)
    }
});
		
  if (msg.content === '!beniseviyormusun') {
   	if (Math.floor((Math.random() * 15) + 1) === 1) {
   		msg.reply('%90😍');
   	}else if (Math.floor((Math.random() * 15) + 1) === 2) {
   		msg.reply('%0😍');
   	}else if (Math.floor((Math.random() * 15) + 1) === 3) {
   		msg.reply('%20😍');
   	}else if (Math.floor((Math.random() * 15) + 1) === 4) {
   		msg.reply('%50😍 :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 5) {
   		msg.reply('%70😍');
   	}else if (Math.floor((Math.random() * 15) + 1) === 6) {
   		msg.reply('%80😍');
   	}else if (Math.floor((Math.random() * 15) + 1) === 7) {
   		msg.reply('%95😍');
   	}else if (Math.floor((Math.random() * 15) + 1) === 8) {
   		msg.reply('%81😍');
   	}else if (Math.floor((Math.random() * 15) + 1) === 9) {
   		msg.reply('%50😍');
   	}else if (Math.floor((Math.random() * 15) + 1) === 10) {
   		msg.reply('%35😍');
   	}else if (Math.floor((Math.random() * 15) + 1) === 11) {
   		msg.reply('Kanka Durya Sonra Seversin Yoruldum.');
   	}else if (Math.floor((Math.random() * 15) + 1) === 12) {
   		msg.reply('%100😍');
   	}else if (Math.floor((Math.random() * 15) + 1) === 13) {
   		msg.reply('%1😍');
   	}else if (Math.floor((Math.random() * 15) + 1) === 14) {
   		msg.reply('%99😍');
  	}else if (Math.floor((Math.random() * 15) + 1) === 15) {
   		msg.reply('%3😍');
   	}
  }

  if (msg.content === '!kaçcm') {
   	if (Math.floor((Math.random() * 15) + 1) === 1) {
   		msg.reply('============> 12cm');
   	}else if (Math.floor((Math.random() * 15) + 1) === 2) {
   		msg.reply('Yeter Yeter Anlıyorum Seni Joni Sins Olmaya Çalışıyorsun Biliyorum.');
   	}else if (Math.floor((Math.random() * 15) + 1) === 3) {
   		msg.reply('=============>  13cm');
   	}else if (Math.floor((Math.random() * 15) + 1) === 4) {
   		msg.reply('================> 15cm');
   	}else if (Math.floor((Math.random() * 15) + 1) === 5) {
   		msg.reply('=========> 9cm');
   	}else if (Math.floor((Math.random() * 15) + 1) === 6) {
   		msg.reply('========> 8cm');
   	}else if (Math.floor((Math.random() * 15) + 1) === 7) {
   		msg.reply('=======> 7cm');
   	}else if (Math.floor((Math.random() * 15) + 1) === 8) {
   		msg.reply('==> 2cm');
   	}else if (Math.floor((Math.random() * 15) + 1) === 9) {
   		msg.reply('======> 6cm');
   	}else if (Math.floor((Math.random() * 15) + 1) === 10) {
   		msg.reply('=> 1cm ');
   	}else if (Math.floor((Math.random() * 15) + 1) === 11) {
   		msg.reply('Yeter Kanka Abazamasınya?');
   	}else if (Math.floor((Math.random() * 15) + 1) === 12) {
   		msg.reply('==========> 10Cm');
   	}else if (Math.floor((Math.random() * 15) + 1) === 13) {
   		msg.reply('=====> 5cm');
   	}else if (Math.floor((Math.random() * 15) + 1) === 14) {
   		msg.reply('====> 4cm');
  	}else if (Math.floor((Math.random() * 15) + 1) === 15) {
   		msg.reply('===> 3cm');
   	}
  }
  
  if (msg.content === '!bilardo') {
   	if (Math.floor((Math.random() * 10) + 1) === 1) {
   		msg.reply('Vurduuu,ve siyah topu deliğe attı.🎱!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 2) {
   		msg.reply('Vurduuu,Ve Tüm Topları Deliğe Soktu🎱 ');
   	}else if (Math.floor((Math.random() * 15) + 1) === 3) {
   		msg.reply('Hadi Son 1 Topun Kaldı Atarsın Bu Topu🎱');
   	}else if (Math.floor((Math.random() * 15) + 1) === 4) {
   		msg.reply('Hadi Son 5 Topun Kaldı Atarsın Bu Topu Sen🎱');
   	}else if (Math.floor((Math.random() * 15) + 1) === 5) {
   		msg.reply('Hadi Son 4 Topun Kaldı Atarsın Bu Topu Sen🎱');
   	}else if (Math.floor((Math.random() * 15) + 1) === 6) {
   		msg.reply('Ehbe Kardeşim Biraz Dikkatli Olsana Beyaz Topu Attın🎱');
   	}else if (Math.floor((Math.random() * 15) + 1) === 7) {
   		msg.reply('Helal Lan Sana Tüm Topları Deliğe Soktun🎱👏');
   	}else if (Math.floor((Math.random() * 15) + 1) === 8) {
   		msg.reply('Ben Pes Ediyorum Oynamaya Korkuyorum🎱');
   	}else if (Math.floor((Math.random() * 15) + 1) === 9) {
   		msg.reply('Ehbe Kardeşim Bkraz Dikkatli Olsana Rakibinin Topunu Attın Deliğe🎱');
   	}else if (Math.floor((Math.random() * 15) + 1) === 10) {
   		msg.reply('Ve Sen Kazandın Bu Maçı Tebrikler👏');
   	}
  }

  if (msg.content === 'naber') {
   	msg.reply('iyi kanka sen?');
  }

  if (msg.content === 'adamsın') {
   	msg.reply('adamsın sende kanka');
  }

  if (msg.content === 'selamın aleyküm') {
   	msg.reply('ve aleyküm selam hosgeldin iyi oyunlar🌷');
  }
   
  if (msg.content === 'günaydın') {
   	msg.reply('saol bro sanada günaydın');
  }

  if (msg.content === 'iyi geceler') {
   	msg.reply('saol kankam sanada iyi geceler');
  }


  

  if (msg.content === 'güle güle') {
   	msg.reply('Nereye Dur Gitme Ben Sensiz Ne Yaparım.');
  }

		
});

client.login(ayarlar.token);
