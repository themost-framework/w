// MOST Web Framework Codename ZeroGravity, copyright 2017-2020 THEMOST LP all rights reserved
import {HttpApplication} from '@themost/w/platform-server';
import {RouterService} from '@themost/w/core';

describe('RouterService', () => {

    it('should create instance', () => {
        const app = new HttpApplication();
        app.useService(RouterService);
        const service = app.getService(RouterService);
        service.add({
            url: '/users/:action',
            controller: 'users'
        });
        expect(service).toBeTruthy();
    });

    it('should use addRange', () => {
        const app = new HttpApplication();
        app.useService(RouterService);
        const service = app.getService(RouterService);
        service.addRange({
            url: '/users/:action',
            controller: 'users'
        }, {
            url: '/products/:action',
            controller: 'products'
        });
        const routeConfig = service.routes.find((item) => {
            return item.controller === 'products';
        })
        expect(routeConfig).toBeTruthy();
    });

    it('should use parseUrl', () => {
        const app = new HttpApplication();
        app.useService(RouterService);
        const service = app.getService(RouterService);
        service.addRange({
            url: '/users/:action',
            controller: 'users'
        }, {
            url: '/products/:action',
            controller: 'products'
        });
        const route = service.parseUrl('/users/me');
        expect(route).toBeTruthy();
        expect(route.params.action).toBe('me');
    });

});
