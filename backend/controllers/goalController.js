const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'get goals'});
})

const setGoal = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'set goals'})
})

const updateGoal = (req, res) => {

    if(!req.body.id) {
        res.status(400).json({ message: "Please add a id field" })
    }

    res.status(200).json({message: `update goal ${req.params.id}`});
}

const deleteGoal = (req, res) => {
    res.status(200).json({message: `delete goal ${req.params.id}`});
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}