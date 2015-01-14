/**
 * Created by peter on 14/01/15.
 */
Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {name: 'appBody'})
Router.route('/a', {name: 'about'});
Router.route('/c', {name: 'contact'});
Router.route('/recipe/:bigovenid', {
    name: 'recipe',
    data: function() {
        console.log('bigovenid' + this.params.bigovenid);
        return Recipes.findOne({bigovenId: this.params.bigovenid});
    }
});