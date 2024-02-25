var getRow = function (rowIndex) {
    let row = [1]
    while (rowIndex > 0) {
        row.splice(0, 0, 0)  
        row.push(0)          
        row = nextRow(row)
        rowIndex--
    }
    return row
};

function nextRow(ary) {
    let res = []
    for (let i = 0; i < ary.length - 1; i++) {
        res.push(ary[i] + ary[i + 1])
    }
    return res
}
