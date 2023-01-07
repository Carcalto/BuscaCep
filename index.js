
const cepElement = document.getElementById("cep");
const saidaElement = document.getElementById('resposta-text');
const btnElement = document.getElementById('btn');

btnElement.addEventListener('click', () =>{

    let cep = cepElement.value;
    cep = cep.replace(/[^0-9]/g, "");

    console.log(cep);
    console.log(cep.length);

    if(cep.length === 8) {

        const link = "https://viacep.com.br/ws/"+ cep + "/json/";
        let data;
        console.log(link);

        fetch(link)
        .then(response => response.json())
        .then(responseData => {
            
            data = responseData;
            console.log(data);

            if (data.erro !== true) {
            
            saidaElement.innerText = data.logradouro + "\nBairro: " + data.bairro + "\n" + data.localidade + "-" + data.uf + "\n" + "Complemento: " + data.complemento + "\nCEP: " + data.cep;

            cepElement.value = "";
            } else {
                saidaElement.innerText = "CEP Inexistente! \nDigite um CEP Válido!";
                cepElement.value = "";
            }
            
        })
        .catch(error => saidaElement.innerText = error.erro)

    } else {
        saidaElement.innerText = "CEP Inválido! \nDigite Novamente!";
        cepElement.value = "";
    }

});




