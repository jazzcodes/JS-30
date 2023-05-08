/* Controls */

const player=document.querySelector(".player");
const video=document.querySelector(".viewer");
const toggle=document.querySelector(".toggle");
const skipBtns=document.querySelectorAll('[data-skip]');
const ranges=document.querySelectorAll("input[type='range']");
const progressBar=document.querySelector(".progress__filled");
const progress=document.querySelector(".progress");
const bigScreen=document.querySelector(".fullscreen");
const smallScreen=document.querySelector(".smallscreen");

/* Functions */

function togglePlay()
{
    const method=video.paused?'play':'pause';
    video[method]();

    console.log("togglePlay reached");
}

function updateButton()
{
    const icon=this.paused?'►':'❚ ❚';
    toggle.textContent=icon;
    console.log("button updated");
}

function skip()
{
    video.currentTime+= parseFloat(this.dataset.skip);
    console.log("skipped");
}

function handleUpdate()
{
    video[this.name]=this.value;
    console.log(this.name, this.value);
}

function handleProgress()
{
    const percentage=(video.currentTime/video.duration)*100;
    progressBar.style.flexBasis=`${percentage}%`;
    console.log("progress", percentage, "%");
}

function scrub(e)
{
    const scrubTime=(e.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime=scrubTime;
}

function handleScreen()
{
    player.style.width="100%";
    player.style.maxWidth="none";
    bigScreen.style.display="none";
    smallScreen.style.display="initial";
}

function handleSmallScreen()
{
    player.style.width="initial";
    player.style.maxWidth="initial";
    bigScreen.style.display="initial";
    smallScreen.style.display="none";

}

/* Hook up the Event Listeners */

toggle.addEventListener("click", togglePlay);  //isn't working -> pause is working
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
skipBtns.forEach(skipBtn=>{
    skipBtn.addEventListener("click", skip);
});
ranges.forEach(range=>{
    range.addEventListener("click", handleUpdate);
});
video.addEventListener("timeupdate", handleProgress); //progress event can also be used
progress.addEventListener("click", scrub);
let mousedown=false;
progress.addEventListener("mousemove", ()=>mousedown&&scrub);
progress.addEventListener("mousedown",()=>{mousedown=true});
progress.addEventListener("mouseup",()=>{mousedown=false});
bigScreen.addEventListener("click", handleScreen);
smallScreen.addEventListener("click", handleSmallScreen);