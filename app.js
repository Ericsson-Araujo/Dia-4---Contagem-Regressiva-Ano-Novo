// Inicializador
window.addEventListener("load", function(){   
    var contagem = document.getElementById("contagem");        

    contagem.innerHTML = contagemRegressiva();
    setInterval(function(){ 
        contagem.innerHTML = contagemRegressiva();
    }, 1000);            
});       

// Processamento
function contagemRegressiva() {
    var tempoSegundo        =   1000;
    var tempoMinuto         =   tempoSegundo * 60;
    var tempoHora           =   tempoMinuto * 60;              
    var tempoDia            =   tempoHora * 24;                     
    var anoNovo             =   new Date("2021-01-01");
    var agora               =   new Date();
    var tempoDiferenca      =   anoNovo.getTime() - agora.getTime();
    var diasDiferenca       =   Math.floor( tempoDiferenca / tempoDia );
    var horasDiferenca      =   Math.floor( tempoDiferenca / tempoHora);
    var minutosDiferenca    =   Math.floor( tempoDiferenca / tempoMinuto);
    var segundosDiferenca   =   Math.floor( tempoDiferenca / tempoSegundo );                
    
    return `Contagem regressiva <br/> para o ano novo : <br/> 
            ${segundosDiferenca.toLocaleString()} s <br/> 
            Ou ${minutosDiferenca.toLocaleString()} min <br/> 
            Ou ${horasDiferenca.toLocaleString()} h <br/> 
            Ou ${diasDiferenca} dias`;
}
