(function ($) {
    ping = function() {
        $.ajax({
            url: '/memcached/stats',
            method: 'GET'
        })
        .done(function (result) {
            var tableRows = '';
            $.each(result[0], function(stats, value) {
                tableRows += '<tr><td>'+ stats
                +'</td><td>'+ value
                +'</td></tr>'
            });

            $('#memcached-stats')
                .html(tableRows)
                .parent('table')
                .find('thead')
                .fadeOut().fadeIn();
        });
    };

    initInterval = function(seconds) {
        setInterval(function() {
          ping();
        }, seconds);
    };

    ping();
    initInterval(3000);
})(jQuery);