window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  ///////////////////////////

//storyline :

 

 

//in  storyline  add js triggerd when start ( add it to pic or someting .. )

 

 

var input = document.createElement("input");

input.setAttribute("type", "hidden");

input.setAttribute("name", "course_code");

input.setAttribute("id", "course_code");

input.setAttribute("value", "77-3300-0001"); // !!!!!!!!!!!!!   set

document.body.appendChild(input);

 

 

d = document.createElement("div");

d.setAttribute("id", "popup");

document.body.appendChild(d);

function loadjscssfile(filename, filetype) {

if (filetype == "js") { //if filename is a external JavaScript file

var fileref = document.createElement('script')

fileref.setAttribute("type", "text/javascript")

fileref.setAttribute("src", filename)

}

else if (filetype == "css") { //if filename is an external CSS file

var fileref = document.createElement("link")

fileref.setAttribute("rel", "stylesheet")

fileref.setAttribute("type", "text/css")

fileref.setAttribute("href", filename)

}

if (typeof fileref != "undefined")

document.getElementsByTagName("head")[0].appendChild(fileref)

}

 

loadjscssfile('/slss/boot.js','js');

 

function sleep(delay) {

var start = new Date().getTime();

while (new Date().getTime() < start + delay);

}

 

function UrlExists(url)

{

                try {

               

    var http = new XMLHttpRequest();

    http.open('HEAD', url, false);

    http.send();

               

    return http.status!=404;

               

                } catch(err) {

    return true; // false

                }

 

}

 

function kill(){

window.top.location.href="/";

}

 

t = location.protocol + '//' + location.host + '/slss/a2.js';

test = UrlExists(t);

if(! test) {

kill();

}

 

loadjscssfile('/slss/css/a2.css','css');

loadjscssfile('/slss/a2.js','js');
}

window.Script2 = function()
{
  ///////////////////////////

//storyline :

 

 

//in  storyline  add js triggerd when start ( add it to pic or someting .. )

 

 

var input = document.createElement("input");

input.setAttribute("type", "hidden");

input.setAttribute("name", "course_code");

input.setAttribute("id", "course_code");

input.setAttribute("value", "77-3300-0001"); // !!!!!!!!!!!!!   set

document.body.appendChild(input);

 

 

d = document.createElement("div");

d.setAttribute("id", "popup");

document.body.appendChild(d);

function loadjscssfile(filename, filetype) {

if (filetype == "js") { //if filename is a external JavaScript file

var fileref = document.createElement('script')

fileref.setAttribute("type", "text/javascript")

fileref.setAttribute("src", filename)

}

else if (filetype == "css") { //if filename is an external CSS file

var fileref = document.createElement("link")

fileref.setAttribute("rel", "stylesheet")

fileref.setAttribute("type", "text/css")

fileref.setAttribute("href", filename)

}

if (typeof fileref != "undefined")

document.getElementsByTagName("head")[0].appendChild(fileref)

}

 

loadjscssfile('/slss/boot.js','js');

 

function sleep(delay) {

var start = new Date().getTime();

while (new Date().getTime() < start + delay);

}

 

function UrlExists(url)

{

                try {

               

    var http = new XMLHttpRequest();

    http.open('HEAD', url, false);

    http.send();

               

    return http.status!=404;

               

                } catch(err) {

    return true; // false

                }

 

}

 

function kill(){

window.top.location.href="/";

}

 

t = location.protocol + '//' + location.host + '/slss/a2.js';

test = UrlExists(t);

if(! test) {

kill();

}

 

loadjscssfile('/slss/css/a2.css','css');

loadjscssfile('/slss/a2.js','js');
}

};
