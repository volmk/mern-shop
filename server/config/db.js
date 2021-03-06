import mongoose from 'mongoose'
import 'colors'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan)
    } catch (err) {
        console.error(`MongoDB error : ${err.message}`.red.bold)
        process.exit(1)
    }
}

export default connectDB