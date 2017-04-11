import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('foode-recipe-info-body', 'Integration | Component | foode recipe info body', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{foode-recipe-info-body}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#foode-recipe-info-body}}
      template block text
    {{/foode-recipe-info-body}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
