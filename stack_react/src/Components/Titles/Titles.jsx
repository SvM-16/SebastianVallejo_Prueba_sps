import '../../Components/Titles/Title.css'

const Title = ({titulos}) => {
    return(
        <>
            <div className="container">
                <div className="titulo">
                    <div className='titulos'>{titulos}</div>
                </div>
            </div>
        </>
    )
}

export default Title