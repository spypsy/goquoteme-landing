(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/spypsycho/Dev/goquoteme/landing page/app/scripts/main.js":[function(require,module,exports){
(function() {
  var url = 'https://www.goquoteme.com';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgdXJsID0gJ2h0dHBzOi8vd3d3LmdvcXVvdGVtZS5jb20nO1xuXG4gIGNvbnNvbGUubG9nKFwiZm9vXCIpO1xuICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2FpdGluZy1saXN0XCIpO1xuICB2YXIgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwtaW5wdXQnKTtcbiAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIGZ1bmN0aW9uIGdldFJlZlBhcmFtZXRlcigpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgLy8gY29uc29sZS5sb2coZm9ybSlcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCArIFwiL3JlZ2lzdGVyLWVtYWlsXCIsIHRydWUpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGlmICh3aW5kb3cuZ2EpIHtcbiAgICAgIC8vICAgZ2EoJ3NlbmQnLCAnZXZlbnQnLCAnd2FpdGluZy1saXN0JywgJ3JlY2VpdmUnLCB0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAvLyB9XG4gICAgICBpZiAoIXRoaXMucmVzcG9uc2VUZXh0KSB7XG4gICAgICAgIC8vIFRPRE8gc2hvdyBlcnJvclxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm1lc3NhZ2UgJiYgdHlwZW9mIHJlc3BvbnNlLnBvc2l0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgLy8gaXQgd2FzIGFuIGVycm9yIGJ1dCBpdCdzIGZpbmVcbiAgICAgICAgICAvLyBpZiAod2luZG93LmdhKSB7XG4gICAgICAgICAgLy8gICBnYSgnc2VuZCcsICdldmVudCcsICd3YWl0aW5nLWxpc3QnLCAnYWxyZWFkeS1yZWdpc3RlcicsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICAvLyBzaG93UmVxdWVzdGVkSW52aXRlKGVtYWlsLnZhbHVlLCByZXNwb25zZS5wb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UucG9zaXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHsvLyB3ZSByZXF1ZXN0IHRoZSBpbnZpdGVcbiAgICAgICAgICAvLyBpZiAod2luZG93LmdhKSB7XG4gICAgICAgICAgLy8gICBnYSgnc2VuZCcsICdldmVudCcsICd3YWl0aW5nLWxpc3QnLCAnb2snLCByZXNwb25zZS5wb3NpdGlvbik7XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIC8vIHNob3dSZXF1ZXN0ZWRJbnZpdGUoZW1haWwudmFsdWUsIHJlc3BvbnNlLnBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWFybHktYWNjZXNzJykuaHJlZiA9ICcvZWFybHlhY2Nlc3M/ZW1haWw9JyArIGVtYWlsLnZhbHVlO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYXJseS1hY2Nlc3MnKS5ocmVmID0gJy9lYXJseWFjY2VzcycgKyBlbWFpbC52YWx1ZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKGVtYWlsLnZhbHVlKTtcbiAgICB4aHIuc2VuZChcImVtYWlsPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGVtYWlsLnZhbHVlKSk7XG4gIH0pO1xufSkoKTtcbiJdfQ==
