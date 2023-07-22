interface faceCards {
    "KING": number,
    "QUEEN": number,
    "JACK": number,
    "ACE": number
}

interface value {
    value: string
}

const score = (hand: value[], scored: number, setScored: Function) => {
    setScored(scored = 0)
    let aceCount = 0
    let tempscore = 0
    if (hand.length > 0) {
        let obj: { [index: string]: number } = { "KING": 10, "QUEEN": 10, "JACK": 10, "ACE": 11 }
        for (let i = 0; i < hand.length; i++) {
            if (obj[hand[i]?.value] === 11) {
                aceCount++
                console.log(aceCount)
            }
            if (obj[hand[i]?.value]) {
                tempscore += obj[hand[i]?.value]
            } else {
                tempscore += parseInt(hand[i]?.value)
            }

        }
        console.log(tempscore, "score")
        //checks to see if there are in aces and if you are currentlyg going to bust. reduce the score by increments of 10 in case you 
        // have two aces and dropping only one of them to 1 is the best strategy
        if (aceCount > 0 && tempscore > 21) {
            for (let i = 1; i <= aceCount; i++) {
                tempscore = tempscore - 10
                if (tempscore < 22) {
                    break
                }
            }
            setScored(tempscore)
        } else {
            setScored(tempscore)
        }

    }
}

export default score