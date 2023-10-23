// Função para carregar as informações do cliente para a página
function carregarInformacoesServidor() {
    const ipSpan = document.getElementById("ip");
    const dataSpan = document.getElementById("data");
    const horaSpan = document.getElementById("hora");
    const localSpan = document.getElementById("local");

    // Obtem o endereço IP usando uma solicitação AJAX
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            ipSpan.innerText = data.ip;
        });

    // Obtem a data e hora atuais
    const dataHoraAtual = new Date();
    dataSpan.innerText = dataHoraAtual.toLocaleDateString();
    horaSpan.innerText = dataHoraAtual.toLocaleTimeString();

    // Obtem o fuso horário do navegador
    localSpan.innerText = Intl.DateTimeFormat().resolvedOptions().timeZone;
}

// Executa a função quando a página for carregada
window.onload = carregarInformacoesServidor;
