let habitacion = ["cocina", "living", "baño", "cuarto(luz principal)", "cuarto(velador)"];
let color = ["Fría", "Cálida"];

let nombre = prompt("¡Hola! Bienvenido a ElectroCA. Por favor, indícanos tu nombre:");
alert("Hola, " + nombre + ", un gusto.");
console.log("Hola, " + nombre + ", un gusto.");

let continuar = true; 


function recomendarLampara(deseo) {
    let precio = 0;
    let recomendacion = "";

    if (deseo === "cocina") {
        recomendacion = "Luz fría de 12 watts";
        precio = 1800;
    } else if (deseo === "living") {
        recomendacion = "Luz cálida de 9 watts";
        precio = 1700;
    } else if (deseo === "baño") {
        recomendacion = "Luz fría de 9 watts";
        precio = 1700;
    } else if (deseo === "cuarto" || deseo.includes("cuarto")) {
        recomendacion = "Luz cálida de 12 watts";
        precio = 1800;
    }
    
    console.log("Recomendación: " + recomendacion + ". Precio unitario: $" + precio);
    alert("Recomendación: " + recomendacion + ". Precio unitario: $" + precio);
    return { recomendacion, precio };
}

function calcularTotal(cantidad, precio) {
    if (!isNaN(cantidad) && cantidad > 0) {
        let total = cantidad * precio;
        return total;
    } else {
        console.log("Cantidad no válida. Por favor, ingresa un número válido.");
        alert("Cantidad no válida. Por favor, ingresa un número válido.");
        return 0;
    }
}


function mostrarResumen(deseo, recomendacion, cantidad, total, eleccionColor) {
    console.log("Resumen de tu compra:");
    alert("Resumen de tu compra:");
    console.log("Habitación: " + deseo);
    alert("Habitación: " + deseo);
    console.log("Tipo de luz: " + recomendacion + " (" + eleccionColor + ")");
    alert("Tipo de luz: " + recomendacion + " (" + eleccionColor + ")");
    console.log("Cantidad de lámparas: " + cantidad);
    alert("Cantidad de lámparas: " + cantidad);
    console.log("Total a pagar: $" + total);
}


while (continuar) {
    let deseo = prompt("¿Qué habitación desea iluminar? (Cocina, living, baño, cuarto) o escribe 'salir' para finalizar.").toLowerCase();

    if (deseo === "salir") {
        continuar = false; 
        console.log("Gracias por utilizar ElectroCA. ¡Hasta luego!");
        break;
    }

    
    if (habitacion.includes(deseo) || deseo.includes("cuarto")) {
        
        let { recomendacion, precio } = recomendarLampara(deseo);

        
        let cantidad = parseInt(prompt("¿Cuántas lámparas desea comprar para la habitación: " + deseo + "?"));

        
        let total = calcularTotal(cantidad, precio);

        
        let eleccionColor = prompt("¿Prefieres luz Fría o Cálida?");
        
        if (color.includes(eleccionColor.charAt(0) + eleccionColor.slice(1))) {
            
            mostrarResumen(deseo, recomendacion, cantidad, total, eleccionColor);
        } else {
            console.log("Opción de color no válida.");
            alert ("Opción de color no válida.");
        
        }

    } else {
        console.log("Habitación no válida. Por favor, elige una de las opciones disponibles.");
        alert("Habitación no válida. Por favor, elige una de las opciones disponibles.");
    }
}

