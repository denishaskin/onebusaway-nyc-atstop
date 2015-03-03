angular.module('configuration', [])
	.constant('MAP_TILES', 'http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png')
	.constant('MAP_ATTRS', 'Map:<a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data:<a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.')
    .constant('API_END_POINT','')
    // OBANYC_API_END_POINT only needed if it needs to be different from API_END_POINT, otherwise leave it blank.
    // API_END_POINT is siri API end point, e.g. /api/stops-on-route-for-direction
    // OBANYC_API_END_POINT is OBA API end point, e.g. /api/where/stops-for-route
    .constant('OBANYC_API_END_POINT','')
    .constant('API_KEY','')
    .constant('MAPBOX_KEY','')
    .constant('SHOW_BRANDING', false)
    .constant('LOGO_IMG', '') // e.g. 'img/logo.svg'
    //FYI: this currently is hard coded into the controller
    .constant('exampleSearches',
        {  'exampleRoutes':  [],
        'exampleStops': [],
        'exampleIntersections': []})
;