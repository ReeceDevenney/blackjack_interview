interface test {
    img: string
    index: number
}
const Card = ({ img, index }: test) => {
    console.log(typeof (img), "hi")
    return (
        <li key={index}>
            <img src={img}></img>
        </li>
    )
}

export default Card