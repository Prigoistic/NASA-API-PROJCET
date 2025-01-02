export default function Footer(props){
    const {showModal,btnToggle, data} = props
    return(
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>THE APOD PROJECT</h1>
                <h2>{data?.title}</h2>
            </div>
            <button onClick={btnToggle} >
            <i className="fa-solid fa-circle-info"></i>
            </button>
            
        </footer>
    )
}