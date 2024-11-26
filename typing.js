document.addEventListener('DOMContentLoaded', () => {
    const text = "Hello World!";
    const terminalText = document.getElementById('terminalText');
    let index = 0;

    function type() {
        if (index < text.length) {
            terminalText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }

    
    type();
});