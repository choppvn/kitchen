/**
 * Main JS file
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {
        // smartquotes.js
        window.smartquotes && smartquotes();
    });

})(jQuery);
