// ---
const ButtonMore = document.getElementById('more');
const leftSlider = document.getElementById('leftSlider')

ButtonMore.addEventListener('click', () => {
    leftSlider.scrollIntoView()
})
// ---

// ----------

// ---
const ButtongoBack = document.getElementById('goBack');
const mainHeader = document.getElementById('mainHeader');
ButtongoBack.addEventListener('click', () => {
    mainHeader.scrollIntoView()
})
// ---


const ButtonBottomRightMain = document.getElementById('BottomRightMain');
const rightSlider = document.getElementById('rightSlider');

ButtonBottomRightMain.addEventListener('click', () => {
    rightSlider.scrollIntoView()
})