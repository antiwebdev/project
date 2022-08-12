"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '5');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '5');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
    for (let i = 0; i<2; i++){

        const a = prompt('Один из последних просмотренных фильмов?', '');
        const b = +prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length<50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        }else{
            console.log('error');
            i--;
        }
    } 
}

rememberMyFilms();

function detectPersonalLevel () {

    if (personalMovieDB.count < 10 ) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10){
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30){
        alert("Вы киноман");
    } else {
        alert('error');
    }
}

detectPersonalLevel();

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGeneres () {
    for (let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
}

writeYourGeneres();




