MyApp = new Backbone.Marionette.Application();
 
// --- Aplicatia Globala
MyApp.addRegions({
  tableRegion: "#content",
  detailRegion: "#details"
});


// ---- Backbone Event Agregator ----- 
MyApp.vent.on('change:api', function(newId){
	MyApp.detailRegion.currentView.collection.changeUrl(newId);
})

MyApp.addInitializer(function(options){
	var teamsView = new TeamsView({
		collection: options.teams
	});

	var detailsView = new AllDetailsView({
		collection: new DetailsCollection({
			id : 'mralexgray'
		})
	});

	MyApp.tableRegion.show(teamsView);
	MyApp.detailRegion.show(detailsView);
});


$(document).ready(function(){
    var teams = new TeamsCollection(staticData);
    MyApp.start({teams: teams});
});