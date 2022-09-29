//Variables
const form = document.getElementById("form")
const lblRes = document.getElementById("lblRes")
const rbsumar = document.getElementById("sumar")
const rbrestar = document.getElementById("restar")
const rbmultiplicar = document.getElementById("multiplicar")
const rbdividir = document.getElementById("dividir")
const historial = []

//Funciones

/* Operaciones */
const sumar = (num1, num2) => {
    historial.push(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`)
    rbsumar.setAttribute("checked", "checked")
    return Number(num1) + Number(num2)
}
const restar = (num1, num2) => {
    historial.push(`${num1} - ${num2} = ${Number(num1) - Number(num2)}`)
    rbrestar.setAttribute("checked", "checked")
    return Number(num1) - Number(num2)
}
const multiplicar = (num1, num2) => {
    historial.push(`${num1} * ${num2} = ${Number(num1) * Number(num2)}`)
    rbmultiplicar.setAttribute("checked", "checked")
    return Number(num1) * Number(num2)
}
const dividir = (num1, num2) => {
    historial.push(`${num1} / ${num2} = ${Number(num1) / Number(num2)}`)
    rbdividir.setAttribute("checked", "checked")
    return Number(num1) / Number(num2)
}


//Eventos
form.addEventListener("submit", e => {
    e.preventDefault()

    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value
    let result = ""

    if(rbsumar.checked){
        result = sumar(num1, num2)
    }
    if(rbrestar.checked){
        result = restar(num1, num2)
    }
    if(rbmultiplicar.checked){
        result = multiplicar(num1, num2)
    }
    if(rbdividir.checked){
        result = dividir(num1, num2)
    }
    
    lblRes.innerHTML= `Resultado: ${result}` //Imprimir resultado debado de botón "calcular"

    form.reset() //Limpiar campos input después de realizar operación
});
