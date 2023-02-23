import React, { useEffect, useState } from "react";
import "../style.css"


export default function Meme() {
     const [memeImage, setMemeValue] = useState({
          formText: "",
          bottomText: "",
          randomImage: "http://placekitten.com/200/300"
     })
     const [meme, setMeme] = useState([])
     useEffect(() => {
          fetch(`https://api.imgflip.com/get_memes`).then(res => res.json())
               .then(data => setMeme(data))
     }, [])

     function getMemeImage() {
          let memeValue = meme.data.memes
          console.log(memeValue, "memeValue")
          let randomNumber = Math.floor(Math.random() * memeValue.length)
          console.log(randomNumber, "randomNumber")
          let url = memeValue[randomNumber].url
          setMemeValue(prevState => ({
               ...prevState,
               randomImage: url
          }))
     }
     function handleChange(event) {
          const { name, value } = event.target
          event.preventDefault()
          setMemeValue(prevState => ({
               ...prevState,
               [name]: value
          }))
     }
     return (
          <main>
               <div className="form">
                    <input type="text" placeholder="form text"
                         className="form--input" name="formText"
                         value={memeImage.formText}
                         onChange={handleChange}
                    />

                    <input type="text" placeholder="buttom  text"
                         className="form--input" name="bottomText"
                         value={memeImage.bottomText}
                         onChange={handleChange}

                    />
                    <button className="form--button" onClick={getMemeImage}>Get a new meme image </button>
               </div>
               <div className="meme">
                    <h2>{memeImage.formText}</h2>
                    <h2>{memeImage.bottomText}</h2>
                    <img src={memeImage.randomImage} alt="" className="form--image" width={"200px"}

                    />

               </div>
          </main>


     )
}
