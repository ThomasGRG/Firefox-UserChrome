// Sidebar Always Loaded Firefox (SALF)

const sidebar = document.getElementById('sidebar');
const sidebarBox = document.getElementById('sidebar-box');
const mainWindow = document.getElementById('main-window');

let sidebarButton;
let isSidebarOpen;
let isItSidebery;

function sidebarStatus() {
    if(sidebarBox.hasAttribute('hidden')) {
        isSidebarOpen = false;
    }
    else {
        isSidebarOpen = true;
        if (isItSidebery) {
            mainWindow.setAttribute('titlepreface', '[Sidebery]');
        }
    }
}

function sideberyActive() {
    if(sidebarBox.hasAttribute('sidebarcommand')) {
        if (sidebarBox.getAttribute('sidebarcommand') === '_3c078156-979c-498b-8990-85f7987dd929_-sidebar-action') {
            isItSidebery = true;
        }
        else {
            isItSidebery = false;
        }
    }
    else {
        isItSidebery = false;
    }
}

function showSidebar() {
    isSidebarOpen = true;
    sidebarBox.hidden = false;
    sidebarButton && (sidebarButton.checked = true);
    sidebarBox.classList.remove('hide');
    if (isItSidebery) {
        mainWindow.setAttribute('titlepreface', '[Sidebery]');
    }
}

function hideSidebar() {
    isSidebarOpen = false;
    sidebarBox.hidden = true;
    sidebarButton && (sidebarButton.checked = false);
    sidebarBox.classList.add('hide');
    if (isItSidebery) {
        mainWindow.removeAttribute('titlepreface');
    }
}

// Button functionality
const buttonBehavior = () => isSidebarOpen ? hideSidebar() : showSidebar();

// Add salf behavior at launch
const apply = function() {
    sideberyActive();
    sidebarStatus();

    sidebarButton = document.getElementById('sidebar-button');

    if (!isSidebarOpen && sidebarButton) {
        sidebarButton.checked = false;
    }

    // replace Sidebar button default behavior
    sidebarButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        buttonBehavior();
    });

    // remove listener to avoid being fired again after panel content is changed
    window.removeEventListener('DOMContentLoaded', apply);
}

window.addEventListener('DOMContentLoaded', apply);

console.log('salf → loaded ok');