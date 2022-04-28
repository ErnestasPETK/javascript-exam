/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const outputEl = document.getElementById('output');

const transformMeasuring = (weightInKg) => {
    const weightInLb = weightInKg * 2.2046,
        weightInG = weightInKg / 0.0010000,
        weightInOz = weightInKg * 35.274;
    return { weightInLb, weightInG, weightInOz };
}

const displayValues = (measurements) => {

    const weightInLbValue = measurements.weightInLb;
    const weightInGValue = measurements.weightInG;
    const weightInOzValue = measurements.weightInOz;
    const weightInKgValue = measurements.weightInKg;

    const weightInLb = document.createElement('h2');
    const weightInG = document.createElement('h2');
    const weightInOz = document.createElement('h2');
    const weightInKg = document.createElement('h2');

    weightInKg.textContent = weightInKgValue + " Kg";
    weightInG.textContent = weightInGValue + " g";
    weightInOz.textContent = weightInOzValue + " Oz";
    weightInLb.textContent = weightInLbValue + " Lb";

    outputEl.append(weightInKg, weightInLb, weightInG, weightInOz);

}

const formEl = document.querySelector('form').addEventListener('submit', (event) => {

    event.preventDefault();

    try {

        const weightInKg = +event.target.querySelector('#search').value;
        const measurements = transformMeasuring(weightInKg);
        measurements.weightInKg = weightInKg;
        displayValues(measurements);

    } catch {
        console.log(' error ');
    }

});