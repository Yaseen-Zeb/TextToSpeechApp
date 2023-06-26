let button = document.querySelector("button"),
   text = document.querySelector("textarea"),
   selector = document.querySelector("select"),
   error = document.querySelector(".error"),
   options = "",
   i = 0,
   voices = speechSynthesis,
   speaking = true;

voices.addEventListener("voiceschanged", () => {
   voices.getVoices().forEach(voice => {
      let selected = i === 0 ? "selected" : "";
      options += `<option ${selected} value="${voice.name}">${voice.name}</option>`
      i++;
   });
   selector.innerHTML = options
})



button.addEventListener("click", () => {
   if (text.value == "") {
      error.textContent = "Put any text!";
      error.style.display = "block";
      setTimeout(() => {
         error.textContent = "";
         error.style.display = "none";
      }, 4000);
   } else {
      let speach = new SpeechSynthesisUtterance(text.value);
      voices.getVoices().forEach(voice => {
         if (voice.name == selector.value) {
            speach.voice = voice
         }
      })

      if (!voices.speaking) {
         speechSynthesis.speak(speach)
      }

   }

})



