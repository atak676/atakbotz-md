const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	webnya: 'https://api.lolhuman.xyz',
}

global.APIKeys = {
	'https://api.lolhuman.xyz': 'Atakbotz',
}

global.prefix = '#'
global.owner = ['6283159252524']
global.premium = ['6287721317870','6287833465515','6283159252524']
global.banUser = ['6281366679021@s.whatsapp.net']
global.pengguna = 'RijalJB'
global.packname = 'RijalBOTZ-Md'
global.packname2 = 'Di Buat Oleh RijalJB'
global.author = 'By RijalJB'
global.ridho = 'Ridho Todz'
global.zalfa = 'Zalfa Cantik'
global.atasreply = 'Subscribe' //BUAT REPLAY DI ATAS NYA ADA TEXT
global.atasreply2 = 'Follow Instagram' //BUAT REPLAY DI ATAS NYA ADA TEXT KE 2
global.webreply = 'https://youtube.com/c/AtakBotz' //URL DI ATAS REPLAY
global.webreply2 = 'https://instagram.com/atak_bot' //URL BUAT DI ATAS REPLAY KE 2
global.sessionName = 'atakbotz'
global.namabotnya = 'RijalBOTZ'
global.namaownernya = 'RijalJB'
global.namaownernya2 = 'Zalfa'
global.lolkey = 'Atakbotz'
global.wame = 'https://wa.me/6283159252524'
global.gcatakbotz = 'https://chat.whatsapp.com/GYwu12AMLErKWw6XLIMMxw'
global.ownerNumber = ["6283159252524@s.whatsapp.net"]
global.email = 'botzatak@gmail.com'
global.yt = 'https://youtube.com/channel/UCT76Agxm4N_MbefBoywjDRA'
global.region = 'Indonesia'
global.prefa = ['','!','.','#','-','•']
global.sp = '⭔'
global.ya = '```'
global.mess = {
    success: 'Success 💯',
    admin: 'Fitur Khusus Admin Group!!!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!!!',
    owner: 'Fitur Khusus Owner Bot!!!',
    group: 'Fitur Digunakan Hanya Untuk Group!!!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!!!',
    bot: 'Fitur Khusus Pengguna Nomor Bot!!!',
    error: 'Error Kak Silahkan Chat Owner',
    wait: '❗Loading...❗', 
    noPetualang: 'Itssss Kamu Belum Petualang Silahkan Ketik .joinrpg <namamu>',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}


global.limitawal = {
    premium: "Infinity",
    free: 5
}


global.thumb = fs.readFileSync('./image/atakbotz.jpg')
global.thumbrpg = fs.readFileSync('./image/atakbotzrpg.jpg')
global.imgjoinrpg = fs.readFileSync('./image/joinrpg.jpg')
global.imgmining = fs.readFileSync('./image/mining.jpg')

global.imgdevil = fs.readFileSync('./image/img/devil.jpg')
global.imgslime = fs.readFileSync('./image/img/slime.jpg')
global.imgdemon = fs.readFileSync('./image/img/demon.jpg')
global.imggoblin = fs.readFileSync('./image/img/goblin.jpg')
global.imgdemonking = fs.readFileSync('./image/img/demonking.jpg')
global.imgbehemoth = fs.readFileSync('./image/img/behemoth.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
