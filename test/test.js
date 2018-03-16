var expect = require('chai').expect;
var request = require('request');
if(process.env.NODE_ENV !== 'prod') {
    require('dotenv').load();
}
const port = process.env.PORT;
const url = 'http://localhost:' + port;

describe('Status and content', () => {
    it('Should serve root get request', (done) => {
        request(url, (error, response, body) => {
            expect(response.statusCode).to.be.equal(200);
            done();
        });
    });
    
    it('Should should greet', (done)=> {
        request(url, (error, response, body) => {
            expect(body).to.equal('Hello World');
            done();
        });
    });
    
    it('Should not serve /about yet', (done) => {
        request(url+'/about', (error, response, body)=>{
            expect(response.statusCode).to.be.equal(404);
            done();
        });
    });
});

