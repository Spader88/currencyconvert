const button = document.getElementById('convert-button')
const dollar = 5.15
const euro = 5.56



const convertValues = ()=>{

    const inputAmount = document.getElementById('input-amount').value
    const toValueText = document.getElementById('to-value-text')
    const currencyFrom = document.getElementById('firstSelect').value
    const currencyTo = document.getElementById('secondSelect').value
    const currencyConvertedValue = document.getElementById('currency-converted-value')
   
   
    if (currencyFrom === 'R$ Brazilian Real' && currencyTo ==='€ Euro'){
        currencyConvertedValue.innerHTML = inputAmount/euro
    }

    if (currencyFrom === 'R$ Brazilian Real' && currencyTo ==='US$ American Dollar'){
        currencyConvertedValue.innerHTML = inputAmount/dollar
    }

    if (currencyFrom === 'US$ American Dollar' && currencyTo ==='R$ Brazilian Real'){
        currencyConvertedValue.innerHTML = inputAmount*dollar
    }

    if (currencyFrom === '€ Euro' && currencyTo ==='R$ Brazilian Real'){
        currencyConvertedValue.innerHTML = inputAmount*euro
    }

    if (currencyFrom === 'US$ American Dollar'&& currencyTo ==='€ Euro'){
        currencyConvertedValue.innerHTML = (dollar/euro)*inputAmount
    }

    if (currencyFrom === '€ Euro' && currencyTo === 'US$ American Dollar'){
        currencyConvertedValue.innerHTML = (euro/dollar)*inputAmount
    }
  
    
    
}

let firstSelect = document.getElementById("firstSelect");
      let secondSelect = document.getElementById("secondSelect");

      firstSelect.addEventListener("change", function() {
        let selectedOption = firstSelect.value;
        secondSelect.innerHTML = "";

    
        let options = Array.from(firstSelect.options).filter(
          option => option.value !== selectedOption
        );

        options.forEach(option => {
          let newOption = document.createElement("option");
          newOption.value = option.value;
          newOption.text = option.text;
          secondSelect.appendChild(newOption);
        });
      });




button.addEventListener('click', convertValues)
