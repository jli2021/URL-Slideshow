var urls = [
"http://youtube.com/", 
"http://google.com/", 
"http://stackoverflow.com/",
"http://yahoo.com/"
];

var startURL = "http://pingry.org/";

function showURL(i){
	chrome.tabs.update(null, {url: urls[i]});
};

var x = 0;                     

function myLoop () { 
   setTimeout(function () {
      showURL(x%4);       
      x++;                     
      if (x < urls.length * 3) {
         myLoop();
      }
   }, 2000)
}

chrome.browserAction.onClicked.addListener(function(activeTab){
	chrome.tabs.create({url: startURL});
	myLoop();
});

