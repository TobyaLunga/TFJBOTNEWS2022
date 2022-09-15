const Discord = require("discord.js");
const client = new Discord.Client({  intents: 9830
                                   3});

client.login("MINE")

client.once("ready", () => {
    client.channels.cache.get("1017661054840483940").send("**IL BOT è ONLINE!**")
console.log("IL BOT è ONLINE!")
})



const { createCanvas, loadImage, regi
       ", { family: "robotoBold" })

client.on("guildMemberAdd", async member => {
    //Creare un canvas
    let canvas = await createCanvas(1700, 600) //createCanvas(larghezza, altezza)
    let ctx = await canvas.getContext("2d")

    //Caricare un immagine
    let img = await loadImage("./img/background.png")
    ctx.drawImage(img, canvas.width / 2 - img.width / 2, canvas.height / 2 - img.height / 2) //drawImage(immagine, posizioneX, posizioneY, larghezza, altezza)


    //Riempire di un colore
    ctx.fillStyle = "rgba(0,0,0,0.30)"
    ctx.fillRect(70, 70, canvas.width - 70 - 70, canvas.height - 70 - 70) //fillReact(posizioneX, posizioneY, larghezza, altezza)

    //Caricare un immagine rotonda
    ctx.save()
    ctx.beg
inPath()
    ctx.arc(
        150 + 300 / 2, canvas.height / 2, 150, 0, 2 * Math.PI, false) //arc(centroX, centroY, raggio, startAngolo, endAngolo, sensoOrario/Antiorario)
    ctx.clip()
    img = await loadImage(me
                          mber.displayAvatarURL({ format: "png" }))
    ctx.drawImage(img, 150, canvas.height / 2 - 300 / 2, 300, 300)
    ctx.restore()

    //Creare le scritte
    ctx.fillStyle = "#fff"
    ctx.textBaseline = "middle"

    ctx.font = "80px roboto" //potete anche inserire sans-serif
    ctx.fillText("Benvenuto/a", 500, 200) //Testo, posizioneX, posizioneY

    ctx.font = "100px robotoBold"
    ctx.fillText(member.user.username.slice(0, 25), 500, canvas.height / 2)

    ctx.font = "50px roboto"
    ctx.fillText(`${member.guild.memberCount}° membro`, 500, 400)

    //Mandare un canvas
    let channel = client.channels.cache.get("1017536868117647442")

    let attachment = new Discord.MessageAttachment(canvas.toBuffer(), "canvas.png")

    channel.send({ files: [attachment] })

    let embed = new Discord.MessageEmbed()
        .setTitle("Benvenuto/a")
        .setThumbnail("attachment://canvas.png")
})







client.on("messageCreate", message => {
    //Comando eseguibile solo in canali specificati
    if (message.content == "^c
        cccccconfizsdfe") {
        if (!["1017728132591136779", "1017554889301299240"].includes(message.channel.id)) { //È possibile inserire tutti i canali che si vogliono
           return message.channel.send("Non puoi eseguire questo comando in questo canale");
        }

    
        client.on('messageCreate', (message) => {
            if (me
                ssage.content == '^time') {
                var data = new Date();
                var ora = data.getHours();
                var minuto = data.getMinutes();
        
                message.channel.send('ORA ATTUALE :alarm_clock: :' + ora + ':' + minuto);
            }
        });
        




        client.on("messageCreate", message => {
            if (message.content.startsWith("^say")) {
                const args = message.content.split(/\s+/);
                let testo;
                testo = args.slice(1).join(" ");
                if (!testo) {
                    return message.channel.send("Inserire un messaggio");
                }
                if (message.content.includes("@everyone") || message.content.includes("@here")) {
                    return message.channel.send("Non taggare everyone o here");
                }
                message.delete()
        
                //Messaggio classico
                message.channel.send(testo)
        
                //Embed
                let embed = new Discord.MessageEmbed()
                    .setTitle(`Say - ${message.author.username}`)
                    .setDescription(testo)
        
                message.channel.send({embeds: [embed]})
            }
        })
        




        client.on("messageCreate", message => {
            if (message.content == "^serverinfo") {
                let server = message.guild;
                let embed = new D
                
                
                
                scord.MessageEmbed()
                    .setTitle(server.name)
                    .setDescription("Tutte le info su questo server")
                    .setThumbna
                
                wner", client.users.cache.get(server.ownerId
                ).username, true)
                    .addField("Server id", 
                              erver.id, true)
                    .addField("Members", server.memberCount.toString())
                    .addField("Channels", server.chann
                              r.createdAt.toDateString(), true)
                    .addField("Boost level
                         
                         
                              
                              ", "Level " + (
                    server.premiumTier != "NONE" ? server.premiumTier : 0) + " (Boost: " + server.premiumSubscriptionCount + ")", true)
                message.channel.s
                end({ embeds: [embed] })
            }
        })
        
        
        require('events').EventEmitter.prototype._maxListeners = 100;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        client.on("messageCreate", message => {
            if (message.content == 
                "^help") {
                const embed = new Discord.MessageEmbed()
                    .setTitle("**COMANDI HELP**") //Titolo
                    .setColor("#34a42d") // Colore principale
                    .setDescription
                uesti sono tutti i comandi di **help** \n**COMANDI INFO**: ^userinfo  ^roleinfo \n**COMANDI SOCIAL**: ^lastvideo ^twitch ^youtube ^embube ^embtwitch ^tw ^yt \n**COMANDI FUN**: ^time ") //Descrizione
                    //Aggiungere elementi

                
                
                
                                    text: "BY wherestobys"}) // Testo piccolino in fondo
                    .setTimestamp() //Se mettere o no l'orario di arrivo del messaggio
                message.channel.send({embeds: [embed]})
            }
        })



















        const ytch = require("yt-channel-info") //npm i yt-channel-info

        //Messaggio classico
        setInterval(() => {
            ytch.getChannelVideos("UCZaIOCzk6yXLtj1VQYZYgYA", "newest").then(async response => {
                var idVideo = response.items[0]?.videoId
                if (!idVideo) return
        
                client.channels.cache.get("1017728828052877322").messages.fetch()
                    .then(messages => {
                        var giaMandato = false;
                        messages.forEach(msg => {
                            if (msg.content.includes(idVideo)) giaMandato = true;
                        });
        
                        if (!giaMandato) {
                            client.channels.cache.get("1017728828052877322").send(`-- NUOVO VIDEO --
        Ciao, è appena uscito un video
        
        
        
        **${response.items[0].author}**
        Andate a vedere "${response.items[0].title}"
        https://www.youtu.be/${idVideo}`) //Importate non levare l'id del video
                        }
                    })
            })
        }, 1000 * 30)
        
        //EMBED
        setInterval(() => {
            ytch.getChannelVideos("UCZaIOCzk6yXLtj1VQYZYgYA", "newest").then(async response => {
                var idVideo = response.items[0]?.videoId
                if (!idVideo) return
        
                client.channels.cache.get("1017728828052877322").messages.fetch()
                    .then(messages => {
                        var giaMandato = false;
                        messages.forEach(msg => {
                            if (msg.embeds[0]?.url?.endsWith(idVideo)) giaMandato = true;
                        });
        
                        if (!giaMandato) {
                            var embed = new Discord.MessageEmbed()
                                .setTitle("Nuovo video")
                                .setURL(`https://youtu.be/${idVideo}`) //Importante non levarlo
                                .setThumbnail(response.items[0].videoThumbnails[3].url)
                                .setDescription(`Ciao, è appena uscito un video su **${response.items[0].author}**
        Andate a vedere "${response.items[0].title}\"
        [Ecco il video](https://youtu.be/${idVideo})`)
        
                            client.channels.cache.get('1017728828052877322').send({ embeds: [embed] });
                        }
                    })
            })
        }, 1000 * 30)
        
        
        
        

        




        client.on("messageCreate", message => {
            if (message.content == "^lastvideo") {
                ytch.getChannelVideos("UCZaIOCzk6yXLtj1VQYZYgYA")
                    .then(response => {
                        var embed = new Discord.MessageEmbed()
                            .setTitle("Last video")
                            .setDescription("Ultimo video uscito sul canale")
                            .addField("Title", response.items[0].title)
                            .addField("Link", "https://www.youtube.com/watch?v=" + response.items[0].videoId)
                            .addField("Views", response.items[0].viewCount.toString())
                            .addField("Duration", response.items[0].durationText)
                            .addField("Published", response.items[0].publishedText)
                            .setImage(response.items[0].videoThumbnails[3].url)
        
                        message.channel.send({ embeds: [embed] })
                    })
            }
        })






        client.on("messageCreate", (message) => {
            if (message.content == "^youtube") {
                message.channel.send("Iscriviti al mio canale **YOUTUBE**: https://www.youtube.com/channel/UCZaIOCzk6yXLtj1VQYZYgYA")
            }
        
            if (message.content == "^embube") {
                var embed = new Discord.MessageEmbed()
                    .setTitle("ISCRIVITI AL MIO CANALE **YOUTUBE**")
                    .setDescription(`${message.author.username} iscriviti al mio canale youtube: \n **https://www.youtube.com/channel/UCZaIOCzk6yXLtj1VQYZYgYA**`)
        
                message.channel.send({ embeds: [embed] })
            }
        })
        
        
        
        
        client.on("messageCreate", (message) => {
            if (message.content == "^yt") {
                message.channel.send("Iscriviti al mio canale **YOUTUBE**: https://www.youtube.com/channel/UCZaIOCzk6yXLtj1VQYZYgYA")
            }
        })
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        client.on("messageCreate", (message) => {
            if (message.content == "^twitch") {
                message.channel.send("Iscriviti al mio canale **TWITCH**: https://www.twitch.tv/wherestobys")
            }
        
            if (message.content == "^embtwitch") {
                var embed = new Discord.MessageEmbed()
                    .setTitle("ISCRIVITI AL MIO CANALE TWITCH")
                    .setDescription(`${message.author.username} iscriviti al mio canale **TWITCH**: \n **https://www.twitch.tv/wherestobys**`)
        
                message.channel.send({ embeds: [embed] })
            }
        })
        
        
        
        
        client.on("messageCreate", (message) => {
            if (message.content == "^tw") {
                message.channel.send("Iscriviti al mio canale **TWITCH**: https://www.twitch.tv/wherestobys")
            }
        })
        
        
        
        
        
        
        
        client.on("messageCreate", message => {
            if (message.content.startsWith("^userinfo")) {
                let utente
                if (message.content == "^userinfo") {
                    utente = message.member;
                }
                else {
                    utente = message.mentions.members.first();
                }
                if (!utente) {
                    return message.channel.send("Non ho trovato questo utente")
                }
                let elencoPermessi = "";
                if (utente.permissions.has("ADMINISTRATOR")) {
                    elencoPermessi = "👑 ADMINISTRATOR";
                }
                else {
                    let permessi = ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "ADMINISTRATOR", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "VIEW_GUILD_INSIGHTS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MANAGE_EMOJIS_AND_STICKERS", "USE_APPLICATION_COMMANDS", "REQUEST_TO_SPEAK", "MANAGE_THREADS", "CREATE_PUBLIC_THREADS", "CREATE_PRIVATE_THREADS", "USE_EXTERNAL_STICKERS", "SEND_MESSAGES_IN_THREADS", "START_EMBEDDED_ACTIVITIES"]
                    for (let i = 0; i < permessi.length; i++)
                        if (utente.permissions.has(permessi[i]))
                            elencoPermessi += `- ${permessi[i]}\n`
                }
                let embed = new Discord.MessageEmbed()
                    .setTitle(utente.user.tag)
                    .setDescription("Tutte le info di questo utente")
                    .setThumbnail(utente.user.displayAvatarURL())
                    .addField("User id", utente.user.id, true)
                    .addField("Status", utente.presence ? utente.presence.status : "offline", true)
                    .addField("Is a bot?", utente.user.bot ? "Yes" : "No", true)
                    .addField("Account created", utente.user.createdAt.toDateString(), true)
                    .addField("Joined this server", utente.joinedAt.toDateString(), true)
                    .addField("Permissions", elencoPermessi)
                    .addField("Roles", utente.roles.cache.map(ruolo => ruolo.name).join("\n"))
                message.channel.send({ embeds: [embed] })
        
        
        
        
                client.on("messageCreate", message => {
                    if (message.content.startsWith("^roleinfo")) {
                        let ruolo = message.mentions.roles.first()
                        if (!ruolo) {
                            return message.channel.send("Non ho trovato questo ruolo")
                        }
                        let memberCount = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == ruolo)).size;
                        let permessiRuolo = new Discord.Permissions(ruolo.permissions.bitfield);
                        let elencoPermessi = "";
                        if (permessiRuolo.has("ADMINISTRATOR")) {
                            elencoPermessi = "👑ADMINISTRATOR";
                        }
                        else {
                            let permessi = ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "VIEW_GUILD_INSIGHTS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS"]
                            for (let i = 0; i < permessi.length; i++) {
                                if (permessiRuolo.has(permessi[i])) {
                                    elencoPermessi += `- ${permessi[i]}\n`
                                }
                            }
                        }
                        let embed = new Discord.MessageEmbed()
                            .setTitle(ruolo.name)
                            .setDescription("Tutte le statistiche di questo ruolo")
                            .addField("Role ID", ruolo.id, true)
                            .addField("Members", memberCount.toString(), true)
                            .addField("Color", ruolo.hexColor, true)
                            .addField("Role created", ruolo.createdAt.toDateString(), true)
                            .addField("Permissions", elencoPermessi)
                        message.channel.send({ embeds: [embed] })
                    }
                })
        
        
        
        
            }
        })
        
        
        
                
        
        














    
    
    }

    //Comando eseguibile solo in canali che non siano quelli specificati
    if (message.content == "^bllllalvejdsrfdssbpo") {
        if (["1017665570444947487", "1019719437525467176", "1019719767491358890"].includes(message.channel.id)) { //È possibile inserire tutti i canali che si vogliono
            return message.channel.send("Non puoi eseguire questo comando in questo canale");
        } 

        
    }
})





















       






       

