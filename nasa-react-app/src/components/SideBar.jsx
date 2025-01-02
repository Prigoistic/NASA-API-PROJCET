export default function SideBar(props){
    const {btnToggle, data} = props
    
    return (
        <div className="sideBar">
            <div onClick={btnToggle} className="bgOverlay">
                <div className="sidebarContents">
                    <h2>{data?.title}</h2>
                    <div className="descriptionContainer">
                        <p className="descriptionTitle">{data?.date}</p>
                        <p>{data?.explanation}</p>
                    </div>
                    <button className="arrow" onClick={btnToggle}>
                    <i className="fa-solid fa-arrow-right"></i>

                    </button>
                </div>
            </div>
            
        </div>

    )
}