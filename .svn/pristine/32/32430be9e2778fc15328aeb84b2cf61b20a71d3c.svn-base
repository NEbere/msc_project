// Third party imports
const chai = require('chai')
const chaiHttp = require('chai-http')

// Local imports
const server = require('../app')
chai.use(chaiHttp)
const { expect } = chai

describe('==== Unit Tests ====', function () {
  describe('==== API endpoints test ====', function () {

    it('should return a 404 for routes that don\'t exist', (done) => {
      chai.request(server)
      .get(`/test`)
      .end(function (err, res) {
        if (err) {
          console.log(err)
        }
        expect(404)
        done()
      })
    });

    it('should test the health check route', (done) => {
      chai.request(server)
      .get(`/_health`)
      .end(function (err, res) {
        if (err) {
          console.log(err)
        }
        expect(200)
        expect(res.body).to.be.an('object')
        expect(res.body.message).to.equal('ok')
        done()
      })
    });

    it('should test users route and return a 200', (done) => {
      chai.request(server)
      .get(`/users`)
      .end(function (err, res) {
        if (err) {
          console.log(err)
        }
        expect(200)
        expect(res.body).to.be.an('object')
        done()
      })
    });

    it('should test tours route and return a 200', (done) => {
      chai.request(server)
      .get(`/tours`)
      .end(function (err, res) {
        if (err) {
          console.log(err)
        }
        expect(200)
        expect(res.body).to.be.an('object')
        done()
      })
    });

  })
})
