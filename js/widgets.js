publishedVersions = widgetsData.versions.filter(function(version){
	return version.published === true;
});
latestVersion = widgetsData.versions.filter(function(version){
	return version.published === true && version.latest === true ;
});
currentVersion = $('#docsVersion').attr("content");
currentVersionData = widgetsData.versions.find( version => version.title === currentVersion);

$(function(){
	$("#templates").load("/js/templates.html"); 
});

console.log('published version',publishedVersions);
console.log('latest version',latestVersion);
console.log('current version',currentVersion);
console.log('current version Data',currentVersionData);
console.log('current url',currentUrl);
