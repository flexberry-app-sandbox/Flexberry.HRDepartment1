import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  название: DS.attr('string'),
  оклад: DS.attr('string')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-h-r-department-должность.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-h-r-department-должность.validations.название.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оклад: {
    descriptionKey: 'models.i-i-s-h-r-department-должность.validations.оклад.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
