const price = document.querySelector(".price");
const url = "https://blockchain.info/q/24hrprice";

window.addEventListener("DOMContentLoaded",getData);

function updatePrice(){
	setTimeout(getData,1000);
}

async function getData() {
	let data = await fetch(url);
	data = await data.json();

	price.innerHTML = data;

	updatePrice();
}