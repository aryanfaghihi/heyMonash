var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = 3000;
var router = express.Router();
var api = express.Router();
var logicArray = require('./res/keywords').logicArray;

router.get('/', function(req, res) {
    res.sendfile('./client/index.html');
});
router.get('/js', function(req, res) {
    res.sendfile('./client/voice.js');
});
api.get('/ask/:query', function(req, res) {
    console.log(req.params.query);
    var inputQuery = req.params.query;
    var serverResponse = "No results.";
    for (var i = 0; i < logicArray.length; i++) {
        var isMatched = false;
        for (var j = 0; j < logicArray[i].keywords.length; j++) {
            if (inputQuery.search(logicArray[i].keywords[j]) !== -1) {
               isMatched = true;
            }
            else {
                isMatched = false;
                break;
            }
        }
        if (isMatched) {
            console.log('the response is ' + logicArray[i].response);
            serverResponse = logicArray[i].response;
            break;
        }
    }

    res.send(serverResponse);
});

app.use('/', router);
app.use('/api', api);
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);