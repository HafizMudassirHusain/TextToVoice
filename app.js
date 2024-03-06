let synth = window.speechSynthesis;
let voices = [];

function populateVoiceList() {
    voices = synth.getVoices();

    const voiceSelect = document.getElementById('voices');
    voices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.textContent = voice.name + ' (' + voice.lang + ')';
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    });
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak() {
    let voiceSelect = document.getElementById('voices');
    let selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');
    let selectedVoice = voices.find(voice => voice.name === selectedVoiceName);
    let utterance = new SpeechSynthesisUtterance(document.querySelector("#textbox").value);
    utterance.voice = selectedVoice;
    synth.speak(utterance);
}

function pause() {
    synth.pause();
}

function resume() {
    synth.resume();
}

function stop() {
    synth.cancel();
}

