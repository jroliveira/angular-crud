define([
    // Application Controller
    'controllers/account/IndexController',
    'controllers/account/SaveController',
    'controllers/home/IndexController',

    // Application Templates
    'text!templates/home/index.html',
    'text!templates/account/index.html',
    'text!templates/account/save.html'
], function (
    accountsController,
    saveAccountController,
    homeController,
    homeTemplate,
    accountsTemplate,
    saveAccountTemplate
) {
    return {
        home: {
            title: 'home',
            route: '/',
            controller: homeController,
            template: homeTemplate
        },
        
        accounts: {
            title: 'contas',
            route: '/contas',
            controller: accountsController,
            template: accountsTemplate
        },
        
        saveAccount: {
            title: 'criar conta',
            route: '/conta/criar',
            controller: saveAccountController,
            template: saveAccountTemplate
        }
    };
})
