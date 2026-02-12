const botao = document.getElementById('botao')

function add_item(){
    const input = document.getElementById('caixa');
    const valor = input.value;

    const li = document.createElement('li')
    li.textContent = valor

    const lista = document.getElementById("lista")
    lista.appendChild(li)

    botao.textContent = 'remover'
    li.appendChild(botao)


}

function remove(){

}

botao.addEventListener('click', add_item)
    