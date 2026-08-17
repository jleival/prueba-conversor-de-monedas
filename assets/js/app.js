// 1. Selección de elementos del DOM
const inputCLP = document.getElementById("inputCLP");
const selectMoneda = document.getElementById("selectMoneda");
const btnBuscar = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");

// Variable global para manejar la instancia del gráfico
let miGraficoCanvas = null;

// 2. Función para consumir la API
async function getMonedas(moneda) {
    try {
        const res = await fetch(`https://mindicador.cl/api/${moneda}`);
        if (!res.ok) throw new Error("No se pudo obtener la información");
        const data = await res.json();
        return data;
    } catch (error) {
        resultado.innerHTML = "Error: " + error.message;
        console.error("Error en el fetch:", error);
    }
}

// 3. Función para renderizar el gráfico
function crearGrafico(fechas, valores, tipoMoneda) {
    const ctx = document.getElementById("miGrafico").getContext("2d");

    // Destruir gráfico anterior si existe
    if (miGraficoCanvas) {
        miGraficoCanvas.destroy();
    }

    miGraficoCanvas = new Chart(ctx, {
        type: "line",
        data: {
            labels: fechas,
            datasets: [{
                label: `Historial últimos 10 días (${tipoMoneda})`,
                data: valores,
                borderColor: "#ff6384",
                backgroundColor: "rgba(255, 99, 132, 0.1)",
                borderWidth: 2,
                fill: true
            }]
        }
    });
}

// 4. Lógica principal al hacer clic en buscar
btnBuscar.addEventListener("click", async () => {
    const monto = inputCLP.value;
    const moneda = selectMoneda.value;

    if (!monto || !moneda) {
        alert("Por favor, completa todos los campos");
        return;
    }

    // Llamada a la API
    const data = await getMonedas(moneda);
    if (!data) return;

    // Cálculo y actualización del DOM
    const valorMoneda = data.serie[0].valor;
    const conversion = (monto / valorMoneda).toFixed(2);
    resultado.innerHTML = `Resultado: $${conversion}`;

    // Procesamiento de datos para el gráfico
    // .slice(0, 10) toma los últimos 10, .reverse() los ordena cronológicamente
    const ultimosDiezDias = data.serie.slice(0, 10).reverse();
    const fechas = ultimosDiezDias.map(item => item.fecha.split("T")[0]);
    const valores = ultimosDiezDias.map(item => item.valor);

    // Dibujar gráfico
    crearGrafico(fechas, valores, moneda);
});