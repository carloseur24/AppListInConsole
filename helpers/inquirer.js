const inquirer = require('inquirer');
require('colors')

const menuOpts = [{
    type: 'list',
    name: 'options',
    message: 'What do you want to do?',
    choices: [{
            value: '1',
            name: '1. Create a work',
        }, {
            value: '2',
            name: '2. List a work'
        },
        {
            value: '3',
            name: '3. List a work completed'
        },
        {
            value: '4',
            name: '4. List a pending work'
        },
        {
            value: '5',
            name: '5. Completing a work'
        },
        {
            value: '6',
            name: '6. Delete a work'
        },
        {
            value: '0',
            name: '0. Quit of app'
        },
    ]
}]


const inquirerMenu = async () => {
    console.clear()
    console.log('===================='.cyan)
    console.log('  Select an option'.blue)
    console.log('====================\n'.cyan)

    const {
        options
    } = await inquirer.prompt(menuOpts);
    return options;
}
const stop = async () => {
    const stoper = [{
        tipe: 'input',
        name: 'continue',
        message: `Press ${'ENTER'.blue} to continue `,
    }]
    console.log('\n')
    await inquirer.prompt(stoper);
}
module.exports = {
    inquirerMenu,
    stop
}