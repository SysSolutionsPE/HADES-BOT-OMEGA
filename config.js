import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.owner = [
  ['51902679067', 'CREADOR', true],
  ['51902679067', 'CREADOR', true],
  ['51902679067', 'CREADOR', true],
  ['51902679067', 'CREADOR', true]
  
];

global.suittag = ['51902679067'];
global.prems = ['51902679067'];

global.packname = '乂SysSolutions乂';
global.author = '©SysSolutions﹏✍';
global.vs = '1.10.90';
global.version = vs
global.gt = '乂SysSolutions乂';
global.hadesbot = gt
global.yt = 'https://youtu.be/c/SysSolutionsPeru';
global.youtube = yt
global.ig = 'https://www.instagram';
global.hadesig = ig
global.md = 'https://github.com/SysSolutionsPE/HADES-BOT-OMEGA.git';
global.botxdf = md
global.nn = 'https://whatsapp.com/channel/0029Va6cqdDHQbS1VZH2VS1e';
global.nngrupo = nn
global.nnn = 'https://whatsapp.com/channel/0029Va6cqdDHQbS1VZH2VS1e';
global.nnngrupo = nnn
global.paypal = 'https://pay'
global.donar = paypal
global.rg = '*🍀ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ✨*';
global.resultado = rg
global.ag = '*⚠️ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ⚠️*';
global.advertencia = ag
global.iig = '*📌ɪɴғᴏʀᴍᴀᴄɪᴏɴ*✨';
global.informacion = iig
global.fg = '*❌ʟᴏ sᴇɴᴛɪᴍᴏs sᴇ ʜᴀ ɢᴇɴᴇʀᴀᴅᴏ ᴜɴ ᴇʀʀᴏʀ ᴠᴜᴇʟᴠᴇ ɪɴᴛᴇɴᴛᴀʀ❌*';
global.fallo = fg
global.mg = '*❗ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ʟᴏ ʜᴀ ᴜsᴀᴅᴏ ɪɴᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ*';
global.mal = mg
global.eeg = '*📩ˢᵁ ᴿᴱᴾᴼᴿᵀᴱ ᴴᴬ ˢᴵᴰᴼ ᴱᴺⱽᴵᴬᴰᴼ📩*';
global.envio = eeg
global.eg = '*🍀ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ✨*';
global.exito = eg

global.wm = '乂SysSolutions乂';
global.igfg = '乂SysSolutions乂';
global.wait = '⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱';

global.imagen1 = fs.readFileSync('./views/Menu.jpg');
global.imagen2 = fs.readFileSync('./views/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./views/Me.jpg');
global.imagen4 = fs.readFileSync('./views/+18.jpg');
global.imagen5 = fs.readFileSync('./views/anime.jpg');
global.imagen6 = fs.readFileSync('./views/bot.jpg');
global.imagen7 = fs.readFileSync('./views/minecraft.jpg');


global.mods = [] 

global.multiplier = 65


const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
