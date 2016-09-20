import home from './index';
import HomeController from './home.controller';

describe('home', () => {

    describe('HomeCtrl', () => {
        let ctrl;

        beforeEach(() => {
            angular.mock.module(home);

            angular.mock.inject(($controller) => {
                ctrl = $controller(HomeController, {});
            });
        });

        it('should contain the starter welcome message', () => {
            expect(ctrl.welcomeMessage).toBe('Hello World');
        });
    });
});