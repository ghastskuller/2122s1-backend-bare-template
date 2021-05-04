const { it, run } = require('../test_driver');
const dbManager = require('../../managers/db_manager');
const queueManager = require('../../managers/queue_manager');
const oldDbManagerDequeue = dbManager.dequeue; // Store original implementation


//store originals
function revertDbManagerDequeue(result) {
    dbManager.dequeue = oldDbManagerDequeue;
    return result;
}

// use `it` to add tests.
it('should resolve dequeue correctly', function () {});

it('Should reject dequeue correctly', function () {});
// Run the tests
// Important: Keep this as the last line
_testRunner();