const boton = document.getElementById("btnUbicacion");
const estado = document.getElementById("estado");
const resultado = document.getElementById("resultado");
const latitud = document.getElementById("latitud");
const longitud = document.getElementById("longitud");
const precision = document.getElementById("precision");
const mapa = document.getElementById("mapa");

boton.addEventListener("click", () => {
    if (!("geolocation" in navigator)) {
        estado.textContent = "Este navegador no admite la API de Geolocalización.";
        resultado.hidden = true;
        return;
    }

    estado.textContent = "Solicitando ubicación. Revisa el permiso del navegador...";
    resultado.hidden = true;
    boton.disabled = true;

    navigator.geolocation.getCurrentPosition(
        (posicion) => {
            const coordenadas = posicion.coords;
            const lat = coordenadas.latitude;
            const lon = coordenadas.longitude;

            latitud.textContent = lat.toFixed(6);
            longitud.textContent = lon.toFixed(6);
            precision.textContent = Math.round(coordenadas.accuracy);

            mapa.href = `https://www.google.com/maps?q=${lat},${lon}`;
            resultado.hidden = false;
            estado.textContent = "Ubicación obtenida correctamente.";
            boton.disabled = false;
        },
        (error) => {
            const mensajes = {
                1: "Permiso denegado. Autoriza la ubicación desde el navegador si deseas continuar.",
                2: "No fue posible determinar la ubicación. Comprueba la señal y vuelve a intentarlo.",
                3: "La solicitud tardó demasiado. Inténtalo nuevamente."
            };

            estado.textContent = mensajes[error.code] || "Ocurrió un error al obtener la ubicación.";
            boton.disabled = false;
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
});