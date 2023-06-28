// code your solution here
function saturdayFun(event = 'roller-skate') {
    return `This Saturday, I want to ${event}!`
}

function mondayWork(event2 = 'go to the office') {
    return `This Monday, I will ${event2}.`
}

function wrapAdjective(special) {
    return function(whatYouAre) {
        return `You are ${special}${whatYouAre}${special}!`
    }
}