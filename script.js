    const keyboards = [
        { id: "keyboard", letters: "QWERTYUIOP".split(""), currentIndex: 0 },
        { id: "keyboard2", letters: "ASDFGHJKL".split(""), currentIndex: 0 },
        { id: "keyboard3", letters: "ZXCVBNM".split(""), currentIndex: 0 }
    ];

    const input = document.getElementById("input");
    let isDragging = false;
    let startX = 0;
    let activeKeyboard = null;

    function startInteraction(x, keyboardObj, element) {
        isDragging = true;
        startX = x;
        activeKeyboard = { obj: keyboardObj, element: element };
        element.textContent = keyboardObj.letters[keyboardObj.currentIndex];
    }

    function moveInteraction(x) {
        if (!isDragging || !activeKeyboard) return;

        let diff = x - startX;
        if (Math.abs(diff) > 20) {
            let kb = activeKeyboard.obj;
            if (diff > 0) {
                kb.currentIndex = (kb.currentIndex + 1) % kb.letters.length;
            } else {
                kb.currentIndex = (kb.currentIndex - 1 + kb.letters.length) % kb.letters.length;
            }
            activeKeyboard.element.textContent = kb.letters[kb.currentIndex];
            startX = x;
        }
    }

    function endInteraction() {
        if (isDragging && activeKeyboard) {
            let kb = activeKeyboard.obj;
            input.value += kb.letters[kb.currentIndex];
            activeKeyboard.element.textContent = kb.letters.join(" ");
            isDragging = false;
            activeKeyboard = null;
        }
    }

    keyboards.forEach(kb => {
        const element = document.getElementById(kb.id);


        element.addEventListener("mousedown", (e) => startInteraction(e.clientX, kb, element));

        element.addEventListener("touchstart", (e) => startInteraction(e.touches[0].clientX, kb, element));
    });

    document.addEventListener("mousemove", (e) => moveInteraction(e.clientX));
    document.addEventListener("mouseup", endInteraction);

    document.addEventListener("touchmove", (e) => {
        moveInteraction(e.touches[0].clientX);
        e.preventDefault();
    }, { passive: false });
    document.addEventListener("touchend", endInteraction);

