function fadeOutlet(){
    window.addEventListener('scroll', function(){
        const outlet = this.document.querySelector('Outlet-Positioning');
        const distanceFromTop = content.getBoundingClientRect().top;

        if (distanceFromTop < 50) {
            content.classList.add('fade-out');
        } else {
            content.classList.remove('fade-out');
        }
    })
}