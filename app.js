/*const john='john';
const peter='peter';
const hi=(name)=>{
    console.log(`hello there ${name}`)
}
hi('douaa');
hi(john);
hi(peter);
const names = require('./4-names')
const say = require('./5-utils')
 
say('sus')
say(names.john)
say(names.peter )
const fs = require('fs')

//const user = os.userInfo
//console.log(user)

const files = fs.readdirSync('./');
console.log(files);

fs.readdir('$',function(err,files){
    if(err) console.log('error',err);
    else console.log('result',files)
});*/
const _= require('lodash')
const items = [1,[2,3,[4]]]
const newItems = _.flattenDeep(items)
console.log(newItems)