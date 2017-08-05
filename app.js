(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getToBuyItems();
  list.buyItem = function (index) {
      ShoppingListCheckOffService.buyItem(index);
  };
}

function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of to buy items
  var toBuyItems = [
    {
      name: 'Cookies',
      quantity: 10
    },
    {
      name: 'Coca-Cola',
      quantity: 2
    },
    {
      name: 'Water',
      quantity: 6
    },
    {
      name: 'Sandwich',
      quantity: 2
    },
    {
      name: 'Milk',
      quantity: 1
    }
  ];
  //List of alredy bought items
  var alreadyBoughtItems = [];

  service.buyItem = function (itemIndex) {
    var item = toBuyItems[itemIndex];
    alreadyBoughtItems.push(item);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function() {
    return alreadyBoughtItems;
  };
}

})();