const ytch = require("yt-channel-info")
setInterval(function () {
    var canale = client.channels.cache.get("1018632755904532481")
    ytch.getChannelInfo("UCZaIOCzk6yXLtj1VQYZYgYA")
        .then(response => {
            canale.setName(`▶️ Iscritti YT: ${response.subscriberCount}`)
        })
}, 1000 * 35)



















client.on("messageCreate", message => {
    console.log(message.content)  
    if (message.content == "^tickeSFJIDAJUJUFJsft") {
        let button1 = new Discord.MessageButton()
            .setLabel("Apri ticket")
            .setCustomId("apriTicket")
            .setStyle("PRIMARY")

        let row = new Discord.MessageActionRow()
            .addComponents(button1)

        message.channel.send({ content: "Clicca sul bottone per aprire un ticket... **NON ABUSARE DEL TICKET**", components: [row] })
    }
})

client.on("interactionCreate", async (interaction) => {
    if (interaction.customId == "apriTicket") {
        await interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
            interaction.user.send(" Hai gia un **ticket** aperto 😒").catch(() => { })
            return
        }
        interaction.guild.channels.create(interaction.user.username,{
            type: "text",
            topic: `User ID: ${interaction.user.id}`,
            parent: "1018180990633525268", //Settare la categoria,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                { //Aggiungere altri "blocchi" se si vogliono dare permessi anche a ruoli o utenti
                    id: "1018181063765409873",
                    allow: ["VIEW_CHANNEL"]
                }
            ]
        }).then(async (canale) => {
            const member = interaction.user.username;
            canale.send("Grazie per aver aperto il ticket** "+ member+" **  \n **Inizia a descrivere il tuo problema!** \n NOME IN GIOCO: \n PROBLEMA/BUG.: \n**Miraccomando non abusare del ticket**" )
        })
    }
})

