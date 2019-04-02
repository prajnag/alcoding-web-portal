const mongoose = require('mongoose');

const MarksSchema = new mongoose.Schema({
	srn:
	{
		type: String,
		required: true
	},
	sem:
	{
		type: Number,
		required: true
	},
	course_code:
	{
		type: String,
		required: true
	},

	isa1_40: 
	{
		type : Number,
		required: true
	},
	isa2_40: 
	{
		type : Number,
		required: true
	},
	assignment:
	{
		type: Number,
		required: true
	},
	total:
	{
		type: Number,
		required: true
	}
});
module.exports = mongoose.model('Marks', MarksSchema);