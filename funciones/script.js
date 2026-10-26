function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

function determinarEstado(promedio) {
    if (promedio >= 3) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}

function mostrarResultado(promedio, estado) {
    document.getElementById("resultado").innerHTML =
        "<h2>Resultados</h2>" +
        "<p>Promedio: " + promedio.toFixed(2) + "</p>" +
        "<p>Estado: " + estado + "</p>";
}

function ejecutarEjemplo() {
    const campo1 = document.getElementById("nota1").value;
    const campo2 = document.getElementById("nota2").value;
    const campo3 = document.getElementById("nota3").value;

    const resultado = document.getElementById("resultado");

    if (campo1 === "" || campo2 === "" || campo3 === "") {
        resultado.innerHTML = "<p>Debes ingresar las tres notas.</p>";
        return;
    }

    const nota1 = Number(campo1);
    const nota2 = Number(campo2);
    const nota3 = Number(campo3);

    if (
        !Number.isFinite(nota1) ||
        !Number.isFinite(nota2) ||
        !Number.isFinite(nota3) ||
        nota1 < 0 || nota1 > 5 ||
        nota2 < 0 || nota2 > 5 ||
        nota3 < 0 || nota3 > 5
    ) {
        resultado.innerHTML =
            "<p>Las notas deben estar entre 0 y 5.</p>";
        return;
    }

    const promedio = calcularPromedio(nota1, nota2, nota3);
    const estado = determinarEstado(promedio);

    mostrarResultado(promedio, estado);
}