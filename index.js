const fs = require('fs');
const path = require('path');

async function loadJSON(type, name) {
  try {
    const filePath = path.join(__dirname, 'data', type, `${name.toLowerCase()}.json`);
    if (!fs.existsSync(filePath)) {
      throw new Error(`${type} "${name}" not found`);
    }

    const data = await fs.promises.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return { error: err.message };
  }
}

module.exports = {
  Worlds: async (name) => loadJSON('worlds', name),
  Groups: async (name) => loadJSON('groups', name),
  Players: async (name) => loadJSON('players', name),
};
