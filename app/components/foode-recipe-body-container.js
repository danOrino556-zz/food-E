import Ember from 'ember';

export default Ember.Component.extend({


  bodyStates : ['INGREDIENTS', 'INSTRUCTIONS', 'REVIEWS'],
  selectedState : 'INGREDIENTS',


  showIngredients : Ember.computed.equal('selectedState', 'INGREDIENTS'),
  showInstructions : Ember.computed.equal('selectedState', 'INSTRUCTIONS'),
  showReviews : Ember.computed.equal('selectedState', 'REVIEWS'),


  actions : {


    /**
     * @method onIngredients
     */
    onIngredients(){
      this.set('selectedState', 'INGREDIENTS');
    },


    /**
     * @method onInstructions
     */
    onInstructions(){
      this.set('selectedState', 'INSTRUCTIONS');
    },


    /**
     * @method onReviews
     */
    onReviews(){
      this.set('selectedState', 'REVIEWS');
    }
  }
});
