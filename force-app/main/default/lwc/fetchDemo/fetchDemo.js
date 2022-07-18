import { LightningElement, track } from 'lwc';

export default class FetchDemo extends LightningElement {
     @track stocksArray;
     stockPrice;

     handleChange(event){
      this.stockPrice = parseInt(event.target.value);
     }

    async handleClick(){
        let url = 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=636b682f4f0d048ad70e7521e5fbbab4';

        try{

            let response = await fetch(url,{method:"GET"});
            let data = await response.json();
            console.log(data);
            this.stocksArray = data.filter(item => {
                return item.price > this.stockPrice ;
            });
            console.log(JSON.stringify(this.stocksArray));
        }
        catch(e){
            console.log(e);
        }

    }
}  