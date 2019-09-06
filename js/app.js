
function searchBar() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("galleryUl");
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.getAttribute('data-title');
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


//txtValue = a.textContent || a.innerText;
//


