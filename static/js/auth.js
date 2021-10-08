function checkAuth() {
  if (getCookie("jwt") == "")
  {
    var path = window.location.pathname;
    var page = path.split("/").pop();

    if (page != "signin.html" || page != "signup.html") {
      window.location.replace("/eid-web/accounts/signin.html");
    }

  } else {
    console.log("jwt = " + getCookie("jwt"));
  }
}
