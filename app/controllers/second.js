// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
// var win = Titanium.UI.currentWindow;
// win.getTitle();
$.secondwidget.namewin.text="Second";
$.secondwidget.back.addEventListener('click',function(e)
{
  // Titanium.API.info("You clicked the button");
   $.window2.close();
});