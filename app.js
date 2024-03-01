function speak(){
    let synth = window.speechSynthesis;
    let voice = new SpeechSynthesisUtterance(document.querySelector("#textbox").value);
    synth.speak(voice);
}