const reviewService = require('../services/review.services');

const reviewController = {
    
    write: async (req, res) => {
        try {
            let review = await reviewService.writeReview(req.body);
            res.status(200).json(review)
        } catch (error) {
            res.status(400).send("Internal Server Error")
        }
    },

    read: async (req, res) => {
        try {
            let readData = await reviewService.readReviews();
            res.status(200).send(readData);
        } catch (error) {
            res.status(400).send("Internal Server Error")
        }
    },

    updateReview: async (req, res) => {
        try {
            let updateId = req.params.id;
            let updateData = await reviewService.updateReview(updateId, req.body);
            res.status(201).send(updateData)
        } catch (error) {
            res.status(400).send(error)
        }
    },

    deleteReview: async (req, res) => {
        try {
            let getId = req.params.id;
            let deteleData = await reviewService.deleteReview(getId)
            res.status(201).send(deteleData)
        } catch (error) {
            res.status(500).send("Internal Server Error")
        }
    }
}

module.exports = reviewController;