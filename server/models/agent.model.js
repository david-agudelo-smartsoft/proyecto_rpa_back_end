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
        type: {
            dateTime: {
                type: Date,
                required: false,
            },
            ostype: {
                type: String,
                required: false,
            },
            hostame: {
                type: String,
                required: false,
            },
            ipaddress: {
                type: String,
                required: false,
            },
        },
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
