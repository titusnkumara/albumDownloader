
(function worker() {
    console.log("downloading");
	var thumbnails = document.getElementsByClassName("uiMediaThumb _6i9 uiMediaThumbMedium");

	console.log(thumbnails.length);

	for(var x=0;x<thumbnails.length;x++){
		//get the each thumbnail
		var pic = thumbnails[x];
		//console.log(pic);
		//get the href
		console.dir(pic);
		var href = String(pic.href);
		
		//extract the src to size part
		
		var actualLinkUnedited = href.match("src=(.*)&size=")[1];
		
		//check this contains https
		if(actualLinkUnedited.indexOf("&small") > -1){
			//then it should have small section
			var actualLinkUnedited = actualLinkUnedited.substring(0, actualLinkUnedited.indexOf('&small'));
			console.log("fixed &small error");
		}
		
		//print link
		//console.log(actualLinkUnedited + " "+x);
		//convert into actual url
		
		var realUrl = decodeURIComponent(actualLinkUnedited);
		console.log(realUrl);
		
		//Download each of them
		var link = document.createElement('a');
		link.href = realUrl;
		link.download = 'Download_'+String(x)+'.jpg';
		document.body.appendChild(link);
		link.click();

	}
 
})();

