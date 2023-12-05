import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  контакты: DS.attr('string'),
  лК: DS.attr('string'),
  образование: DS.attr('string'),
  опыт_работы: DS.attr('string'),
  фИО: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-h-r-department-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-h-r-department-анкета.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  контакты: {
    descriptionKey: 'models.i-i-s-h-r-department-анкета.validations.контакты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  лК: {
    descriptionKey: 'models.i-i-s-h-r-department-анкета.validations.лК.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  образование: {
    descriptionKey: 'models.i-i-s-h-r-department-анкета.validations.образование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  опыт_работы: {
    descriptionKey: 'models.i-i-s-h-r-department-анкета.validations.опыт_работы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-h-r-department-анкета.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-h-r-department-анкета.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
