const express = require('express');
const app = express();
const soap = require('soap');
const fs = require('fs');
const xml_lib = require('xml');

function splitter_function(args) {
    console.log('splitter function');
    var splitter = args.splitter;
    var splitted_msg = args.message.split(splitter);
    var result = [];
    for (let index = 0; index < splitted_msg.length; index++) {
        result.push(splitted_msg[index]);
    }
    return {
        result: result
    }
}

//the service
var serviceObject = {
    MessageSplitterService: {
        MessageSplitterServiceSoapPort: {
            MessageSplitter: splitter_function
        },
        MessageSplitterServiceSoap12Port: {
            MessageSplitter: splitter_function
        }
    }
}

var xml = fs.readFileSync('./server/service.wsdl', 'utf8');

app.get('/', (req, res) => {
    res.contentType('application/xml');
    res.type('application/xml');
    res.send(xml_lib( {pregunta: 'Oye como va!'} ) );
});

app.post('/', (req, res) => {
    console.log("req", req);
});

app.listen(process.env.PORT || 3333, () => {
    var wsdl_path = "/wsdl";
    soap.listen(app, wsdl_path, serviceObject, xml);
    console.log('Application listening on port 3333!');
});