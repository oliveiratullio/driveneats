let dish;
let drink;
let dessert;
let precoDish;
let precoDrink;
let precoDessert;
let total;
function desmarcar(seletor){
    const selecionadoAnterior = document.querySelector(`${seletor} .selecionado`);
    if (selecionadoAnterior !== null){
        selecionadoAnterior.classList.remove('selecionado');
    }
}
function selecionarPrato(marcado){
    desmarcar('.pratos');
    let classes = marcado.classList;
    console.log(classes);
    let marcador = classes[0];
    marcador = "." + marcador;
    const pratoEscolhido = document.querySelector(`${marcador} .localizador`);
    dish= document.querySelector(`${marcador} .localizador`).innerHTML;
    precoDish = document.querySelector(`${marcador} .localizadorPreco`).innerHTML;
    marcado.classList.add('selecionado');
    console.log(dish);
    console.log(precoDish);
    if(dish !== undefined && drink !== undefined && dessert !== undefined ){
        document.querySelector('.botao').classList.add('botaoSelecionado');
        document.querySelector('.fecharPedido').innerHTML = 'Fechar pedido';
        const soma= Number(precoDish)  + Number(precoDrink)+ Number(precoDessert);
        total = soma.toFixed(2);
        console.log(total);     
}
}
function selecionarBebida(marcado){
    desmarcar('.bebidas')
    let classes = marcado.classList;
    console.log(classes);
    let marcador = classes[0];
    marcador = "." + marcador;
    const pratoEscolhido = document.querySelector(`${marcador} .localizador`);
    drink= document.querySelector(`${marcador} .localizador`).innerHTML;
    precoDrink = document.querySelector(`${marcador} .localizadorPreco`).innerHTML;
    marcado.classList.add('selecionado');
    console.log(drink);
    console.log(precoDrink);
    if(dish !== undefined && drink !== undefined && dessert !== undefined ){
        document.querySelector('.botao').classList.add('botaoSelecionado');
        document.querySelector('.fecharPedido').innerHTML = 'Fechar pedido';
        const soma= Number(precoDish)  + Number(precoDrink)+ Number(precoDessert);
        total = soma.toFixed(2);
        console.log(total);   
}
}

function selecionarSobremesa(marcado){
    desmarcar('.sobremesas')
    let classes = marcado.classList;
    console.log(classes);
    let marcador = classes[0];
    marcador = "." + marcador;
    const pratoEscolhido = document.querySelector(`${marcador} .localizador`);
    dessert= document.querySelector(`${marcador} .localizador`).innerHTML;
    precoDessert = document.querySelector(`${marcador} .localizadorPreco`).innerHTML;
    marcado.classList.add('selecionado');
    console.log(dessert);
    console.log(precoDessert);
    if(dish !== undefined && drink !== undefined && dessert !== undefined ){
        document.querySelector('.botao').classList.add('botaoSelecionado');
        document.querySelector('.fecharPedido').innerHTML = 'Fechar pedido';
        const soma= Number(precoDish)  + Number(precoDrink)+ Number(precoDessert);
        total = soma.toFixed(2);
        console.log(total);  
}
}
function avancar(){
    const pedido = `Olá, gostaria de fazer o pedido:
    - Prato: ${dish}
    - Bebida: ${drink}
    - Sobremesa: ${dessert}
    Total: R$ ${total}`
    encodeURIComponent(pedido)
    console.log(encodeURIComponent(pedido));
    const whatsapp = 'https://wa.me/5532984495493?text=' + encodeURIComponent(pedido);
    window.open(whatsapp)
}