client.on("messageCreate", message => {
    if (message.content == "^close") {
        let topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            let idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                message.channel.delete();
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("^add")) {
        let topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            let idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                let utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                let haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (haIlPermesso) {
                    message.channel.send("Questo utente ha gia accesso al ticket")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: true
                })
                message.channel.send(`${utente.toString()} è stato aggiunto al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("^remove")) {
        let topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            let idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                let utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                let haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (!haIlPermesso) {
                    message.channel.send("Questo utente non ha gia accesso al ticket")
                    return
                }
                if (utente.permissions.has("MANAGE_CHANNELS")) {
                    message.channel.send("Non puoi rimuovere questo utente")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: false
                })
                message.channel.send(`${utente.toString()} è stato rimosso al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
})









client.on("messageCreate", message => {
    console.log(message.content)  
    if (message.content == "^teamfghapticksygqdet") {
        let button1 = new Discord.MessageButton()
            .setLabel("Apri ticket")
            .setCustomId("apriTicket")
            .setStyle("PRIMARY")

        let row = new Discord.MessageActionRow() 
            .addComponents(button1)

        message.channel.send({ content: "**➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ \n -------------------------------------------------------------------------------------------------------------------------------------------- \n ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖** **Clicca sulla reazione** per fare il provino del **TEAM TFJ** \n \n **REQUISITI**: Avere almeno **50 corone** \n \n Avere almeno **5500 coppe** \n **➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ \n -------------------------------------------------------------------------------------------------------------------------------------------- \n ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ ** ", components: [row] })                                                                                  
     
    }
})

client.on("interactionCreate", async (interaction) => {
    if (interaction.customId == "apriticket") {
        await interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
            interaction.user.send("Hai gia un ticket aperto").catch(() => { })
            return
        }
        interaction.guild.channels.create(interaction.user.username, {
            type: "text",
            topic: `User ID: ${interaction.user.id}`,
            parent: "1018235640451694642", //Settare la categoria,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                { //Aggiungere altri "blocchi" se si vogliono dare permessi anche a ruoli o utenti
                    id: "1018235737503694958",
                    allow: ["VIEW_CHANNEL"]
                }
            ]
        }).then(canale => {
            canale.send("Grazie per aver aperto un ticket")
        })
    }
})

