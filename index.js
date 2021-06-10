function superbowlWin(array) {
    const win = array.find(superBowl => superBowl.result === "W")

    if (win) {
        return win.year
    } else {
        return undefined
    }
}