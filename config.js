const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || 254795297855 '  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'maxdavid126@gmail.com'
global.github = 'https://github.com/Xcelsama/STAR-MD'
global.location = 'Lahore pakistan'
global.gurl = 'https://instagram.com/alex_david/' // add your username
global.sudo = process.env.SUDO || "2347045035241"
global.devs = '2347045035241'
global.website = 'https://github.com/Xcelsama/STAR-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/eeb0f646ee3526196c988.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUdPUThXNEY0M2lkak12YUtCbGxTUk9JMTVXVHdDcEJtVHc4WnE5Mkoybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzI2ZXU5bHNkNkt2aDZ1aHgwMXBydFFZeksxRWlxVFh5U1RRWnpEZDBobz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSjU5bm8wbTZXaWN4VXQzSk1hc25UVjNNS3B4dnJBaU9SWUdta1BiN0dvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGeDJoVGU3M3B5bXhCSklTZmpvb0dZbkxEN3dWRUpkQjgvQ2FmTGtZWlNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndQcFNaajdJK1ovMTFlc3pZTU82V2Y1YWtwaEd2d3dCMlBFYlFldWEwbm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5DSk1sL2ZJK2ZUeWxHRzRUWHZ0WnF4djJNbXRJQTNldkt4RTFxTEduRDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkxNYndOU3lrOFZ2UmN5NGdVdUh4ZzZoTFMvVjRWRmQxZEROTlhFWWkwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjZxNmFCTjRiZkh0Y2hjZ3JEaWRmc3ZsTkxZR1o4Z2RvM0pQZVMrQUIwWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InF2T3NGRzlnMTFlR2dCNDV5a2dFL3Q0TnFraDZnM3dRNTlGR3NnejVGQW5idzkzTTk4Y2ZhMzgrdDltY3JudTV4WTBDQ21FMjNBaENYZCszbVMreERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjgsImFkdlNlY3JldEtleSI6InZMRzIwZEtFMmtFeHhURGVOZThhRDNiM0pmSkFLMTJLMnBNWWpRRmJJdjQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkxPWmVoUFVTUTVlQUpXaVRPSDY3LXciLCJwaG9uZUlkIjoiMmFhMzE0ZTctZTZhYS00M2U4LTkyY2MtNTI2M2E2NTY2ZmE0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikg3Q0RCU09mblZxbXhoczBFQjN4RzFxOGlaTT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEJNOURocExDaVBUK1ljc3hQcEdsc0k5NzhNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUG5FK08wSEVPUysySzhHR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRnplNkJSaDFZTU1tSlhub3JXRFE2aEUxMS9Oa01Hbi9VRS81QURSQlRrVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS1JTd1ZmVEFFNDNzdkZnMmRLVHlqOWRxVHRobk00dDUvWkpNT2VLMCtzSm5LcWtjbzhndld5RGU2VHBSQmQ4YVRhcmY3ODZIVllTMGNTN29xOUdKQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6InFIM2t5T0NzOUc5SVBoNEFhUnJqditHTlhzdFBlK3J0aVhDRHdiUnFzbmVKeG84emFtb04zL1Y2UkNOYzhPb2xhcTlzOE1BSU4yS2J5UXhBUlVXWUN3PT0ifSwibWUiOnsiaWQiOiIyNTQ3OTUyOTc4NTU6MzVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ0hBRFdJQ0sgSE9SQUNFIOKcqPCfkqsifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzk1Mjk3ODU1OjM1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJjM3VnVVlkV0RESmlWNTZLMWcwT29STmRmelpEQnAvMUJQK1FBMFFVNUYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTA2Mjg3MTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT1VWIn0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'CHADWICK MD',
  packname:  process.env.PACK_NAME || 'MADE BY EXCEL ',
  
  botname:   process.env.BOT_NAME === undefined ? "CHADWICK MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'CHADWICK HORACE ' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '254' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚂𝚃𝙰𝚁-𝙼𝙳•* ",   //*『sᴜʙsᴄʀɪʙᴇ •  ᴛᴇᴄʜ x』*\n https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'STAR',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
