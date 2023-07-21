import { useEffect, useState } from "react"

import shuffle from "../../utils/Api"
import Card from "../Card/Card"

export interface cardPull {
    image: string
    value: string
}
const Board = () => {

    const [hand, setHand] = useState<cardPull[]>([])

    useEffect(() => {
        shuffle(setHand)
    }, [])
    return (
        <div id="board">
            <div id="hand">
                {hand &&
                    <ul>
                        {hand.map((i, index) => (
                            <Card img={i.image} index={index} />
                        ))}
                    </ul>
                }
            </div>
        </div>
    )

}

export default Board