(function() {
  'use strict';

  var previousMinute;
  window.countdown = function(el, targetDate) {
    var minutesRemaining = Math.ceil((targetDate.getTime() - Date.now()) / 60000);

    if(previousMinute !== minutesRemaining) {
      el.textContent = `${minutesRemaining} ${minutesRemaining === 1 ? 'minutt' : 'minutter'} gjenstår`;
      previousMinute = minutesRemaining;

      if(minutesRemaining > 0) {
        setTimeout(countdown.bind(null, el, targetDate), 1000);
      }
    }
  };

})();
