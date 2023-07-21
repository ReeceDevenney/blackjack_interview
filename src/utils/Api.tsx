interface firstResponse {
    deck_id: string
}

const shuffle = async (setHand: Function, setdeckId: Function) => {
    setHand([])
    let shuffle = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    let shuffled: firstResponse = await shuffle.json()
    setdeckId(shuffled.deck_id)
    let dealHand = await fetch(`https://www.deckofcardsapi.com/api/deck/${shuffled.deck_id}/draw/?count=2`)
    let deltHand = await dealHand.json()
    await setHand(deltHand.cards)
}

export default shuffle