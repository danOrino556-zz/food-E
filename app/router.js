import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('dashboard', function() {
    this.route('home', function() {
      this.route('edit-recipe', { path: '/recipe/:recipe_id' });
    });
    this.route('recipes', function() {
      this.route('edit-recipe', { path: '/recipe/:recipe_id' });
    });
    this.route('ingredients');
    this.route('profile');
    this.route('meal-planner');
    this.route('shop');
  });
});

export default Router;
