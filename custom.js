//Leiab html failist "buttoni" mille peale vajutades peab lehel olev info vahetuma
var btn = document.getElementById("MobilRequest");

//if on lisatud, sest muidu "EventListener" on null ja ei toimi?
if (btn){
	
	btn.addEventListener("click", function(){
	//võtab info html faili laadimiseks, teisest kohast
	var MobilRequest = new XMLHttpRequest();
	MobilRequest.open('GET','http://www.tlu.ee/~kivig/Boot/Telia/AJAX/Mobil.json');
	MobilRequest.onload = function() {
		//Sisestab tõmmatub info õigesse kohta html failis
		document.getElementById("demo").innerHTML = MobilRequest.responseText;
	};
	MobilRequest.send();
});
}

var btn2 = document.getElementById("TVRequest");

if (btn2){
	btn2.addEventListener("click", function(){
	var TVRequest = new XMLHttpRequest();
	TVRequest.open('GET','http://www.tlu.ee/~kivig/Boot/Telia/AJAX/TV.json');
	TVRequest.onload = function() {
		document.getElementById("demo").innerHTML = TVRequest.responseText;
	};
	TVRequest.send();
});
}

var btn3 = document.getElementById("KoduRequest");

if (btn3){
	btn3.addEventListener("click", function(){
	var KoduRequest = new XMLHttpRequest();
	KoduRequest.open('GET','http://www.tlu.ee/~kivig/Boot/Telia/AJAX/kodu.json');
	KoduRequest.onload = function() {
		document.getElementById("demo").innerHTML = KoduRequest.responseText;
	};
	KoduRequest.send();
});
}

var btn4 = document.getElementById("TeliaRequest");

if (btn4){
	btn4.addEventListener("click", function(){
	var TeliaRequest = new XMLHttpRequest();
	TeliaRequest.open('GET','http://www.tlu.ee/~kivig/Boot/Telia/AJAX/Telia.json');
	TeliaRequest.onload = function() {
		document.getElementById("demo").innerHTML = TeliaRequest.responseText;
	};
	TeliaRequest.send();
});
}

var btn5 = document.getElementById("NutiRequest");

if (btn5){
	btn5.addEventListener("click", function(){
	var NutiRequest = new XMLHttpRequest();
	NutiRequest.open('GET','http://www.tlu.ee/~kivig/Boot/Telia/AJAX/Nuti.json');
	NutiRequest.onload = function() {
		document.getElementById("demo").innerHTML = NutiRequest.responseText;
	};
	NutiRequest.send();
});
}

var btn6 = document.getElementById("IseRequest");

if (btn6){
	btn6.addEventListener("click", function(){
	var IseRequest = new XMLHttpRequest();
	IseRequest.open('GET','http://www.tlu.ee/~kivig/Boot/Telia/AJAX/Ise.json');
	IseRequest.onload = function() {
		document.getElementById("demo").innerHTML = IseRequest.responseText;
	};
	IseRequest.send();
});
}

var btn7 = document.getElementById("ArvedRequest");

if (btn7){
	btn7.addEventListener("click", function(){
	var ArvedRequest = new XMLHttpRequest();
	ArvedRequest.open('GET','http://www.tlu.ee/~kivig/Boot/Telia/AJAX/Arved.json');
	ArvedRequest.onload = function() {
		document.getElementById("demo").innerHTML = ArvedRequest.responseText;
	};
	ArvedRequest.send();
});
}

var btn8 = document.getElementById("IntRequest");

if (btn8){
	btn8.addEventListener("click", function(){
	var IntRequest = new XMLHttpRequest();
	IntRequest.open('GET','http://www.tlu.ee/~kivig/Boot/Telia/AJAX/Mobnet.json');
	IntRequest.onload = function() {
		document.getElementById("demo").innerHTML = IntRequest.responseText;
	};
	IntRequest.send();
});
}

//Valib kõik võimalikud moodusd, akent avada/sulgeda.
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {//võtab data-modal-targeti html-ist
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

//et sulgeks, kui vajutada modalast välja
if (overlay){
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})
}

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
	//juhul kui overlay avatakse, ilma, et seal midagi sees oleks.
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

//otsib lähima vanema kus on klass "modals"
function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

window.onload = initBannerLink;

var adImages = new Array("images/banner1.gif","images/banner2.gif","images/banner3.gif");
var adURL = new Array("pood.telia.ee/kampaania/kuupakkumine","www.telia.ee/era/lisateenused/vana-uueks/","pakkumised.telia.ee/apple-vana-uueks/");
var thisAd = 0;

function rotate() {
	thisAd++;
	if (thisAd == adImages.length) {// kui on ring täis, algab uuesti 0-ist
		thisAd = 0;
	}
	document.getElementById("adBanner").src = adImages[thisAd];

	setTimeout("rotate()", 3 * 1000);
}

function newLocation() {
	document.location.href = "https://" + adURL[thisAd]; //lisatakse konkreetne URL aadress massiivist
	return false; 
}

function initBannerLink() {
	if (document.getElementById("adBanner").parentNode.tagName == "A") {  /* see kood initBannerLink()
	funktsioonis kontrollib, kas adBanner-objekt on seotud lingiga, kui on, siis klikkimisel käivitub
	newLocation() funktsioon,lõpuks käivitub rotate() funktsioon. */
		document.getElementById("adBanner").parentNode.onclick = newLocation;
	}
	
	rotate();
}

window.onload = initLinks;

var myPix = new Array("Seadmepakk.png","Seadmepakk2.png","Seadmepakk3.png");
var thisPic = 0;

function initLinks() {  // see funktsioon loob event handlerid Previous ja Next linkidele
	document.getElementById("prevLink").onclick = processPrevious;
	document.getElementById("nextLink").onclick = processNext;
}

function processPrevious() {  // see funktsioon paneb slideshow jooksma previous suunal
	if (thisPic == 0) {
		thisPic = myPix.length;
	}
	thisPic--;  // vähendab thisPic väärtust 1. võrra
	document.getElementById("myPicture").src = myPix[thisPic];// src myPicture seotakse myPix massiivi konkreetse väärtusega thisPic (myPicture==id)
	return false;
}

function processNext() {  //slideshow jookseb next suunas
	thisPic++;
	if (thisPic == myPix.length) {
		thisPic = 0;
	}
	document.getElementById("myPicture").src = myPix[thisPic];
	return false;
}

