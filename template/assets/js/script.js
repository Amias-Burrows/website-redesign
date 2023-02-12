    // Calls the functions that get called on startup. If not they're not in use or called dynamically whilst the site is running
const init = () => {

    mobile_nav_open();
    handle_night_mode();
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
        nav.hasClass('open')
            ? nav.removeClass('open')
            : nav.addClass('open');
    })
}

    // handles the night-mode toggle
const handle_night_mode = () => {
    let handle = $('#dark-mode-toggle');

    handle.click(() => {
        handle.find('.selected')
            .removeClass('selected')
            .siblings()
            .addClass('selected');
    });
}

init();