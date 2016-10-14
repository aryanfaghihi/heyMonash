var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = 80;
var router = express.Router();
var api = express.Router();
router.get('/', function(req, res) {
    res.sendfile('./index.html');
});
router.get('/js', function(req, res) {
    res.sendfile('./voice.js');
});
api.get('/ask/:query', function(req, res) {
    console.log(req.params.query);
    var response = "Sorry I did not find anything";
    if (req.params.query.search("time") !== -1 && req.params.query.search("what") !== -1) {
        response = getCurrentTime();
    }
    if (req.params.query.search("library") !== -1 && req.params.query.search("working hours") !== -1) {
        response = "Hargrave Andrew library closes at 8 pm today";
    }
    res.send(response);
});
function getCurrentTime() {
    var date = new Date(); // for now
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ' ' + minutes + ' ' + ampm;
    var time = "It's " + strTime;
    return time
}
app.use('/', router);
app.use('/api', api);
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);