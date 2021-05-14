const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function apptitle(){
    return chalk.green(
        figlet.textSync('Tip Calculator App', 
            {
            horizontalLayout: 'full', font: 'big'
            }
        )
    )
}
function tiptable(model){
    const {BillAmount} = model //BillAmount = model.Billamount
    const {TipPer} = model
    const {Tip} = model
    const {Total} = model
    return [
        {
            'Bill Amount': `$${BillAmount}`,
            'Tip (%)': `${TipPer}`,
            'Tip': `$${Tip}`,
            'Total': `$${Total}`
        }
    ]
}

function appinput(model){
    const {BillAmount} = model
    const {TipPer} = model
    const message1 = 'Bill Amount?'
    const message2 = 'Tip (%)?'
    return inquirer.prompt([ 
        { 
            name: 'BillAmount',
            type: 'input',
            message: message1,
            default: BillAmount,
            validate: function(value){
                if(value >= 0) {return true}
                else {return 'Invalid Number'}
            }
        },
        {
            name: 'TipPer',
            type: 'input',
            message: message2,
            default: TipPer,
            validate: function(value){
                if(value >= 0) {return true}
                else {return 'Invalid Number'}
            }
        }
    ])
}
function view(model){
    return{
        title: apptitle(),
        table: tiptable(model),
    }
}
module.exports = {view, appinput}