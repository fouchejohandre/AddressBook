'use strict';

angular.
  module('addressBookApp').
  factory('AddressBookService', [function() {
    var user = [];
    var contacts = [];

    return {
      addUser: addUser,
      getUser: getUser,
      resetUser: resetUser,
      addContacts: addContacts,
      getContacts: getContacts,
      resetContacts: resetContacts
    };

    function addUser(userInfo){
      user.push(userInfo);
    }

    function getUser(){
      return user;
    }

    function resetUser(){
      user = [];
    }



    function addContacts(contactInfo){
      contacts.push(contactInfo);
    }

    function getContacts(){
      return contacts;
    }

    function resetContacts(){
      contacts = [];
    }

    }
  ]);
