document.addEventListener('DOMContentLoaded', (event) => {
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const initialContent = document.querySelector('.initial-content');
    const resultContent = document.querySelector('.result-content');
    const encryptButton = document.querySelector('.encrypt');
    const decryptButton = document.querySelector('.decrypt');
    const copyButton = document.getElementById('copy-button');

    const encryptionMap = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    function encrypt(text) {
        return text.replace(/[aeiou]/g, letter => encryptionMap[letter]);
    }

    function decrypt(text) {
        let decryptedText = text;
        Object.entries(encryptionMap).forEach(([key, value]) => {
            decryptedText = decryptedText.replace(new RegExp(value, 'g'), key);
        });
        return decryptedText;
    }

    function isValidInput(text) {
        return /^[a-z\s]*$/.test(text);
    }

    function updateOutput() {
        if (inputText.value.trim() !== '') {
            initialContent.style.display = 'none';
            resultContent.style.display = 'flex';
        } else {
            initialContent.style.display = 'flex';
            resultContent.style.display = 'none';
        }
    }

    inputText.addEventListener('input', updateOutput);

    encryptButton.addEventListener('click', () => {
        if (!isValidInput(inputText.value)) {
            alert('Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.');
            return;
        }
        outputText.value = encrypt(inputText.value);
        updateOutput();
    });

    decryptButton.addEventListener('click', () => {
        if (!isValidInput(inputText.value)) {
            alert('Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.');
            return;
        }
        outputText.value = decrypt(inputText.value);
        updateOutput();
    });

    copyButton.addEventListener('click', () => {
        outputText.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    });
});