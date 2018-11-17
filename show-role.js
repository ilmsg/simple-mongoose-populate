
const util = require('util')

require('./database')

const Role = require('./models/role')

const run = async () => {

  const roles = await Role.find()

  roles.map(r => {
    r.title = r.title + ' ok'
    r.status = 'ok'
    return r
  })

  console.log(util.inspect(roles, true, null))
  process.exit(0)
}

run()
