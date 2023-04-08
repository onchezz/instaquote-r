const fetchradomQuote = async () => {
   
   try {
      fetchListQuote();
         let randomQuote = await fetch('https://api.quotable.io/random').then(res => res.json()).then(data => {
         return data;
      });
      return randomQuote;
     
   } catch (e) {
      console.log(e)
      return e;
      
      
   } 

}

const fetchListQuote = async () => {
   
   try {
      
         // let randomlistQuote = await fetch('https://api.quotable.io/quotes/random?limit=2').then(res => res.json()).then(data => {
         // return data;
         // });
      let randomlistQuote = await fetch('https://api.quotable.io/quotes/random?limit=2');
      
      return randomlistQuote.json();
     
   } catch (e) {
      console.log(e);
      return e;
      
      
   } 

}
export default fetchradomQuote; fetchListQuote;