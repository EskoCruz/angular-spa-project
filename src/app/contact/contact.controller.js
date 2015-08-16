/**
 * Created by esko on 8/14/15.
 */
(function() {
  'use strict';

  angular
    .module('angularTodoApp')
    .controller('ContactController', ContactController);

	/** @ngInject */
	function ContactController() {
		var vm = this;

		vm.submitted = false;
		vm.validated = false;

		vm.contactForm = {
			name:		'',
			email:		'',
			message:	'',
			mathCheck:	''
		};

		vm.ranNum1 = Math.floor((Math.random()*6)+1);
		vm.ranNum2 = Math.floor((Math.random()*6)+1);

		vm.mathCheckTotal = vm.ranNum1 + vm.ranNum2;



		vm.submit = function(){
			vm.mathCheckMatch = function() {
				return vm.mathCheckTotal === Number(vm.contactForm.mathCheck.$viewValue);
			};
			vm.submitted = true;
			if (vm.contactForm.$valid && vm.mathCheckMatch()) {
				vm.validated = true;
			}
		};
	}
})();
