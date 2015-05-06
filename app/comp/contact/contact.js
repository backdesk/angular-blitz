'use strict';

angular.module('blitz.contact', [])
	/**
	 * Contact Service.
	 * 
	 * Note: All services are singletons.
	 *
	 * See: http://stackoverflow.com/questions/13762228/confused-about-service-vs-factory 
	 * 		http://blog.manishchhabra.com/2013/09/angularjs-service-vs-factory-with-example/
	 *		http://stackoverflow.com/questions/12505760/processing-http-response-in-service
	 */
	.service('contactService', ['$http', function ($http) {
		return {
			/**
			 * Fetch contacts and return a promise.
			 *
			 * See: http://stackoverflow.com/questions/14117653/how-to-cache-an-http-get-service-in-angularjs
			 *		http://geek.bluemangointeractive.com/caching-http-requests-in-angularjs/
			 */
			getContacts : function () {
				/**
				 * $resource is built on top of $http, and provides further abstraction from the underlying communications. 
				 * Start with $http, get acquainted, and then later on see if you can shift to $resource
				 *
				 * See: http://stackoverflow.com/questions/13181406/angularjs-http-and-resource
				 */
 				return $http.get('mock/contacts.json')
 					.then(function(result) {
           				return result.data;
       				})
       			;
			},

			/**
			 * It'd be good to be able to retrieve an object from any previously fetched results
			 * before going out to the API.
			 */
			getContactById : function (id) {
				console.log(data);
			}
		};
	}])

	/**
	 * List Controller.
	 * 
	 * See: http://stackoverflow.com/questions/11605917/this-vs-scope-in-angularjs-controllers
	 */
	.controller('ContactListCtrl', ['$scope', 'contactService', function ($scope, contactService) {
		var init = function () {
			contactService.getContacts()
				.then(function (data) {
					$scope.contacts = data;
				})
			;
		};

		init();
	}])

	/**
	 * View Controller.
	 */
	.controller('ContactViewCtrl', ['$scope', '$stateParams', 'contactService', function ($scope, $stateParams, contactService) {
		var getById = function (id) {
			contactService.getContactById(id)
				.then(function (data) {
					$scope.contact = data;
				})
			;
		};

		getById($stateParams.id);
	}])
;
