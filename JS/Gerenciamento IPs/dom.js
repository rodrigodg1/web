var form = document.getElementById('addForm')
var itemList = document.getElementById('items-tabela')
var filter = document.getElementById('filter')
    // para add item
form.addEventListener('submit', addItem);

// para remover item
itemList.addEventListener('click', removeItem)

//para filtrar items
filter.addEventListener('keyup', filterItems)




function addItem(e) {
    e.preventDefault()
        //pega os elementos do HTML servidor e ip
    var newItemServidor = document.getElementById('servidor').value;
    var newItemIP = document.getElementById('enderecoIP').value;

    console.log(newItemIP)
    console.log(newItemServidor)

    //cria uma coluna para servidor e adiciona o campo do input
    var tdServidor = document.createElement('td');
    tdServidor.innerHTML = newItemServidor
    var tdIP = document.createElement('td');
    tdIP.innerHTML = newItemIP

    // cria uma linha
    var trData = document.createElement('tr')


    //adiciona nessa linha o servidor e o ip
    trData.appendChild(tdServidor)
    trData.appendChild(tdIP)

    //Adiciona na tabela essa nova linha
    itemList.appendChild(trData)
    console.log(itemList)





    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm p-2 m-2 delete';
    deleteBtn.appendChild(document.createTextNode('X'))

    trData.appendChild(deleteBtn)

    itemList.appendChild(trData)


    contagemElementos()


}

// função que conta os items da tabela
function contagemElementos() {

    var linhas = document.querySelectorAll('tr')

    //atualiza total servidores
    var total_servidores = document.querySelector("#total-servidores");
    var contagem = -1
    for (var i = 0; i < linhas.length; i++) {
        contagem = contagem + 1
    }
    console.log(contagem)
    total_servidores.textContent = contagem
}


// função que conta os items da tabela
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm("Você tem Certeza ?")) {
            var td = e.target.parentElement;
            itemList.removeChild(td);
        }
    }
    contagemElementos()

}

function filterItems(e) {
    input = document.getElementById("filter");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabela-servidores");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        //para nome servidor
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
        //para ip
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}