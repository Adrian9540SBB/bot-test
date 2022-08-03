const { readdirSync, readdir } = require("fs");

module.exports = (client, Discord) => {
    const eventFolders = readdirSync(`./Events`);
    for (const Folder of eventFolders) {
        const eventFiles = readdirSync(`./Events/${Folder}`).filter(files => files.endsWith(`.js`));
        for (const File of eventFiles) {
            const event = require(`../Events/${Folder}/${File}`);
            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args, client, Discord));
            } else {
                client.on(event.name, (...args) => event.execute(...args, client, Discord));
            };
        };
    };
};