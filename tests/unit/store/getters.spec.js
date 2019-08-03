/* eslint-disable no-undef */
import getters from '@/store/getters';
jest.mock('@/assets/img/logo.png', () => '@/assets/img/logo.png');

describe('getters', () => {
    let state;
    beforeEach(() => {
        state = {
            user: {
                userInfo: { id: 123 }, // 用户信息
                // 权限信息
                allAuth: ['bi'], // 总权限信息 默认空 调整动态路由
                crm: { business: true }, // 客户管理
                bi: { business: true }, // 商业智能
                manage: { business: true } // 管理后台
            },
            app: {
                logo: 'img',
                name: 'ykt',
                lang: 'cn',
                sidebar: {
                    activeIndex: 1 // 目前激活的 行
                },
                navbar: {
                    activeIndex: 2 // 导航目前是第几个 个人中心需要
                }
            },
            permission: {
                addRouters: [],
                crmRouters: {
                    name: 'crm',
                    children: []
                },
                biRouters: {
                    name: 'bi',
                    children: []
                },
                manageRouters: {
                    name: 'manager',
                    children: []
                }
            }
        };
    });
    it('userInfo', () => {
        const result = getters.userInfo(state);
        expect(result).toEqual({ id: 123 });
    });
    it('lang', () => {
        const result = getters.lang(state);
        expect(result).toEqual('cn');
    });
    it('logo', () => {
        const result = getters.logo(state);
        expect(result).toEqual('img');
    });
    it('name', () => {
        const result = getters.name(state);
        expect(result).toEqual('ykt');
    });
    it('activeIndex', () => {
        const result = getters.activeIndex(state);
        expect(result).toEqual(1);
    });
    it('navActiveIndex', () => {
        const result = getters.navActiveIndex(state);
        expect(result).toEqual(2);
    });
    it('allAuth', () => {
        const result = getters.allAuth(state);
        expect(result).toEqual(['bi']);
    });
    it('crm', () => {
        const result = getters.crm(state);
        expect(result).toEqual({ business: true });
    });
    it('bi', () => {
        const result = getters.bi(state);
        expect(result).toEqual({ business: true });
    });
    it('manage', () => {
        const result = getters.manage(state);
        expect(result).toEqual({ business: true });
    });
    it('addRouters', () => {
        const result = getters.addRouters(state);
        expect(result).toEqual([]);
    });
    it('crmRouters', () => {
        const result = getters.crmRouters(state);
        expect(result).toEqual({
            name: 'crm',
            children: []
        });
    });
    it('biRouters', () => {
        const result = getters.biRouters(state);
        expect(result).toEqual({
            name: 'bi',
            children: []
        });
    });
    it('manageRouters', () => {
        const result = getters.manageRouters(state);
        expect(result).toEqual({
            name: 'manager',
            children: []
        });
    });
});

describe('getters with default value', () => {
    let state;
    beforeEach(() => {
        state = {
            user: {
                userInfo: { id: 123 }, // 用户信息
                // 权限信息
                allAuth: ['bi'], // 总权限信息 默认空 调整动态路由
                crm: { business: true }, // 客户管理
                bi: { business: true }, // 商业智能
                manage: { business: true } // 管理后台
            },
            app: {
                logo: '',
                name: '',
                lang: 'cn',
                sidebar: {
                    activeIndex: 1 // 目前激活的 行
                },
                navbar: {
                    activeIndex: 2 // 导航目前是第几个 个人中心需要
                }
            },
            permission: {
                addRouters: [],
                crmRouters: {
                    name: 'crm',
                    children: []
                },
                biRouters: {
                    name: 'bi',
                    children: []
                },
                manageRouters: {
                    name: 'manager',
                    children: []
                }
            }
        };
    });
    it('logo', () => {
        const result = getters.logo(state);
        expect(result).toEqual('@/assets/img/logo.png');
    });
    it('name', () => {
        const result = getters.name(state);
        expect(result).toEqual('云课堂CRM系统');
    });
});
