const {Training} = require("../../models/training");

const getAll = async(req, res) => {
    const {_id: owner} = req.user;
    const result = await Training.find({owner}, "-createdAt -updatedAt",)
                            .populate();
    if(!result || []) {
        return res.status(400).json({
            message: "The user has no training yet ",
        });
    }
    res.status(200).json(result);
}

module.exports = getAll;