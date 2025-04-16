const keyboards = [
    { id: "keyboard", letters: "qwertyuiop".split(""), currentIndex: 0 },
    { id: "keyboard2", letters: "asdfghjkl".split(""), currentIndex: 0 },
    { id: "keyboard3", letters: "zxcvbnm".split(""), currentIndex: 0 }
];

const input = document.getElementById("input");
const preview = document.getElementById("preview");

let isDragging = false;
let startY = 0;
let activeKeyboard = null;

function startInteraction(y, keyboardObj, element) {
    isDragging = true;
    startY = y;
    activeKeyboard = { obj: keyboardObj, element: element };

    const currentLetter = keyboardObj.letters[keyboardObj.currentIndex];
    element.textContent = currentLetter;
    preview.textContent = currentLetter;
    preview.style.display = "block";
}

function moveInteraction(y) {
    if (!isDragging || !activeKeyboard) return;

    const diff = y - startY;

    if (Math.abs(diff) > 40) { // gevoeligheid
        let kb = activeKeyboard.obj;

        if (diff > 0) {
            kb.currentIndex = (kb.currentIndex + 1) % kb.letters.length;
        } else {
            kb.currentIndex = (kb.currentIndex - 1 + kb.letters.length) % kb.letters.length;
        }

        const currentLetter = kb.letters[kb.currentIndex];
        activeKeyboard.element.textContent = currentLetter;
        preview.textContent = currentLetter;

        startY = y; // reset om verder te scrollen
    }
}

function endInteraction() {
    if (!isDragging || !activeKeyboard) return;

    const kb = activeKeyboard.obj;
    input.value += kb.letters[kb.currentIndex];

    // Reset
    activeKeyboard.element.textContent = kb.letters.join(" ");
    preview.style.display = "none";
    isDragging = false;
    activeKeyboard = null;
}

// Voeg event listeners toe voor elk keyboard element
keyboards.forEach(kb => {
    const element = document.getElementById(kb.id);

    // Mouse (desktop)
    element.addEventListener("mousedown", (e) => startInteraction(e.clientY, kb, element));

    // Touch (mobiel)
    element.addEventListener("touchstart", (e) => {
        if (e.touches.length > 0) {
            startInteraction(e.touches[0].clientY, kb, element);
        }
    });
});

// Algemene document events voor drag beweging en loslaten
document.addEventListener("mousemove", (e) => moveInteraction(e.clientY));
document.addEventListener("mouseup", endInteraction);

document.addEventListener("touchmove", (e) => {
    if (e.touches.length > 0) {
        moveInteraction(e.touches[0].clientY);
        e.preventDefault(); // voorkomt scrollen
    }
}, { passive: false });

document.addEventListener("touchend", endInteraction);