client.on("messageCreate", message => {
    if (message.content == "^closed") {
        let topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            let idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                message.channel.delete();
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("^adds")) {
        let topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            let idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                let utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                let haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (haIlPermesso) {
                    message.channel.send("Questo utente ha gia accesso al ticket")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: true
                })
                message.channel.send(`${utente.toString()} è stato aggiunto al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("^removes")) {
        let topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            let idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                let utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                let haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (!haIlPermesso) {
                    message.channel.send("Questo utente non ha gia accesso al ticket")
                    return
                }
                if (utente.permissions.has("MANAGE_CHANNELS")) {
                    message.channel.send("Non puoi rimuovere questo utente")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: false
                })
                message.channel.send(`${utente.toString()} è stato rimosso al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
})















client.on("messageCreate", async message => {
    if (message.content == "^transcript") {
        let chatLog = `-- CHAT LOG #${message.channel.name} --\n\n`

        let messages = await getAllMessages(message.channel)
        messages.reverse().forEach(msg => {
            chatLog += `@${msg.author.tag} ID: ${msg.author.id} - ${msg.createdAt.toLocaleString()}\n`

            if (msg.content) chatLog += `${msg.content}\n`

            if (msg.embeds[0]) {
                chatLog += `Embed:\n`
                if (msg.embeds[0].title) chatLog += `Title: ${msg.embeds[0].title}\n`
                if (msg.embeds[0].description) chatLog += `Description: ${msg.embeds[0].description}\n`
                if (msg.embeds[0].fields[0]) chatLog += `Fields: ${msg.embeds[0].fields.map(x => `${x.name}-${x.value}`).join(", ")}\n`
            }

            if (msg.attachments.size > 0)
                chatLog += `Files: ${msg.attachments.map(x => `${x.name} (${x.url})`).join(", ")}\n`

            if (msg.stickers.size > 0)
                chatLog += `Stickers: ${msg.stickers.map(x => `${x.name} (${x.url})`).join(", ")}\n`

            chatLog += "\n"
        })

        let attachment = new Discord.MessageAttachment(Buffer.from(chatLog, "utf-8"), `chatLog-channel-${message.channel.id}.txt`)

        let embed = new Discord.MessageEmbed()
            .setTitle("Transcript canale")
            .setDescription("Ecco il log di tutti i messaggi in questo canale")

        message.channel.send({ embeds: [embed], files: [attachment] })

        message.author.send({ embeds: [embed], files: [attachment] })
            .catch(() => { })
    }
})

const getAllMessages = async (channel) => {
    let allMessages = []
    let lastMessage

    while (true) {
        const options = { limit: 100 }
        if (lastMessage) options.before = lastMessage

        let messages = await channel.messages.fetch(options)

        allMessages = allMessages.concat(Array.from(messages.values()))

        lastMessage = messages.last().id

        if (messages.size != 100) {
            break
        }
    }

    return allMessages
}



















let lockdownAttivato = false;
client.on("messageCreate", message => {
    if (message.content == "^lockdown") {
        if (!lockdownAttivato) {
            message.channel.send("**Lockdown ATTIVATO!**")

            let everyone = message.guild.roles.everyone
            everyone.setPermissions(["SEND_MESSAGES", "EMBED_LINKS", "READ_MESSAGE_HISTORY", "USE_VAD", "USE_APPLICATION_COMMANDS"]) //Scrivere tutti i permessi che di default @everyone deve avere tranne VIEW_CHANNEL

            client.channels.cache.get("1017728132591136779").permissionOverwrites.edit(everyone, { //Canale in cui è presente un messaggio per avvisare del lockdown attivo (facoltativo)
                VIEW_CHANNEL: true,
            })
        }
        else {
            message.channel.send("Lockdown DISATTIVATO!")

            let everyone = message.guild.roles.everyone
            everyone.setPermissions(["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS", "READ_MESSAGE_HISTORY", "USE_VAD", "USE_APPLICATION_COMMANDS"]) //Scrivere tutti i permessi che di default @everyone

            client.channels.cache.get("1017728132591136779").permissionOverwrites.edit(everyone, { //Canale in cui è presente un messaggio per avvisare del lockdown attivo (facoltativo)
                VIEW_CHANNEL: false,
            })
        }
        lockdownAttivato = !lockdownAttivato
    }
})


client.on("messageCreate", message => {
    if (message.content.startsWith("^mute")) {
        let utente = message.mentions.members.first();
        if (!message.member.permissions.has("MANAGE_ROLES")) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }

        utente.roles.add("1018185850221244418")

        let embed = new Discord.MessageEmbed()
            .setTitle(`${utente.user.username} mutato`)
            .setDescription(`Utente **mutato** da ${message.author.toString()}`)

        message.channel.send({ embeds: [embed] })
    }
})



