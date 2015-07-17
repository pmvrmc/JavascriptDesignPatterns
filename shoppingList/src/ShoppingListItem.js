var ShoppingListItem = function(price, name){
    this.price = price;
    this.name = name;

    return {
        getPrice: function(){
            return this.price;
        },
        getName: function(){
            return this.name;
        }
    }
}
