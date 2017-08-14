/**
 * Main JS file
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";


    $(document).ready(function() {
      // smartquotes.js
      window.smartquotes && smartquotes();

      // Lazy load all images with class '.lazy'
      $('.lazy').Lazy({
        effect: 'fadeIn',
        effectTime: 300,
        threshold: 0
      });
    });

})(jQuery);
