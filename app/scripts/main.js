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
