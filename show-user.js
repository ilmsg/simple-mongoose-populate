
const util = require('util')

require('./database')

const Role = require('./models/role')
const User = require('./models/user')

const run = async () => {

  const users = await User.find().populate('roles').limit(1)
  // const users = await User.find().populate('roles')
  console.log(util.inspect(users, true, null))

  process.exit(0)
}

run()
