import axios from 'axios';

export const fetchWeather = (city) => {
	const api_key = 'e27b797e58a484be5358b0b7ba468023';
	const URLforecast = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric`;
	const URLcurrent = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
	return async function(dispatch) {
		let data;
		try {
		const respForecast = await axios.get(URLforecast);
		const respCurrent = await axios.get(URLcurrent);
		data = {
			city: respForecast.data.city.name,
			country: respForecast.data.city.country,
			actual: respCurrent.data,
			next: respForecast.data.list.slice(0, 5)
		};
	}
	catch (e) {
		data = {city: 'notFound'};
	}
		dispatch({
			type: 'fetch_weather',
			payload: data
		});
	};
};
