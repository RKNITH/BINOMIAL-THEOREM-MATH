document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();

    document.getElementById("particular-term-form").addEventListener("submit", (e) => {
        e.preventDefault();
        calculateParticularTerm();
    });

    document.getElementById("middle-term-form").addEventListener("submit", (e) => {
        e.preventDefault();
        calculateMiddleTerm();
    });
});

function calculateParticularTerm() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const n = parseInt(document.getElementById('n').value);
    const k = parseInt(document.getElementById('k').value);

    if (isNaN(a) || isNaN(b) || isNaN(n) || isNaN(k)) {
        document.getElementById('particular-term-result').textContent = "Please enter valid numbers.";
        return;
    }

    const coefficient = factorial(n) / (factorial(k) * factorial(n - k));
    const term = coefficient * Math.pow(a, n - k) * Math.pow(b, k);

    document.getElementById('particular-term-result').textContent = `Term: ${term}`;
}

function calculateMiddleTerm() {
    const a = parseFloat(document.getElementById('a-middle').value);
    const b = parseFloat(document.getElementById('b-middle').value);
    const n = parseInt(document.getElementById('n-middle').value);

    if (isNaN(a) || isNaN(b) || isNaN(n)) {
        document.getElementById('middle-term-result').textContent = "Please enter valid numbers.";
        return;
    }

    const middleIndex = Math.floor(n / 2);
    const coefficient = factorial(n) / (factorial(middleIndex) * factorial(n - middleIndex));
    const term = coefficient * Math.pow(a, n - middleIndex) * Math.pow(b, middleIndex);

    document.getElementById('middle-term-result').textContent = `Middle Term: ${term}`;
}

function factorial(num) {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = num; i > 1; i--) {
        result *= i;
    }
    return result;
}
