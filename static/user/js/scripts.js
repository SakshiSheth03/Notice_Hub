//For search
function funsearch() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName('notice');
    li = document.getElementsByClassName('notice-title');
    nom = document.getElementsByClassName('search-nomatch');
    // li2 = document.getElementsByClassName('notice-subject');

    // Loop through all list items, and hide those who don't match the search query
    var cnt = 0;
    for(i=0; i<li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;
        if(txtValue.toUpperCase().indexOf(filter)>-1) {
            ul[i].style.display = "";
            nom[0].style.display = "none";
        }
        else {
            ul[i].style.display = "none";
            console.log(cnt);
            cnt++;
            if(cnt==li.length){
                nom[0].style.display = "block";
            }
        }
    }
}

//nav about
function about() {
    var abt = document.getElementsByClassName('aboutus');
    var con = document.getElementsByClassName('content');
    var searchbar = document.getElementsByClassName('search-container');

    var btnHome = document.getElementById('nav-home');
    var btnAbout = document.getElementById('nav-about');

    abt[0].style.display = "block";
    con[0].style.display = "none";
    searchbar[0].style.display = "none";

    btnHome.classList.remove("active");
    btnAbout.classList.add("active");
}

//nav home
function home() {
    var abt = document.getElementsByClassName('aboutus');
    var con = document.getElementsByClassName('content');
    var searchbar = document.getElementsByClassName('search-container');

    var btnHome = document.getElementById('nav-home');
    var btnAbout = document.getElementById('nav-about');

    abt[0].style.display = "none";
    con[0].style.display = "block";
    searchbar[0].style.display = "block";

    btnHome.classList.add("active");
    btnAbout.classList.remove("active");
}