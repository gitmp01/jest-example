const { 
  CONF1,
  CONF2
} = require('../config')


const getConf1 = _ =>
  new Promise((resolve, reject) =>
    CONF1 === null || CONF1 === undefined
      ? reject(new Error('Failed to get conf1! :('))
      : resolve(CONF1)
  )

const getConf2 = _ =>
  new Promise((resolve, reject) => 
    CONF2 === null || CONF2 === undefined
      ? reject(new Error('Failed to get conf2! :('))
      : resolve(CONF2)
  )  

module.exports = {
  getConf1,
  getConf2
}