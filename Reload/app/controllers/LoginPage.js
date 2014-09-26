var args = arguments[0] || {};

	 
     
function doClick() {
  
 if (OS_IOS) {
 	var window = $.navgroup;
    var currentWindow = Titanium.UI.getCurrentWindow(); 
    var nextWin = Alloy.createController('DashBoard').getView();
      window.openWindow(nextWin, {animated:true});
   } else if (OS_ANDROID) {
    var nextWin = Alloy.createController('DashBoard').getView();
     nextWin.open();
 }
   
}