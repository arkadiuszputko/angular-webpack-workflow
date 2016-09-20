import angular from 'angular';

import home from './modules/home/index';

import './styles/app.scss';

export default angular.module('app', [
    home
]).name;