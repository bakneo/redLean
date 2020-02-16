({
	getAnnee: function(component, event) {
        var action = component.get("c.getAnnee");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var result = response.getReturnValue();
                var anneeMap = [];
                for(var key in result){
                    anneeMap.push({key: key, value: result[key]});
                }
                component.set("v.MapAnnee", anneeMap);
            }
        });
        $A.enqueueAction(action);
    },
    getGenre: function(component, event) {
        var action = component.get("c.getGenre");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var result = response.getReturnValue();
                var genreMap = [];
                for(var key in result){
                    genreMap.push({key: key, value: result[key]});
                }
                component.set("v.MapGenre", genreMap);
            }
        });
        $A.enqueueAction(action);
    }
})
