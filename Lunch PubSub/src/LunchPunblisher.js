var LunchDecider = function(){
    var _lunchListeners = {}; //tag: [subscribers]

    return {
        subscribe: function(tag, subscriber){
            if(!_lunchListeners.tag){
                _lunchListeners.tag = [];
            }
            _lunchListeners.tag.push(subscriber);
        },
        publish: function(tag, notification){
            if(!_lunchListeners.tag){
                return false;
            }
            _lunchListeners.tag.forEach(function(listener) {
                listener.notify(tag, notification);
            });
            return true;
        },
        unsubscribe: function(tag, subsriber){
            _lunchListeners.tag = _lunchListeners.tag.filter(function(listener){
                return lister !== subsriber;
            });
        },
        changeLunchPlace : function(newLocation){
            this.publish("LUNCH", newLocation);
        }
    }
}
