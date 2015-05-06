/**
 * Example CRM written using Angular 1.3.
 *
 * There's a lot of nonsense out in the wild about how you should use Angular which makes learning 
 * its secrets a painful journey. What I want is architectural guidance and strong recommendations
 * which can be found but only amidst the jungle of half-baked tutorials and out-dated articles.
 *
 * Instead of simply bookmarking (and forgetting) the useful material I've put what I've read/learned 
 * into action and develop a small application. 
 *
 * Some basic guidelines on style: https://github.com/mgechev/angularjs-style-guide
 */

'use strict';

/**
 * Main entry point.
 */
angular.module('blitz', ['ui.router', 'blitz.contact'])
	/**
	 * Configure state/routes.
	 */
	.config(function ($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/contacts');

		$stateProvider
			.state('contactList', {
				url : '/contacts',
				controller : 'ContactListCtrl',
				templateUrl : 'comp/contact/partials/list.html'
			})

			.state('contactsView', {
				url : '/contacts/:id',
				controller : 'ContactViewCtrl',
				templateUrl : 'comp/contact/partials/view.html'
			})
	})
;
