import Ember from 'ember';

export default Ember.Component.extend({


  /**
   * @method fullStars
   * @type Array
   */
  fullStars : Ember.computed('stars', function(){

    const fullStars = [];
    const stars = this.get('stars');

    for(let i =0; i< stars; i++){
      fullStars.pushObject(i);
    }

    return fullStars;
  }),


  /**
   * @method halfStars
   * @type Array
   */
  emptyStars : Ember.computed('stars', function(){

    const emptyStars = [];
    const stars = this.get('stars');

    for(let i =0; i< (5 - stars); i++){
      emptyStars.pushObject(i);
    }

    return emptyStars;
  }),

});
