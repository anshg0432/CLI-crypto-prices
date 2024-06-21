const axios = require('axios')
const colors = require('colors')

class CryptoAPI{
  constructor(){
    this.apiKey= this.apiKey;
    this.baseURL ='https://api.coincap.io/v2/assets';
  }
  async getPriceData(coinOption,curOption){
    try{
      const formatter = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: curOption
      });
      const res = await axios.get(`${this.baseURL}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`)
      //console.log(res.data.data)
        let output = '';
        res.data.data.forEach(coin => {
          output+=`Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${formatter.format(coin.priceUsd).green} | Rank: ${coin.rank.blue}\n`;
        });

        return output
    }
    catch(err){
      console.log(err)
    }
  }
}



module.exports = CryptoAPI