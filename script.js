const keys = document.querySelectorAll(".key")
const checkbox = document.querySelector(".checkbox__keys")
const switcher = document.querySelector(".switcher")
const keysSection = document.querySelector(".piano__keys")

const playNote = (note) => {
    const audio = new Audio(`./assets/notes/${note}.wav`)
    audio.play()
}

const handleMouseDown = (key) => {
    playNote(key.getAttribute("data-note"))
    if(key.className.includes("black")){
        key.classList.add("black--pressed")
        return
    }
    key.style.background = "#ddd"
}

const handleMouseUp = (key) => {
    if(key.className.includes("black")) {
        key.classList.remove("black--pressed")
        return
    }

    key.style.background = "white"
}

keys.forEach((key) => {
    key.addEventListener("mousedown", () => handleMouseDown(key))
    key.addEventListener("mouseup", () => handleMouseUp(key))
})

checkbox.addEventListener("change", ({target}) => {
    if(target.checked){
        switcher.classList.add("switcher--active")
        keysSection.classList.remove("disabled-keys")
        return
    }

    switcher.classList.remove("switcher--active")
    keysSection.classList.add("disabled-keys")
})

const keyDownMapper = {
    "a": () => handleMouseDown(keys[0]),
    "w": () => handleMouseDown(keys[1]),
    "s": () => handleMouseDown(keys[2]),
    "e": () => handleMouseDown(keys[3]),
    "d": () => handleMouseDown(keys[4]),
    "r": () => handleMouseDown(keys[5]),
    "f": () => handleMouseDown(keys[6]),
    "t": () => handleMouseDown(keys[7]),
    "g": () => handleMouseDown(keys[8]),
    "y": () => handleMouseDown(keys[9]),
    "h": () => handleMouseDown(keys[10]),
    "u": () => handleMouseDown(keys[11]),
    "j": () => handleMouseDown(keys[12]),
    "i": () => handleMouseDown(keys[13]),
    "k": () => handleMouseDown(keys[14]),
    "o": () => handleMouseDown(keys[15]),
    "l": () => handleMouseDown(keys[16]),
    "p": () => handleMouseDown(keys[17]),
    "ç": () => handleMouseDown(keys[18]),
    "z": () => handleMouseDown(keys[19]),
    "x": () => handleMouseDown(keys[20]),
    "c": () => handleMouseDown(keys[21]),
    "v": () => handleMouseDown(keys[22]),
    "b": () => handleMouseDown(keys[23]),
}

const keyUpMapper = {
    "a": () => handleMouseUp(keys[0]),
    "w": () => handleMouseUp(keys[1]),
    "s": () => handleMouseUp(keys[2]),
    "e": () => handleMouseUp(keys[3]),
    "d": () => handleMouseUp(keys[4]),
    "r": () => handleMouseUp(keys[5]),
    "f": () => handleMouseUp(keys[6]),
    "t": () => handleMouseUp(keys[7]),
    "g": () => handleMouseUp(keys[8]),
    "y": () => handleMouseUp(keys[9]),
    "h": () => handleMouseUp(keys[10]),
    "u": () => handleMouseUp(keys[11]),
    "j": () => handleMouseUp(keys[12]),
    "i": () => handleMouseUp(keys[13]),
    "k": () => handleMouseUp(keys[14]),
    "o": () => handleMouseUp(keys[15]),
    "l": () => handleMouseUp(keys[16]),
    "p": () => handleMouseUp(keys[17]),
    "ç": () => handleMouseUp(keys[18]),
    "z": () => handleMouseUp(keys[19]),
    "x": () => handleMouseUp(keys[20]),
    "c": () => handleMouseUp(keys[21]),
    "v": () => handleMouseUp(keys[22]),
    "b": () => handleMouseUp(keys[23]),
}

document.addEventListener("keydown", (event) => {
    event.preventDefault()
    keyDownMapper[event.key]()
})

document.addEventListener("keyup", (event) => {
    event.preventDefault()
    keyUpMapper[event.key]()
})