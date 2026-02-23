function calculate() {
    let element = document.getElementById("amount");
    let element2 = document.getElementById("percentage");
    let value = Number(element.value)+((element2.value) / 100) * element.value;
    
    let p  = document.createElement("p");
    p.textContent = `Total : ${value}`;
    let div = document.getElementById("tip");
    div.appendChild(p);
    p.id = "total";
}