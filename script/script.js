

const square = document.querySelector('#square')
const sliders = document.querySelector('.sliders')
const redSlider = document.querySelector('#red-slider')
const greenSlider = document.querySelector('#green-slider')
const blueSlider = document.querySelector('#blue-slider')

const currentRgb = () => {

    const red = redSlider.value
    const green = greenSlider.value
    const blue = blueSlider.value
    const color = `rgb(${red},${green},${blue})`
    return   square.style.background = color
}

sliders.addEventListener('click' , () => {
    currentRgb()
})

currentRgb()