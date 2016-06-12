var accounts;
var account;
var balance;
var recordId;
var recordDescription;

function setStatus(message) {
    var status = document.getElementById("status");
    status.innerHTML = message;
};

//Atualização da página
function refreshBalance() {
    recordId = document.getElementById("id_patrimonio").value;
    recordDescription = document.getElementById("description").value;
    setStatus("Registro da Transação<br /><br />ID Patrimônio: " + recordId+"<br /> Descrição do repasse: "+ recordDescription);
    writeLog();
};

//Capturando informações e submetendo a blockchain
function sendCoin() {

    var meta = MetaCoin.deployed();
    var amount = parseInt(document.getElementById("amount").value);
    var receiver = document.getElementById("receiver").value;

    setStatus("Inicializando a transacao... (espere)");

    meta.sendCoin(receiver, amount, {from: account}).then(function() {
        setStatus("Transacao completada!");
        refreshBalance();
        }).catch(function(e) {
            console.log(e);
	    setStatus("Erro ao realizar transação... (Verifique o log)");    
        });
     };

    window.onload = function() {
        web3.eth.getAccounts(function(err, accs) {
            if (err != null) {
                alert("Houve um erro ao buscar suas contas.");
                return;
            }

        if (accs.length == 0) {
             alert("Não foi possível obter quaisquer contas! Verifique se o seu cliente Ethereum está configurado corretamente.");
            return;
        }

        accounts = accs;
        account = accounts[0];
        refreshBalance();
    });
}

//Registrando log independente
function writeLog(){
    console.log(recordId+recordDescription);
}
