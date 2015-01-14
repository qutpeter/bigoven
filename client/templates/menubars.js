/**
 * Created by peter on 14/01/15.
 */
Template.menubars.helpers({
    recipes: function() {
        return Recipes.find();
    }
});