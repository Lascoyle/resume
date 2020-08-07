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


function allCreationsDisplayer () {
    for (let item of jsAllCreations) {
        item.style.display ="block";
        console.log(item);
    }
}

function packagingCreationsHider () {
    for (let item of jsPackagingCreations) {
        item.style.display ="none";
        console.log(item);
    }
}

function mockupCreationsHider () {
    for (let item of jsMockupCreations) {
        item.style.display ="none";
        console.log(item);
    }
}

function typographyCreationsHider () {
    for (let item of jsTypographyCreations) {
        item.style.display ="none";
        console.log(item);
    }
}

function photographyCreationsHider () {
    for (let item of jsPhotographyCreations) {
        item.style.display ="none";
        console.log(item);
    }
}

function packagingCreationsDisplayer() {
    allCreationsDisplayer();
    mockupCreationsHider();
    typographyCreationsHider();
    photographyCreationsHider();
}

function mockupCreationsDisplayer() {
    allCreationsDisplayer();
    packagingCreationsHider();
    typographyCreationsHider();
    photographyCreationsHider();
}

function typographyCreationsDisplayer() {
    allCreationsDisplayer();
    packagingCreationsHider();
    mockupCreationsHider();
    photographyCreationsHider();
}

function photographyCreationsDisplayer() {
    allCreationsDisplayer();
    packagingCreationsHider();
    typographyCreationsHider();
    mockupCreationsHider();
}

jsAll.addEventListener("click", allCreationsDisplayer);
jsPackaging.addEventListener("click", packagingCreationsDisplayer );
jsMockup.addEventListener("click",mockupCreationsDisplayer);
jsTypography.addEventListener("click", typographyCreationsDisplayer);
jsPhotography.addEventListener("click", photographyCreationsDisplayer);