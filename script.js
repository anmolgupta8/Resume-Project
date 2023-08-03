// Scrolling 

var menuAncTags = document.querySelectorAll('.nav-menu a');
// console.log(menuAncTags);

for(let i = 0;i<menuAncTags.length;i++){
    menuAncTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSectionID + " " + targetSection);
        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if ((window.innerHeight + window.scrollY + 1) >= document.body.offsetHeight) {
                // console.log("Scrolling stop");
                clearInterval(interval);
                return;
            }
            if(targetSectionCoordinates.top <= 0){
                // console.log("Scrolling stop");
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },20);
    });
}

// Slide Bar Auto Fill

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills');
var animationDone = false;
window.addEventListener('scroll',checkScroll);

function intialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0;
    }
}

intialiseBars();

function fillBars(){
    for(let bar of progressBars){
        let barWidth = bar.getAttribute('data-bar-width');
        let currWidth = 0;
        let interval = setInterval(function(){
            if(currWidth>barWidth){
                clearInterval(interval);
                return;
            }
            currWidth++;
            bar.style.width = currWidth + "%";
        },12);
    }
}

function checkScroll(){
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<=window.innerHeight){
        animationDone = true;
        // console.log("Animation");
        fillBars();
    }
    else if(coordinates.top>window.innerHeight){
        animationDone = false;
        intialiseBars();
    }
}

// Slide Bar Auto Fill One by One

// var progressBars = document.querySelectorAll('.skill-progress > div');
// var skillsContainer = document.getElementById('skills');
// window.addEventListener('scroll',checkScroll);

// function initialiseBar(bar){
//     bar.style.width = 0;
// }

// for(let bar of progressBars){
//     initialiseBar(bar);
// }

// function fillBar(bar){
//     var maxWidth = bar.getAttribute('data-bar-width');
//     var currWidth = 0;
//     var interval = setInterval(function(){
//         if(currWidth>maxWidth){
//             clearInterval(interval);
//             return;
//         }
//         currWidth++;
//         bar.style.width = currWidth + "%";
//     },12);
// }
// var vis = [];
// for(let i=0;i<progressBars.length;i++){
//     vis.push(false);
// }
// function checkScroll(){
//     for(let idx = 0;idx<progressBars.length;idx++){
//         let bar = progressBars[idx];
//         let coordinates = bar.getBoundingClientRect();
//         if(!vis[idx] && coordinates.top<=window.innerHeight-coordinates.height){
//             vis[idx] = true;
//             // console.log("Animation Bar");
//             fillBar(bar);
//         }
//         else if(coordinates.top>window.innerHeight){
//             vis[idx] = false;
//             initialiseBar(bar);
//         }
//     }
// }