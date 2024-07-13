const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_42_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIwLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDU5LFxuICAgICAgICA4LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDcxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk4LFxuICAgICAgICA5MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3LFxuICAgICAgICAzOSxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTksXG4gICAgICAgIDgwLFxuICAgICAgICA2MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDU0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NixcbiAgICAgICAgMTM1LFxuICAgICAgICA3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaUhzS0FsNEk5dVJBbm1zWUlKWS9GVWs1M1JNMU1uYWp0c1JtN1hPeURTcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicjZ6R1NYQm5RNGlVRGlkU3o5dlJqZ1wiLFxuICBcInBob25lSWRcIjogXCI1MjMzODI4YS03OTc0LTRhNGYtODc1Ni0yYmFmMDY4MGJhYzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg4LFxuICAgICAgMTM2LFxuICAgICAgMTUwLFxuICAgICAgODgsXG4gICAgICA1NSxcbiAgICAgIDE5NSxcbiAgICAgIDIzNSxcbiAgICAgIDYxLFxuICAgICAgMjQzLFxuICAgICAgNTgsXG4gICAgICAxMzMsXG4gICAgICAzMyxcbiAgICAgIDk4LFxuICAgICAgMTk0LFxuICAgICAgMTY5LFxuICAgICAgNzgsXG4gICAgICAxMjgsXG4gICAgICAyMjgsXG4gICAgICA0MCxcbiAgICAgIDU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MSxcbiAgICAgIDUsXG4gICAgICA0NCxcbiAgICAgIDEzNSxcbiAgICAgIDc5LFxuICAgICAgMjMxLFxuICAgICAgMTI3LFxuICAgICAgMjM0LFxuICAgICAgOTAsXG4gICAgICAxODksXG4gICAgICAzOCxcbiAgICAgIDI1NCxcbiAgICAgIDEyMixcbiAgICAgIDIyLFxuICAgICAgMjE3LFxuICAgICAgNzQsXG4gICAgICA4NSxcbiAgICAgIDcsXG4gICAgICA0MixcbiAgICAgIDEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRSRVpKRTlSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDMxMjI2MTkxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCI1N3ZcIixcbiAgICBcImxpZFwiOiBcIjEwOTM4MDE1MDIzOTQxMToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BUaGxxY0ZFT2YreHJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibDNmL0RKek1kS1ZKMldIMGdxeTNwcElKcXYvZkVCUGhKYy9YOEx1VG9uOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1dUI1ODJXTGZKaDZQZFRpM0FveFQ1U2t2NmNmSVNyUW0wL3RXWWJVamprYnlwN0ZZSU5oMDg0ekdmc2krWHVvVStCN21zaUI1dFdKakQ0K0xNZmtBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzbFlicmN6Y3RrWUZPWWgvUXZiR2Nub05iMk8zemhLeUV5ZHI3bFkvUnNldnhCSHFiMitVdmlQSXJFRTh5ZlF6SVJ4TkRXSXBTVTBmL2ZhZlVMVmxoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDMxMjI2MTkxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODI3NzU0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR0ZHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHRkcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuWFpsSnRRL3lweUpsdlJkTWxlYVIxTUlNV2M4bDE3MndQQ3h6SXRCNWF3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MjQzMzkxODgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDgyNzc1ODY2OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
