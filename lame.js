"use strict";

const numOfFilms = +prompt("How many films did you watch?","");

const personslMovieDB = {
    count: numOfFilms,
    movies:{},
    actors:{},
    genres:{},
    privat:false
};

const a = prompt("Один из последних просмотренных фильмов?",""),
      b = prompt("Ha сколько оцените?",""),
      c = prompt("Один из последних просмотренных фильмов?",""),
      d = prompt("Ha сколько оцените?","");

personslMovieDB.movies[a] = b;
personslMovieDB.movies[c] = d;


 console.log(personslMovieDB);