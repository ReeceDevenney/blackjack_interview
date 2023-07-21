interface test {
    img: string
    index: number
}
const Card = ({ img, index }: test) => {
    return (
        <li key={index}>
            <img src={img}></img>
        </li>
    )
}

export default Card