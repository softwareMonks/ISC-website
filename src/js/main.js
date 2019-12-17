    //sidenav
const sidenav = document.querySelector('.sidenav');
M.Sidenav.init(sidenav, {});
    //slider
const slider = document.querySelector('.slider');
M.Slider.init(slider,{
    indicators: false,
    height: 800,
    transition: 500,
    interval: 6000
})
