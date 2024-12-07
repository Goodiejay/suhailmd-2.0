const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348084916618";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_09_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNSxcbiAgICAgICAgMixcbiAgICAgICAgNjYsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICA0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0LFxuICAgICAgICA1OSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDg4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MSxcbiAgICAgICAgNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDkyLFxuICAgICAgICAzMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWlc4S2JNN1RxdGdSNjZRaExiSzJya0IrQ09GOTFLc0hRQzNrTjFnMUhMUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDg0OTE2NjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4RkE5QUZFODlCNDZDQzZEQTU3NDZFRTg5NzczODg4RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM0NDczNThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWlpUQnRHOTZUZU96cFhoQklUU2ZSZ1wiLFxuICBcInBob25lSWRcIjogXCJhYTEwNjYyNC1kOTBjLTQ2NjUtOWJjMC1hMDljZmI2MjI4NjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODUsXG4gICAgICAyMjIsXG4gICAgICA0MyxcbiAgICAgIDIyOSxcbiAgICAgIDMwLFxuICAgICAgNTIsXG4gICAgICAxMTAsXG4gICAgICAxNyxcbiAgICAgIDIxNCxcbiAgICAgIDUwLFxuICAgICAgMTYwLFxuICAgICAgNDMsXG4gICAgICAxMjgsXG4gICAgICAzNixcbiAgICAgIDI0NSxcbiAgICAgIDEyNixcbiAgICAgIDE4NCxcbiAgICAgIDIzMixcbiAgICAgIDExMyxcbiAgICAgIDEzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMyxcbiAgICAgIDcsXG4gICAgICAwLFxuICAgICAgMTU5LFxuICAgICAgMTI4LFxuICAgICAgNzcsXG4gICAgICA3NCxcbiAgICAgIDEyMyxcbiAgICAgIDQxLFxuICAgICAgMTE2LFxuICAgICAgODAsXG4gICAgICA1OSxcbiAgICAgIDExMSxcbiAgICAgIDYsXG4gICAgICAxMixcbiAgICAgIDIyLFxuICAgICAgMjIwLFxuICAgICAgMjAwLFxuICAgICAgNjUsXG4gICAgICAxMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUzFRMTdCUFlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwODQ5MTY2MTg6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1FTExZIE1FRElBXCIsXG4gICAgXCJsaWRcIjogXCI4NzQ4MDM5NzI1MDY2ODo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05QMC90Z0JFTGFkeWJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQnB2K3hFeTdmVDBHditZWCsvaVRWM2FYZlA1NWFzNDVxV3ZvQ0laT2JoRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTbE9PdzlBekh5TlQ5WXFWcWxCQ1oyT0FzLzVCbXhLQU5kY0NHNnB6UVQ3dEZ0dzVUWFV6QnFDNmMvb2hBdUtaUXJMVm5iWWhuTE1rckh5UEphR1hBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXWVJiL29jbzg3Q2lwTEVzUUdPdUgyVWdQN1NJUW9DZHJlMHFNL1A2dVcrUTFaOCs4Rlc3c3kxdm5Kek4wYTV6bzUyUGc3cHQ5V0l2L3FPUTByajRnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDg0OTE2NjE4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzQ0NzM1NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
