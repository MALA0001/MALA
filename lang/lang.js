const ms = require('ms');

exports.run = async (client, message, args) => {

    const db = require('quick.db')

    const config = (`../config/bot.js`)

    let language = db.fetch(`lang_${message.guild.id}`)

    if (language === null) language = config.basiclang

    const lang = (`../lang/${language}.js`)

    if (!args[0]) return message.channel.send("Veuillez spécifier une langue `en`, `fr`")

    if (args[0] === "fr") {

        if (!message.member.hasPermission("MANAGE_CHANNELS")) {
            return message.channel.send(lang.lang.perms)
        }

        if (language === "fr") return message.channel.send(lang.lang.err)

        db.set(`lang_${message.guild.id}`, "fr")

        message.channel.send("Je parle à présent Français sur ce serveur.")

    }

    if (args[0] === "en") {

        if (!message.member.hasPermission("MANAGE_CHANNELS")) {
            return message.channel.send(lang.lang.perms)
        }

        if (language === "en") return message.channel.send("")

        db.set(`lang_${message.guild.id}`, "en")

        message.channel.send("I now speak English on this server.")

    }

}