
document.addEventListener("keydown", getKey)

function getKey(e) {

    $.each($('.keyWhite'), function (indexInArray, valueOfElement) { 
         if(valueOfElement.innerHTML.includes(e.key)){
            var keyView = $(valueOfElement)
            keyView.animate({height: '161px'}, "fast")
            keyView.animate({height: '10rem'}, "fast")
         }
    });

    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    audio.currentTime = 0;
    audio.play();
    
}
