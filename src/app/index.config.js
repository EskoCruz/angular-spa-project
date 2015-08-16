(function() {
  'use strict';

  angular
    .module('angularTodoApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr, localStorageServiceProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;

		// Set Prefix Name to avoid Read-over other apps
		localStorageServiceProvider.setPrefix('ls');
  }

})();
