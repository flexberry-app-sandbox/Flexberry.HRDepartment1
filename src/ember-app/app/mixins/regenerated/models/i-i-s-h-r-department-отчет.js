import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  дата_проверки: DS.attr('date'),
  тЧ_отчета: DS.belongsTo('i-i-s-h-r-department-т-ч-отчета', { inverse: 'отчет', async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-h-r-department-отчет.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  дата_проверки: {
    descriptionKey: 'models.i-i-s-h-r-department-отчет.validations.дата_проверки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  тЧ_отчета: {
    descriptionKey: 'models.i-i-s-h-r-department-отчет.validations.тЧ_отчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
