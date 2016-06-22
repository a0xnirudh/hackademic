var express = require('express'),
    fs = require('fs')
    url = require('url');
var app = express();

function cmd_exec(cmd, args, cb_stdout, cb_end) {
    var spawn = require('child_process').spawn,
    child = spawn(cmd, args),
    me = this;
    me.exit = 0;  // Send a cb to set 1 when cmd exits
    child.stdout.on('data', function (data) { cb_stdout(me, data) });
    child.stdout.on('end', function () { cb_end(me) });
}

app.use(express.static(__dirname + '/staticfiles'));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname })
});


app.post('/', function(request, respond) {
    var body = '';
    filePath = __dirname + '/src.js';
    request.on('data', function(data) {
	body += data;
    });

    body = body.replace("function=", "")
    request.on('end', function (){
        fs.writeFile(filePath, body.replace("function=",""), function(err, data) {
            console.log(err);
        });

    });
    foo = new cmd_exec('nodeunit', ['test/'],
    function (me, data) {me.stdout += data.toString();},
    function (me) {me.exit = 1;}
    );
    function log_console() {
        console.log(foo.stdout);
        if (foo.stdout.indexOf('AssertionError') >= 0) {
            respond.send("Unit test Failed !");
            respond.end();
        }
        else {
            respond.send("Success !")
            respond.end();
        }
    }
    setTimeout(
        // wait 0.25 seconds and print the output
        log_console,
        250);
});


app.listen(8080);
