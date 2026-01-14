const previewBox = document.querySelector('.preview-box');

const topInput = document.getElementById('top-radius');
const rightInput = document.getElementById('left-radius');
const bottomInput = document.getElementById('bottom-radius');
const leftInput = document.getElementById('right-radius');

const cssOutput = document.getElementById('css-output');

const copyButton = document.getElementById('copy-btn');

function updateBorderRadius() {
    const topValue = topInput.value;
    const rightValue = rightInput.value;
    const bottomValue = bottomInput.value;
    const leftValue = leftInput.value;

    // ****************
    const tlX = topValue;
    const trX = 100 - topValue;
    const brX = 100 - bottomValue;
    const blX = bottomValue;

    const tlY = 100 - rightValue;
    const trY = 100 - leftValue;
    const brY = leftValue;
    const blY = rightValue;

    const borderRadiusValue = `
    ${tlX}% ${trX}% ${brX}% ${blX}% /
    ${tlY}% ${trY}% ${brY}% ${blY}%`;

    previewBox.style.borderRadius = borderRadiusValue;

    cssOutput.textContent = `border-radius: ${borderRadiusValue}`;
}

topInput.addEventListener('input', updateBorderRadius);
rightInput.addEventListener('input', updateBorderRadius);
bottomInput.addEventListener('input', updateBorderRadius);
leftInput.addEventListener('input', updateBorderRadius);

updateBorderRadius();

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(cssOutput.textContent);
});