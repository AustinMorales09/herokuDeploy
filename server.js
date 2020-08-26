// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
var http = require('http')
var fs = require('fs')

function onRequest(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('/', null, function(error,data){
    if(err) {
        res.writeHead(404);
        res.write('File not found');
    } else {
        response.write(data);
    }
    res.end()
});
}
// http.createServer(onRequest).listen(3000)


const app = express();
const PORT = process.env.PORT || 3000; // Step 1


const routes = require('./routes/api');
const { response } = require('express');


app.get('/', function (req, res) {
    res.render('index.html', {});
  });
// Step 2
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Kable:Kable2020@cluster0.fmk3d.mongodb.net/Cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Step 3

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}


// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);





app.listen(PORT, console.log(`Server is starting at ${PORT}`));