var logger = require('winston');
var server = require('../../app');
var chai = require('chai');
var chaiHttp = require('chai-http');
var seed = require('../../seed/seed');
var User = require('../../models/user');
var expect = require('chai').expect;

chai.should();
chai.use(chaiHttp);

var url = 'http://127.0.0.1:8001';


describe('Users', function() {

  // Before our test suite
  before(function(done) {
    // Start our app on an alternative port for acceptance tests
    server.listen(8001, function() {
      logger.info('Listening at http://localhost:8001 for acceptance tests');

      // Seed the DB with our users
      seed(function(err) {
        done(err);
      });
    });
  });

  // Test for GET request - return list of users
  describe('/GET users', function() {
    it('should return a list of users', function(done) {
      chai.request(url)
        .get('/users')
        .end(function(err, res) {
          res.body.should.be.a('array');
          res.should.have.status(200);
          res.body.length.should.be.eql(100);
          done();
        });
    });
  });

  // Test for GET request - return one user of specified ID
  describe('/GET users/:id', function() {
    it('should return a single user', function(done) {
      // Find a user in the DB
      User.findOne({}, function(err, user) {
        var id = user._id;

        // Read this user by id
        chai.request(url)
          .get('/users/' + id)
          .end(function(err, res) {
            res.should.have.status(200);
            expect(res.body).to.be.a('object');
            expect(res.body.name.first).to.be.a('string');
            done();
          });
      });
    });
  });

  // Test for POST request - return newly created user
  describe('/POST users', function() {
    it('should return a new single user', function(done) {

      // Send post request with gender and name
      chai.request(url)
        .post('/users')
        .send({'gender': 'male', 'name': 'test'})
        .end(function(err, res){
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('gender');
          res.body.should.have.property('name');
          res.body.gender.should.equal('male');
          res.body.name.should.equal('test');
          done();
        });
    });
  });

  // Test for PUT request - return the updated user
  describe('/PUT users/:id', function() {
    it('should update a single user', function(done) {
      
      // Get all users, select and use the ID of first user
      chai.request(url)
        .get('/users')
        .end(function(err, res){
          var id = res.body[0]._id;
          chai.request(url)
            .put('/users/'+id)
            .send({'name': 'testPut'})
            .end(function(error, response){
              response.should.have.status(200);
              response.body.should.be.a('object');
              response.body.should.have.property('name');
              response.body.should.have.property('_id');
              response.body.name.should.equal('testPut');
              done();
          });
        });
    });
  });

  // Test for DELETE request - return a success message
  describe('/DELETE users/:id', function() {
    it('should delete a single user', function(done) {

      // Get all users, select and use the ID of first user
      chai.request(url)
        .get('/users')
        .end(function(err, res){
          var id = res.body[0]._id;
          chai.request(url)
            .delete('/users/'+id)
            .end(function(error, response){
              response.should.have.status(200);
              response.body.should.be.a('object');
              response.body.should.have.property('message');
              response.body.message.should.equal('User successfully deleted');
              done();
          });
        });
    });
  });

});
