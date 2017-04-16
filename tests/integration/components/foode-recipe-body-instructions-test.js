import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('foode-recipe-body-instructions', 'Integration | Component | foode recipe body instructions', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{foode-recipe-body-instructions}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#foode-recipe-body-instructions}}
      template block text
    {{/foode-recipe-body-instructions}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
