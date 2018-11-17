const mongoose = require('mongoose');

const pageSchema = mongoose.Schema({
	title : { type: String, default: '' },
	users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }]
})

module.exports = mongoose.model('Page', pageSchema);
