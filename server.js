let express = require('express');
let app = express();

let cors = require('cors');

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// enabing trust proxy to get ip address with req.ip
app.enable('trust proxy');

app.get("/", (req, res) => res.sendFile(__dirname + '/views/index.html')
);

app.get("/api/info", (req, res) => {
  res.json({ ipaddress : req.ip, language: req.headers['accept-language'], software : req.headers['user-agent']})
})

var listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Serving on... ' + listener.address().port);
});
