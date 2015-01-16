

function promptBox() {
  console.log("You clicked here");

 chrome.tabs.executeScript({
	 //minified using http://jscompress.com
    file:'js/download.js'
  });
}


document.getElementById("clickButton").addEventListener("click", function(){
    document.getElementById("main").innerHTML = "downloading began";
	promptBox();
});


