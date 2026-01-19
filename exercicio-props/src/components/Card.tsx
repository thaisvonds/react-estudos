type CardProps = {
    title: string
    description: string
}

const Card = ({title, description}: CardProps) => {
    return (
        <div>Card funcionando: {description}
        <h1>Titulo: {title}</h1>
        </div>
    )
}

export default Card