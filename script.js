const nav = document.querySelector('.nav')
fetch('nav.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})


function previous() {

}

function next() {
    const widthSlider = document.querySelector('.slider').offsetWidth;
    document.querySelector('.slider_content').scrollLeft += widthSlider;
}