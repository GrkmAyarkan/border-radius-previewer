const previewBox = document.querySelector('.preview-box');

const topLeftInput = document.getElementById('top-left');
const topRightInput = document.getElementById('top-right');
const bottomRightInput = document.getElementById('bottom-right');
const bottomLeftInput = document.getElementById('bottom-left');

const spanTopLeft = document.getElementById('topLeftValue');
const spanTopRight = document.getElementById('topRightValue');
const spanBottomRight = document.getElementById('bottomRightValue');
const spanBottomLeft = document.getElementById('bottomLeftValue');

const cssOutput = document.getElementById('css-output');

const copyButton = document.getElementById('copy-btn');

function updateBorderRadius() {
    const topLeft = topLeftInput.value;
    const topRight = topRightInput.value;
    const bottomRight = bottomRightInput.value;
    const bottomLeft = bottomLeftInput.value;

    const borderRadiusValue = `
    ${topLeft}px
    ${topRight}px
    ${bottomRight}px
    ${bottomLeft}px
    `; // Bu sıra CSS standardıdır.

    previewBox.style.borderRadius = borderRadiusValue;

    spanTopLeft.textContent = `${topLeft}px`;
    spanTopRight.textContent = `${topRight}px`;
    spanBottomRight.textContent = `${bottomRight}px`;
    spanBottomLeft.textContent = `${bottomLeft}px`;

    cssOutput.textContent = `border-radius: ${borderRadiusValue};`;
}

topLeftInput.addEventListener('input', updateBorderRadius);
topRightInput.addEventListener('input', updateBorderRadius);
bottomRightInput.addEventListener('input', updateBorderRadius);
bottomLeftInput.addEventListener('input', updateBorderRadius);

updateBorderRadius();

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(cssOutput.textContent);
});