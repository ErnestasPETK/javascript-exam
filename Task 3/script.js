/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const getData = async () => await (await fetch(ENDPOINT)).json();

const displayData = (data) => {

    const outputEl = document.getElementById('output');
    outputEl.replaceChildren();
    data.forEach(user => {

        const container = document.createElement('div');
        const avatarEl = document.createElement("img");
        const nicknameEl = document.createElement("h2");

        avatarEl.src = user.avatar_url;
        nicknameEl.textContent = user.login;

        container.append(avatarEl, nicknameEl);

        outputEl.append(container);

    });




}
const showUsersButton = document.querySelector('#btn').addEventListener('click', async () => {

    data = await getData();
    displayData(data);

});