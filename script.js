
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const btn = document.querySelector('#btn');

const url = "https://quotes-api-self.vercel.app/quote";

btn.addEventListener('click', () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            quote.innerHTML = data.quote;
            author.innerHTML = data.author;
        })
        .catch(error => {
            console.log(error);
        });

    quote.style.display = 'block';
    author.style.display = 'block';
});