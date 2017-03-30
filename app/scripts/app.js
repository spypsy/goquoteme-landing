(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/spypsycho/Dev/goquoteme/landing page/app/scripts/main.js":[function(require,module,exports){
(function() {
  var url = 'http://www.goquoteme.com';
  // url = 'http://localhost:3001';

  var form = document.getElementById("waiting-list");
  var email = document.getElementById('email-input');
  // var xhr = new XMLHttpRequest();

  function getRefParameter() {
    return '';
  }
  function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {

      // Check if the XMLHttpRequest object has a "withCredentials" property.
      // "withCredentials" only exists on XMLHTTPRequest2 objects.
      xhr.open(method, url, true);

    } else if (typeof XDomainRequest != "undefined") {

      // Otherwise, check if XDomainRequest.
      // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
      xhr = new XDomainRequest();
      xhr.open(method, url);

    } else {

      // Otherwise, CORS is not supported by the browser.
      console.error('error with cors');
      xhr = null;

    }
    return xhr;
  }

  // console.log(form)
  form.addEventListener("submit", function(e) {
    e.preventDefault();


    var reqUrl = url + "/register-email" + "?email=" + encodeURIComponent(email.value)

    // xhr.open("GET", reqUrl, true);
    var xhr = createCORSRequest('GET', reqUrl);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("accept", "*/*");
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
    xhr.send();
  });
})();

},{}]},{},["/Users/spypsycho/Dev/goquoteme/landing page/app/scripts/main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgdXJsID0gJ2h0dHA6Ly9nb3F1b3RlbWUuaGVyb2t1YXBwLmNvbSc7XG4gIC8vIHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnO1xuXG4gIHZhciBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWl0aW5nLWxpc3RcIik7XG4gIHZhciBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbC1pbnB1dCcpO1xuICAvLyB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgZnVuY3Rpb24gZ2V0UmVmUGFyYW1ldGVyKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVDT1JTUmVxdWVzdChtZXRob2QsIHVybCkge1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBpZiAoXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiB4aHIpIHtcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIFhNTEh0dHBSZXF1ZXN0IG9iamVjdCBoYXMgYSBcIndpdGhDcmVkZW50aWFsc1wiIHByb3BlcnR5LlxuICAgICAgLy8gXCJ3aXRoQ3JlZGVudGlhbHNcIiBvbmx5IGV4aXN0cyBvbiBYTUxIVFRQUmVxdWVzdDIgb2JqZWN0cy5cbiAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIFhEb21haW5SZXF1ZXN0ICE9IFwidW5kZWZpbmVkXCIpIHtcblxuICAgICAgLy8gT3RoZXJ3aXNlLCBjaGVjayBpZiBYRG9tYWluUmVxdWVzdC5cbiAgICAgIC8vIFhEb21haW5SZXF1ZXN0IG9ubHkgZXhpc3RzIGluIElFLCBhbmQgaXMgSUUncyB3YXkgb2YgbWFraW5nIENPUlMgcmVxdWVzdHMuXG4gICAgICB4aHIgPSBuZXcgWERvbWFpblJlcXVlc3QoKTtcbiAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8vIE90aGVyd2lzZSwgQ09SUyBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLlxuICAgICAgY29uc29sZS5lcnJvcignZXJyb3Igd2l0aCBjb3JzJyk7XG4gICAgICB4aHIgPSBudWxsO1xuXG4gICAgfVxuICAgIHJldHVybiB4aHI7XG4gIH1cblxuICAvLyBjb25zb2xlLmxvZyhmb3JtKVxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuXG4gICAgdmFyIHJlcVVybCA9IHVybCArIFwiL3JlZ2lzdGVyLWVtYWlsXCIgKyBcIj9lbWFpbD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChlbWFpbC52YWx1ZSlcblxuICAgIC8vIHhoci5vcGVuKFwiR0VUXCIsIHJlcVVybCwgdHJ1ZSk7XG4gICAgdmFyIHhociA9IGNyZWF0ZUNPUlNSZXF1ZXN0KCdHRVQnLCByZXFVcmwpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiYWNjZXB0XCIsIFwiKi8qXCIpO1xuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuXG4gICAgICAvLyBpZiAod2luZG93LmdhKSB7XG4gICAgICAvLyAgIGdhKCdzZW5kJywgJ2V2ZW50JywgJ3dhaXRpbmctbGlzdCcsICdyZWNlaXZlJywgdGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgLy8gfVxuICAgICAgaWYgKCF0aGlzLnJlc3BvbnNlVGV4dCkge1xuICAgICAgICAvLyBUT0RPIHNob3cgZXJyb3JcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIGlmIChyZXNwb25zZS5tZXNzYWdlICYmIHR5cGVvZiByZXNwb25zZS5wb3NpdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIC8vIGl0IHdhcyBhbiBlcnJvciBidXQgaXQncyBmaW5lXG4gICAgICAgICAgLy8gaWYgKHdpbmRvdy5nYSkge1xuICAgICAgICAgIC8vICAgZ2EoJ3NlbmQnLCAnZXZlbnQnLCAnd2FpdGluZy1saXN0JywgJ2FscmVhZHktcmVnaXN0ZXInLCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgLy8gc2hvd1JlcXVlc3RlZEludml0ZShlbWFpbC52YWx1ZSwgcmVzcG9uc2UucG9zaXRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnBvc2l0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7Ly8gd2UgcmVxdWVzdCB0aGUgaW52aXRlXG4gICAgICAgICAgLy8gaWYgKHdpbmRvdy5nYSkge1xuICAgICAgICAgIC8vICAgZ2EoJ3NlbmQnLCAnZXZlbnQnLCAnd2FpdGluZy1saXN0JywgJ29rJywgcmVzcG9uc2UucG9zaXRpb24pO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICAvLyBzaG93UmVxdWVzdGVkSW52aXRlKGVtYWlsLnZhbHVlLCByZXNwb25zZS5wb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vhcmx5LWFjY2VzcycpLmhyZWYgPSAnL2Vhcmx5YWNjZXNzP2VtYWlsPScgKyBlbWFpbC52YWx1ZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWFybHktYWNjZXNzJykuaHJlZiA9ICcvZWFybHlhY2Nlc3MnICsgZW1haWwudmFsdWU7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhlbWFpbC52YWx1ZSk7XG4gICAgeGhyLnNlbmQoKTtcbiAgfSk7XG59KSgpO1xuIl19
