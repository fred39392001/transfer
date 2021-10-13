function checkAuth(e) {
  if (getCookie("jwt") == "") {
    console.log("Null value of JWT");
    var path = window.location.pathname;
    var page = path.split("/").pop();

    if (page != "signin.html" || page != "signup.html") {
      window.location.replace("/eid-web/accounts/signin.html");
    }

  } else {
    // Verify token
    console.log("Verifing JWT ...");
    var dataJSON = {};
    dataJSON.token =  getCookie("jwt");
    $.ajax({
      url: "https://eid-backend.townway.com.tw/accounts/verify_jwt",
      type: "POST",
      crossDomain: true,
      data:  dataJSON,
      success: function(returnData) {
        const obj = JSON.parse(returnData);

	if (obj.result) {
	  console.log("JWT still avliable");
        } else {
	  console.log("Hello verify fail, result == " + obj.result);
          window.location.replace("/eid-web/accounts/signin.html");
	}

      },
      error: function(xhr, ajaxOptions, thrownError){
        console.log(thrownError);
      }
    }); 
  }
}
