var vue = new Vue({
    el: '#vueApp',
    data: {
        isVoiceMode: false,
        voice: {
            conversations: []
        }
    }
});


function addQuestion(question) {
    vue.voice.conversations[vue.voice.conversations.length - 1].data = question;
    ask_server(final_transcript);
    recognition.stop();
}

function ask_server(query) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            vue.voice.conversations.push({
                type: 'a',
                data: this.responseText
            });
        }
    };
    xhttp.open("GET", "/api/ask/" + query, true);
    xhttp.send();
}


// Voice
var recognition;
var recognizing;
if (!('webkitSpeechRecognition' in window)) {
    console.log('USE CHROME!');
}
else {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function () {
        recognizing = true;
        vue.voice.conversations.push({
            type: 'q',
            data: 'Ask a question'
        });

        // var conversationDiv = document.getElementById('conversation');
        // var ongoingQuestionDiv = document.createElement("div");
        // ongoingQuestionDiv.id = "ongoingQuestionDiv";
        // ongoingQuestionDiv.className = "question";
        // ongoingQuestionDiv.innerHTML = "<div class='bubble-question'><span id='ongoingQuestion'></span></div>";
        // conversationDiv.appendChild(ongoingQuestionDiv);
    };

    recognition.onerror = function (event) {
        if (event.error == 'no-speech') {
            console.log('Error: No Speech');
            ignore_onend = true;
        }
        if (event.error == 'audio-capture') {
            console.log('Error: Audio capture');
            ignore_onend = true;
        }
        if (event.error == 'not-allowed') {
            if (event.timeStamp - start_timestamp < 100) {
                console.log('Error: Access not allowed');
            }
            ignore_onend = true;
        }
    };

    recognition.onend = function () {
        // $("#mic-button").removeClass("pulse-button-anim");
        recognizing = false;
        if (ignore_onend) {
            return;
        }

        // if (window.getSelection) {
        //     window.getSelection().removeAllRanges();
        //     var range = document.createRange();
        //     if (document.getElementById('ongoingQuestion')) {
        //         range.selectNode(document.getElementById('ongoingQuestion'));
        //     }
        //     window.getSelection().addRange(range);
        // }

    };

    recognition.onresult = function (event) {
        var interim_transcript = '';

        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                final_transcript += event.results[i][0].transcript;
                console.log(final_transcript);
                addQuestion(final_transcript);
            } else {
                interim_transcript += event.results[i][0].transcript;
                console.log(interim_transcript);
                vue.voice.conversations[vue.voice.conversations.length - 1].data = interim_transcript;
            }
        }
    };
}


function startButton(event) {
    if (recognizing) {
        recognition.stop();
        return;
    }
    playChime();

    final_transcript = '';
    recognition.lang = 'en-AU';
    recognition.start();
    ignore_onend = false;
    start_timestamp = event.timeStamp;
    // updateScroll();
}

function playChime() {
    var audio = document.getElementById("audio");
    audio.play();
}







