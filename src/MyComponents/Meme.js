import React from "react"

export default function Meme() {

    //Getting and Showing the meme image from the api data
    const [meme, setmeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    //meme image
    const [allmemeImage, setmemeImage] = React.useState({})

    React.useEffect(()=>{ 
        // to use async function in useEffect we need to declare it within another function that gets called within use effect
        async function get_meme(){
            const res = await fetch("https://api.imgFlip.com/get_memes")
            const data = await res.json()
            setmemeImage(data)
        }
        get_meme()  // we need to call the function to use the async
    },[])

    function memeGen() {
        const randimg = allmemeImage.data.memes;
        const num = Math.floor(Math.random() * randimg.length);
        const url = randimg[num].url
        setmeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handlechange(event){
        const {name,value} = event.target
        setmeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }

    return (
        <main>
            <from className='form'>
                <input className="input" placeholder="Shut up" value={meme.topText} name="topText" onChange={handlechange}></input>
                <input className="input" placeholder="and take my money" value={meme.bottomText} name="bottomText" onChange={handlechange}></input>
            </from>
            <button className="generate-btn" onClick={memeGen}>Generate a new meme image 🖼️</button>
                <div className="meme">
                    <img src={meme.randomImage} className="img-meme" alt="meme"></img>
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
        </main>
    )
}