module.exports.config = {
	name: "eid2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "RAHUL",
	description: "",
	commandCategory: "0",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const u = Date.parse("June 17, 2024 10:00:00") - Date.parse(new Date());
    const saconds = Math.floor( (u/1000) % 60 );
    const menutes = Math.floor( (u/1000/60) % 60 );
    const huurs = Math.floor( (u/(1000*60*60)) % 24 );
    const deys = Math.floor( u/(1000*60*60*24) );

    return api.sendMessage(`Time remaining until ❤ 𝙀𝙞𝙙-𝙐𝙡-𝘼𝙙𝙝𝙖 🥰\n» ${deys} days ${huurs} hours ${menutes} minutes ${saconds} seconds«\n💗𝙴𝚒𝚍 𝚏𝚎𝚜𝚝𝚒𝚟𝚊𝚕𝚜 𝚊𝚛𝚎 𝚍𝚎𝚏𝚒𝚗𝚒𝚝𝚎𝚕𝚢 𝚍𝚎𝚙𝚎𝚗𝚍𝚎𝚗𝚝 𝚘𝚗 𝚖𝚘𝚘𝚗 𝚜𝚒𝚐𝚑𝚝𝚒𝚗𝚐(ঈদের উৎসব অবশ্যই চাঁদ দেখার ওপর নির্ভরশীল)\n*•.¸♡ ঈদ-উল-আযহার আনন্দময় দিনে, আল্লাহ আপনার জীবনকে সুখ, শান্তি ও সমৃদ্ধিতে ভরিয়ে দিন। আল্লাহ আপনার হৃদয়কে ভালোবাসায়, আপনার আত্মাকে আধ্যাত্মিকতায়, আপনার মনকে জ্ঞান দিয়ে পূর্ণ করুন। অগ্রিম ঈদ মোবারক! "আল্লাহ আপনাকে উপরে স্বর্গের সুখ দিন ♡¸.•*\n\n𝗖𝗼𝗱𝗲 𝗕𝘆:\n≼≽KHAN RAHUL RK≼≽`, event.threadID, event.messageID);
}
