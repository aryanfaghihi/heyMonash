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
        var pLocation= "There's free parking on campus after 4 30 pm. There's also free parking on the weekend at Clayton."
        return pLocation
    },

    getClassLocation: function () {
        var cLocation;
        cLocation = {
            voice: 'Your next class starts at 2 00 pm at Theatre H3, 22 Chancellors Walk. Here are the directions to get there.',
            title: 'Schedule',
            description: '',
            actions: [

            ]
        }


        return cLocation

    },

    // getFeesPay: function () {
    //     var feesPay = "You can pay your fees easily at http://www.monash.edu/fees/payment/payment-options"
    //     return feesPay
    // },


    getIntroRes: function () {
        var intro = "Good afternoon! I'm your personal assistant for all things Monash. How may I help you today?"
        return intro
    },

    getHalTime: function () {
        var halTime = {
            card: '<div class="mdl-card-wide mdl-shadow--2dp"> <div id="card-library" class="mdl-card__title mdl-card--expand"> <h2 class="mdl-card__title-text">Hargrave-Andrew Library</h2> </div> <div class="mdl-card__supporting-text"> Monday <span style="float: right;">8:00am - 12:00am</span> <br/> Tuesday <span style="float: right;">8:00am - 12:00am</span> <br/> Wednesday <span style="float: right;">8:00am - 12:00am</span> <br/> Thursday <span style="float: right;">8:00am - 12:00am</span> <br/> Friday <span style="float: right;">8:00am - 9:00pm</span> <br/> Saturday <span style="float: right;">1:00pm - 5:00pm</span> <br/> <b>Sunday <span style="float: right;">1:00pm - 5:00pm</span></b> </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank" href="https://www.google.com.au/maps/place/Monash+University+Clayton+Campus/@-37.9114772,145.1335671,18.11z/data=!4m5!3m4!1s0x6ad66acbf64673b9:0xfaf9b169a587104!8m2!3d-37.9114731!4d145.1344641"> Get Directions </a> </div> </div>',
            voice: "the Hargrave Andrew library will close at 5 00 PM today.Here are the hours for the rest of the week."
        }
        return halTime;
    },

    getFeesPay: function () {
        var feesPay = {
            card: '<div class="demo-card-event mdl-card mdl-shadow--2dp"><div class="mdl-card__title mdl-card--expand"><h4>Pay your fees<br/><p>When fees are due, you will receive a document advising you of the amount and due date. This will be in the form of one of the following...</p></h4></div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="https://www.monash.edu/fees/payment/payment-options">Visit Website</a><div class="mdl-layout-spacer"></div><i class="material-icons">language</i></div></div>',
            voice: "You can easily pay your fees on the Monash website. Visit the link below to get started!"
        }
    }
}
