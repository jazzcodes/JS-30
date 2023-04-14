
function playSound(e)
{
   const audio=document.querySelector(`audio[data-key= "${e.keyCode}"]`);
   const key=document.querySelector(`div[data-key="${e.keyCode}"]`);
   console.log(audio);
   if(!audio) return;

   audio.currentTime=0;
   audio.play();
   key.classList.add('playing');
  
}

function removeTransition(e)
{
    if(e.propertyName!='transform')  return;
    // this.classList.remove('playing');
    e.target.classList.remove('playing');

    // both do the same thing
}


window.addEventListener("keydown",playSound);
const keys=Array.from(document.querySelectorAll('.key'));

// we need to iterate over the array to remove each transition individually in every key

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

