let logo = document.querySelector("#nav-bar-logo");
let logo_two = document.querySelector(".nav-bar-two");



function myfunc(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email_id = document.getElementById("email_id").value;

    localStorage.setItem('Is_name', name);
    localStorage.setItem('Is_email_id', email_id);

}


(function () {
    function updateReadProgressBar() {
        const root = document.documentElement;
        const winScrollTop = root.scrollTop;
        const winScrollHeight = root.scrollHeight;
        const height = root.scrollHeight - root.clientHeight;
        const progressBarWidth = (winScrollTop / height) * 100;
        



        root.style.setProperty('--scroll-progress-width', progressBarWidth + '%'); 

        // document.querySelector('.scroll-progress div').style.width = progressBarWidth + '%';

        if (progressBarWidth <= 9.656953225337398) {
            logo_two.classList.add('disapper');
        }

        else {
            logo_two.classList.remove('disapper');
        }

        if (progressBarWidth >= 92.71756141626193) { 
            logo_two.classList.add('disapper')
        }
        
    }

    window.addEventListener("load", updateReadProgressBar);
    window.addEventListener("scroll", updateReadProgressBar);
})();

