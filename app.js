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
        const updatedModel = update(input['BillAmount'], input['TipPer'], model)
        state = {
            ...state, 
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
}
module.exports = {app}