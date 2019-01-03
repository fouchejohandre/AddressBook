'use strict';

angular.
  module('addressBookApp').
  component('addressDetails', {
    templateUrl: 'Components/address-details/address-details.template.html',
    controller: ['$stateParams', '$http', '$scope', '$state', 'AddressBookService', '$uibModal',
    function AddressDetailsController($stateParams, $http, $scope, $state, AddressBookService, $uibModal) {
      var self = this;
      self.phoneId = 'AA'
      self.phoneId = $stateParams.phoneId;
      var i;
      self.addresses = []
      self.selectedAddress = [];
      self.index = 0;
      self.displayLarge = false;
      self.displaySmall = true;
      self.url = "";
      self.addresses = AddressBookService.getContacts();
      self.changed = false;

      self.myImage = "A";

      self.imageUploaded = function(){
        self.changed = true;
      }

      $scope.uploadFile = function(files)
      {
        self.myImage = files[0];
        self.myImage = "http://localhost:8000/AddressBook/Images/" + self.myImage.name;
        self.changed = false;
      };

      for (i = 0; i < self.addresses[0].length; i++)
      {
        if(self.addresses[0][i].ContactId === $stateParams.addressId)
        {
          self.selectedAddress = self.addresses[0][i];
        }
      }
      
      self.updateAddress = function()
      {
        if(self.changed)
        {
          self.finalImage = self.myImage;
        }
        else if (!self.changed)
        {
          self.finalImage = self.selectedAddress.ImageUrl;
        }

        self.url = "http://localhost:8000/addressBook/updateContact.php?"
          + "ContactId=" + self.selectedAddress.ContactId
          + "&FirstName=" + self.selectedAddress.FirstName
          + "&LastName=" + self.selectedAddress.LastName
          + "&WorkTel=" + self.selectedAddress.WorkTel
          + "&HomeTel=" + self.selectedAddress.HomeTel
          + "&Mobile=" + self.selectedAddress.Mobile
          + "&Fax=" + self.selectedAddress.Fax
          + "&HomeEmail=" + self.selectedAddress.HomeEmail
          + "&WorkEmail=" + self.selectedAddress.WorkEmail
          + "&CompanyName=" + self.selectedAddress.CompanyName
          + "&CompanyPosition=" + self.selectedAddress.CompanyPosition
          + "&HomeAddressNr=" + self.selectedAddress.HomeAddressNr
          + "&HomeAddressStreet=" + self.selectedAddress.HomeAddressStreet
          + "&HomeAddressSuburb=" + self.selectedAddress.HomeAddressSuburb
          + "&HomeAddressCity=" + self.selectedAddress.HomeAddressCity
          + "&HomeAddressPostalCode=" + self.selectedAddress.HomeAddressPostalCode
          + "&HomeAddressAdditional=" + self.selectedAddress.HomeAddressAdditional
          + "&ImageUrl=" + self.finalImage;

          $http({
            method: 'GET',
            url: self.url
          }).then(function (response){
          },function (error){
      
        });
        $state.transitionTo('address-book');
      };

      self.removeAddress = function()
      {
        var modalInstance =  $uibModal.open({
          templateUrl: "modalContent.html",
          controller: "ModalContentCtrl",
          size: '',
        });
        // self.url = "http://localhost:8000/addressBook/deleteContact.php?ContactId=" + self.selectedAddress.ContactId;

        // $http({
        //     method: 'GET',
        //     url: self.url
        //   }).then(function (response){
        //   },function (error){
      
        // });

        // $state.transitionTo("address-book");
      };

      self.enlargeDisplay = function(){
        self.displayLarge = true;
        self.displaySmall = false;
      }

      self.closeLargeDisplay = function(){
        self.displayLarge = false;
        self.displaySmall = true;
      }

    }]
});