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
          url: '/addressBook',
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

        var messageDetailsState = {
          name: 'message-details',
          url: '/messageDetails/:messageId',
          template: '<message-details></message-details>',
          controller: function($scope, $stateParams){
            $scope.messageId = $stateParams.messageId;
          },
        }

        var messageListState = {
          name: 'message-list',
          url: '/allMessages',
          template: '<message-list></message-list>'
        }

        var messageSendState = {
          name: 'message-send',
          url: '/sendMessages',
          template: '<message-send></message-send>'
        }

        $stateProvider.state(homeState);
        $stateProvider.state(addressBookState);
        $stateProvider.state(addressAddState);
        $stateProvider.state(addressDetailsState);
        $stateProvider.state(registerState);
        $stateProvider.state(messageDetailsState);
        $stateProvider.state(messageListState);
        $stateProvider.state(messageSendState);
    }
  ]);
