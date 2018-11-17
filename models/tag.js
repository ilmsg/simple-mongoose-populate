const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
	title : { type: String, default: '' },
	pages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Page' }]
})

module.exports = mongoose.model('Tag', tagSchema);
