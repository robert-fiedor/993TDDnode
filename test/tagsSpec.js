
//http://code.tutsplus.com/tutorials/testing-in-nodejs--net-35018

var expect = require("chai").expect;
var tags = require("../lib/tags.js");
 
describe("Tags", function(){
   describe("#parse()", function(){

       it("ova", function(){
         
         expect(4+5).equal(9);
       });

       it("ova lalalaql", function(){

           expect(4+1).equal(5);
       });

   });
});



