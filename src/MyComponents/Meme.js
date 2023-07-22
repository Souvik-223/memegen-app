import React from "react"
import Data from './Data'

export default function Navbar() {

    //Getting and Showing the meme image from the api data
    const {meme,setMeme} = React.useState({
        topText : "",
        bottomText : "",
        randomImage : ""
    })

    //meme image
    const [allmemeImage,setmemeImage] = React.useState(Data)

    function memeGen() {
        const randimg = allmemeImage.data.memes;
        const num = Math.floor(Math.random()*randimg.length);
        const url = randimg[num].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    return (
        <main>
            <from className='form'>
                <input className="input" placeholder="Shut up"></input>
                <input className="input" placeholder="and take my money"></input>
            </from>
            <button className="generate-btn" onClick={memeGen}>Generate a new meme image 🖼️</button>
            <center>
            <img src={meme} className="img-meme" alt="meme"></img>
            </center>
        </main>
    )
}