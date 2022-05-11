function dodawanie()
{

    let value1 = document.getElementById('input1').value
    let value2 = document.getElementById('input2').value
    let suma = (+value1) + (+value2)
    let wynikoutput = document.getElementById('wynik').textContent = (suma)
}

function odejmowanie()
{
    
    let value1 = document.getElementById('input1').value
    let value2 = document.getElementById('input2').value
    let sumaodejmowania = (+value1) - (+value2)
    let wynikoutput = document.getElementById('wynik').textContent = (sumaodejmowania)

}

function mnozenie()
{

    let value1 = document.getElementById('input1').value
    let value2 = document.getElementById('input2').value
    let sumamnozenia = (+value2) * (+value1)
    let wynikoutput = document.getElementById('wynik').textContent = (sumamnozenia)
}

function dzielenie()
{
    let value1 = document.getElementById('input1').value
    let value2 = document.getElementById('input2').value
    let sumamdzielenia = (+value1) / (+value2)
    let wynikoutput = document.getElementById('wynik').textContent = (sumamdzielenia)
}