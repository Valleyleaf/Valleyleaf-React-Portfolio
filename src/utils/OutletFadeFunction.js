export default function fadeOutlet(){
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const content = document.querySelector('.content');
        if (content) {
            const distanceFromTop = content.getBoundingClientRect().top;

            if (distanceFromTop < 50) {
                content.classList.add('fade-out');
            } else {
                content.classList.remove('fade-out');
            }
        }
    });
});

}

//Oh lmao. This can probably be removed and replaced with a CSS transition.