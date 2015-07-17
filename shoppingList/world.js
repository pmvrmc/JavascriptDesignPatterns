var world = (function(global){
    var item1 = new ShoppingListItem(10, "item1");
    var item2 = new ShoppingListItem(15, "item2");
    var item3 = new ShoppingListItem(18, "item3");
    var item4 = new ShoppingListItem(20, "item4");
    var item5 = new ShoppingListItem(10, "item1");
    var item6 = new ShoppingListItem(15, "item2");

    var shoppingList = new ShoppingList();
    shoppingList.addItem(item1);
    shoppingList.addItem(item2);
    shoppingList.addItem(item3);
    shoppingList.addItem(item4);
    shoppingList.addItem(item5);
    shoppingList.addItem(item6);

    console.log(shoppingList.getTotal());
    console.log(shoppingList.getSummaryList());

    var myWallet = new Wallet();
    myWallet.addMoney(200);
    console.log(myWallet.money);

    shoppingList.checkout(myWallet);

    console.log(myWallet.money);

})(this);
