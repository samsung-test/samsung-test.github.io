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


/*
 *
 * toggle menu *********************************************************************
 *
 */

$("#menu-toggle").click(function(e) {
	console.log('menu clicked');
	e.preventDefault();
	$(".wrapper").toggleClass("right-open");
	$(".col-toc").toggleClass("col-toc-hidden");   
  });
  $("#menu-toggle-left").click(function(e) {
	e.preventDefault();
	$(".col-nav").toggleClass("col-toc-hidden");
  });
  $(".navbar-toggle").click(function(){
	$("#sidebar-nav").each(function(){
	  $(this).toggleClass("hidden-sm");
	  $(this).toggleClass("hidden-xs");
	});
  });