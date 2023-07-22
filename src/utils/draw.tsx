const draw = async (deckId: string, setHand: Function, hand: any) => {
    let draw = await fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    let newCard = await draw.json()
    await setHand([...hand, newCard.cards[0]])
}

export default draw