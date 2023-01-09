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
    let marcador = classes[0];
    marcador = "." + marcador;
    const pratoEscolhido = document.querySelector(`${marcador} .localizador`);
    dish= document.querySelector(`${marcador} .localizador`).innerHTML;
    precoDish = document.querySelector(`${marcador} .localizadorPreco`).innerHTML;
    marcado.classList.add('selecionado');
    
    if(dish !== undefined && drink !== undefined && dessert !== undefined ){
        document.querySelector('.botao').classList.add('botaoSelecionado');
        document.querySelector('.fecharPedido').innerHTML = 'Fechar pedido';
        const soma= Number(precoDish)  + Number(precoDrink)+ Number(precoDessert);
        total = soma.toFixed(2);
           
}
}
function selecionarBebida(marcado){
    desmarcar('.bebidas')
    let classes = marcado.classList;
    let marcador = classes[0];
    marcador = "." + marcador;
    const pratoEscolhido = document.querySelector(`${marcador} .localizador`);
    drink= document.querySelector(`${marcador} .localizador`).innerHTML;
    precoDrink = document.querySelector(`${marcador} .localizadorPreco`).innerHTML;
    marcado.classList.add('selecionado');
    if(dish !== undefined && drink !== undefined && dessert !== undefined ){
        document.querySelector('.botao').classList.add('botaoSelecionado');
        document.querySelector('.fecharPedido').innerHTML = 'Fechar pedido';
        const soma= Number(precoDish)  + Number(precoDrink)+ Number(precoDessert);
        total = soma.toFixed(2);
}
}

function selecionarSobremesa(marcado){
    desmarcar('.sobremesas')
    let classes = marcado.classList;
    let marcador = classes[0];
    marcador = "." + marcador;
    const pratoEscolhido = document.querySelector(`${marcador} .localizador`);
    dessert= document.querySelector(`${marcador} .localizador`).innerHTML;
    precoDessert = document.querySelector(`${marcador} .localizadorPreco`).innerHTML;
    marcado.classList.add('selecionado');
    if(dish !== undefined && drink !== undefined && dessert !== undefined ){
        document.querySelector('.botao').classList.add('botaoSelecionado');
        document.querySelector('.fecharPedido').innerHTML = 'Fechar pedido';
        const soma= Number(precoDish)  + Number(precoDrink)+ Number(precoDessert);
        total = soma.toFixed(2); 
}
}
function avancar(){
    if(dish !== undefined && drink !== undefined && dessert !== undefined ){
    const pedido = `Olá, gostaria de fazer o pedido:
    - Prato: ${dish} 
    - Bebida: ${drink} 
    - Sobremesa: ${dish} 
    Total: R$ ${total} `
    encodeURIComponent(pedido)
    const whatsapp = 'https://wa.me/5532984495493?text=' + encodeURIComponent(pedido);
    window.open(whatsapp)
    }
}
