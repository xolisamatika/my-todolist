const assert = require('assert');
const expect = require('chai').expect
const request = require('supertest');
const app = require('../app')

describe('My todos ', function() {
    it('should return OK status', function() {
        return request(app)
          .get('/todo')
          .then(function(response){
              assert.equal(response.status, 200)
          })
      });

      it('should render page with My todolist', function() {
        return request(app)
          .get('/todo')
          .then(function(response){
              expect(response.text).to.contain('My todolist');
          })
      });

      it('should render page with Edit Todo', function() {
        return request(app)
          .get('/todo/edit/1')
          .then(function(response){
              expect(response.text).to.contain('Edit Todo');
          })
      });
});