

document.addEventListener("keydown", getKey)

 function getKey(e) {
   
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`div[data-key="${e.key}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

}
