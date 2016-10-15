module.exports = {
    getTime: function() {
        var date = new Date(); // for now
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ' ' + minutes + ' ' + ampm;
        var time = "It's " + strTime;
        return time;
    },

    getParkLocation: function () {
        var pLocation= "There is free parking on campus after 4 30 pm.  also there is free parking on the weekends at the clayton campus"
        return pLocation
    },

    getClassLocation: function () {
        var cLocation;
        cLocation = {
            voice: "Your next class, IT professional practice is on Monday at 2 pm",
            card: '<div class="mdl-card-wide mdl-shadow--2dp card-class"> <div id="card-class" class="mdl-card__title mdl-card--expand card-class"> <h2 class="mdl-card__title-text">FIT2003: IT Professional Practice - Lecture</h2> </div> <div class="mdl-card__supporting-text"> <b>2:00PM - 4:00PM</b> <br/> Theatre H3, 20 Chancellors Walk </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank" href="https://www.google.com.au/maps/place/Robert+Menzies+Building/@-37.9119733,145.1319818,18.46z/data=!4m5!3m4!1s0x0:0xc05606458f216ac4!8m2!3d-37.9128179!4d145.1324576"> Get Directions </a> </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank" href="http://moodle.vle.monash.edu/"> View on Moodle </a> </div> </div>'
        }


        return cLocation

    },

     getFeesPay: function () {
        var feesPay = "You're fees can easily be paid via the fees site at http://www.monash.edu/fees/payment/payment-options"
        return feesPay
    },


    getIntroRes: function () {
        var intro = "Hi there. I am your Monash assigned personal assistant. How may I help you today?"
        return intro
    },

    getHalTime: function() {
        var halTime = {
            card: '<div class="mdl-card-wide mdl-shadow--2dp"> <div id="card-library" class="mdl-card__title mdl-card--expand"> <h2 class="mdl-card__title-text">Hargrave-Andrew Library</h2> </div> <div class="mdl-card__supporting-text"> Monday <span style="float: right;">8:00am - 12:00am</span> <br/> Tuesday <span style="float: right;">8:00am - 12:00am</span> <br/> Wednesday <span style="float: right;">8:00am - 12:00am</span> <br/> Thursday <span style="float: right;">8:00am - 12:00am</span> <br/> Friday <span style="float: right;">8:00am - 9:00pm</span> <br/> Saturday <span style="float: right;">1:00pm - 5:00pm</span> <br/> Sunday <span style="float: right;">1:00pm - 5:00pm</span> </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank" href="https://www.google.com.au/maps/place/Monash+University+Clayton+Campus/@-37.9114772,145.1335671,18.11z/data=!4m5!3m4!1s0x6ad66acbf64673b9:0xfaf9b169a587104!8m2!3d-37.9114731!4d145.1344641"> Get Directions </a> </div> </div>',
            voice: "the library will close at 5 00 PM today. Here are some of the other days and times hargraves is open"
        }
        return halTime;
    }
}
