'use strict';

angular.
  module('addressBookApp').
  component('addressList', {
    templateUrl: 'Components/address-list/address-list.template.html',
    controller: ['$http', 'AddressBookService', function AddressListController($http, AddressBookService) {
      var self = this;
      self.tempUserData = AddressBookService.getUser();
      self.showMore = false;
      self.showLess = true;
      self.url = "http://localhost:8000/addressBook/getUserContacts.php?userId=" + self.tempUserData[0][0].userId;
      self.orderProp = 'FirstName';
    
      $http({
        method: 'GET',
        url: self.url
      }).then(function (response){
        self.addresses = response.data;
        AddressBookService.addContacts(self.addresses);
      },function (error){
    
      });

      self.showLessInfo = function(){
        self.showMore = false;
        self.showLess = true;
      }

      self.showMoreInfo = function(){
        self.showMore = true;
        self.showLess = false;
      }
  }
]});