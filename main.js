let option
let description
let valor
let atual = 0.00
let income = 0.00
let expenses = 0.00
let totalpct = 0.00
let pct = 0.00

function readValues() {
    option = document.getElementById("+-").options[document.getElementById("+-").selectedIndex].text
    description = document.getElementById("description").value
    valor = document.getElementById("valor").value
    return check()
}


function addLinhaIN() {
    let inline = document.getElementById('inTabela')
    let tblBody = inline.tBodies[0]
    let newRow = tblBody.insertRow(-1)
    let newCell0 = newRow.insertCell(0)
    newCell0.style.color = "#262626"
    newCell0.innerHTML = "<td>"+description+"</td>"
    let newCell1 = newRow.insertCell(1)
    newCell1.style.color = "#33ccff"
    newCell1.style.padding = "15px 0px 0px 355px"
    newCell1.innerHTML = "<td>" + valor + "</td>"
}

function addLinhaEX() {
    let exline = document.getElementById('exTabela')
    let tblBody = exline.tBodies[0]
    let newRow = tblBody.insertRow(-1)
    let newCell0 = newRow.insertCell(0)
    newCell0.style.color = "#262626"
    newCell0.innerHTML = "<td>" + description + "</td>"
    let newCell1 = newRow.insertCell(1)
    newCell1.style.color = "#ff3333"
    newCell1.style.padding = "15px 0px 0px 350px"
    newCell1.innerHTML = "<td>" + valor + "</td>"
    let newCell2 = newRow.insertCell(2);
    newCell2.style.color = "#ff3333"    
    newCell2.style.padding = "15px 0 0 0 "
    newCell2.style.borderRadius = "5px"
    newCell2.style.fontWeight = "bold"
    newCell2.style.fontSize = "60%"
    newCell2.innerHTML = "<td>" + pct + "%</td>"
}

function check() {
    let go = true
    if (description == "") {
        alert("Insira uma descrição!!")
        go = false
    }
    if (valor == "") {
        alert("Insira um Valor!!")
        go = false
    }
    valor = parseFloat(valor, 10)
    if (valor < 0) {
        alert("Insira um valor positivo!!")
        go = false
    }
    if(go == true){
        if(option == "+") {
            income = income + valor
            document.getElementById("in").innerHTML = "+" + income
            addLinhaIN()
        }
        else {
            if(income == 0 ){
                pct = 0
            }
            else{
                pct = ((100 * valor) / income)
            }
            expenses = expenses + valor
            document.getElementById("ex").innerHTML = "-" + expenses
            addLinhaEX()
        }
    }
    if (income == 0) {
        totalpct = 0
    }
    else{
        totalpct = ((100 * (-1 * expenses)) / income)
    }
    atual = income - expenses
    document.getElementById("pct").innerHTML = totalpct + "%"
    if(atual > 0){
        document.getElementById("titulonum").innerHTML = "+" + atual
    }
    else{
        document.getElementById("titulonum").innerHTML = atual
    }

}