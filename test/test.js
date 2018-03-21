var expect = require('chai').expect;
var request = require('request');
var server = require('../server');
// if(process.env.NODE_ENV !== 'prod') {
//     require('dotenv').load();
// }
const port = process.env.PORT || 8080;
const url = 'http://127.0.0.1:' + port;

describe('Status and content', () => {
    before(function() {
        server.Start(port);
    });
    after(function() {
        server.Stop();
    });
    it('Should serve root get request', (done) => {
        request(url, (error, response, body) => {
            expect(response.statusCode).to.be.equal(200);
            done();
        });
    });
    it('Should should greet', (done)=> {
        request(url, (error, response, body) => {
            expect(body).to.equal('Hello World!');
            done();
        });
    });
    it('Should not serve /about yet', (done) => {
        request(url+'/about', (error, response, body)=>{
            expect(response.statusCode).to.be.equal(404);
            done();
        });
    });
    // it('Dummy Test', (done) => {
    //     expect(0).to.be.equal(0);
    //     done();
    // });
});

