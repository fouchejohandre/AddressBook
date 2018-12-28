'use strict';

angular.
  module('addressBookApp').
  config(['$stateProvider', '$qProvider',
    function config($stateProvider, $qProvider) {

      $qProvider.errorOnUnhandledRejections(false);

        var homeState = {
          name: 'home',
          url: '/home',
          template: '<home></home>'
        }

        var addressBookState = {
          name: 'address-book',
          url: '/address-book',
          template: '<address-list></address-list>'
        }

        var addressAddState = {
          name: 'address-add',
          url: '/addressAdd',
          template: '<address-add></address-add>'
        }

        var registerState = {
          name: 'register',
          url: '/register',
          template: '<register></register>'
        }

        var addressDetailsState = {
          name: 'address-details',
          url: '/addressDetails/:addressId',
          template: '<address-details></address-details>',
          controller: function($scope, $stateParams){
            $scope.addressId = $stateParams.addressId;
          },
        }

        $stateProvider.state(homeState);
        $stateProvider.state(addressBookState);
        $stateProvider.state(addressAddState);
        $stateProvider.state(addressDetailsState);
        $stateProvider.state(registerState);
    }
  ]);
