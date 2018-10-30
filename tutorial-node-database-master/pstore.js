//const crypto = require('crypto')
const knex = require('knex')(require('./knexfile'))
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;

//GLOBAL.document = new JSDOM("http://localhost:7000").window.document;

module.exports = {
  createIntern({ id, title, field, description}) {
    console.log(`Add intern ${title} ${field}`)
   
    
    return knex('intern').insert({
      id, 
      title,
      field,
      description
    })
    
  }
}


