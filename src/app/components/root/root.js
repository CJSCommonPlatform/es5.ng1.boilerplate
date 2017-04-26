(function() {

  'use strict';

  /**********************************************************
   *
   * @ngdoc module
   * @name components.root
   *
   **********************************************************/

  angular
    .module('components.root', [
      'pdk',
      'templates-app'
    ])
    .component('root', {
      restrict: 'AE',
      templateUrl: 'app/components/root/root.tpl.html',
    });

}());
