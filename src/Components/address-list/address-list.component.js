'use strict';

angular.
  module('addressBookApp').
  component('addressList', {
    templateUrl: 'Components/address-list/address-list.template.html',
    controller: ['$http', 'AddressBookService', '$state', function AddressListController($http, AddressBookService, $state) {
      var self = this;
      self.tempUserData = AddressBookService.getUser();
      self.showMore = false;
      self.showLess = true;
      self.orderProp = 'FirstName';
      self.noContacts = false;
      self.seaching = false;

      if(!self.tempUserData[0])
      {
        $state.transitionTo('home');
      }
      else
      {
        self.url = "http://localhost:8000/addressBook/getUserContacts.php?userId=" + self.tempUserData[0][0].userId;
        $http({
          method: 'GET',
          url: self.url
        }).then(function (response){
          self.addresses = response.data;
          AddressBookService.addContacts(self.addresses);
          if(!self.addresses[0])
          {
            self.noContacts = true;
          }
        },function (error){
      
        });
      }

      self.showLessInfo = function(){
        self.showMore = false;
        self.showLess = true;
      }

      self.showMoreInfo = function(){
        self.showMore = true;
        self.showLess = false;
      }

      self.seachingFunc = function(){
        if (!self.query)
        {
          self.seaching = false;
        }
        else
        {
          self.seaching = true;
        }
      }
  }
]});