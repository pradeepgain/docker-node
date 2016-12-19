'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function(req, res) {

    res.send('Hello world\n');
});



app.listen(PORT);
console.log('Running on http://localhost:' + PORT);


setTimeout(callback(), 100);

function callback() {
    return function() {
        for (var i = 0; i <= 100; i++) {
            (function(ind) {
                setTimeout(function() { console.log('Mock Log number:', ind); }, 1000 + (1000 * ind));
            })(i);
        }
    }
}