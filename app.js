function changeBold() {
    var changeBold = document.getElementById('lorem')
    changeBold.style.fontSize = ('30px')
    if (changeBold) {
        changeBold.style.fontStyle = ('')
    } else {
        changeBold.style.fontStyle = ('Italic')
    }
}
function changeItalic() {
    var changeItalic = document.getElementById('lorem')
    changeItalic.style.fontStyle =('Italic')
    if (changeItalic) {
        changeItalic.style.fontStyle = ('Bold')
    } else {
        changeItalic.style.fontStyle = ('Underline')
    }
}
function changeUnderline() {
    var changeUnderline = document.getElementById('lorem')
    changeUnderline.style.textDecoration = ('Underline')
    if (changeUnderline) {
        changeUnderline.style.fontStyle = ('lorem')
    } else {
        changeUnderline.style.fontStyle = ('')
    }
}
