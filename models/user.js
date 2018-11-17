const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	email : { type: String, default: '' },
	password : { type: String, default: '' },

	roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }]
});

module.exports = mongoose.model('User', userSchema);
