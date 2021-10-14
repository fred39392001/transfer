function setInfoEid() {
  // Set username
  $("#userid").text(getCookie("username"));
}

function setPageInfo() {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  console.log( page );

  if (page == "eid.html") {
    setInfoEid();
  } else if (page == "issues.html") {
    $("#nav-issues").addClass("active");
  } else if (page == "foot_print.html") {
    $("#nav-foot_print").addClass("active");
  } else if (page == "wallet.html") {
    $("#nav-wallet").addClass("active");
  }
}
