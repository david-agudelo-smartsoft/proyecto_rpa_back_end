import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    seqTask: {
        type: String,
        required: true,
        trim: true
    },
    bot: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
        trim: true
    },
    attempts: {
        type: Number,
        required: true,
        trim: true
    },
    client: {
        type: String,
        required: true,
        trim: true
    },
    param: {
        type: {
            tipoConsulta: {
                type: String,
                required: true,
            },
            tipoDocumento: {
                type: String,
                required: true,
            },
            numeroDocumento: {
                type: String,
                required: true,
            },
            numeroPlaca: {
                type: String,
                required: true,
            },
        },
        required: true,
    },
    log: [
        {
            type: String
        }
    ],
    agent: {
        type: String,
        required: true,
        trim: true
    },
    dateFin: {
        type: Date,
        required: false,
        trim: true
    },
    dateIni: {
        type: Date,
        required: false,
        trim: true
    },
    result: {
        type: {
            status_code: {
                type: String,
                required: false,
            },
            jsonData: [
                {
                    type: String
                }
            ],
        },
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

taskSchema.pre('findOneAndUpdate', function() {
    this.set({ updateAt: new Date() })
})

export default mongoose.model('Task', taskSchema);
