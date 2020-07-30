import $ from "jquery";
import '../component/List.js';
import '../component/Item.js';
import "../component/Search.js";
import Source from "../source/Source.js";
import moment from "moment";

const main = () => {

    const displayTime = () => {
        moment.locale("id");
        $(".time").text(moment().format("LTS")+moment().format("LL"));
    };

    const updateTime = () => {
        displayTime();
        setTimeout(updateTime, 1000)
    };

    const searchElement = document.querySelector("search-bar"), 
            movieListElement = document.querySelector("movie-list"),
            detailElement = document.querySelector("movie-item");


    const onButtonSearchClicked = async () => {
        
        let searchValue = searchElement.value;
        if (searchValue) {
            try {
                renderResult(await Source.searchMoive(searchValue));
            } catch (rejectedReason) {
                fallbackResult(rejectedReason);
            }   
        }else{
            alert("required value");
        }
    };

    const onButtonDetailClicked = async() => {
        let movieId = detailElement.value;
        if (movieId) {
            try {
                 renderResult(await Source.searchDetailMoive(movieId));
                 updateTime();
            } catch (rejectedReason) {
                fallbackResult(rejectedReason);
            }   
        }else{
            alert('Movie ID is null');
        }
    };

    const renderResult = (results) => {
        movieListElement.movies = results;
    };

    const fallbackResult = (message) => {
        movieListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
    detailElement.clickEvent = onButtonDetailClicked;
};

export default main;
