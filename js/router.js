MyApp.Router = function(){
	var Router = {};

	Router.MyRouter = Backbone.Marionette.AppRouter.extend({
		appRoutes: {
		   '': 'initLayout'
		  , 'home': 'goHome'
		  , 'team/:id': 'goTeam'
		}
	});

	MyApp.addInitializer(function(){
		Router.router = new Router.MyRouter({
  			controller: new MyApp.Controller
		});

		MyApp.vent.trigger('routing:started');
	});
 
  	return Router;
}();