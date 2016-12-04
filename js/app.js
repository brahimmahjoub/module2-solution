var app = angular.module('ShoppingListCheckOff', []);
app.controller('ToBuyController', ToBuyController);
app.controller('AlreadyBoughtController', AlreadyBoughtController);
app.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService']
//To Buy Controller
function ToBuyController(ShoppingListCheckOffService) {
  var tobuy = this;
  tobuy.items = ShoppingListCheckOffService.getBuyItems();
  tobuy.bought = function (index) {
    ShoppingListCheckOffService.bought(index);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
//Already Bought Controller
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var buyItems = [
                  {name:'Cookies', quantity:10},
                  {name:'Chips', quantity:15},
                  {name:'Sugar Drinks', quantity:8},
                  {name:'Pepto Bismol', quantity:3},
                  {name:'Milks', quantity:2}
                ];
  var boughtItems = [];

  service.getBuyItems = function() {
    return buyItems;
  }

  service.getBoughtItems = function() {
    return boughtItems;
  }

  service.bought = function(index) {
    var item = buyItems[index];
    buyItems.splice(index, 1);
    boughtItems.push(item);
  }

}
