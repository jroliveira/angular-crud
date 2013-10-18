define([
  'text!templates/home.html',
  'text!templates/account.html'
], function (homeTemplate, accountTemplate) {
    return {
        home: {
            title: 'home',
            route: '/home',
            controller: 'home',
            template: homeTemplate
        },
        accounts: {
            title: 'contas',
            route: '/contas',
            controller: 'account',
            template: accountTemplate
        }
    };
})
