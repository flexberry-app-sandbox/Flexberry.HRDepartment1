import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISHRDepartmentЛКСLForm from './forms/i-i-s-h-r-department-л-к-с-l';
import IISHRDepartmentОтделLForm from './forms/i-i-s-h-r-department-отдел-l';
import IISHRDepartmentЛКСEForm from './forms/i-i-s-h-r-department-л-к-с-e';
import IISHRDepartmentОтделEForm from './forms/i-i-s-h-r-department-отдел-e';
import IISHRDepartmentАнкетаModel from './models/i-i-s-h-r-department-анкета';
import IISHRDepartmentДолжностьModel from './models/i-i-s-h-r-department-должность';
import IISHRDepartmentЛКСModel from './models/i-i-s-h-r-department-л-к-с';
import IISHRDepartmentОтделModel from './models/i-i-s-h-r-department-отдел';
import IISHRDepartmentОтчетModel from './models/i-i-s-h-r-department-отчет';
import IISHRDepartmentТЧ_отчетаModel from './models/i-i-s-h-r-department-т-ч-отчета';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-h-r-department-анкета': IISHRDepartmentАнкетаModel,
    'i-i-s-h-r-department-должность': IISHRDepartmentДолжностьModel,
    'i-i-s-h-r-department-л-к-с': IISHRDepartmentЛКСModel,
    'i-i-s-h-r-department-отдел': IISHRDepartmentОтделModel,
    'i-i-s-h-r-department-отчет': IISHRDepartmentОтчетModel,
    'i-i-s-h-r-department-т-ч-отчета': IISHRDepartmentТЧ_отчетаModel
  },

  'application-name': 'H r department',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'H r department',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'H r department',
          title: 'H r department'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'отдел-кадров': {
          caption: 'Отдел кадров',
          title: 'Отдел кадров',
          'i-i-s-h-r-department-отдел-l': {
            caption: 'Отдел',
            title: ''
          },
          'i-i-s-h-r-department-л-к-с-l': {
            caption: 'ЛКС',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-h-r-department-отдел-l': {
            caption: 'ОтделL',
            title: 'Отдел'
          },
          'i-i-s-h-r-department-л-к-с-l': {
            caption: 'ЛКСL',
            title: 'ЛКС'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-h-r-department-л-к-с-l': IISHRDepartmentЛКСLForm,
    'i-i-s-h-r-department-отдел-l': IISHRDepartmentОтделLForm,
    'i-i-s-h-r-department-л-к-с-e': IISHRDepartmentЛКСEForm,
    'i-i-s-h-r-department-отдел-e': IISHRDepartmentОтделEForm
  },

});

export default translations;
