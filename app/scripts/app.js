(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/spypsycho/Dev/goquoteme/landing page/app/scripts/main.js":[function(require,module,exports){
(function() {
  var url = 'http://www.goquoteme.herokuapp.com';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgdXJsID0gJ2h0dHA6Ly93d3cuZ29xdW90ZW1lLmhlcm9rdWFwcC5jb20nO1xuICAvLyB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxJztcblxuICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2FpdGluZy1saXN0XCIpO1xuICB2YXIgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwtaW5wdXQnKTtcbiAgLy8gdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIGZ1bmN0aW9uIGdldFJlZlBhcmFtZXRlcigpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlQ09SU1JlcXVlc3QobWV0aG9kLCB1cmwpIHtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgaWYgKFwid2l0aENyZWRlbnRpYWxzXCIgaW4geGhyKSB7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSBYTUxIdHRwUmVxdWVzdCBvYmplY3QgaGFzIGEgXCJ3aXRoQ3JlZGVudGlhbHNcIiBwcm9wZXJ0eS5cbiAgICAgIC8vIFwid2l0aENyZWRlbnRpYWxzXCIgb25seSBleGlzdHMgb24gWE1MSFRUUFJlcXVlc3QyIG9iamVjdHMuXG4gICAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBYRG9tYWluUmVxdWVzdCAhPSBcInVuZGVmaW5lZFwiKSB7XG5cbiAgICAgIC8vIE90aGVyd2lzZSwgY2hlY2sgaWYgWERvbWFpblJlcXVlc3QuXG4gICAgICAvLyBYRG9tYWluUmVxdWVzdCBvbmx5IGV4aXN0cyBpbiBJRSwgYW5kIGlzIElFJ3Mgd2F5IG9mIG1ha2luZyBDT1JTIHJlcXVlc3RzLlxuICAgICAgeGhyID0gbmV3IFhEb21haW5SZXF1ZXN0KCk7XG4gICAgICB4aHIub3BlbihtZXRob2QsIHVybCk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyBPdGhlcndpc2UsIENPUlMgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYnJvd3Nlci5cbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIHdpdGggY29ycycpO1xuICAgICAgeGhyID0gbnVsbDtcblxuICAgIH1cbiAgICByZXR1cm4geGhyO1xuICB9XG5cbiAgLy8gY29uc29sZS5sb2coZm9ybSlcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cblxuICAgIHZhciByZXFVcmwgPSB1cmwgKyBcIi9yZWdpc3Rlci1lbWFpbFwiICsgXCI/ZW1haWw9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZW1haWwudmFsdWUpXG5cbiAgICAvLyB4aHIub3BlbihcIkdFVFwiLCByZXFVcmwsIHRydWUpO1xuICAgIHZhciB4aHIgPSBjcmVhdGVDT1JTUmVxdWVzdCgnR0VUJywgcmVxVXJsKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcImFjY2VwdFwiLCBcIiovKlwiKTtcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cblxuICAgICAgLy8gaWYgKHdpbmRvdy5nYSkge1xuICAgICAgLy8gICBnYSgnc2VuZCcsICdldmVudCcsICd3YWl0aW5nLWxpc3QnLCAncmVjZWl2ZScsIHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgIC8vIH1cbiAgICAgIGlmICghdGhpcy5yZXNwb25zZVRleHQpIHtcbiAgICAgICAgLy8gVE9ETyBzaG93IGVycm9yXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXNwb25zZSA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICBpZiAocmVzcG9uc2UubWVzc2FnZSAmJiB0eXBlb2YgcmVzcG9uc2UucG9zaXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAvLyBpdCB3YXMgYW4gZXJyb3IgYnV0IGl0J3MgZmluZVxuICAgICAgICAgIC8vIGlmICh3aW5kb3cuZ2EpIHtcbiAgICAgICAgICAvLyAgIGdhKCdzZW5kJywgJ2V2ZW50JywgJ3dhaXRpbmctbGlzdCcsICdhbHJlYWR5LXJlZ2lzdGVyJywgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIC8vIHNob3dSZXF1ZXN0ZWRJbnZpdGUoZW1haWwudmFsdWUsIHJlc3BvbnNlLnBvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5wb3NpdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikgey8vIHdlIHJlcXVlc3QgdGhlIGludml0ZVxuICAgICAgICAgIC8vIGlmICh3aW5kb3cuZ2EpIHtcbiAgICAgICAgICAvLyAgIGdhKCdzZW5kJywgJ2V2ZW50JywgJ3dhaXRpbmctbGlzdCcsICdvaycsIHJlc3BvbnNlLnBvc2l0aW9uKTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgLy8gc2hvd1JlcXVlc3RlZEludml0ZShlbWFpbC52YWx1ZSwgcmVzcG9uc2UucG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYXJseS1hY2Nlc3MnKS5ocmVmID0gJy9lYXJseWFjY2Vzcz9lbWFpbD0nICsgZW1haWwudmFsdWU7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vhcmx5LWFjY2VzcycpLmhyZWYgPSAnL2Vhcmx5YWNjZXNzJyArIGVtYWlsLnZhbHVlO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc29sZS5sb2coZW1haWwudmFsdWUpO1xuICAgIHhoci5zZW5kKCk7XG4gIH0pO1xufSkoKTtcbiJdfQ==
