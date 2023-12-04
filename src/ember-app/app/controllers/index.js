import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.отдел-кадров.caption'),
          title: i18n.t('forms.application.sitemap.отдел-кадров.title'),
          children: [{
            link: 'i-i-s-h-r-department-отдел-l',
            caption: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-department-отдел-l.caption'),
            title: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-department-отдел-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-h-r-department-л-к-с-l',
            caption: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-department-л-к-с-l.caption'),
            title: i18n.t('forms.application.sitemap.отдел-кадров.i-i-s-h-r-department-л-к-с-l.title'),
            icon: 'chart line',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-h-r-department-отдел-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-h-r-department-отдел-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-h-r-department-отдел-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-h-r-department-л-к-с-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-h-r-department-л-к-с-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-h-r-department-л-к-с-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})