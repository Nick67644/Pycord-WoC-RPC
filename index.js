
const RPC = require('discord-rpc');
const config = require('./config');
const client = new RPC.Client({ transport: 'ipc' });

client.on('ready', () =>
{
  client.request('SET_ACTIVITY', {
      pid: process.pid,
      activity: {
          assets: {
              large_image: config.largeImage, //woc
              large_text: config.largeText,
          },

          details: config.description, //Pycord new Discord.py!
          buttons: [
              { label: config.buttonLabel, url: config.invite }, //woc (Partner of Pycord)
          ]
      }
  });
  console.log('Activity started!');
});
client.login({ clientId: config.clientId });
