let jsAll = document.getElementById("all-activities");
let jsPackaging = document.getElementById("packaging-activities");
let jsMockup = document.getElementById("mockup-activities");
let jsTypography = document.getElementById("typography-activities");
let jsPhotography = document.getElementById("photography-activities");

let jsAllCreations = document.getElementsByClassName("portfolio-creation");
let jsPackagingCreations = document.getElementsByClassName("packaging-creation");
let jsMockupCreations = document.getElementsByClassName("mockup-creation");
let jsTypographyCreations = document.getElementsByClassName("typography-creation");
let jsPhotographyCreations = document.getElementsByClassName("photography-creation");

function allCreationsDisplayer() {
    for (let i = 0; i <= jsAllCreations.length; i++) {
        jsAllCreations[i].style.display = "block";
    }
}

function mockupCreationsHider() {
    for (let i = 0; i <= jsMockupCreations.length; i++) {
        jsMockupCreations[i].style.display = "none";
    }
}

function packagingCreationsHider() {
    for (let i = 0; i <= jsPackagingCreations.length; i++) {
        jsPackagingCreations[i].style.display = "none";
    }
}

function typographyCreationsHider() {
    for (let i = 0; i <= jsTypographyCreations.length; i++) {
        jsTypographyCreations[i].style.display = "none";
    }
}

function photographyCreationsHider() {
    for (let i = 0; i <= jsPhotographyCreations.length; i++) {
        jsPhotographyCreations[i].style.display = "none";
    }
}


function mockupCreationsDisplayer() {
    packagingCreationsHider();
    typographyCreationsHider();
    photographyCreationsHider();
}

function packagingCreationsDisplayer() {
    mockupCreationsHider();
    typographyCreationsHider();
    photographyCreationsHider();
}

function typographyCreationsDisplayer() {
    packagingCreationsHider();
    mockupCreationsHider();
    photographyCreationsHider();
}

function photographyCreationsDisplayer() {
    packagingCreationsHider();
    typographyCreationsHider();
    mockupCreationsHider();
}



jsAll.addEventListener("click", allCreationsDisplayer);
jsPackaging.addEventListener("click", packagingCreationsDisplayer );
jsMockup.addEventListener("click",mockupCreationsDisplayer);
jsTypography.addEventListener("click", typographyCreationsDisplayer);
jsPhotography.addEventListener("click", photographyCreationsDisplayer);

