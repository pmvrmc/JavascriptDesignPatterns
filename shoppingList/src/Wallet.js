var Wallet = function(){
    this.money = 0;
}

Wallet.prototype.addMoney = function (money) {
    this.money = this.money + money;
};

Wallet.prototype.canPay = function (cost) {
    return this.money >= cost;
};

Wallet.prototype.pay = function(cost){
    if(this.canPay(cost)){
        this.money = this.money - cost;
        return;
    }
    console.log("erro");
}
