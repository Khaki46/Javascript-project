const synth = speechSynthesis;

const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');
const body = document.querySelector('body');

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voices.forEach((element) => {
        const option = document.createElement('option');
        option.textContent = element.name + `(${element.lang})`;

        option.setAttribute('data-lang',element.lang)
        option.setAttribute('data-name', element.name)
        
        voiceSelect.appendChild(option);

    })
}

// function getVoiceList() {
//     voices = synth.getVoices();
//     // console.log(voices);
//     voices.forEach(element => {
//         const option = document.createElement('option');
//         option.textContent = element.name + `(${element.lang})`;

//         option.setAttribute('data-lang',element.lang)
//         option.setAttribute('data-name', element.name)
        
//         voiceSelect.appendChild(option);
//     });
// }

// if (synth.onvoiceschanged !== undefined) {
//     synth.onvoiceschanged = getVoiceList;
// }

function speak() {
    if (synth.speaking) {
        console.error("speaking");
        synth.cancel();
    }
    if (textInput.value !== "") {
        const speakText = new SpeechSynthesisUtterance(textInput.value);
        speakText.onend = e => {
            console.log("Done speaking");
        }
        speakText.onerror = e => {
            console.error("something went wrong");
        }
        const selectedVoice = voiceSelect.selectedOptions[0]
            .getAttribute('data-name');
        
        voices.forEach(voice => {
            if (voice.name === selectedVoice) {
                speakText.voice = voice;
            }
        });
        
        speakText.rate = rate.value;
        speakText.pitch = pitch.value;

        synth.speak(speakText);
    }
}

textForm.addEventListener('submit', e => {
    e.preventDefault();
    speak();
    textInput.blur();
});
rate.addEventListener('change', e => rateValue.textContent = rate.value);

pitch.addEventListener('change', e => pitchValue.textContent = pitch.value);

voiceSelect.addEventListener('change', e => speak());

