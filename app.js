//Puedes poner mas cosas en {} que vengan del view
const {printTable} = require('console-table-printer')

const {appinput} = require('./view')



async function app(state, update, view){
    while(true){
        const {model, currentView} = state
        const {title, table} = currentView

        //Interface
        console.clear()
        console.log(title)
        printTable(table)

        //inputs
        const input = await appinput(model)
        console.log(input['BillAmount'] ,input['TipPer'])
        
    }

}
module.exports = {app}