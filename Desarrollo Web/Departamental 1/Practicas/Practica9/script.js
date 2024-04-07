function actualizarReloj() {
    const horaActual = new Date();
    const hora = horaActual.getHours();
    const minutos = horaActual.getMinutes();
    const segundos = horaActual.getSeconds();
    const meridiano = hora >= 12 ? "PM" : "AM";

    document.getElementById("hora").textContent = hora.toString().padStart(2, "0");
    document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
    document.getElementById("segundos").textContent = segundos.toString().padStart(2, "0");
    document.getElementById("ampm").textContent = meridiano;

    setTimeout(actualizarReloj, 1000);
}

actualizarReloj();
