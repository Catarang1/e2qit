// * movable HTML by Header
// * electron integration
// * shutdown, exit app, minimalize fxs /w Node

//electron
const { ipcRenderer, remote } = require('electron');

//elements
var left;
var right;
var hourField;
var minuteField;
var progressBack;
var progressBar;
var addTen;
var addHour;

//variables
var maxT = null;
var deltaT = null;
var armed = false;
var intervalID = null;
var inputValid = true;

function init() {
    left = document.getElementById('first-stroke');
    right = document.getElementById('second-stroke');
    hourField = document.getElementById('hourInputField');
    minuteField = document.getElementById('minuteInputField');
    progressBack = document.getElementById('progressBack');
    progressBar = document.getElementById('progressBar');
    addHour = document.getElementById('refHour');
    addTen = document.getElementById('refTen');
}

function toggleState(){

    if (!armed && inputValid) {
        setupCoundown();
        buttonToCross();
        document.documentElement.style.setProperty('--PrimaryCurr', 'var(--PrimaryArmed)');
        addHour.style.display = 'inline';
        addTen.style.display = 'inline';
        progressBack.style.opacity = '1';
        fieldsToArmed();
        armed = true;
    } else if (armed) {
        cancelCountdown();
        buttonToArrow();
        document.documentElement.style.setProperty('--PrimaryCurr', 'var(--PrimarySetup)');
        addHour.style.display = 'none';
        addTen.style.display = 'none';
        progressBack.style.opacity = '0';
        fieldsToSetup();
        armed = false;
    } 
}

function checkInput(){
    inputScratch();
    if (minuteField.value.trim().match(/^\d{0,2}$/) && hourField.value.trim().match(/^\d{0,2}$/)) {
        inputValid = true;
    } else inputValid = false;
}

function inputScratch(){
	if (minuteField.value.length>2) {
		minuteField.value = minuteField.value.substr(1,2);
    } else if (minuteField.value.length == 1) {
        minuteField.value = '0' + minuteField.value
    }

    if (hourField.value.length>2) {
		hourField.value = hourField.value.substr(1,2);
	} else if (hourField.value.length == 1) {
        hourField.value = '0' + hourField.value
    }
}

function buttonToArrow(){
    left.style.transform = 'translate(2px, -2px)';
    right.style.transform = 'translate(-2px, -2px)';   
}

function buttonToCross(){
    left.style.transform = 'translate(6px, 3px)';
    right.style.transform = 'translate(-6px, 3px)';
}

function fieldsToSetup(){
    hourField.readOnly = false;
    minuteField.readOnly = false;
}

function fieldsToArmed(){
    hourField.readOnly = true;
    minuteField.readOnly = true;
}

function setupCoundown(){
    deltaT = minuteField.value * 60 + hourField.value * 60 * 60;
    maxT = deltaT;
    intervalID = setInterval(tick, 1000);
}

function cancelCountdown(){
    window.clearInterval(intervalID);
    progressBar.style.width = "100%";
    maxT = null;
    deltaT = null;
}

function tick(){
    if (deltaT == 0) {
        toggleState();
        shutdown();
        return;
    } 
    deltaT--;
    console.log(deltaT);
    progressBar.style.width = deltaT / maxT * 100 + '%';
    hourField.value = String(Math.floor(deltaT / 3600)).padStart(2, '0');
    minuteField.value = String(Math.ceil (deltaT % 3600 / 60)).padStart(2, '0');
}

function addMinutes(minutes) {
    deltaT += minutes * 60;
    maxT = deltaT;
    tick();
}

function shutdown() {
    console.log('shudown')
}

function mini() {
    ipcRenderer.invoke('mini', null)
}

function exit(){
    ipcRenderer.invoke('close', null)
}

function git(){
    ipcRenderer.invoke('git', null)
}