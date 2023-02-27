function haha()
{
    let input1 = document.getElementById("elso").value
    let input2 = document.getElementById("masodik").value
    let ide=document.getElementById("ide")

    if(input1>input2)
    {
        ide.innerHTML=input1+" a nagyobb szám"
    }
    if(input2>input1)
    {
        ide.innerHTML=input2+" a nagyobb szám"
    }
    if(input2==input1)
    {
        ide.innerHTML=input1+" és "+input2+" egyenlő"
    }
}

var lista=[]

let max=document.getElementById("max")
let min=document.getElementById("min")

function hihi()
{
    let szam=document.getElementById("szam").value
    lista.push(szam)
    console.log(lista)
}

function hehe()
{
    max.innerHTML=Math.max(...lista)
    min.innerHTML=Math.min(...lista)
}
