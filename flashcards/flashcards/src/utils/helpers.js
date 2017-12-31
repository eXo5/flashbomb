import axios from 'axios';

const clientId = "PLSKHO3DOU2BKXDTAV3ZRKXNFPRDOE5MPZT1WJMKMRV1OMHF";

const clientSecret = "0DJFLYESSHT3UGAWRG5FH44XVT4NKYTXECWX4DJCROHOS4YO";

const helpers = {
	runQuery: (query, location, limit) => {

		console.log(query);
		console.log(location);
		console.log(limit);

		const queryURL = `https://api.foursquare.com/v2/venues/search?v=20161016&near=${location}&limit=${limit}&query=${query}&intent=checkin&client_id=${clientId}&client_secret=${clientSecret}`

		return axios.get(queryURL)
		.then(function(response) {
			console.log(response.data.response.venues);
			return response
		})
	},
	
	runTrending: (location) => {
		console.log(location);

		const trendURL = `https://api.foursquare.com/v2/venues/trending?v=20131016&near=${location}&limit=5&radius=2000&client_id=${clientId}&client_secret=${clientSecret}`
		// console.log(trendURL)
		return axios.get(trendURL)
		.then(function(response) {
			console.log(response.data.response.venues);
			return response
		})
	},

	runExplore: (location) => {
		console.log(location);

		const exploreURL = `https://api.foursquare.com/v2/venues/explore?v=20131016&near=${location}&section=food&client_id=${clientId}&client_secret=${clientSecret}`

		return axios.get(exploreURL)
		.then(function(response) {
			console.log("full explore array");
			console.log(response);
			return response;
		})
	},

	runVenue: (query, location) => {

		console.log(query);
		console.log(location);

		const venueURL = `https://api.foursquare.com/v2/venues/search?v=20161016&near=${location}&limit=1&query=${query}&intent=checkin&client_id=${clientId}&client_secret=${clientSecret}`

		return axios.get(venueURL)
		.then(function(response) {
			console.log(response.data.response.venues);
			return response
		})
	},
	runID: (id) => {
		console.log(id);
		const idURL  = `https://api.foursquare.com/v2/venues/${id}?v=20131016&client_id=${clientId}&client_secret=${clientSecret}`
		return axios.get(idURL)
			.then(function(response) {
				console.log("HELPER RESPONSE ID")
				console.log(response)
				return response
			})
	},
	
}

export default helpers;





