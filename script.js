const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A8"];
const fonts = ["Arial", "Georgia", "Roboto", "Playfair Display", "Montserrat"];
const patterns = ["dots", "stripes", "grid"];

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

document.getElementById('randomize').addEventListener('click', () => {
    const moodboard = document.querySelector('.moodboard');
    moodboard.innerHTML = ''; // Clear existing moodboard

    // Randomize and display assets
    const color = document.createElement('div');
    color.className = 'asset';
    color.style.backgroundColor = getRandomItem(colors);
    color.textContent = "Color";

    const font = document.createElement('div');
    font.className = 'asset';
    font.style.fontFamily = getRandomItem(fonts);
    font.textContent = "Font: " + getRandomItem(fonts);

    const pattern = document.createElement('div');
    pattern.className = 'asset';
    pattern.textContent = "Pattern: " + getRandomItem(patterns);

    moodboard.append(color, font, pattern);
});

document.getElementById('save').addEventListener('click', () => {
    alert("Save functionality is under development!");
});