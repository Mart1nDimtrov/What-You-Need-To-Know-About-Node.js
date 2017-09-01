var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();
var request = require('request');
var config = require('config');

describe('---Testing the task api---', function () {
    it('POST: Task in list', function () {
       done();
    });
})


describe('---Testing the task list api---', function() {
    it('POST: Task in list', function(done) {});
})


//Using config module to create a local domain
GLOBAL.domain = 'http://' + config.host + ':' + config.port;
describe('---Testing the task list api---', function() {
    it('GET: Task list', function(done) {
        /**
         * Follow the request module documentation.
         * go to : https://github.com/request/request
         */
        var options = {
            url: domain + '/task',
            headers: {
                "Content-Type": "application/json"
            },
            json: {
                task: "Hello world"
            }
        };
        request.post(options, function(error, response, body) {
            console.log("we got response", body)
            done();
        });
    });
})

request.post(options, function(error, response, body) {
//Should be conditions
    response.statusCode.should.equal(200);
//Expected conditions
    expect(body).to.be.a('array');
    expect(body).to.include(options.json.task);
    done();
});