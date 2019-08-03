/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import testAction from 'vue-test-actions';
import store from '@/store';
import permission from '@/store/modules/permission';
import * as router from '@/router';

describe('mutations', () => {
    const { SET_ROUTERS } = permission.mutations;

    it('SET_ROUTERS', () => {
        const state = {
            addRouters: [],
            crmRouters: {},
            biRouters: {}
        };
        SET_ROUTERS(state, [
            { name: 'crm', children: ['crm/business'] },
            { name: 'bi', children: ['crm/business'] }
        ]);
        expect(state).toEqual({
            addRouters: [
                { name: 'crm', children: ['crm/business'] },
                { name: 'bi', children: ['crm/business'] }
            ],
            crmRouters: { name: 'crm', children: ['crm/business'] },
            biRouters: { name: 'bi', children: ['crm/business'] }
        });
    });
});

describe('actions', () => {
    const { GenerateRoutes } = permission.actions;
    it('GenerateRoutes', () => {
        router.asyncRouterMap = [{
                path: '/crm',
                name: 'crm',
                meta: {
                    title: '学员管理'
                },
                componennt: {
                    name: 'Layout'
                },
                children: []
            }, {
                path: '*',
                redirect: '/404',
                hidden: true
            }];
        const payload = {};

        const expectedCommits = [{ type: 'SET_ROUTERS', payload: [{
            path: '/crm',
            name: 'crm',
            meta: {
                title: '学员管理'
            },
            componennt: {
                name: 'Layout'
            },
            children: []
        }, {
            path: '*',
            redirect: '/404',
            hidden: true
        }] }];
        const expectedDispatchs = undefined;
        testAction(GenerateRoutes, expectedCommits, expectedDispatchs, payload);
    });
});