client.on("messageCreate", message => {
    if (message.content.startsWith("^ban")) {
        let utente = message.mentions.members.first();
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        if (!utente.bannable) {
            return message.channel.send('Io non ho il permesso');
        }
        utente.ban()
            .then(() => {
                let embed = new Discord.MessageEmbed()
                    .setTitle(`${utente.user.username} bannato`)
                    .setDescription(`Utente bannato da ${message.author.toString()}`)

                message.channel.send({ embeds: [embed] })
            })
    }
})



client.on("messageCreate", message => {
    if (message.content.startsWith("^kick")) {
        let utente = message.mentions.members.first();
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        if (!utente.kickable) {
            return message.channel.send('Io non ho il permesso');
        }
        utente.kick()
            .then(() => {
                let embed = new Discord.MessageEmbed()
                    .setTitle(`${utente.user.username} kickato`)
                    .setDescription(`Utente kickato da ${message.author.toString()}`)

                message.channel.send({ embeds: [embed] })
            })
    }
})







setInterval(function () {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    if (hour == "18" && minutes == "32") { //Settare l'ora che si vuole, in questo momento viene mandato un messaggio in un canale tutti i giorni alle 18:32
        client.channels.cache.get("1017728132591136779").send("iscriviti al mio canale youtube <3 https://www.youtube.com/channel/UCZaIOCzk6yXLtj1VQYZYgYA");
    }
}, 1000 * 60)

