
const canvas = document.getElementById("sistemaSolar");
const ctx = canvas.getContext("2d");

const botonPausar = document.getElementById("pausar");
const botonReiniciar = document.getElementById("reiniciar");

let pausado = false;
let tiempo = 0;
let ultimoTiempo = 0;

// Datos orbitales aproximados.
// La distancia se expresa en unidades astronómicas (UA).
const planetas = [
    {
        nombre: "Mercurio",
        distancia: 0.39,
        radio: 4,
        color: "#b7b0a5",
        velocidad: 1.60
    },
    {
        nombre: "Venus",
        distancia: 0.72,
        radio: 7,
        color: "#e8bd78",
        velocidad: 1.17
    },
    {
        nombre: "Tierra",
        distancia: 1.00,
        radio: 8,
        color: "#43a5ff",
        velocidad: 1.00
    },
    {
        nombre: "Marte",
        distancia: 1.52,
        radio: 6,
        color: "#ef704c",
        velocidad: 0.80
    },
    {
        nombre: "Júpiter",
        distancia: 5.20,
        radio: 15,
        color: "#d8b08c",
        velocidad: 0.43
    },
    {
        nombre: "Saturno",
        distancia: 9.58,
        radio: 13,
        color: "#ead49a",
        velocidad: 0.32
    },
    {
        nombre: "Urano",
        distancia: 19.2,
        radio: 10,
        color: "#80e5ed",
        velocidad: 0.23
    },
    {
        nombre: "Neptuno",
        distancia: 30.05,
        radio: 10,
        color: "#496cff",
        velocidad: 0.18
    }
];

// Estrellas decorativas.
const estrellas = Array.from({ length: 180 }, () => ({
    x: Math.random(),
    y: Math.random(),
    radio: Math.random() * 1.5 + 0.3,
    brillo: Math.random() * 0.6 + 0.3
}));

// Ajustar el lienzo a la resolución de la pantalla.
function ajustarCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    dibujar();
}

function dibujarEstrellas(ancho, alto) {
    estrellas.forEach(estrella => {
        ctx.beginPath();

        ctx.arc(
            estrella.x * ancho,
            estrella.y * alto,
            estrella.radio,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = `rgba(255,255,255,${estrella.brillo})`;
        ctx.fill();
    });
}

function dibujarSol(x, y) {
    // Resplandor solar.
    const resplandor = ctx.createRadialGradient(
        x, y, 5,
        x, y, 55
    );

    resplandor.addColorStop(0, "rgba(255,220,80,0.9)");
    resplandor.addColorStop(0.35, "rgba(255,145,20,0.3)");
    resplandor.addColorStop(1, "rgba(255,100,0,0)");

    ctx.beginPath();
    ctx.arc(x, y, 55, 0, Math.PI * 2);
    ctx.fillStyle = resplandor;
    ctx.fill();

    // Cuerpo del Sol.
    const sol = ctx.createRadialGradient(
        x - 7, y - 7, 2,
        x, y, 19
    );

    sol.addColorStop(0, "#fff9bb");
    sol.addColorStop(0.5, "#ffd447");
    sol.addColorStop(1, "#ff8c00");

    ctx.beginPath();
    ctx.arc(x, y, 19, 0, Math.PI * 2);
    ctx.fillStyle = sol;
    ctx.fill();

    ctx.fillStyle = "#ffeaa0";
    ctx.font = "bold 13px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Sol", x, y + 37);
}

function dibujar() {
    const ancho = canvas.clientWidth;
    const alto = canvas.clientHeight;

    ctx.clearRect(0, 0, ancho, alto);

    dibujarEstrellas(ancho, alto);

    // El Sol se mantiene en el centro.
    const centroX = ancho / 2;
    const centroY = alto / 2;

    // Espacio disponible para representar las órbitas.
    const radioMaximo = Math.min(ancho * 0.43, alto * 0.43);

    // Escala logarítmica:
    // comprime las distancias para que quepan los ocho planetas.
    function calcularDistancia(distanciaUA) {
        return radioMaximo *
            Math.log(1 + distanciaUA) /
            Math.log(1 + 30.05);
    }

    // Dibujar órbitas.
    planetas.forEach(planeta => {
        const radioOrbita = calcularDistancia(planeta.distancia);

        ctx.beginPath();

        ctx.arc(
            centroX,
            centroY,
            radioOrbita,
            0,
            Math.PI * 2
        );

        ctx.strokeStyle = "rgba(130,160,220,0.35)";
        ctx.lineWidth = 1;
        ctx.stroke();
    });

    dibujarSol(centroX, centroY);

    // Dibujar planetas.
    planetas.forEach(planeta => {
        const radioOrbita = calcularDistancia(planeta.distancia);

        const angulo = tiempo * planeta.velocidad
            + planetas.indexOf(planeta) * 0.8;

        const x = centroX + Math.cos(angulo) * radioOrbita;
        const y = centroY + Math.sin(angulo) * radioOrbita;

        // Saturno tiene anillos.
        if (planeta.nombre === "Saturno") {
            ctx.beginPath();
            ctx.ellipse(
                x, y,
                planeta.radio * 1.8,
                planeta.radio * 0.65,
                -0.3,
                0,
                Math.PI * 2
            );

            ctx.strokeStyle = "#d6c08a";
            ctx.lineWidth = 3;
            ctx.stroke();
        }

        // Cuerpo del planeta.
        ctx.beginPath();
        ctx.arc(x, y, planeta.radio, 0, Math.PI * 2);
        ctx.fillStyle = planeta.color;
        ctx.fill();

        // Brillo sutil.
        ctx.beginPath();
        ctx.arc(
            x - planeta.radio * 0.3,
            y - planeta.radio * 0.3,
            Math.max(1, planeta.radio * 0.22),
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "rgba(255,255,255,0.55)";
        ctx.fill();

        // Nombre del planeta.
        ctx.font = "11px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "#ffffff";

        ctx.fillText(
            planeta.nombre,
            x,
            y + planeta.radio + 13
        );
    });

    // Indicador de escala.
    ctx.textAlign = "left";
    ctx.font = "12px Arial";
    ctx.fillStyle = "#c6d5ff";

    ctx.fillText(
        "Escala orbital logarítmica",
        15,
        alto - 35
    );

    ctx.fillText(
        "1 UA ≈ distancia media Tierra-Sol",
        15,
        alto - 17
    );
}

// Bucle de animación.
function animar(marcaTiempo) {
    if (!ultimoTiempo) {
        ultimoTiempo = marcaTiempo;
    }

    const delta = Math.min(
        (marcaTiempo - ultimoTiempo) / 1000,
        0.05
    );

    ultimoTiempo = marcaTiempo;

    if (!pausado) {
        tiempo += delta;
        dibujar();
    }

    requestAnimationFrame(animar);
}

// Pausar y reanudar.
botonPausar.addEventListener("click", () => {
    pausado = !pausado;

    botonPausar.textContent = pausado
        ? "▶ Reanudar"
        : "⏸ Pausar";
});

// Reiniciar la animación.
botonReiniciar.addEventListener("click", () => {
    tiempo = 0;
    dibujar();
});

// Adaptar la animación cuando cambia el tamaño de la ventana.
window.addEventListener("resize", ajustarCanvas);

ajustarCanvas();
requestAnimationFrame(animar);
