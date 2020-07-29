class Item extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        const base = "https://image.tmdb.org/t/p/w500/";
        let img  = `${this._movie.poster_path}`, fullpath;
              if (img == "null") {
                img = "https://nb-egypt.com/img/not-available.jpg";
                fullpath = `${img}`;
              }else{
                fullpath = `${base}${img}`;
              }
        this.shadowDOM.innerHTML = `
           <style>
               * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   display: block;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
               }
              
               .fan-art-movie {
                   width: 100%;
                   max-height: 300px;
                   object-fit: cover;
                   object-position: center;
               }
              
               .movie-info {
                   padding: 24px;
               }
              
               .movie-info > h2 {
                   font-weight: lighter;
               }

               .movie-info > h3 {
                   font-weight: lighter;
                   float: right;
               }
             
               .movie-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10;
               }
           </style>
           <img class="fan-art-movie" src="${fullpath}" draggable="false" alt="${this._movie.poster_path}">
           <div class="movie-info">
               <h2>${this._movie.title}</h2>
               <h3><i class="fa fa-calendar" aria-hidden="1"></i> ${this._movie.release_date}</h3>
               <p>${this._movie.overview}</p>
           </div>`;
    }
}

customElements.define("movie-item", Item);
