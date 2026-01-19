import "./Card.css"
type CardProps = {
    children?: React.ReactNode
}

const Card = ({children} : CardProps) => {
    return <div className="card">{children ? children : <p>Nenhum conteudo disponivel</p>}</div>
}

export default Card