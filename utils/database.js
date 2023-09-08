import mongoose from "mongoose";

let isDBconneted = false;

export const connecToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isDBconneted) {
        console.log('DB is connected')
        return
    }

    try {
        await mongoose.connect(process.env.MONGODBURI, {
            dbName: 'share_prompt',
            useNewUrlPraser: true,
            useUnifiedTopology: true
        })

        isDBconneted = true

        console.log('Db is connected')

    } catch (error) {
        console.log("Error", error)
    }
}