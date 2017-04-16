import Ember from 'ember';

export default Ember.Route.extend({


  recipeSvc : Ember.inject.service('recipe'),
  notificationSvc : Ember.inject.service('notification'),
  navSvc : Ember.inject.service('navigation'),


  /**
   * @event model
   * @param  {Object} params
   */
  model : function(params){

    const filterType = params.filter_type;
    const recipes = this.store.peekAll('recipe');
    this.set('navSvc.selectedRecipeFilter', filterType);


    return {
      filterType : filterType,
      recipes : recipes,
      searchText : ''
    };
  },


  /**
   * @event deactivate
   */
  deactivate : function(){
    this.set('navSvc.selectedRecipeFilter', null);
  },


  actions : {


    /**
     * @method onEditRecipe
     * @param  {Object} recipe
     */
    onEditRecipe(recipe){
      console.log(recipe)
      this.transitionTo('dashboard.recipes.edit-recipe', recipe.get('id'));
    },


    /**
     * @method onAdd
     */
    onAdd(recipe){

      const recipeSvc = this.get('recipeSvc');
      const notificationSvc = this.get('notificationSvc');

      recipeSvc.addRecipe(recipe).then(

        ()=>{
          notificationSvc.success(recipe.get('name') + ' has been added to your recipe list');
        },

        ()=>{
          notificationSvc.error('There was a problem adding ' + recipe.get('name') + ' to your recipe list');
        });
    },
  }
});
