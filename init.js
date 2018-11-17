
const util = require('util')

require('./database')

const Tag = require('./models/tag')
const Role = require('./models/role')
const User = require('./models/user')
const Page = require('./models/page')

const run = async () => {
  await Tag.deleteMany()
  await User.deleteMany()
  await Role.deleteMany()
  await Page.deleteMany()

  const tag1 = await new Tag({title: 'cat'}).save()
  const tag2 = await new Tag({title: 'rat'}).save()
  const tag3 = await new Tag({title: 'bat'}).save()

  const role1 = await new Role({title: 'admin', tags: [tag1, tag2]}).save()
  const role2 = await new Role({title: 'mod', tags: [tag1, tag2, tag3]}).save()
  const role3 = await new Role({title: 'user', tags: [tag1]}).save()

  const user1 = await new User({ email: 'user1@gmail.com', password: '1qazxsw2', roles: [role1, role2, role3]}).save()
  const user2 = await new User({ email: 'user2@gmail.com', password: '1qazxsw2', roles: [role2, role3] }).save()
  const user3 = await new User({ email: 'user3@gmail.com', password: '1qazxsw2', roles: [role3] }).save()
  const user4 = await new User({ email: 'user4@gmail.com', password: '1qazxsw2', roles: [role3] }).save()

  const page1 = await new Page({title: 'page 1', users: [user1, user2], tags: [tag1, tag2] }).save()
  const page2 = await new Page({title: 'page 2', users: [user1, user2, user3], tags: [tag1, tag2, tag3]}).save()

  tag1.pages.push(page1._id)
  tag1.pages.push(page2._id)
  await tag1.save()

  console.log('success')
  process.exit(0)
}

run()
