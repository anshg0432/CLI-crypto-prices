// import {Configstore} from 'configstore'
const Configstore = require('configstore')
const pkg = require('../package.json');
// const initializeConfigstore = async () => {
//   const { default: Configstore } = await import('configstore');
//   const config = new Configstore(pkg.name);
//   return config;
// };


class KeyManager{
  constructor(){
    // initializeConfigstore().then((config)=>{this.conf = config;console.log('working')}).catch((err)=>console.log('not working'))
    // console.log(this.conf)
    this.conf = new Configstore(pkg.name)
  }
  setKey(key){
    this.conf.set('apiKey',key)
    return key
  }
  getKey(){
    const key = this.conf.get('apiKey')
    if(!key)
      throw new Error('NO API Key Found - Get a key at https://nomics.com')
    return key;
  }
  deleteKey(){
    const key = this.conf.get('apiKey')
    if(!key)
      throw new Error('NO API Key Found - Get a key at https://nomics.com')
    this.conf.delete('apiKey')
    return;
  }
}

module.exports = KeyManager