console.log("Hello,Fancy Frames");

//load airtable library
let Airtable = require("airtable");
console.log(Airtable);

let base = new Airtable({apiKey: 'keyZcs7oyE8wnbvG1'}).base('appkDUTq1Z3I8kIKH');

base("framesBase").select({}).eachPage(gotPageOfFrames,gotAllFrames);

const frames = [];

//get data
function gotPageOfFrames(records, fetchNextPage){
console.log("gotPageOfFrames()");
frames.push(...records);
fetchNextPage();
}

//callback funtion
function gotAllFrames(err) {
    console.log("gotAllFrames()");

if (err){
    console.log("can't find the frames");
    console.error(err);
    return;
}

//call funtion to show frames
consoleLogFrames();
showFrames();
}

function consoleLogFrames() {
    console.log("consoleLogFrames()");
    frames.forEach(frame => {
        console.log("frame:", frame);
    });
}

function showFrames() {
    console.log("showFrames()");
    frames.forEach(frame => {

    let frameContainer = document.createElement("div");
    frameContainer.classList.add("frame-container");
    document.querySelector(".container").append(frameContainer);

    let frameImage = document.createElement("img");
    frameImage.classList.add("frame-image");
    frameImage.src = frame.fields.photoFrame[0].url;
    frameContainer.append(frameImage);

    let frameDescription = document.createElement("p");
    frameDescription.classList.add("frame-description");
    frameDescription.innerText = frame.fields.whatSpeaksWithTheFrame;
    frameContainer.append(frameDescription);

    // let frameInfo = document.createElement("div");
    // frameInfo.classList.add("frame-info");
    // document.querySelector(".info").append(frameInfo);

    // let frameName = document.createElement("p");
    // frameName.classList.add("frame-name");
    // frameName.innerText = frame.fields.Name;
    // frameInfo.append(frameName);

    frameContainer.addEventListener("click", function(event) {
    frameDescription.classList.toggle("active");
    frameImage.classList.toggle("off");
    });
    });
}

let theCursor = document.querySelector('#cursor');

document.addEventListener("mousemove", moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

theCursor.style.left = `${x}px`
theCursor.style.top = `${y}px`
}
