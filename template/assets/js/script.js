    // Calls the functions that get called on startup. If not they're not in use or called dynamically whilst the site is running
const init = () => {

    mobile_nav_open();
    handle_night_mode();
    qr_activate();
}

    // Handles opening the nav bar with dragging functionality
const mobile_nav_open = () => {
    let handle = $('#nav-handle');
    let nav = $('#header-nav');
    // let slider = {
    //     start: 0,
    //     current: 0,
    //     end: 0
    // }

    // handle.mousedown((e) => {
    //     slider.start = e.pageX / 100;
    //     slider.end = slider.start * 100;
    // })

        // Simple opening and closing if handle is not pressed and dragged
    handle.click(() => {
        
            // Flip-Flop for the .open class
        nav.hasClass('closed')
            ? nav.removeClass('closed')
            : nav.addClass('closed');
    })
}

    // handles the night-mode toggle
const handle_night_mode = () => {
    let handle = $('#dark-mode-toggle');
    let css = $('link#main-stylesheet');
    let value = css[0].attributes[2].nodeValue;

    if (localStorage.getItem('dark-mode')) {
        handle.find('.selected')
            .removeClass('selected')
            .siblings()
            .addClass('selected');
        
        css[0].attributes[2].nodeValue = css[0].attributes[2].nodeValue.replace('root', 'dark-root');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem('dark-mode', true);
        handle.find('.selected')
            .removeClass('selected')
            .siblings()
            .addClass('selected');
        
        css[0].attributes[2].nodeValue = css[0].attributes[2].nodeValue.replace('root', 'dark-root');
    } else {
        localStorage.setItem('dark-mode', false);
    }

    handle.click(() => {
        localStorage.getItem('dark-mode') == true
            ? localStorage.setItem('dark-mode', false)
            : localStorage.setItem('dark-mode', true);

        handle.find('.selected')
            .removeClass('selected')
            .siblings()
            .addClass('selected');
        
        css[0].attributes[2].nodeValue.includes('dark-root')
            ? css[0].attributes[2].nodeValue = css[0].attributes[2].nodeValue.replace('dark-root', 'root')
            : css[0].attributes[2].nodeValue = css[0].attributes[2].nodeValue.replace('root', 'dark-root');
    });
}

const qr_activate = () => {
}

init();