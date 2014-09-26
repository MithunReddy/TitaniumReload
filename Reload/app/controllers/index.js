function doClick() {
    if (OS_IOS) {
    	console.log("iPhone !!!");
          var newWindow = Alloy.createController('LoginPage').getView();
          newWindow.open();
    } else if (OS_ANDROID) {
        console.log("Android!!!");
        var registerController = Alloy.createController('LoginPage').getView();
        registerController.open();
   }
}

$.index.open();
