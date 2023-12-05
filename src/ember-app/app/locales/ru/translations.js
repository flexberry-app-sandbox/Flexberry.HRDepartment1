import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'H r department',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'H r department',
          title: 'H r department'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-h-r-department-л-к-с-l': IISHRDepartmentЛКСLForm,
    'i-i-s-h-r-department-отдел-l': IISHRDepartmentОтделLForm,
    'i-i-s-h-r-department-л-к-с-e': IISHRDepartmentЛКСEForm,
    'i-i-s-h-r-department-отдел-e': IISHRDepartmentОтделEForm
  },

});

export default translations;
