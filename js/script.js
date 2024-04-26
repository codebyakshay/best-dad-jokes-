const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokebtn');

jokeBtn.addEventListener('click', generateJoke);

async function generateJoke(){

    jokeEl.innerHTML = "Loading joke...";

    const config = {
        headers: {
           'Accept': 'application/json'
        }
        };

    const res = await fetch('https://icanhazdadjoke.com', config);
    const data =  await res.json();
    jokeEl.innerHTML = data.joke;
}


// function generateJoke(){
//      jokeEl.innerHTML = "Loading joke...";

//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };

//     fetch('https://icanhazdadjoke.com', config)
//     .then((data) => data.json().then((data) => {
//         jokeEl.innerHTML = data.joke;
//     }));
// }
