import mongoose from 'mongoose';

let playerSchema = mongoose.Schema({
    id: Number,
    position: Number,
    score: Number,
    date: { type: Date, default: Date.now },
});


/**
 * Add pré-save / validation / virtual hooks here
 */


/**
 * @typedef Post
 */
export default mongoose.model('Player', playerSchema);