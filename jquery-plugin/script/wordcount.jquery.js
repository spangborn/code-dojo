// wordcount.jquery.js

// jQuery plugin boilerplate

;(function ( $, window, document, undefined ) {
 
 	// Extend jQuery's function object
    $.fn.extend({

        "wordCount" : function(options) {
        	
        	// Default options object
            this.defaultOptions = {};
            
            // Combine user settings with defaults
            var settings = $.extend({}, this.defaultOptions, options);
            
            // Return the object, so chaining works
           	return this.each(function() {
                var $this = $(this);

                // Do stuff here!
            });
        }
    });

// Pass in the jQuery, window, and document objects (Why do we not pass in 'undefined'?)
})(jQuery, window, document);