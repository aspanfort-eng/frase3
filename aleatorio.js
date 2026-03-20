function irAFraseAleatoria() {
    const totalFrases = 11; // Pon aquí cuántas frases tienes
    const numAzar = Math.floor(Math.random() * totalFrases);
    // Redirige a la página de frase pasando el número como parámetro
    window.location.href = `frase.html?id=${numAzar}`;
}

