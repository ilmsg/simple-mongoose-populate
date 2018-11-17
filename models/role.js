const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
	title : { type: String, default: '' },
	tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }]
})

module.exports = mongoose.model('Role', roleSchema);
