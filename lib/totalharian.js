const fs = require('fs-extra')

const ceemde = JSON.parse(fs.readFileSync('./database/totalharian.json'))
const cmdaddtoday = () => {
	ceemde[0].totalcmd += 1
	fs.writeFileSync('./database/totalharian.json', JSON.stringify(ceemde))
}

module.exports = {
	cmdaddtoday
}