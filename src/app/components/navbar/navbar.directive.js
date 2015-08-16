(function() {
  'use strict';

  angular
    .module('angularTodoApp')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'navbarCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($scope, $location, moment) {
      var vm = $scope;
			vm.isActive = function(location) {
				return location === $location.path();
			};
			vm.isCollapsed = true;
      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
