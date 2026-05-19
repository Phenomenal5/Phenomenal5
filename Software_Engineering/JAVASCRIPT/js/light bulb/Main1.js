const light = document.querySelector('img');
const toggleButton = document.querySelector('button');


// toggleButton.addEventListener('click', () => {
//     toggleButton.textContent = toggleButton.textContent === "Turn on" ? "Turn off" : "Turn on";
//     toggleButton.textContent === 'Turn on' ? light.setAttribute('src', 'light-off.svg') : light.setAttribute('src', 'light-on.svg');
// })


function toggleLight() {
    toggleButton.textContent = toggleButton.textContent === "Turn on" ? "Turn off" : "Turn on";

    if(toggleButton.textContent === "Turn on") {
        light.setAttribute('src', 'light-off.svg');
    } else {
        light.setAttribute('src', 'light-on.svg');
    }
}