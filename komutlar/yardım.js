const { Discord, MessageEmbed } = require("discord.js");
const ayar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
let renkler = ["ORANGE", "GREEN", "BLUE"]
let yazı = (`Help | Yardım`)
let embed = new MessageEmbed()
.setAuthor(yazı)
.setDescription(`**${ayar.prefix}yardım** = Yardım Menüsünü Açar
**${ayar.prefix}erkek** = Erkek Kullanıcı Kaydeder
**${ayar.prefix}kadın** = Kadın Kullanıcı Kaydeder
**${ayar.prefix}isimler** = Etiketlenen Kişinin Eski İsimlerini Gösterir
**${ayar.prefix}stat** = Kayıt Toplamını Gösterir
**${ayar.prefix}topteyit** = Toplam Kayıt Sıralamasını Gösterir`)
.setColor(renkler)
.setFooter(`Developed by Losint`)
message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yardım', 'help'],
    permLevel: 0,
  }
  
  exports.help = {
        name: "yardım"
    
  }