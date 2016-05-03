/**
 * Created by km_2 on 2016-05-03.
 */
var util=require('util');
var event_emit=require('events').EventEmitter;

function Counter() {
    var self = this;

    event_emit.call(this);
    var count = 0;

    this.start = function () {
        this.emit('start');

        setInterval(function () {
            self.emit('count', count);
            ++count;
        }, 1000);
    };
}

util.inherits(Counter,event_emit);

var counter=new Counter();

counter.on('start',function () {
    console.log('start event');
});

counter.on('count',function (count) {
    console.log('count ='+count);
});

counter.start();
