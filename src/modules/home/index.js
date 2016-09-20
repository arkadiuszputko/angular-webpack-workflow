import angular from 'angular';
import Home from './home.component';

export default angular.module('home', [])
    .component('home', Home)
    .name;