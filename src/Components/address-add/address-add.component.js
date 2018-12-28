'use strict';

angular.
  module('addressBookApp').
  component('addressAdd', {
    templateUrl: 'Components/address-add/address-add.template.html',
    controller: ['$http', '$state', 'AddressBookService', '$scope', function AddressAddController($http ,$state, AddressBookService, $scope) {
      var self = this;
      self.newAddress = {};
      self.tempUserData = [];
      self.tempUserData = AddressBookService.getUser();
      self.changed = false;
      self.myImage = "";

      if(!self.tempUserData[0])
      {
        $state.transitionTo('home');
      }

      self.imageUploaded = function(){
        self.changed = true;
      }

      $scope.uploadFile = function(files)
      {
        self.myImage = files[0];
        self.myImage = "http://localhost:8000/AddressBook/Images/" + self.myImage.name;
        self.changed = false;
      };

      self.addAddress = function()
      {
        if (!self.changed)
        {
          self.finalImage = "http://localhost:8000/AddressBook/Images/default.jpg";
        }
        else if (self.changed)
        {
          self.finalImage = self.myImage;
        }
        self.url = "http://localhost:8000/addressBook/addContact.php?"
        + "FirstName=" + self.newAddress.FirstName
        + "&LastName=" + self.newAddress.LastName
        + "&WorkTel=" + self.newAddress.WorkTel
        + "&HomeTel=" + self.newAddress.HomeTel
        + "&Mobile=" + self.newAddress.Mobile
        + "&Fax=" + self.newAddress.Fax
        + "&HomeEmail=" + self.newAddress.HomeEmail
        + "&WorkEmail=" + self.newAddress.WorkEmail
        + "&CompanyName=" + self.newAddress.CompanyName
        + "&CompanyPosition=" + self.newAddress.CompanyPosition
        + "&HomeAddressNr=" + self.newAddress.HomeAddressNr
        + "&HomeAddressStreet=" + self.newAddress.HomeAddressStreet
        + "&HomeAddressSuburb=" + self.newAddress.HomeAddressSuburb
        + "&HomeAddressCity=" + self.newAddress.HomeAddressCity
        + "&HomeAddressPostalCode=" + self.newAddress.HomeAddressPostalCode
        + "&HomeAddressAdditional=" + self.newAddress.HomeAddressAdditional
        + "&ImageUrl=" + self.finalImage
        + "&UserId=" + self.tempUserData[0][0].userId
        $http({
          method: 'GET',
          url: self.url
        }).then(function (response){
        },function (error){
    
      });
      $state.transitionTo('address-book');
      };
      }]
  });