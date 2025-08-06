import React from "react";

import { FloatingWhatsApp } from "react-floating-whatsapp";

// import "../../../../node_modules/react-floating-whatsapp/dist/index.css";

export default function Whatsappbutton() {
  const [chat, setChat] = React.useState(`
  window.addEventListener('DOMContentLoaded', (event) => {
  	CometChatWidget.init({
  		"appID": "25887995d16006f0",
  		"appRegion": "in",
  		"authKey": "8fc3d35ca9e1f752418e942d60af955b4eff0efd"
  	}).then(response => {
  		console.log("Initialization completed successfully");
  		//You can now call login function.
  		CometChatWidget.login({
  			"uid": "superhero1"
  		}).then(response => {
  			CometChatWidget.launch({
  				"widgetID": " 4fb8945a-35fa-446b-baee-ed0561b2cf72",
  				"target": "#cometchat",
  				"roundedCorners": "true",
  				"height": "600px",
  				"width": "800px",
  				"defaultID": 'superhero1', //default UID (user) or GUID (group) to show,
  				"defaultType": 'user' //user or group
  			});
  		}, error => {
  			console.log("User login failed with error:", error);
  			//Check the reason for error and take appropriate action.
  		});
  	}, error => {
  		console.log("Initialization failed with error:", error);
  		//Check the reason for error and take appropriate action.
  	});
  });`);

  return (
    <div className="App">
      <FloatingWhatsApp
        phoneNumber="+918655793063"
        accountName="Twinkle Media Hub pvt. ltd."
        statusMessage="online"
        allowClickAway={true}
		avatar='asset/img/brand.png'
      />
    </div>
  );
}
