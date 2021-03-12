# Discord.js-Bot-YockerFX


## 📋 How to use

#### Token:

Replace the "YOUR_TOKEN" in the .env file with your Discord bot token.

### Prefix:

index.js (line: 37)
```javascript
    const prefix = ",";
```

#### npm-packages:

 >npm i ascii-art
     
 >npm i ascii-table
    
 >npm i canvacord
    
 >npm i chalk
    
 >npm i common-tags
    
 >npm i date
    
 >npm i discord.js
    
 >npm i discord.js-pagination
    
 >npm i discord.js-prompts
    
 >npm i dotenv
    
 >npm i eslint
    
 >npm i figlet
    
 >npm i fortnite
    
 >npm i fs
    
 >npm i mathjs
    
 >npm i moment
    
 >npm i node-ddg
    
 >npm i node-fetch
    
 >npm i node-superfetch
    
 >npm i random-puppy
    
 >npm i reconlx
    
 >npm i snekfetch
    
 >npm i string-progressbar
    
 >npm i superagent

 >npm i urban

 >npm i util

#### Custom Status

Replace the ",help" with your costum status and the "https://www.twitch.tv/yockerfx" with your twitch channel.

index.js (line: 24-34)

```javascript
client.on("ready", () => {
    console.log(`Hi, your ${client.user.username} is now online!`);   
    client.user.setPresence({
   status: 'online',
   activity: {
       name: `,help`,
       type: 'STREAMING',
       url: 'https://www.twitch.tv/yockerfx'
   } 
})
});
```

## Commands

#### 👮 Moderation

| Command | Explained |
| ------------------ | ------------------ |
| ,lock | Locks a channel down. |
| ,open | Reopens the channel again. |
| ,clear | Deletes messages (max: 99) |
| ,poll | Sends a poll in a channel named: "poll" / "polls" / "surveys"  |
| ,suggest | Sends a suggestion in a channel named: "suggestion" / "suggestions" |

#### 😎 Fun

| Command | Explained |
| ------------------ | ------------------ |
| ,8ball | Gives a random answer to a question. |
| ,ascii | Converts text into ascii. |
| ,avatar | Displays the avatar of the mentioned user. |
| ,coinflip | A normal head or tails game. |
| ,dadjoke | Sends a boomer jokes. |
| ,pat | Send a pat gif. |
| ,roll | Rolls a dice. |
| ,rps | 🗻, 📰, ✂ |
| ,doge | Sends a dog picture |
| ,timer | Is a timer in ms. |
| ,tictactoe | Is a tictactoe 1v1. |
| ,hangman | Is a Hangman game. |
| ,math | Get the answer to a simple math problem. |

#### :mag_right: Info

| Command | Explained |
| ------------------ | ------------------ |
| ,bot | Shows bot information. |
| ,list | ,list (command) |
| ,sinfo | Shows server information. |
| ,status | Shows the uptime and the progress state. |
| ,who | Shows informations about a user. |
| ,ping | Get the bot\'s API ping |


#### 🔨 Test

| Command | Explained |
| ------------------ | ------------------ |
| ,meme | Sends a random meme from reddit. |
| ,instagram| Shows informations about an account. |
