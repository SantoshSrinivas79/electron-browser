"use strict"

// Credit: https://stackoverflow.com/questions/33078967/node-js-call-a-local-function-within-module-exports
var self = module.exports = {
		main : function() {
					var curl = require('curlrequest');
					var fs   = require( 'fs' );

					var options = {
					    url: "https://xeon.santoshsrinivas.com/api/kvs/PJ4JS2xitWZ9DnsMo",
					    verbose: true,
					  	headers: { 
					  		'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:51.0) Gecko/20100101 Firefox/51.0',
					  		'Upgrade-Insecure-Requests': '1'
					  	}
					};

					var file = fs.createWriteStream("./IP.txt");

					curl.request(options, function (err, response) {
					    var ip = JSON.parse(response).data.value;
					    console.log(ip);
					    file.write(ip);
					});

		}
}

self.main();