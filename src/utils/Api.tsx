interface firstResponse {
    success: boolean
    deck_id: string
    shuffled: boolean
    remaining: number
}

const shuffle = async (setHand: Function) => {
    let shuffle = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    let shuffled: firstResponse = await shuffle.json()
    let dealHand = await fetch(`https://www.deckofcardsapi.com/api/deck/${shuffled.deck_id}/draw/?count=2`)
    let deltHand = await dealHand.json()
    setHand(deltHand.cards)
}

export default shuffle