require('./index3.js')
require('./index3.js')
require('./index3.js')
//even if we write require 3 times but it will be executed only once and from second time it reads it from the cache
// require('./index3.js')()
// require('./index3.js')()
// require('./index3.js')()//here it cach the fxn itself not the fxn execution

//reuire fxn but its a part of export
require('./index3.js').f1()
