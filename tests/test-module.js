const {
  getConf1,
  getConf2,
} = require('../lib/module')

jest.mock('../config', () => {
    return { 
      "CONF1": "mockFoo", 
      "CONF2": "mockBar" 
    }
})

test('get conf1', () => {
  return expect(getConf1()).resolves.toBe('mockFoo')
})

test('get conf2', () => {
  return expect(getConf2()).resolves.toBe('mockBar')
})