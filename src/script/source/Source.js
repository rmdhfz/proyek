
class Source {
   static searchMoive(keyword) {
     const api = "http://api.themoviedb.org/3/search/movie/",
         key = "c476838fb212ea7cc14e724957e070b9";
       
       return fetch(`${api}?api_key=${key}&query=${keyword}`)
       .then(response => {
           return response.json();
       })
       .then(Data => {
           if(Data.results) {
               return Promise.resolve(Data.results);
           } else {
               return Promise.reject(`${keyword} is not found`);
           }
       })
   }
   static searchDetailMoive(movieId){

     const detailMovieURL = "http://api.themoviedb.org/3/movie/", apiKey = "c476838fb212ea7cc14e724957e070b9";
         
         return fetch(`${detailMovieURL}/${movieId}?api_key=${apiKey}`)
         .then(response => {
             return response.json();
         })
         .then(Data => {
             if(Data.results) {
                 return Promise.resolve(Data.results);
             } else {
                 return Promise.reject(`${keyword} is not found`);
             }
         })
   }
}
 
export default Source;