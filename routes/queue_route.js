const express = require('express');
const queueManager = require('../managers/queue_manager');

const router = express.Router();

// enqueue
router.post('/', (req, res, next) =>
    queueManager
        .enqueue()
        .then((response) => res.status(201).json(response))
        .catch(next),//when the promise rejects, the `next` function will be called with the rejected value.
        /*
        .catch(function(error){
            return next(error);
        })
        */

        );

router.delete('/', (req, res, next) =>
    queueManager
        .dequeue()
        .then((response) => res.status(200).json(response))
        .catch(next),
);
module.exports = router;