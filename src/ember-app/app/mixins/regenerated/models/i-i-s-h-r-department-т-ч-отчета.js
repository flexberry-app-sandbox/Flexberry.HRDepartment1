import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  результат: DS.attr('string'),
  лКС: DS.belongsTo('i-i-s-h-r-department-л-к-с', { inverse: null, async: false }),
  отчет: DS.hasMany('i-i-s-h-r-department-отчет', { inverse: 'тЧ_отчета', async: false })
});

export let ValidationRules = {
  результат: {
    descriptionKey: 'models.i-i-s-h-r-department-т-ч-отчета.validations.результат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  лКС: {
    descriptionKey: 'models.i-i-s-h-r-department-т-ч-отчета.validations.лКС.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отчет: {
    descriptionKey: 'models.i-i-s-h-r-department-т-ч-отчета.validations.отчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};
