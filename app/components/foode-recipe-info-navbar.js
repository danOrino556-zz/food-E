import Ember from 'ember';

export default Ember.Component.extend({


  actions : {


    /**
     * @method onBack
     */
    onBack(){
      this.sendAction('onBack');
    },

    /**
     * @method onFavorite
     */
    onFavorite(){
      this.sendAction('onFavorite', this.get('recipe'));
    },


    /**
     * @method onAdd
     */
    onAdd(){
      this.sendAction('onAdd' , this.get('recipe'));
    },


    /**
     * @method onOptions
     */
    onOptions(){
      this.sendAction('onOptions', this.get('recipe'));
    }
  }
});
