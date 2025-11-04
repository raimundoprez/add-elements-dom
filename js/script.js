 // Aquí tu código
const contentList = document.getElementById("lista");
const contentButton = document.getElementById("agregar");

contentButton.addEventListener("click", () => {
    const text = prompt("Introduce un texto a insertar.");
    
    if (text) {
        const textCtn = document.createElement("li")
        textCtn.textContent = text;
        contentList.appendChild(textCtn)
    }
});