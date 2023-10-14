function getAirQuality(city) {
	const url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1aea737716msh24751055a31e096p162f0ajsneb172df97232',
			'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
		}
	};

	(async () => {
		try {
			const response = await fetch(url, options);
			let result = await response.json();
			let arr = [];
			for (var key in result) {
				var conc = result[key];
				console.log(conc);

				for (var con in conc) {
					arr.push(conc[con]);
				}

			}
			co.innerHTML = arr[0];
			no2.innerHTML = arr[2];
			o3.innerHTML = arr[4];
			so2.innerHTML = arr[6];
			pm25.innerHTML = arr[8];
			pm10.innerHTML = arr[10];

			// document.getElementById('CO1').innerHTML = arr[0];

		}
		catch (error) {
			console.error(error);
		}
	})();
}



function getAirQualityForNewYork() {
	const url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=New York`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1aea737716msh24751055a31e096p162f0ajsneb172df97232',
			'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
		}
	};

	(async () => {
		try {
			const response = await fetch(url, options);
			let result = await response.json();
			let arr = [];
			for (var key in result) {
				var conc = result[key];
				console.log(conc);

				for (var con in conc) {
					arr.push(conc[con]);
				}

			}
			CO.innerHTML = arr[0];
			NO2.innerHTML = arr[2];
			O3.innerHTML = arr[4];
			SO2.innerHTML = arr[6];
			PM25.innerHTML = arr[8];
			PM10.innerHTML = arr[10];


		}
		catch (error) {
			console.error(error);
		}
	})();
}

function getAirQualityForToronto() {
	const url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Toronto`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1aea737716msh24751055a31e096p162f0ajsneb172df97232',
			'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
		}
	};

	(async () => {
		try {
			const response = await fetch(url, options);
			let result = await response.json();
			let arr = [];
			for (var key in result) {
				var conc = result[key];
				console.log(conc);

				for (var con in conc) {
					arr.push(conc[con]);
				}

			}
			CO1.innerHTML = arr[0];
			NO21.innerHTML = arr[2];
			O31.innerHTML = arr[4];
			SO21.innerHTML = arr[6];
			PM251.innerHTML = arr[8];
			PM101.innerHTML = arr[10];


		}
		catch (error) {
			console.error(error);
		}
	})();
}

function getAirQualityForMumbai() {
	const url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Mumbai`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1aea737716msh24751055a31e096p162f0ajsneb172df97232',
			'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
		}
	};

	(async () => {
		try {
			const response = await fetch(url, options);
			let result = await response.json();
			let arr = [];
			for (var key in result) {
				var conc = result[key];
				console.log(conc);

				for (var con in conc) {
					arr.push(conc[con]);
				}

			}
			CO2.innerHTML = arr[0];
			NO22.innerHTML = arr[2];
			O32.innerHTML = arr[4];
			SO22.innerHTML = arr[6];
			PM252.innerHTML = arr[8];
			PM102.innerHTML = arr[10];


		}
		catch (error) {
			console.error(error);
		}
	})();
}
function getAirQualityForBerlin() {
	const url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Berlin`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1aea737716msh24751055a31e096p162f0ajsneb172df97232',
			'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
		}
	};

	(async () => {
		try {
			const response = await fetch(url, options);
			let result = await response.json();
			let arr = [];
			for (var key in result) {
				var conc = result[key];
				console.log(conc);

				for (var con in conc) {
					arr.push(conc[con]);
				}

			}
			CO3.innerHTML = arr[0];
			NO23.innerHTML = arr[2];
			O33.innerHTML = arr[4];
			SO23.innerHTML = arr[6];
			PM253.innerHTML = arr[8];
			PM103.innerHTML = arr[10];


		}
		catch (error) {
			console.error(error);
		}
	})();
}



submit1.addEventListener("click", (e) => {
	e.preventDefault();
	let city = city1.value;
	name1.innerHTML = city;
	getAirQuality(city);


});
getAirQuality("Toronto");
name1.innerHTML = "Toronto";

document.addEventListener("DOMContentLoaded" , ()=>{
	getAirQualityForNewYork();
})
document.addEventListener("DOMContentLoaded" , ()=>{
	getAirQualityForToronto();
})
document.addEventListener("DOMContentLoaded" , ()=>{
	getAirQualityForMumbai();
})
document.addEventListener("DOMContentLoaded" , ()=>{
	getAirQualityForBerlin();
})

