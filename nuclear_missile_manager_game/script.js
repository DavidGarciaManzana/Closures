// function launchAll(launchMissile) {
//     for (let i = 0; i < 5; i++) {
//         setTimeout(function () {
//             launchMissile[i]
//             console.log(launchMissile[i])
//         }, i * 1000);
//     }
// }
//
// launchAll([0, 1, 2, 3, 4])

function launchAll(launchMissile) {
    let newArray = []
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            newArray.push(launchMissile[i])
            console.log(newArray)
            return newArray
        }, i * 1000);
        setTimeout(function () {
            return newArray
        }, 5000);
    }
    setTimeout(function () {
        return newArray
    }, 6000);

}

launchAll([0, 1, 2, 3, 4])