const init = () => {

    mobile_nav_open();
}

const mobile_nav_open = () => {
    let handle = $('#nav-handle');
    let nav = $('#header-nav');
    let slider = {
        start: 0,
        current: 0,
        end: 0
    }

    handle.mousedown((e) => {
        slider.start = e.pageX / 100;
        slider.end = slider.start * 100;
    })

    handle.click(() => {
        
        nav.hasClass('open')
            ? nav.removeClass('open')
            : nav.addClass('open');
    })
}

init();