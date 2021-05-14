function update(Billin, Tipin, model){
    const {BillAmount} = model
    const {TipPer} = model
    const FinalTip = ((Number(Billin) * Number(Tipin))/100)
    const TotalTip = (Number(Billin) + Number(FinalTip))
    
    return {
        ...model,
        BillAmount: Number(Billin),
        TipPer: Number(Tipin),
        Tip: FinalTip.toFixed(2),
        Total: TotalTip.toFixed(2)
    }
}
module.exports = {update}