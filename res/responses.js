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
            voice: 'Your next class is at 5 30 PM at room G22, building 36, Rainforest Walk.Here are the directions to get there',
            title: 'Schedule',
            description: '',
            actions: [

            ]
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
            card: '<div class="mdl-card-wide mdl-shadow--2dp"> <div class="mdl-card__title mdl-card--expand"> <h2 class="mdl-card__title-text">Hargrave-Andrew Library</h2> </div> <div class="mdl-card__supporting-text"> Monday <span style="float: right;">8:00am - 12:00am</span> <br/> Tuesday <span style="float: right;">8:00am - 12:00am</span> <br/> Wednesday <span style="float: right;">8:00am - 12:00am</span> <br/> Thursday <span style="float: right;">8:00am - 12:00am</span> <br/> Friday <span style="float: right;">8:00am - 9:00pm</span> <br/> Saturday <span style="float: right;">1:00pm - 5:00pm</span> <br/> Sunday <span style="float: right;">1:00pm - 5:00pm</span> </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"> Get Directions </a> </div> </div>',
            voice: "the library will close at 5 00 PM today here are some of the other days and times hargrave is open"
        }
        return halTime;
    }
}
