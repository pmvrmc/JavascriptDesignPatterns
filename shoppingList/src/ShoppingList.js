var ShoppingList = function () {
    this.items = [];
    this.subtotal = 0;
}
ShoppingList.prototype.addItem = function(item){
    this.items.push(item);
    this.subtotal = this.subtotal + item.price;
}

ShoppingList.prototype.getTotal = function(){
    return this.items
    .map(function(item){
        return item.price;
    })
    .reduce(function(total, nextItem){
        return total + nextItem;
    },0)
}

/**
 * Returns an object like:
 *   { element: {price:XX, count:YY} }
 */
ShoppingList.prototype.getSummaryList = function(){
    return this.items.reduce(function(total, nextItem){
        var name = nextItem.name;
        if(!total[name]){
            total[name] = {};
        }
        if(total[name].count){
            total[name].count++;
            total[name].price = total[name].price + nextItem.price;
        } else {
            total[name].count = 1;
            total[name].price = nextItem.price;
        }
        return total;
    },{});
}

ShoppingList.prototype.clear = function () {
    this.items = [];
    this.subtotal = 0;
};

ShoppingList.prototype.checkout = function (wallet) {
    if(wallet.canPay(this.subtotal)){
        var payedAmout = this.subtotal;
        wallet.pay(this.subtotal);
        this.items = [];
        this.subtotal = 0;
        return payedAmout;
    }
    return -1;
};
