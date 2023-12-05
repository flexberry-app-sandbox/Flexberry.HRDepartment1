import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-h-r-department-т-ч-отчета', 'Unit | Serializer | i-i-s-h-r-department-т-ч-отчета', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-h-r-department-т-ч-отчета',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
