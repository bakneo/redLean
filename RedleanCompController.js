({
	//Je charge mes picklist
    doInit: function(component, event, helper) {        
        helper.getAnnee(component, event);
        helper.getGenre(component, event);
        var mode = component.get("v.Mode");
        mode = 'Edit';
        component.set("v.Mode",mode);
    },
    //Je charge mes picklist
    handleClick: function(component, event, helper) {        
        var mode = component.get("v.Mode");
        mode = 'Read';
        component.set("v.Mode",mode);
    },
    //On voit les genres choisis
    setGenre: function(component, event, helper) {
        var genreschoisis = [];
        var mapgenre = component.get("v.MapGenre");
        for(var i=0;i<mapgenre.length;i++){
            if(mapgenre[i].selected == true){
            	genreschoisis.push(mapgenre[i].value);
            }
		}
       	component.set("v.Film.Genre__c",genreschoisis);
    },
    // je sauvegarde mon film
    insertFilm : function(component,event){
        var newFilm = component.get("v.Film");
        var action = component.get("c.saveFilm");
        for(var i=0;i<newFilm.Genre__c.length;i++){
            if(newFilm.Genre__c[i]=="Action"){
                newFilm.Genre__c[i] = "01_Action";
            }
            if(newFilm.Genre__c[i]=="Thriller"){
                newFilm.Genre__c[i] = "02_Thriller";
            }
            if(newFilm.Genre__c[i]=="Romance"){
                newFilm.Genre__c[i] = "03_Romance";
            }
            if(newFilm.Genre__c[i]=="Drame"){
                newFilm.Genre__c[i] = "04_Drame";
            }
        }
        action.setParams({ 
            "film": newFilm
        });
        action.setCallback(this, function(a) {
            var state = a.getState();
            if (state === "SUCCESS") {
                alert('Film Enregistré');
            }
        });
        $A.enqueueAction(action);
    }
})
