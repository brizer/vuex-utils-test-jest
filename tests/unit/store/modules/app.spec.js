/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import testAction from 'vue-test-actions';
import store from '@/store';
import app from '@/store/modules/app';
import * as SystemConfig from '@/api/systemManagement/SystemConfig';

describe('mutations', () => {
    const {
        SET_ACTIVEINDEX,
        SET_NAVACTIVEINDEX,
        SET_APPLOGO,
        SET_APPNAME,
        SET_LANG
    } = app.mutations;

    it('SET_ACTIVEINDEX', () => {
        const state = {
            sidebar: {
                activeIndex: ''
            }
        };
        SET_ACTIVEINDEX(state, '/about');
        expect(state).toEqual({
            sidebar: {
                activeIndex: '/about'
            }
        });
    });

    it('SET_NAVACTIVEINDEX', () => {
        const state = {
            navbar: {
                activeIndex: ''
            }
        };
        SET_NAVACTIVEINDEX(state, '/about');
        expect(state).toEqual({
            navbar: {
                activeIndex: '/about'
            }
        });
    });

    it('SET_APPLOGO', () => {
        const state = {
            logo: ''
        };
        SET_APPLOGO(state, 'img');
        expect(state).toEqual({
            logo: 'img'
        });
    });

    it('SET_APPNAME', () => {
        const state = {
            name: ''
        };
        SET_APPNAME(state, 'ykt');
        expect(state).toEqual({
            name: 'ykt'
        });
    });

    it('SET_LANG', () => {
        window.app.$i18n.locale = '';
        const state = {
            lang: ''
        };
        SET_LANG(state, 'zh');
        expect(state).toEqual({
            lang: 'zh'
        });
    });
});

describe('actions', () => {
    const { SystemLogoAndName } = app.actions;
    it('SystemLogoAndName', () => {
        SystemConfig.adminSystemIndex = jest
            .fn()
            .mockImplementation(() => Promise.resolve({ code: 0, data: { name: 'ykt', logo: 'img' }}));
        const payload = undefined;

        const expectedCommits = [
            { type: 'SET_APPNAME', payload: 'ykt' },
            { type: 'SET_APPLOGO', payload: 'img' }
        ];
        const expectedDispatchs = [];
        testAction(
            SystemLogoAndName,
            expectedCommits,
            expectedDispatchs,
            payload
        );
    });
});
