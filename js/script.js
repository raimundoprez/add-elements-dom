 // Aquí tu código
const contentList = document.getElementById("lista");
const contentButton = document.getElementById("agregar");

contentButton.addEventListener("click", () => {
    let elementType = prompt("Introduce un tipo de elemento para insertar.");
    if (!elementType) elementType = "";

    const elementCreated = elementType ? document.createElement(elementType) : null;
    
    if (!elementCreated || elementCreated instanceof HTMLUnknownElement) {
        if (elementCreated) elementCreated.remove();
        alert(`El tipo de elemento '${elementType}' no es un tipo de HTML válido y no se ha añadido a la lista.`);
    }
    else {
        const container = document.createElement("div");
        const banner = document.createElement("p");

        banner.textContent = `${elementType} ==>`;

        container.appendChild(banner);
        container.appendChild(elementCreated);
        contentList.appendChild(container);
    }
});