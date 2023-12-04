import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-h-r-department-л-к-с-l');
  this.route('i-i-s-h-r-department-л-к-с-e',
  { path: 'i-i-s-h-r-department-л-к-с-e/:id' });
  this.route('i-i-s-h-r-department-л-к-с-e.new',
  { path: 'i-i-s-h-r-department-л-к-с-e/new' });
  this.route('i-i-s-h-r-department-отдел-l');
  this.route('i-i-s-h-r-department-отдел-e',
  { path: 'i-i-s-h-r-department-отдел-e/:id' });
  this.route('i-i-s-h-r-department-отдел-e.new',
  { path: 'i-i-s-h-r-department-отдел-e/new' });
});

export default Router;
