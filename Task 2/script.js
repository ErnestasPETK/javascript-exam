/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const clickButton = document.getElementById('btn__element').addEventListener('click', (event) => {
    event.preventDefault();
    stateEl = document.getElementById('btn__state');
    stateValue = +stateEl.textContent;
    stateEl.textContent = stateValue + 1;
});