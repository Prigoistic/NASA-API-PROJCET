export default function Main(props){
    const {data} = props
    return(
    <div className="imgContainer">
        <img className="bgimage" src={data.hdurl} alt={data.title || 'bg image'} />

    </div>
    )
}