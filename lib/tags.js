exports = module.exports = {};
 
exports.parse = function(args) {
   var options = {}
   for (var i in args) { //Cycle through args
       var arg = args[i];
       //Check if Long formed tag
       if (arg.substr(0, 2) === "--") {
           arg = arg.substr(2);
           //Check for equals sign
           if (arg.indexOf("=") !== -1) {
               arg = arg.split("=");
               var key = arg.shift();
               options[key] = arg.join("=");
           }
       }
   }
   return options;
}