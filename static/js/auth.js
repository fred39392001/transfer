function checkAuth(e) {
  if (getCookie("jwt") == "") {
    console.log("Null value of JWT");
    var path = window.location.pathname;
    var page = path.split("/").pop();

    if (page != "signin.html" || page != "signup.html") {
      window.location.replace("/eid-web/accounts/signin.html");
    }

  } else {

    // TODO: Verify token
    console.log("Verifing JWT ...");
    var dataJSON = {};
    dataJSON.token =  getCookie("jwt");
    e.preventDefault();
    $.ajax({
      url: "https://eid-backend.townway.com.tw/accounts/verify_jwt",
      type: "POST",
      crossDomain: true,
      data:  dataJSON,
      success: function(returnData) {
        const obj = JSON.parse(returnData);

	if (obj.result == "True") {
	  console.log("JWT still avliable");
          setCookie("jwt", obj.token, 1);
        } else {
          window.location.replace("/eid-web/accounts/signin.html");
	}

      },
      error: function(xhr, ajaxOptions, thrownError){
        console.log(thrownError);
      }
    }); 

    // console.log("jwt = " + getCookie("jwt"));
  }
}
