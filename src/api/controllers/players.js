import Player from '../models/player';


exports.create = async (req, res, next) => {
    try {
        console.log("test00");
        console.log(req.body);
        const post = new Player(req.body);

        console.log("test00");
        const savedPost = await post.save();
        console.log("test00");
        res.status(200);
    } catch (error) {
        res.json(error);

    }
};