//Notifica ogni tot tempo
setInterval(function () {
    client.channels.cache.get("1017728132591136779").send("iscriviti al mio canale twitch <3 https://www.twitch.tv/wherestobys");
}, 1000 * 60 * 60 * 3) //Ogni due ore (personalizzabile)





client.on("messageCreate", message => {
    if (message.content.startsWith("^clear")) {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send('Non hai il permesso');
        }
        if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send('Non ho il permesso');
        }
        let count = parseInt(message.content.split(/\s+/)[1]);
        if (!count) {
            return message.channel.send("Inserisci un numero valido")
        }
        if (count > 100) {
            return message.channel.send("Non puoi cancellare più di 100 messaggi")
        }
        message.channel.bulkDelete(count, true)
        message.channel.send(count + " messaggi eliminati").then(msg => {
            setTimeout(() => msg.delete(), 5000)
        })
    }
})



















client.on("messageCreate", message => {
    if (message.content.startsWith("^warn")) {
        let utente = message.mentions.members.first();
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        let reason = message.content.split(/ +/).slice(2).join(" ");
        if (!reason) {
            return message.channel.send('Non hai specificato la motivazione del warn');
        }

        if (utente.roles.cache.has("1017553656750542958")) {
            utente.roles.remove("1017553656750542958");
            utente.roles.add("1017553789827420161");

            let embed = new Discord.MessageEmbed()
                .setTitle(`${utente.user.username} warnato`)
                .setDescription(`Utente warnato da ${message.author.toString()} per "**${reason}**"\nUn altro warn e l'utente verrà bannato`)
            message.channel.send({ embeds: [embed] })
        }
        else if (utente.roles.cache.has("1017553789827420161")) {
            utente.roles.remove("1017553789827420161");
            utente.ban()

            let embed = new Discord.MessageEmbed()
                .setTitle(`${utente.user.username} warnato`)
                .setDescription(`Utente warnato da ${message.author.toString()} per "**${reason}**"\nL'utente è stato bannato poichè ha raggiunto i 3 warn`)
            message.channel.send({ embeds: [embed] })
        }
        else {
            utente.roles.add("1017553656750542958");

            let embed = new Discord.MessageEmbed()
                .setTitle(`${utente.user.username} warnato`)
                .setDescription(`Utente warnato da ${message.author.toString()} per "**${reason}**"\nAltri 2 warn e l'utente verrà bannato`)
            message.channel.send({ embeds: [embed] })
        }
    }
})





