import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('foode-recipe-info-navbar', 'Integration | Component | foode recipe info navbar', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{foode-recipe-info-navbar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#foode-recipe-info-navbar}}
      template block text
    {{/foode-recipe-info-navbar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
