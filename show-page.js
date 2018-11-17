
const util = require('util')

require('./database')

const Tag = require('./models/tag')
const Role = require('./models/role')
const User = require('./models/user')
const Page = require('./models/page')

const run = async () => {

  const populate = {
    path: 'users tags',
    populate: {
      path: 'roles',
      populate: {
        path: 'tags',
        populate: {
          path: 'pages'
        }
      }
    }
  }

  const pages = await Page.findOne().populate(populate)

  console.log(util.inspect(pages, true, null))

  process.exit(0)
}

run()
