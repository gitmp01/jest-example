const {
  getConf1,
  getConf2
} = require('./lib/module')

getConf1()
  .then(console.log)
  .then(getConf2)
  .then(console.log)
  .catch(err => 
    console.error('Error:', err)
  )