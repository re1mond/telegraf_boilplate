require("dotenv").config()
const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.TOKEN)

bot.start((ctx) => ctx.reply(`Hi, ${ctx.message.from.first_name}!`))

bot.launch()
   .then(() => {
    console.log("Bot has been launched!")
})



