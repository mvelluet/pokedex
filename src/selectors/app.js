import * as R from 'ramda';

const selectApp = state => state.app;
export const selectTab = state => R.prop('tab', selectApp(state));