MyApp.Controller = function(){
	
	var Controller = Backbone.Marionette.Controller.extend({
		initialize: function (options) {
			// initializam date
		} 
		, initLayout: function(){
			MyApp.Controller.initializeLayout();
		}

		, goHome: function(){
			Controller.showHome();
		}

		, goTeam: function(id){
			Controller.showTeamDetail(id);
		}
	});

	var Layout = Backbone.Marionette.Layout.extend({
		template: "#team-layout"

		, className: "layoutx"

		, regions: {
			teamContent: "#teamContent"
		}

		, initialize: function(options){
			this.newModel = new Backbone.Model({
				id : options.id
				
				, name: options.name

				, description: options.description

				, path: options.path
			});
		}

		, onRender: function(){
			var detailView = Backbone.Marionette.ItemView.extend({

				template: "#team-item"
				
				, events: {
					'click #goBack ' : 'moveToHome'
				}

				, model: this.newModel

				, moveToHome: function(){
					Backbone.history.navigate("#home", {trigger: true});
				}
			});
			this.teamContent.show(new detailView());
		}

	});

	Controller.initializeLayout = function(){
		var teams = new TeamsCollection(staticData);
    	var teamsView = new TeamsView({
			collection: teams
		});

		var detailsView = new AllDetailsView({
			collection: new DetailsCollection({
				id : 'mralexgray'
			})
		});

		MyApp.tableRegion.show(teamsView);
		MyApp.detailRegion.show(detailsView);
	}

	Controller.showTeamDetail = function(id){
		Controller.layout = new Layout(teamsDescription[id]);

		Controller.layout.on("show", function(){
			MyApp.vent.trigger("layout:rendered");
		});
		MyApp.tableRegion.show(MyApp.Controller.layout);
	}

	Controller.showHome = function(){
		var teams = new TeamsCollection(staticData);
    	var teamsView = new TeamsView({
			collection: teams
		});
		MyApp.tableRegion.show(teamsView);		
	}


	return Controller;
}();
 
MyApp.addInitializer(function(){
	MyApp.Controller.initializeLayout();
});