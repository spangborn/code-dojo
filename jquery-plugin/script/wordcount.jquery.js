// wordcount.jquery.js

// jQuery plugin boilerplate

;(function ( $, window, document, undefined ) {
 
 	// Extend jQuery's function object
    $.fn.extend({

        "wordCount" : function(options) {
        	
        	// Default options object
            this.defaultOptions = {
                "targetAttr" : "count"
            };
            
            // Combine user settings with defaults
            var settings = $.extend({}, this.defaultOptions, options);
            
            // Return the object, so chaining works
           	return this.each(function() {
                var $this = $(this);

                var words = $this.text().split(" ");
                var count = 0;

                if (settings.searchFor) {
                    $.each(words, function(i,item) {
                        if (settings.searchFor.toLowerCase() === item.toLowerCase()) {
                            count++;
                        }
                    });

                }
                else {
                    count = words.length;
                }

                if (settings.result) {
                    $this.next(settings.result).text(count + " word(s)");
                }
                else {
                    $this.attr("data-" + settings.targetAttr, count);
                }

            });
        }
    });

// Pass in the jQuery, window, and document objects (Why do we not pass in 'undefined'?)
})(jQuery, window, document);