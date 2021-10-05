/*
function parseCookie() {
    var cookieObj = {};
    var cookieAry = document.cookie.split(';');
    var cookie;
    
    for (var i=0, l=cookieAry.length; i<l; ++i) {
        cookie = jQuery.trim(cookieAry[i]);
        cookie = cookie.split('=');
        cookieObj[cookie[0]] = cookie[1];
    }
    
    return cookieObj;
}

function getCookieByName(name) {
    
  var value = parseCookie()[name];
  if (value) {
    value = decodeURIComponent(value);
  }

  return value;
}
*/

function init() {
  // Get JWT
  allCookies = document.cookie;
  
  //if (!getCookieByName("jwt")) {
  //  window.location.replace("/accounts/signin.html");
 // }
}
