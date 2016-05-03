/**
 * Created by km_2 on 2016-05-03.
 */

var cheerio = require('cheerio');
var request = require('request');

var url = 'http://blog.saltfactory.net';
request(url,function (error,response,html) {
    if(error){throw error};

    var $ = cheerio.load(html);

    $('#side_today_count').each(function () {
        console.log("방문자 수 :"+$(this).text());
    })
});