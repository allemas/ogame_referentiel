import mongoose from 'mongoose';


mongoose.connection.on("error", (err) => {
    console.error("mongo db err ${ err }");
});


export default mongoose.connect("mongodb://localhost:27017/ogame_referentiel");