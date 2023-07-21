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
    if (hand.length > 0) {
        let obj: { [index: string]: number } = { "KING": 10, "QUEEN": 10, "JACK": 10, "ACE": 11 }
        for (let i = 0; i < hand.length; i++) {
            if (obj[hand[i]?.value]) {
                setScored(scored += obj[hand[i]?.value])
            } else {
                setScored(scored += parseInt(hand[i]?.value))
            }

        }
    }
}

export default score