/*
 * main.js: small enhancements for the portfolio.
 * Every page still works with JavaScript turned off; these only add polish.
 *   1. Keep the footer year current.
 *   2. Projects page: one button plays or pauses both Yield clips in sync.
 *   3. Contact page: check the form and draft the email in the visitor's mail app.
 */
(function () {
  'use strict';

  /* 1. Footer year ------------------------------------------------------- */
  document.querySelectorAll('[data-current-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* 2. Yield clips --------------------------------------------------------
     The clips are short and wide, so the browser's own controls cover most
     of the road. With JavaScript on, we hide those controls and use a single
     button that keeps the two clips in step. Without JavaScript, each video
     keeps its normal controls. */
  var toggle = document.getElementById('play-both');
  var clips = Array.prototype.slice.call(document.querySelectorAll('[data-compare-clip]'));

  if (toggle && clips.length > 0) {
    var toggleLabel = toggle.querySelector('.play-both-label');
    var toggleIcon = toggle.querySelector('.fa-solid');

    clips.forEach(function (clip) {
      clip.removeAttribute('controls');
    });
    toggle.hidden = false;

    var showState = function (playing) {
      toggleLabel.textContent = playing ? 'Pause both clips' : 'Play both clips';
      toggleIcon.classList.toggle('fa-play', !playing);
      toggleIcon.classList.toggle('fa-pause', playing);
    };

    toggle.addEventListener('click', function () {
      var playing = !clips[0].paused;

      if (playing) {
        clips.forEach(function (clip) {
          clip.pause();
        });
        showState(false);
        return;
      }

      // Line both clips up on the same frame before starting them together
      var start = clips[0].currentTime;
      clips.forEach(function (clip) {
        clip.currentTime = start;
        var attempt = clip.play();
        if (attempt !== undefined) {
          attempt.catch(function () {
            showState(false); // the browser blocked playback; leave the button ready to try again
          });
        }
      });
      showState(true);
    });
  }

  /* 3. Contact form -------------------------------------------------------- */
  var form = document.getElementById('contact-form');
  if (!form) {
    return;
  }

  var EMAIL = 'bvazrala@uci.edu';
  var status = document.getElementById('form-status');
  var fields = Array.prototype.slice.call(form.querySelectorAll('input, select, textarea'));

  // What to tell the visitor when a field is missing or wrong
  var messages = {
    name: 'Enter your name.',
    email: 'Enter an email address, like name@example.com.',
    topic: 'Choose what your message is about.',
    message: 'Write a message of at least 10 characters.'
  };

  // We show our own messages next to each field instead of the browser's pop-ups
  form.noValidate = true;

  // Mark one field as valid or invalid and update its message. Returns true if valid.
  function checkField(field) {
    var valid = field.checkValidity();
    var feedback = document.getElementById(field.id + '-error');

    field.classList.toggle('is-invalid', !valid);
    if (valid) {
      field.removeAttribute('aria-invalid');
      feedback.textContent = '';
    } else {
      field.setAttribute('aria-invalid', 'true');
      feedback.textContent = messages[field.name];
    }
    return valid;
  }

  // Once a field has been flagged, re-check it as the visitor fixes it
  fields.forEach(function (field) {
    var eventName = field.tagName === 'SELECT' ? 'change' : 'input';
    field.addEventListener(eventName, function () {
      if (field.classList.contains('is-invalid')) {
        checkField(field);
      }
    });
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var invalid = fields.filter(function (field) {
      return !checkField(field);
    });

    if (invalid.length > 0) {
      status.textContent = 'Some fields need attention. Fix the ones marked in red, then try again.';
      invalid[0].focus();
      return;
    }

    var data = new FormData(form);
    var subject = 'Portfolio message: ' + data.get('topic');
    var body = data.get('message') + '\n\n' + data.get('name') + '\n' + data.get('email');

    window.location.href = 'mailto:' + EMAIL +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    status.textContent = 'Your email app should now open with this message filled in. ' +
      'If nothing opened, email me directly at ' + EMAIL + '.';
  });
})();
