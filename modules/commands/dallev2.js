const axios = require('axios');
const fs = require('fs-extra');
module.exports.config = {
    name: "edit",
    version: "1.0",
    credits: "RAHUL",
    hasPermssion: 0,
    usePrefix: true,
    description: "Generate images by Dalle-3 AI",
    commandCategory: "download",
    usages: "[text] \nJamon [A 17/18/19 years old boy/girl watching football match on tv and written RAHUL and 69 on the back of his Dress , 4k]",
    cooldowns: 5
  };

module.exports.run = async function ({ api, event, args }) {
  const prompt = event.messageReply?.body.split("dalle")[1] ||  args.join(" ");
  if (!prompt) {
   return api.sendMessage("❌| use /dalle a cat , 4k",event.threadID,event.messageID);
  }
    try {
      //const cookies = "your cookies";
const tl = ["16BfjYD7RK-M1xhLqvGwSSbQKZw_LQT9q8KCPoFahaSCgS0YksfYiSuTunzal0lFr9uZdA3Z-2gvJ970Jjtb-0Ky3PeN-soWrz_iNFlW5Gpfoa9o-6QZYwZEPFLIL-4qrDHMfQWSkT6x8h0KnXmDICgXCWkQ0GgJRaGmZIbFYhELs7S2EONPi7YEJ1Rk8VQbor9gg5U5mP5lzSXnncB87aA"];
const cookies = tl[Math.floor(Math.random() * tl.length)];
      const w = await api.sendMessage("𝐏𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭 𝐏𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐧𝐠 𝐘𝐨𝐮𝐫 𝐈𝐦𝐠𝐚𝐞 \n\n𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 (💝𝐍𝐎𝐍𝐃𝐈𝐍𝐈)(🌹𝐒𝐇𝐈𝐑𝐈𝐍) (😎𝐄𝐕𝐀𝐍) (💞𝐄𝐋𝐈𝐍𝐀)💝💫", event.threadID);
  
const response = await axios.get(`https://96q5hj-3000.csb.app/dalle?prompt=${prompt}&key=dipto008&cookies=${cookies}`)
      const data = response.data.imgUrls;
      if (!data || data.length === 0) {
        api.sendMessage("No images generated.",event.threadID,event.messageID);
      }
      const diptoo = [];
      for (let i = 0; i < data.length; i++) {
        const imgUrl = data[i];
        const imgResponse = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        const imgPath = __dirname + `/cache/${i + 1}.jpg`;
        await fs.outputFile(imgPath, imgResponse.data);
        diptoo.push(fs.createReadStream(imgPath));
      }
      await api.unsendMessage(w.messageID);
      await api.sendMessage({
  body: `𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞 𝐘𝐨𝐮𝐫 𝐈𝐦𝐚𝐠𝐞\n\n𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 (💝𝐍𝐎𝐍𝐃𝐈𝐍𝐈)(🌹𝐒𝐇𝐈𝐑𝐈𝐍) (😎𝐄𝐕𝐀𝐍) (💞𝐄𝐋𝐈𝐍𝐀) 😘💫`,
        attachment: diptoo
      },event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      await api.sendMessage(`Generation failed!\nError: ${error.message}`,event.threadID, event.messageID);
    }
  }; 
