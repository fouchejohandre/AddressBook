'use strict';

angular.
  module('addressBookApp').
  component('addressDetails', {
    templateUrl: 'Components/address-details/address-details.template.html',
    controller: ['$stateParams', '$http', '$scope', '$uibModal' ,'$state', 'AddressBookService',
    function AddressDetailsController($stateParams, $http, $scope, $uibModal,  $state, AddressBookService) {
      var self = this;
      self.phoneId = 'AA'
      self.phoneId = $stateParams.phoneId;
      var i = 0;
      self.addresses = []
      self.selectedAddress = [];
      self.index = 0;
      self.displayLarge = false;
      self.displaySmall = true;
      self.url = "";
      self.changed = false;
      self.myImage = "A";
      self.tempUserData = AddressBookService.getUser();

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
          for (i = 0; i < self.addresses.length; i++)
          {
            if(self.addresses[i].ContactId === $stateParams.addressId)
            {
              self.selectedAddress = self.addresses[i];
            }
          }
        },function (error){
      
        });
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
        var message = "Are you sure you want to permanently delete " + self.selectedAddress.FirstName + " " + self.selectedAddress.LastName + " from your address book?";

        var modalHtml = '<div class="modal-body">' + message + '</div>';
        modalHtml += '<div class="modal-footer"><button class="btn btn-danger" ng-click="ok()">DELETE</button><button class="btn btn-warning" ng-click="cancel()">CANCEL</button></div>';
    
        var modalInstance = $uibModal.open({
          template: modalHtml,
          controller: ModalInstanceCtrl
        });
    
        modalInstance.result.then(function() {
          reallyDelete();
        });
      };
    
      var reallyDelete = function(item) {
      };
    
    var ModalInstanceCtrl = function($scope, $uibModalInstance) {
      $scope.ok = function() {
        self.url = "http://localhost:8000/addressBook/deleteContact.php?ContactId=" + self.selectedAddress.ContactId;

        $http({
            method: 'GET',
            url: self.url
          }).then(function (response){
            $uibModalInstance.close();
            $state.transitionTo("address-book");
          },function (error){
            $uibModalInstance.close();
            $state.transitionTo("address-book");
        });
      };
    
      $scope.cancel = function() {
        $uibModalInstance.close();
      };
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