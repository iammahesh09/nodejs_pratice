const Review = require('../models/review.model');

class reviewService {

    writeReview(data) {
        return Review.create(data)
    }

    readReviews(id) {
        return Review.find( { productId : id },{ __v:0, _id:0 }).exec()
    }

    updateReview(id, data) {
        return Review.findByIdAndUpdate(id, {
            $set: {
                subject: data.subject,
                message: data.message,
                rating: data.rating,
            }
        }).exec()
    }

    deleteReview(id){
        return Review.findByIdAndRemove(id).exec();
    }

}

module.exports = new reviewService();