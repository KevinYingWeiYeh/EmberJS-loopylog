import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return {
			"ProductName": "Ponderosa",
			"DimensionName": "1\" X 4\" X 14'",
			"BoardsSum": 20,
			"BoardFeetSum": 10000
		}
	}

});
