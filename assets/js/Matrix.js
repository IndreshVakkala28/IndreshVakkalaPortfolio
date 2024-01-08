document.addEventListener('DOMContentLoaded', function () {
    const matrix = document.getElementById('matrix');

    function createMatrixEffect() {
        const codeCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const codeLength = 150;

        for (let i = 0; i < codeLength; i++) {
            const codeElement = document.createElement('span');
            codeElement.innerHTML = codeCharacters.charAt(Math.floor(Math.random() * codeCharacters.length));
            matrix.appendChild(codeElement);
        }
    }

    function updateMatrix() {
        const codeElements = matrix.getElementsByTagName('span');

        for (let i = 0; i < codeElements.length; i++) {
            const currentPosition = parseInt(codeElements[i].style.top) || 0;

            // Reset position if it's beyond the bottom of the screen
            if (currentPosition >= window.innerHeight) {
                codeElements[i].style.top = '0px';
            } else {
                codeElements[i].style.top = currentPosition + Math.random() * 2 + 'px';
            }
        }

        requestAnimationFrame(updateMatrix);
    }

    // Initialize matrix effect
    createMatrixEffect();

    // Start the animation loop
    updateMatrix();
});
