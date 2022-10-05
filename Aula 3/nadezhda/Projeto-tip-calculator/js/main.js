//função que calcula a gorgeta
function calculaGorgeta(porcentagem){
    if(porcentagem == "customizada"){
        porcentagem =  (document.getElementById("custom").value)/100;
    }
    if(porcentagem == undefined){
        porcentagem = gorj;
    }
    
    let bill = document.getElementById("input_valorId").value;
    let numeroDePessoas = document.getElementById("input_pessoasId").value;
    let gorgetaPorPessoa = (bill * porcentagem) / numeroDePessoas;
    let totalPorPessoa = (bill / numeroDePessoas) + gorgetaPorPessoa;
    document.getElementById("gorgetaPorPessoaId").innerHTML = "$" + gorgetaPorPessoa.toFixed(2);
    document.getElementById("totalPorPessoaId").innerHTML = "$" + totalPorPessoa.toFixed(2);
    conta = bill;
    gorj = porcentagem;
}

//função que reseta
function resetar (){
    document.getElementById("input_valorId").value = 0;
    gorj = 0;
    document.getElementById("input_pessoasId").value = 1;
}

let gorj = 0;
calculaGorgeta();