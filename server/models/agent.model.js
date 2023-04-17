import mongoose from 'mongoose'

const agentSchema = new mongoose.Schema({
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
    lastConnection: {
        type: Date,
        required: false,
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

agentSchema.pre('findOneAndUpdate', function() {
    this.set({ updateAt: new Date() })
})

export default mongoose.model('Agent', agentSchema);
