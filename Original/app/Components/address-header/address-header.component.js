'use strict';

angular.
  module('addressBookApp').
  component('addressBookHeader', {
    templateUrl: 'Components/address-header/address-header.template.html',
    controller: ['AddressBookService', function AddressHeaderController(AddressBookService) {
      var self = this;

      self.resetUserData = function(){
        AddressBookService.resetUser();
      }

      }]
  });