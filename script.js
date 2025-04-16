const keyboards = [
    { id: "keyboard", letters: "qwertyuiop".split(""), currentIndex: 0 },
    { id: "keyboard2", letters: "asdfghjkl".split(""), currentIndex: 0 },
    { id: "keyboard3", letters: "zxcvbnm".split(""), currentIndex: 0 }
];

const input = document.getElementById("input");
let isDragging = false;
let startY = 0;
let activeKeyboard = null;
const preview = document.getElementById("preview");




function startInteraction(y, keyboardObj, element) {
    isDragging = true;
    startY = y;
    activeKeyboard = { obj: keyboardObj, element: element };
    element.textContent = keyboardObj.letters[keyboardObj.currentIndex];
    preview.textContent = keyboardObj.letters[keyboardObj.currentIndex];
preview.style.display = "block";
}

function moveInteraction(y) {
    if (!isDragging || !activeKeyboard) return;

    let diff = y - startY;
    if (Math.abs(diff) > 70) {
        let kb = activeKeyboard.obj;
        if (diff > 0) {
            kb.currentIndex = (kb.currentIndex + 1) % kb.letters.length;
        } else {
            kb.currentIndex = (kb.currentIndex - 1 + kb.letters.length) % kb.letters.length;
        }
        activeKeyboard.element.textContent = kb.letters[kb.currentIndex];
        preview.textContent = kb.letters[kb.currentIndex];
        startY = y;
    }
}

function endInteraction() {
    if (isDragging && activeKeyboard) {
        let kb = activeKeyboard.obj;
        input.value += kb.letters[kb.currentIndex];
        activeKeyboard.element.textContent = kb.letters.join(" ");
        isDragging = false;
        activeKeyboard = null;
        preview.style.display = "none";
    }
}

keyboards.forEach(kb => {
    const element = document.getElementById(kb.id);

    element.addEventListener("mousedown", (e) => startInteraction(e.clientY, kb, element));
    element.addEventListener("touchstart", (e) => startInteraction(e.touches[0].clientY, kb, element));
});

document.addEventListener("mousemove", (e) => moveInteraction(e.clientY));
document.addEventListener("mouseup", endInteraction);

document.addEventListener("touchmove", (e) => {
    moveInteraction(e.touches[0].clientY);
    e.preventDefault();
}, { passive: false });

document.addEventListener("touchend", endInteraction);