client.on("messageCreate", async message => {
    if (message.content.startsWith("^unban")) {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }

        let args = message.content.split(/\s+/);
        let idUtente = args[1]

        if (!idUtente) {
            return message.channel.send("Non hai scritto l'id di nessun utente");
        }

        message.guild.members.unban(idUtente)
            .then(() => {
                let embed = new Discord.MessageEmbed()
                    .setTitle("Utente sbannato")
                    .setDescription("Questo utente è stato sbannato")

                message.channel.send({ embeds: [embed] })
            })
            .catch(() => { message.channel.send("Utente non valido o non bannato") })
    }
})











    
client.on("messageCreate", message => {
    if (message.content == "^fileunmute") {
        message.channel.send({ content: "**SEI STATO SMUTATO!**", files: ["./Immagine.png"] })
    }
})
        
        
    












client.on("messageCreate", message => {
    if (message.content.startsWith("^unmute")) {
        let utente = message.mentions.members.first();
        if (!message.member.permissions.has("MANAGE_ROLES")) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }

        utente.roles.remove("1018185850221244418")

        let embed = new Discord.MessageEmbed()
            .setTitle(`${utente.user.username} **smutato**`)
            .setDescription(`Utente smutato da ${message.author.toString()}`)

        message.channel.send({ embeds: [embed] })
    }
})










