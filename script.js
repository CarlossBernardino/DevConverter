const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit); //concatenando com a função

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');

function handleSubmit(e) {
    e.preventDefault(); //não recarrega a página na hora de dar submit

    if(!inputValue.value || inputValue.value < 0) { //validando
        alert('Informe um valor correto');
        return;
    }   else if(!selectedCurrency.value) {
        alert('Escolha uma moeda');
        return;
    }
};