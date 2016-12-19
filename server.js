'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function(req, res) {

    res.send('Hello world\n');
});

for (var i = 0; i <= 10; i++) {
    (function(ind) {
        setTimeout(function() { console.log('Mock Log number:', ind); }, 1000 + (3000 * ind));
    })(i);
}

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);