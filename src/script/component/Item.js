class Item extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }


    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#detail-movie").value;
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
               .movie-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10;
               }
               #detail-movie {
                  width: 20%;
                  cursor: pointer;
                  margin-left: auto;
                  padding: 16px;
                  background-color: #1a73e8;
                  color: #fff;
                  text-decoration: none;
                  text-overflow: ellipsis;
                  border-radius: 5px solid black;
                  float: right;
               }
           </style>
           <img class="fan-art-movie" src="${fullpath}" draggable="false" alt="img for ${this._movie.title}">
           <div class="movie-info">
               <h2>${this._movie.title} - Release Date: ${this._movie.release_date}</h2>
               <p>${this._movie.overview}</p>
               <button id="detail-movie" value="${this._movie.id}">Detail Movie</button>
           </div>`;
        this.shadowDOM.querySelector("#detail-movie").addEventListener("click", this._clickEvent);
    }
}

customElements.define("movie-item", Item);
