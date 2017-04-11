import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('foode-recipe-searchbar', 'Integration | Component | foode recipe searchbar', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{foode-recipe-searchbar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#foode-recipe-searchbar}}
      template block text
    {{/foode-recipe-searchbar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
