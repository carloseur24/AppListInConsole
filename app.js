require('colors');

const {
    inquirerMenu,
    stop
} = require('./helpers/inquirer');
const Homeworks = require('./models/homeworks');
// const {
//     showMenu,
//     stop
// } = require('./helpers/messages.js')

const main = async () => {
    console.log('hola mundo')
    let opt = '';
    do {
        opt = await inquirerMenu()
        console.log({
            opt
        })
        // const homeworks = new Homeworks()
        // const homework = new Homework('buy food');

        // homeworks._list[homework.id] = homework;
        // console.log(homeworks)
        await stop();
    } while (opt !== '0')

}

main()