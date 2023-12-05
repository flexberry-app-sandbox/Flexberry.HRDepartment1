import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-h-r-department-отчет', 'Unit | Model | i-i-s-h-r-department-отчет', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-h-r-department-анкета',
    'model:i-i-s-h-r-department-должность',
    'model:i-i-s-h-r-department-л-к-с',
    'model:i-i-s-h-r-department-отдел',
    'model:i-i-s-h-r-department-отчет',
    'model:i-i-s-h-r-department-т-ч-отчета',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
