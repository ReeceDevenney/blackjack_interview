import { useEffect, useState } from "react"

import shuffle from "../../utils/Api"
import Card from "../Card/Card"
import score from "../../utils/score"
import draw from "../../utils/draw"

export interface cardPull {
    image: string
    value: string
}
const Board = () => {


    const [hand, setHand] = useState<cardPull[]>()
    const [scored, setScored] = useState(0)
    const [deckId, setdeckId] = useState<string>("")

    useEffect(() => {
        shuffle(setHand, setdeckId)
    }, [])

    useEffect(() => {
        if (hand) {
            score(hand, scored, setScored)
        }
    }, [hand])

    return (
        <div id="board">
            {scored < 21 &&
                <div>
                    <button onClick={() => draw(deckId, setHand, hand)}>DRAW</button>
                    <p>{scored}</p>
                </div>
            }
            {scored > 21 &&
                <div>
                    <p>Bust!</p>
                    <button onClick={() => shuffle(setHand, setdeckId)}>Play Again!</button>
                </div>
            }
            {scored === 21 &&
                <div>
                    <p>BlackJack!</p>
                    <button onClick={() => shuffle(setHand, setdeckId)}>Play Again!</button>
                </div>
            }
            <div id="handContainer">
                <div id="hand">
                    {hand != undefined &&
                        <div>
                            <ul>
                                {hand?.map((i, index) => (
                                    <Card img={i.image} index={index} />
                                ))}
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    )

}

export default Board