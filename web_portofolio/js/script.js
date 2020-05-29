const textElement = ['Backend Engineer', 'Polyglot', 'Web Development'];

let count = 0;
let txtIndex = 0;
let currentText = '';
let words = '';

(function ngetik() {
    if (count === textElement.length) {
        count = 0
    }

    currentText = textElement[count]

    words = currentText.slice(0, ++txtIndex)

    document.querySelector('.animasi-ngetik').textContent = words

    if (words.length === currentText.length) {
        count++;
        txtIndex = 0
    }

    setTimeout(ngetik, 500)

})();