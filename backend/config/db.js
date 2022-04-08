import mongoose from 'mongoose'

const connectDB = async () => {
  // console.log(process.env.MONGO_URI)

  try {
    const conn = await mongoose.connect("mongodb+srv://sahil:sahil4000@cluster0.pc5nz.mongodb.net/quickpoll?authSource=admin&replicaSet=atlas-12x9y1-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
