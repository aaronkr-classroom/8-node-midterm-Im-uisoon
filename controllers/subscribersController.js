// controllers/subscribersController.js

const Subscriber = require('../models/Subscriber');

exports.getAllSubscribers = async (req, res, next) => {
    try {
        const subscribers = await Subscriber.find({});
        res.render('subscribers', { subscribers: subscribers });
    } catch (err) {
        console.error(err);
        res.render('error');
    }
};

exports.getSubscriptionPage = (req, res) => {
    res.render('contact');
};

exports.saveSubscriber = async (req, res) => {
    const { email } = req.body;
    try {
        await Subscriber.create({ email: email });
        res.render('thanks');
    } catch (err) {
        console.error(err);
        res.render('error');
    }
};
