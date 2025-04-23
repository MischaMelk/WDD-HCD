const keyboards = [
    {
      id: "keyboard",
      letters: "qwertyuiop".split(""),
      specialLetters: "1234567890".split(""),
      currentIndex: 0
    },
    {
      id: "keyboard2",
      letters: "asdfghjkl".split(""),
      specialLetters: "!@#$%^&*(".split(""),
      currentIndex: 0
    },
    {
      id: "keyboard3",
      letters: "zxcvbnm".split(""),
      specialLetters: ".,;:?/<>".split(""),
      currentIndex: 0
    }
  ];
  
  const input = document.getElementById("input");
  const preview = document.getElementById("preview");
  const space = document.getElementById("spacebar");
  const back = document.getElementById("backspace");
  const shft = document.getElementById("shift");
  const numb = document.getElementById("numbers");
  
  let isDragging = false;
  let startY = 0;
  let activeKeyboard = null;
  let shiftActive = false;
  let specialActive = false;
  
  function getActiveLetters(kb) {
    return specialActive ? kb.specialLetters : kb.letters;
  }
  
  function updatePreview(kb) {
    const letters = getActiveLetters(kb);
    const currentIndex = kb.currentIndex;
  
    const prevIndex = (currentIndex - 1 + letters.length) % letters.length;
    const nextIndex = (currentIndex + 1) % letters.length;
  
    const format = l => shiftActive ? l.toUpperCase() : l.toLowerCase();
  
    document.getElementById("prev-letter").textContent = format(letters[prevIndex]);
    document.getElementById("current-letter").textContent = format(letters[currentIndex]);
    document.getElementById("next-letter").textContent = format(letters[nextIndex]);
  }
  
  function startInteraction(y, keyboardObj, element) {
    isDragging = true;
    startY = y;
    activeKeyboard = { obj: keyboardObj, element: element };
  
    updatePreview(keyboardObj);
    const letters = getActiveLetters(keyboardObj);
    const currentLetter = letters[keyboardObj.currentIndex];
    const displayLetter = shiftActive ? currentLetter.toUpperCase() : currentLetter.toLowerCase();
    element.textContent = displayLetter;
    preview.style.display = "flex";
  }
  
  function moveInteraction(y) {
    if (!isDragging || !activeKeyboard) return;
  
    const diff = y - startY;
  
    if (Math.abs(diff) > 70) {
      const kb = activeKeyboard.obj;
      const letters = getActiveLetters(kb);
  
      if (diff > 0) {
        kb.currentIndex = (kb.currentIndex + 1) % letters.length;
      } else {
        kb.currentIndex = (kb.currentIndex - 1 + letters.length) % letters.length;
      }
  
      const currentLetter = letters[kb.currentIndex];
      const displayLetter = shiftActive ? currentLetter.toUpperCase() : currentLetter.toLowerCase();
      activeKeyboard.element.textContent = displayLetter;
      updatePreview(kb);
  
      startY = y;
    }
  }
  
  function endInteraction() {
    if (!isDragging || !activeKeyboard) return;
  
    const kb = activeKeyboard.obj;
    const letters = getActiveLetters(kb);
    const currentLetter = letters[kb.currentIndex];
  
    input.value += shiftActive ? currentLetter.toUpperCase() : currentLetter.toLowerCase();
  
    const displayLetters = letters.map(l => shiftActive ? l.toUpperCase() : l.toLowerCase());
    activeKeyboard.element.textContent = displayLetters.join(" ");
    preview.style.display = "none";
    isDragging = false;
    activeKeyboard = null;
  }
  
  function updateKeyboardDisplay() {
    keyboards.forEach(kb => {
      const element = document.getElementById(kb.id);
      const letters = getActiveLetters(kb);
      const displayLetters = letters.map(l => shiftActive ? l.toUpperCase() : l.toLowerCase());
      element.textContent = displayLetters.join(" ");
    });
  }
  
  shft.addEventListener("click", () => {
    shiftActive = !shiftActive;
    updateKeyboardDisplay();
    shft.classList.toggle("active");
  });
  
  numb.addEventListener("click", () => {
    specialActive = !specialActive;
    updateKeyboardDisplay();
    numb.classList.toggle("active");
  });
  
  keyboards.forEach(kb => {
    const element = document.getElementById(kb.id);
    element.addEventListener("mousedown", e => startInteraction(e.clientY, kb, element));
    element.addEventListener("touchstart", e => {
      if (e.touches.length > 0) {
        startInteraction(e.touches[0].clientY, kb, element);
      }
    });
  });
  
  document.addEventListener("mousemove", e => moveInteraction(e.clientY));
  document.addEventListener("mouseup", endInteraction);
  document.addEventListener("touchmove", e => {
    if (e.touches.length > 0) {
      moveInteraction(e.touches[0].clientY);
      e.preventDefault();
    }
  }, { passive: false });
  document.addEventListener("touchend", endInteraction);
  
  space.addEventListener("click", () => input.value += " ");
  back.addEventListener("click", () => input.value = input.value.slice(0, -1));
  