const celsiusE1 = document.getElementById('celsius');
const fahrenheitE1 = document.getElementById('fahrenheit');
const kelvinE1 = document.getElementById('kelvin');

function computeTemp(event) {
    const currentValue = +event.target.value;
    /**As event.target.value  returns a string it is same as Number(event.target.value) */
    switch (event.target.name) {
 /**------------------------------------------------------------------*/       
        case "celsius":
            kelvinE1.value = (currentValue + 273.32).toFixed(2);
            fahrenheitE1.value = (currentValue * 1.8 + 32).toFixed(2);
            break;
/**------------------------------------------------------------------- */        
        case "fahrenheit":
            celsiusE1.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelvinE1.value = ((currentValue - 32) / 1.8 + 273.32);
            break;
/**------------------------------------------------------------------- */        
        case "kelvin":
            celsiusE1.value = (currentValue - 273.32).toFixed(2);
            fahrenheitE1.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
            break;
/**-------------------------------------------------------------------- */        
        default:
            break;
    }
}