const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    skype: String,
    position: {
        type: String,
        enum: ['ARCHITECT', 'DEVELOPMENT MANAGER', 'LEAD DEVELOPER', 'PROJECT MANAGER', 'SCRUMMASTER', 'TEST MANAGER']
    }
});

const interviewSchema = new Schema({
    dateTime: Date,
    location: {
        type: String,
        enum: ['BANSKA BYSTRICA', 'KOSICE', 'ZILINA']
    },
    note: String,
    status: {
        type: String,
        enum: ['CREATED', 'CLOSED'],
        default: 'CREATED'
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'User'
    }
});

const InterviewSchema = new Schema({
    candidate: candidateSchema,
    interview: interviewSchema
});

module.exports = mongoose.model('Interview', InterviewSchema);