import mongoose from 'mongoose'

const botSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
        trim: true
    },
    version: {
        type: String,
        required: true,
        trim: true
    },
    compatibility: [
        {
            type: String
        }
    ],
    ttlRequest: {
        type: String,
        required: true,
        trim: true
    },
    ttlResult: {
        type: String,
        required: true,
        trim: true
    },
    maximumAttempts: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    },
}, { versionKey: false });

botSchema.pre('findOneAndUpdate', function() {
    this.set({ updateAt: new Date() })
})

export default mongoose.model('Bot', botSchema);
