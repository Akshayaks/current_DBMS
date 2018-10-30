//const crypto = require('crypto')
const knex = require('knex')(require('./knexfile'))
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;

//GLOBAL.document = new JSDOM("http://localhost:7000").window.document;

module.exports = {
  searchIntern({ field}) {
    console.log(`Search intern for ${field}`)
   
    
    return knex.raw('select * from intern where intern.field = field') //write function for searching
      
  }
}


