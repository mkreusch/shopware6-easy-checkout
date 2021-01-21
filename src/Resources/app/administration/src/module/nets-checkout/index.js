const { Module } = Shopware;

import './extension/sw-order';

import deDE from './snippet/de-DE.json';
import enGB from './snippet/en-GB.json';

Module.register('nets-checkout', {
    type: 'plugin',
    name: 'NetsCheckout',
    title: 'nets-checkout.general.mainMenuItemGeneral',
    description: 'nets-checkout.general.descriptionTextModule',
    version: '1.1.2',
    targetVersion: '1.1.2',
    icon: 'default-action-settings',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },
});
