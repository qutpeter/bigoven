/**
 * Created by peter on 14/01/15.
 */

Meteor.startup(function() {
    if (Recipes.find().count() === 0) {
        Recipes.insert({name : 'meal1', bigovenId : 1234});
        Recipes.insert({name : 'meal2', bigovenId : 4567});
    }
});