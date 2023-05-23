const url = 'https://flight-data4.p.rapidapi.com/get_airline_flights?airline=ASA';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b5aa375202msh18c348b1faa957fp1dacdbjsn22c019bf88eb',
		'X-RapidAPI-Host': 'flight-data4.p.rapidapi.com'
	}
};
let params = ""
const callParams = () => {
    params = userInput.value
fetch(url, options)
.then(res => res.json())
.then(res => console.log(res[0]))
.catch(err => console.error(err))
userInput.value = "";
}
const userInput = document.querySelector("input");
const btn= document.querySelector("button");

btn.addEventListener("click", callParams) 

