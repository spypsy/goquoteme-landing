(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/spypsycho/Dev/goquoteme/landing page/app/scripts/main.js":[function(require,module,exports){
(function() {
  var url = 'https://www.goquoteme.com';
  // var url = 'http://localhost:3001';

  console.log("foo");
  var form = document.getElementById("waiting-list");
  var email = document.getElementById('email-input');
  var xhr = new XMLHttpRequest();

  function getRefParameter() {
    return '';
  }
  // console.log(form)
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    xhr.open("POST", url + "/register-email", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
      // if (window.ga) {
      //   ga('send', 'event', 'waiting-list', 'receive', this.responseText);
      // }
      if (!this.responseText) {
        // TODO show error
        return;
      }
      try {
        var response = JSON.parse(this.responseText);
        if (response.message && typeof response.position !== "undefined") {
          // it was an error but it's fine
          // if (window.ga) {
          //   ga('send', 'event', 'waiting-list', 'already-register', response.message);
          // }
          // showRequestedInvite(email.value, response.position);
        } else if (response.position !== "undefined") {// we request the invite
          // if (window.ga) {
          //   ga('send', 'event', 'waiting-list', 'ok', response.position);
          // }
          // showRequestedInvite(email.value, response.position);
        }
        // document.getElementById('early-access').href = '/earlyaccess?email=' + email.value;
      } catch (err) {
        console.log(err);
        // document.getElementById('early-access').href = '/earlyaccess' + email.value;
      }
    };
    console.log(email.value);
    xhr.send("email=" + encodeURIComponent(email.value));
  });
})();

},{}]},{},["/Users/spypsycho/Dev/goquoteme/landing page/app/scripts/main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24oKSB7XG4gIHZhciB1cmwgPSAnaHR0cHM6Ly93d3cuZ29xdW90ZW1lLmNvbSc7XG4gIC8vIHZhciB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxJztcblxuICBjb25zb2xlLmxvZyhcImZvb1wiKTtcbiAgdmFyIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhaXRpbmctbGlzdFwiKTtcbiAgdmFyIGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsLWlucHV0Jyk7XG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICBmdW5jdGlvbiBnZXRSZWZQYXJhbWV0ZXIoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIC8vIGNvbnNvbGUubG9nKGZvcm0pXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwgKyBcIi9yZWdpc3Rlci1lbWFpbFwiLCB0cnVlKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBpZiAod2luZG93LmdhKSB7XG4gICAgICAvLyAgIGdhKCdzZW5kJywgJ2V2ZW50JywgJ3dhaXRpbmctbGlzdCcsICdyZWNlaXZlJywgdGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgLy8gfVxuICAgICAgaWYgKCF0aGlzLnJlc3BvbnNlVGV4dCkge1xuICAgICAgICAvLyBUT0RPIHNob3cgZXJyb3JcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIGlmIChyZXNwb25zZS5tZXNzYWdlICYmIHR5cGVvZiByZXNwb25zZS5wb3NpdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIC8vIGl0IHdhcyBhbiBlcnJvciBidXQgaXQncyBmaW5lXG4gICAgICAgICAgLy8gaWYgKHdpbmRvdy5nYSkge1xuICAgICAgICAgIC8vICAgZ2EoJ3NlbmQnLCAnZXZlbnQnLCAnd2FpdGluZy1saXN0JywgJ2FscmVhZHktcmVnaXN0ZXInLCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgLy8gc2hvd1JlcXVlc3RlZEludml0ZShlbWFpbC52YWx1ZSwgcmVzcG9uc2UucG9zaXRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnBvc2l0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7Ly8gd2UgcmVxdWVzdCB0aGUgaW52aXRlXG4gICAgICAgICAgLy8gaWYgKHdpbmRvdy5nYSkge1xuICAgICAgICAgIC8vICAgZ2EoJ3NlbmQnLCAnZXZlbnQnLCAnd2FpdGluZy1saXN0JywgJ29rJywgcmVzcG9uc2UucG9zaXRpb24pO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICAvLyBzaG93UmVxdWVzdGVkSW52aXRlKGVtYWlsLnZhbHVlLCByZXNwb25zZS5wb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vhcmx5LWFjY2VzcycpLmhyZWYgPSAnL2Vhcmx5YWNjZXNzP2VtYWlsPScgKyBlbWFpbC52YWx1ZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWFybHktYWNjZXNzJykuaHJlZiA9ICcvZWFybHlhY2Nlc3MnICsgZW1haWwudmFsdWU7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhlbWFpbC52YWx1ZSk7XG4gICAgeGhyLnNlbmQoXCJlbWFpbD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChlbWFpbC52YWx1ZSkpO1xuICB9KTtcbn0pKCk7XG4iXX0=
