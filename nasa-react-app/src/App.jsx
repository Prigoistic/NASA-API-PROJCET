import SideBar from "./components/SideBar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"


function App() {
  const [data, setData] = useState(null)
  const [loading, setloading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  
  function btnToggle(){
    setShowModal(!showModal)
  }
  
  useEffect(() => {
    async function fetchData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log("Fetched from Cache")
        return

      }
      localStorage.clear()
      try {
        const response = await fetch(url)
        const apiData = await response.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log("Fetched from API today")
        console.log('DATA\n', apiData)

      } catch (err) {
        console.log(err.message)

      }



      
    }
    fetchData()


  }, [])
  

  return (
    <>
    
    {data ? (<Main data = {data}></Main>) :(
      <div className="loadingState">
        <i className="fa-solid fa-gear"></i>
      </div>
    )}
    {showModal && (

      <SideBar data = {data} btnToggle={btnToggle}></SideBar>
    )}
    {data && (
      <Footer data = {data} btnToggle={btnToggle}></Footer>)}
    

    

      
    
      
    </>
  )
}

export default App
