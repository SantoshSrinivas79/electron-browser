"use strict"

// Credit: https://stackoverflow.com/questions/33078967/node-js-call-a-local-function-within-module-exports
var self = module.exports = {
		getURL : function() {
			// Credit: [Setting up your development environment for a node-webkit project | Nerdy Weekly](https://www.nerdyweekly.com/posts/setting-up-your-development-environment-for-a-node-webkit-project/)
			if (process.env.APP == "wetty") {
			    return "http://wetty.santoshsrinivas.com/";
			}
			else if (process.env.APP == "rs.loc") {
			    return "http://rstudio.santoshsrinivas.loc";
			}
			else if (process.env.APP == "rs.ec2") {
				var ip = self.getIP();

				var url = "http://"+ip+":8787";

			    return url;
			}
			else if (process.env.APP == "gm.ec2") {
				var ip = self.getIP();

				var url = "http://"+ip+":8080/guacamole/";

			    return url;
			}
			else if (process.env.APP == "j.ec2") {
				var ip = self.getIP();

				var url = "http://"+ip+":8012/";

			    return url;
			}
			else {
				return "http://wetty.santoshsrinivas.com/";
			}
		},
		getIP : function() {
			var fs = require("fs");
			var IP = fs.readFileSync(__dirname+'/IP.txt');

			return IP;
		}
}