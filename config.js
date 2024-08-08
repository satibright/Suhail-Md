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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349131348254";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349131348254";





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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_14_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDcsXG4gICAgICAgIDYzLFxuICAgICAgICA3NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NixcbiAgICAgICAgMTc4LFxuICAgICAgICA4MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDgyLFxuICAgICAgICA0MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNpanpPTHUvYVBPNmNuVzhUbU9ZVEVzbUFZMmZoUDltd0s4NVcvaTRQbm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5rV2RIMFlkU1kyNS1ybVlDcm53NndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTI5NjJlMWUtOTEwMS00ZTgwLWE2ZGUtMzBmMDhhYTFhNDkwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI5LFxuICAgICAgMjEzLFxuICAgICAgNjMsXG4gICAgICA4OCxcbiAgICAgIDEzMixcbiAgICAgIDEzNCxcbiAgICAgIDAsXG4gICAgICAxOTksXG4gICAgICA4NCxcbiAgICAgIDgsXG4gICAgICAyMTksXG4gICAgICAxOTAsXG4gICAgICA1NyxcbiAgICAgIDcyLFxuICAgICAgMjUwLFxuICAgICAgOSxcbiAgICAgIDEyMCxcbiAgICAgIDU4LFxuICAgICAgMTU2LFxuICAgICAgMjQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OSxcbiAgICAgIDg3LFxuICAgICAgMTQ0LFxuICAgICAgMTE0LFxuICAgICAgMTM3LFxuICAgICAgMTgxLFxuICAgICAgMjMwLFxuICAgICAgMjE1LFxuICAgICAgNzEsXG4gICAgICAzLFxuICAgICAgMTY0LFxuICAgICAgMjM2LFxuICAgICAgMjE4LFxuICAgICAgMjUzLFxuICAgICAgMjUwLFxuICAgICAgMjQ4LFxuICAgICAgMjExLFxuICAgICAgMTQ2LFxuICAgICAgMTUwLFxuICAgICAgMjQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjQ4NFhEMjhFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTMxMzQ4MjU0OjkyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTI0MjEwNTQxODU2MDI6OTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEN6dnQ4S0VJQ3kxTFVHR0EwZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyWndLWTVpbnVQeTdOSnhYZVc3dTIzUzZmK1N5ZzJpbExWc0ZvQTBIendZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdSNUs4Z1BxZUYzUG4wUlhOckg0cFowUVl2ME44cWloeThkOXZTQ0hxZ0l2REphM0ZGejhaZm9OeXorYVV4bHdCRFd1Y1NZdHJ0VTJxUmNaMERIZ0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFOdmRmR3M1bmdnSWI3TWFPd2tBbW51b0M1ZWxVTllveGEvc21kMzMvS25Hc2tCaDR4QU9SeTRKVU5ndUpSdnZ1V3lNQ3VLSGRYbXRsekhsVURIbWdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzEzNDgyNTQ6OTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMTQ0NDUxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR0VXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHRVcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMUXNiSloweXREOFA0eHRNalRWbmVqMC9mMGxWUVByNE1BazNvMFdyc2pBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4ODQ2MDY0NDgsXCJjdXJyZW50SW5kZXhcIjoxMixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE2MzQ0MDg1OTRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
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
