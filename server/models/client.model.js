import mongoose from 'mongoose'

const clientSchema = new mongoose.Schema({
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
    identifier: {
        type: String,
        required: true,
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

clientSchema.pre('findOneAndUpdate', function() {
    this.set({ updateAt: new Date() })
})

export default mongoose.model('Client', clientSchema);
