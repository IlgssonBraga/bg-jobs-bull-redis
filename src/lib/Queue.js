const Queue = require('bull');
const redisConfig = require('../config/redis');
const jobs = require('../jobs/index');

const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, redisConfig),
    name: job.key,
    handle: job.handle
}));

module.exports = {
    queues,
    add(name){
        const queue = this.queues.find(queue => queue.name === name);
        return queue.bull.add();
    },
    process(){
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle);
            queue.bull.on('failed', (job, err) => console.log('Failed', queue.key, job.data));
        })
    }
}
