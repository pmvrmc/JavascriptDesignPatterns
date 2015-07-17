var WhereIsLunch = function(){
    return {
        notify: function(category, notification){
            if(category==="LUNCH"){
                console.log("Lunch is at " + notification);
            } else {
                console.log(notification);
            }
        }
    }
}
