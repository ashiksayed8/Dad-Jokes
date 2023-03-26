
// https://api-ninjas.com/api



const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = `wsd2/olYFHmlj0bk27D6uQ==cLIcn6oPRLN3bQrx`;

const apiUrl = `https://api.api-ninjas.com/v1/jokes?limit=1`;

const options = {
    meth0d: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
};

async function getJoke(){
    try {
        jokeEl.innerText = "Updating ----------";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";

        const response = await fetch(apiUrl, options);
        const data = await response.json();

        btnEl.disabled = false;
        btn.innerText = "Tell me a Joke"

        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = `An error happened, try again later`;
        btnEl.disabled = false;
        btn.innerText = "Tell me a Joke";
        
    }

    

    
}

btnEl.addEventListener("click", getJoke);