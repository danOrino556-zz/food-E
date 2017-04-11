import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  description: DS.attr('string', {defaultValue : ()=>{return 'Recipe Description'}}),
  directions: DS.attr('string', {defaultValue : ()=>{return 'Recipe Directions'}}),
  imageUrl: DS.attr('string', {defaultValue : ()=>{return 'https://images.pexels.com/photos/106251/pexels-photo-106251.jpeg?h=350&amp;auto=compress&amp;cs=tinysrgb'}}),
  stars: DS.attr('number', {defaultValue : ()=>{return Math.floor(Math.random() * (5 - 0 + 1)) + 0;}}),
  reviews: DS.attr('reviews', {defaultValue : ()=>{return Math.floor(Math.random() * (100 - 1 + 1)) + 1;}}),
  favorite: DS.attr('boolean', {defaultValue : ()=>{return false}}),
  cookTime: DS.attr('number', {defaultValue : ()=>{return Math.floor(Math.random() * (60 - 0 + 1)) + 0;}}),
  prepTime: DS.attr('number', {defaultValue : ()=>{return Math.floor(Math.random() * (60 - 0 + 1)) + 0;}}),
  servings: DS.attr('number', {defaultValue : ()=>{return Math.floor(Math.random() * (10 - 0 + 1)) + 0;}}),
});
