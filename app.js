// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener("click", function(){
    console.log(links.classList);
    console.log(links.classList.contains("random"));
    console.log(links.classList.contains("links"));
    if(links.classList.contains("show-links")){
        links.classList.remove('show-links');
    }else{
        links.classList.add("show-links");
    }
    // links.classList.toggle("show-links");
});

//links.classList.toggle("show-links"); 
//here toggle function adds the class if it is not present, but if the class is already present then it will remove the class.