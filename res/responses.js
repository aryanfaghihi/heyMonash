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
        var cLocation= "Your next class is at 5 30 PM at room G22, building 36, Rainforest Walk.Here are the directions to get there"
        return cLocation

    },

    getFeesPay: function () {
        var feesPay= "You're fees can easily be paid via the ....... site"
        return feesPay
    },


    getIntroRes: function () {
        var intro = "Hi there. I am your Monash assigned personal assistant. How may I help you today?"
        return intro
    }
}