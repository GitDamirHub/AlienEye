class alienEye{
    constructor() {
        this.windowArea = window;
        this.alien = document.getElementsByClassName("eye-container");
        this.wX = this.windowArea.innerWidth;
        this.wY = this.windowArea.innerHeight;
        this.eyeBlueArea = document.getElementsByClassName("eye");
        this.eyePupil = document.getElementsByClassName("eye-pupil");
        this.events();
    }

    events() {
        this.windowArea.addEventListener("mousemove", this.moveEye.bind(this));
        this.windowArea.addEventListener("resize", this.resetXY.bind(this));
    }

    moveEye() {
        this.eyeBlueArea[0].style.left = 50 + (40*event.pageX)/(this.wX/2) + "px";
        this.eyeBlueArea[0].style.top = 70 + (35*event.pageY)/(this.wY/2) + "px";
        this.eyePupil[0].style.left = (30*event.pageX)/(this.wX/2) + "px"; 
        this.eyePupil[0].style.top =(20*event.pageY)/(this.wY/2) + "px";
        this.alien[0].style.right = "calc(50vw - " + (130 + ((40*event.pageX)/this.wX)) + "px)";
        this.alien[0].style.top = "calc(50vh - " + (150 - ((40*event.pageY)/this.wY)) + "px)";
     }
    resetXY() {
        
        this.wX = this.windowArea.innerWidth;
        this.wY = this.windowArea.innerHeight;
    }
}

window.onload = function() {
    var ld = document.getElementsByClassName('loading-div');
    setTimeout(() =>ld[0].classList.add('loading-div-out'), 200);
    setTimeout(() => ld[0].classList.add('dn'), 701);
}
var alien = new alienEye;