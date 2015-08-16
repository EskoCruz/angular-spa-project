(function() {
	'use strict';

	angular
		.module('angularTodoApp')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($scope, localStorageService) {
		var vm = this;
		var todosInStore = localStorageService.get('todos');

		vm.todos = todosInStore || [];

		$scope.$watch('vm.todos', function(){
			localStorageService.set('todos', vm.todos);
		}, true);

		vm.addTodo = function() {
			if (vm.todoText) {
				vm.todos.push({
					text: vm.todoText,
					done: false
				});
				vm.todoText = '';
			}
		};

		vm.removeTodo = function(todoItem) {
			vm.todos.splice(todoItem, 1);
		};

		vm.creationDate = 1439506659853;

	}
})();