client.on('ready', () => {
    //Stato classico (Sta guardando..., Sta giocando a...)
    client.user.setActivity('^help  | wherestobys', { type: 'WATCHING' }); //Oppure LISTENING, PLAYING

    //Stato online/offine/non disturbare... (Potrebbe volerci qualche tempo per doversi settare)
    client.user.setStatus('online') //Oppure idle, dnd, invisible
})
















client.on("messageCreate", message => {
    if (message.channel.type == 'DM') return

    let parolacce = ["cazzo", "dio", "oid", "puttana", "troia", "troio", "leccami", "ciucciami", "ciucciamelo", "coglione", "cogliona", "negro", "negra", "kid", "frocio"]
    let trovata = false;
    let testo = message.content;

    parolacce.forEach(parola => {
        if (message.content.toLowerCase().includes(parola.toLowerCase())) {
            trovata = true;
            testo = testo.replace(eval(`/${parola}/g`), "###");
        }
    })

    if (trovata) {
        message.delete();
        let embed = new Discord.MessageEmbed()
            .setTitle("Hai detto una parolaccia")
            .setDescription("Hai scritto un messaggio con parole non consentite su questo server \nIl tuo messaggio: " + testo)

        message.channel.send({ embeds: [embed] })
    }
})












client.on("messageCreate", message => {
    if (message.content.startsWith("^teamjoin")) {
        let utente = message.mentions.members.first();
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        let reason = message.content.split(/ +/).slice(2).join(" ");
        if (!reason) {
            return message.channel.send('Non hai specificato la motivazione di perchèè entrato/a');
        }

        if (utente.roles.cache.has("1017553656750542958")) {
            utente.roles.remove("1017553656750542958");
            utente.roles.add("1019682415268085870");

            let embed = new Discord.MessageEmbed()
            .setTitle(`${utente.user.username} è ENTRATO NEL **TEAM**`)
            .setDescription(`l utente è stato fatto entrare nel team da** ${message.author.toString()} ** per "**${reason}**"\n \n**Ci vediamo nella chat segreta **`)
            message.channel.send({ embeds: [embed] })
        }
        else if (utente.roles.cache.has("1019682415268085870")) {
            utente.roles.remove("1019682415268085870");
            utente.ban()
            let embed = new Discord.MessageEmbed()
            .setTitle(`${utente.user.username} è ENTRATO NEL **TEAM**`)
            .setDescription(`l utente è stato fatto entrare nel team da** ${message.author.toString()} ** per "**${reason}**"\n \n**Ci vediamo nella chat segreta **`)
        message.channel.send({ embeds: [embed] })
        }
        else {
            utente.roles.add("1017553656750542958");

            let embed = new Discord.MessageEmbed()
                .setTitle(`${utente.user.username} è ENTRATO NEL **TEAM**`)
                .setDescription(`l utente è stato fatto entrare nel team da** ${message.author.toString()} **per "**${reason}**"\n \n**Ci vediamo nella chat segreta **`)
                message.channel.send({ embeds: [embed] })
        }
    }
})












