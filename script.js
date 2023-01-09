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
function verificar3itens(){
    if(dish !== undefined && drink !== undefined && dessert !== undefined ){
        document.querySelector('.botao').classList.add('botaoSelecionado');
        document.querySelector('.fecharPedido').innerHTML = 'Fechar pedido';
        const soma= Number(precoDish)  + Number(precoDrink)+ Number(precoDessert);
        total = soma.toFixed(2);
    }
}
function selecionarPrato(marcado){
    desmarcar('.pratos');
    const classes = marcado.classList;
    let marcador = classes[0];
    marcador = "." + marcador;
    dish= document.querySelector(`${marcador} .localizador`).innerHTML;
    precoDish = document.querySelector(`${marcador} .localizadorPreco`).innerHTML;
    marcado.classList.add('selecionado');
    verificar3itens();
}
function selecionarBebida(marcado){
    desmarcar('.bebidas');
    const classes = marcado.classList;
    let marcador = classes[0];
    marcador = "." + marcador;
    drink= document.querySelector(`${marcador} .localizador`).innerHTML;
    precoDrink = document.querySelector(`${marcador} .localizadorPreco`).innerHTML;
    marcado.classList.add('selecionado');
    verificar3itens();
}

function selecionarSobremesa(marcado){
    desmarcar('.sobremesas');
    const classes = marcado.classList;
    let marcador = classes[0];
    marcador = "." + marcador;
    dessert= document.querySelector(`${marcador} .localizador`).innerHTML;
    precoDessert = document.querySelector(`${marcador} .localizadorPreco`).innerHTML;
    marcado.classList.add('selecionado');
    verificar3itens();
}
function avancar(){
    if(dish !== undefined && drink !== undefined && dessert !== undefined ){
    const pedido = `Olá, gostaria de fazer o pedido:
    - Prato: ${dish} 
    - Bebida: ${drink} 
    - Sobremesa: ${dessert} 
    Total: R$ ${total} `;
    encodeURIComponent(pedido);
    const whatsapp = 'https://wa.me/5532984495493?text=' + encodeURIComponent(pedido);
    window.open(whatsapp);
    }
}
