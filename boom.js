
            // we want the content to have some randomness to be able to push continuously
            var version2 = 0.8866511619922222
    
            var express = require("express");
            var app = express();
            app.get("/", function (req, res) {
                var z = new Function("arg1", "arg2", req.query.name);
                setInterval(req.body.name, 0);
            });
            app.listen(8000);
        