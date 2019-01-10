'use strict';

angular.
  module('addressBookApp').
  component('addressLogin', {
    templateUrl: 'Components/address-login/address-login.template.html',
    controller: ['$state', '$http', '$scope', 
      function AddressHeaderLoginController($state, $http, $scope) {
      var self = this;
      
      self.$onInit = function(){
        $state.transitionTo("home");
        
      }

      }]
  });

