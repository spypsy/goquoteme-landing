(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/spypsycho/Dev/goquoteme/landing page/app/scripts/main.js":[function(require,module,exports){
(function() {
  url = 'http://www.goquoteme.com';
  // var url = 'http://localhost:3001';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uKCkge1xuICB1cmwgPSAnaHR0cDovL3d3dy5nb3F1b3RlbWUuY29tJztcbiAgLy8gdmFyIHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnO1xuXG4gIHZhciBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWl0aW5nLWxpc3RcIik7XG4gIHZhciBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbC1pbnB1dCcpO1xuICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgZnVuY3Rpb24gZ2V0UmVmUGFyYW1ldGVyKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICAvLyBjb25zb2xlLmxvZyhmb3JtKVxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsICsgXCIvcmVnaXN0ZXItZW1haWxcIiwgdHJ1ZSk7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gaWYgKHdpbmRvdy5nYSkge1xuICAgICAgLy8gICBnYSgnc2VuZCcsICdldmVudCcsICd3YWl0aW5nLWxpc3QnLCAncmVjZWl2ZScsIHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgIC8vIH1cbiAgICAgIGlmICghdGhpcy5yZXNwb25zZVRleHQpIHtcbiAgICAgICAgLy8gVE9ETyBzaG93IGVycm9yXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXNwb25zZSA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICBpZiAocmVzcG9uc2UubWVzc2FnZSAmJiB0eXBlb2YgcmVzcG9uc2UucG9zaXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAvLyBpdCB3YXMgYW4gZXJyb3IgYnV0IGl0J3MgZmluZVxuICAgICAgICAgIC8vIGlmICh3aW5kb3cuZ2EpIHtcbiAgICAgICAgICAvLyAgIGdhKCdzZW5kJywgJ2V2ZW50JywgJ3dhaXRpbmctbGlzdCcsICdhbHJlYWR5LXJlZ2lzdGVyJywgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIC8vIHNob3dSZXF1ZXN0ZWRJbnZpdGUoZW1haWwudmFsdWUsIHJlc3BvbnNlLnBvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5wb3NpdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikgey8vIHdlIHJlcXVlc3QgdGhlIGludml0ZVxuICAgICAgICAgIC8vIGlmICh3aW5kb3cuZ2EpIHtcbiAgICAgICAgICAvLyAgIGdhKCdzZW5kJywgJ2V2ZW50JywgJ3dhaXRpbmctbGlzdCcsICdvaycsIHJlc3BvbnNlLnBvc2l0aW9uKTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgLy8gc2hvd1JlcXVlc3RlZEludml0ZShlbWFpbC52YWx1ZSwgcmVzcG9uc2UucG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYXJseS1hY2Nlc3MnKS5ocmVmID0gJy9lYXJseWFjY2Vzcz9lbWFpbD0nICsgZW1haWwudmFsdWU7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vhcmx5LWFjY2VzcycpLmhyZWYgPSAnL2Vhcmx5YWNjZXNzJyArIGVtYWlsLnZhbHVlO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc29sZS5sb2coZW1haWwudmFsdWUpO1xuICAgIHhoci5zZW5kKFwiZW1haWw9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZW1haWwudmFsdWUpKTtcbiAgfSk7XG59KSgpO1xuIl19
