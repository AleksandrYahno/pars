"use strict";

var requestURL = 'https://api.themoviedb.org/3/discover/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&primary_release_date.gte=2014-09-15&primary_release_date.lte=2017-10-22';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {

    var obj = request.response;

    var index;

    // console.log(obj.results);

    for (index = 0; index < obj.results.length; ++index) {

        parseInt(obj.results[index].original_title);

        var my_a = null;
        var my_b = null;

        var newA = document.createElement("a");
        var newB = document.createElement("a");

        newA.className = "collection-item";
        newB.className = "collection-item";

        newA.addEventListener("click", function () {

            for (var i in obj.results) {

                var my_aa = null;
                var newAA = document.createElement("p");
                newAA.innerHTML = "popularity : " + obj.results[i].popularity;
                my_aa = document.getElementById("contentAdd");
                document.body.insertBefore(newAA, my_aa);

                var my_bb = null;
                var newBB = document.createElement("p");
                newBB.innerHTML = "overview : " + obj.results[i].overview;
                my_bb = document.getElementById("contentAdd");
                document.body.insertBefore(newBB, my_bb);

            }

        });

        newA.setAttribute('href', "#!");
        newB.setAttribute('href', "#!");

        document.getElementsByTagName("a").className += "collection-item";
        document.body.className = "collection";

        newA.innerHTML = obj.results[index].original_title;
        newB.innerHTML = obj.results[index].release_date;

        my_a = document.getElementById("content");
        my_b = document.getElementById("content");
        document.body.insertBefore(newA, my_a);
        document.body.insertBefore(newB, my_b);

    }

};


