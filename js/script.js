/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,

    start : function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while(this.count == '' || this.count == null || isNaN(this.count)){
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms : function(){
        for (let i = 0; i < 2; i++) {
        
            const a = prompt('Один из последних просмотренных фильмов?', '');
            const b = prompt('На сколько оцените его?', '');
    
            if(a == "" || b == "" || a == null || b == null || a.length > 50) {
                i--;
            } else {
            personalMovieDB.movies[a] = b;
            }  
        }
    },

    getClassification : function(){
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");  
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if(personalMovieDB.count >= 30){
            console.log("Вы киноман");
        } else{
            console.log("Произошла ошибка");
        }
    },

    showMyDB : function(hidden) {
        if (!hidden) console.log(personalMovieDB);
        else console.log("Закрытая инфа..!");
    },
    
    writeYourGenres : function(){
        for (let i = 0; i < 3; i++) {
            const genre = prompt(`Ваш любимый жарн под номером ${i + 1}`, '');
            if(genre == "" || genre == null){
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }            
        }   

        personalMovieDB.genres.forEach( (val, idx) => {
           console.log(`Любимый жанр #${idx + 1} - это ${val}`); 
        });
    },

    toggleVisibleMyDB : function(){
        if(this.privat){
            this.privat = false;
        } else {
            this.privat = true;
        }
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.getClassification();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();