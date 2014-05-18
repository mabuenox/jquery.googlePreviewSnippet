(function($) {

    $.fn.serpSnippet = function(options) {

        // Establish our default settings
        var settings = $.extend({
            title: "Cupcake ipsum dolor sit amet powder pastry fruitcake chocolate",
            url: "www.example.com/example",
            description: "Apple pie ice cream cupcake gummies dragée bonbon. Candy jelly-o cheesecake powder oat cake jelly. Macaroon marzipan cotton candy cheesecake liquorice gummy",
            search: ""
        }, options);

        var DESC_LENGHT = 156;

        return this.each( function() {
            // Create the html to insert on target element
        	var html = "";
            html += "<div class='serpSnippet'>";
        	html += "<div class='snippetContainer'>";

        	html += "<div class='title'>" + "<a href='#'>" + highlight(settings.title, settings.search) + "</a>" + "</div>";
        	html += "<div class='url'>" + settings.url + "</div>";
        	html += "<div class='description'>" + truncate(settings.description, DESC_LENGHT) + "</div>";

        	html += "</div>";
            html += "</div>";

            // Insert the html created on target element
            $(this).html(html);
        });

    }

    function truncate(text, maxLength) {
        if (text.length > maxLength) {
            text = text.substr(0,maxLength-3) + "...";
        }
        return text;
    }

    function highlight(text, keyword) {
        var rgxp = new RegExp(keyword, 'g');
        var repl = '<strong>' + keyword + '</strong>';
        return text.replace(rgxp, repl);
    }

}(jQuery));