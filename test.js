const request = require('supertest');
const express = require('express');
const app = require('./app.js');
const expect = require('chai').expect;

describe('Test your Express app', function () {
    it('GET / should return the HTML form', function (done) {
        request(app)
            .get('/')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                expect(res.text).to.contain('form action="/submit" method="post"');
                done();
            });
    });

    it('POST /submit should return user input', function (done) {
        request(app)
            .post('/submit')
            .send({ name: 'John', food: 'Pizza' })
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                expect(res.text).to.contain('Your name is John and your best food is Pizza');
                done();
            });
    });
});
