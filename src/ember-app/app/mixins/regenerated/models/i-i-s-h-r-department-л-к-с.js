import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  дата_приема: DS.attr('date'),
  контакты: DS.attr('string'),
  фИО: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-h-r-department-должность', { inverse: null, async: false }),
  отдел: DS.belongsTo('i-i-s-h-r-department-отдел', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-h-r-department-л-к-с.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  дата_приема: {
    descriptionKey: 'models.i-i-s-h-r-department-л-к-с.validations.дата_приема.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  контакты: {
    descriptionKey: 'models.i-i-s-h-r-department-л-к-с.validations.контакты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-h-r-department-л-к-с.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-h-r-department-л-к-с.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отдел: {
    descriptionKey: 'models.i-i-s-h-r-department-л-к-с.validations.отдел.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЛКСE', 'i-i-s-h-r-department-л-к-с', {
    iD: attr('ID', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    контакты: attr('Контакты', { index: 2 })
  });

  modelClass.defineProjection('ЛКСL', 'i-i-s-h-r-department-л-к-с', {
    iD: attr('ID', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    контакты: attr('Контакты', { index: 2 })
  });
};
