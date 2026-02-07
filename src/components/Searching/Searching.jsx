import { useContext, useEffect, useState } from "react";
import "./Searching.css"
import { BiSearchAlt } from "react-icons/bi";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

import { getEmojisWithinGroupe, getRandomEmoji } from "../../api/data";
import { copyEmoji, decodeHtml } from "../../tools/workWithEmojis";
import { SearchContext } from "../../context/search_context/SearchContext";

function Searching() {
    const [emojisList, setEmojisList] = useState([])
    const [searchName, setSearchName] = useState('')
    const [randomEmoji, setRandomEmoji] = useState('')
    const { isSearched, setIsSearched } = useContext(SearchContext)
    const getRandomEmojisFunc = async () => {
        const data = await getRandomEmoji()
        setRandomEmoji(data)
    }
    const getEmojisWithinGroupeFunc = async () => {
        if (searchName == null || searchName == '') {
            return;
        } else {

            setIsSearched(true)
            const data = await getEmojisWithinGroupe(searchName)
            setEmojisList(data)
        }
    }
    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (e.key == 'Enter') getEmojisWithinGroupeFunc()
        })

        return ()=>{
             document.removeEventListener("keydown", (e) => {
            if (e.key == 'Enter') getEmojisWithinGroupeFunc()
        })
        }
    }, [])
    return (
        <div className="searching-container">
            <div className="search-section">
                <input onSubmit={getEmojisWithinGroupeFunc}
                    onChange={(e) => {
                        setSearchName(e.target.value)
                        if (e.target.value == '') {
                            setIsSearched(false)
                            setEmojisList([])
                        }
                    }}
                    type="text" name="emoji search" id="searchEmoji" placeholder="write an emoji name" />
                <button type="submit" onClick={getEmojisWithinGroupeFunc}><BiSearchAlt />
                </button>
                <div className="random" onClick={getRandomEmojisFunc}>
                    <GiPerspectiveDiceSixFacesRandom />
                </div>

            </div>
            {randomEmoji && <div className='emojiData'
                onClick={() => { copyEmoji(randomEmoji) }}
            >
                <div className="emoji">{decodeHtml(randomEmoji.htmlCode[0])}</div>
                <div className="emojiName">{randomEmoji.name.split(",")[0]}</div>
            </div>}

            {isSearched && <div className="groupeEmojis">
                {emojisList.map((emoji) => {
                    return emoji.htmlCode.map((emojiCode, index2) => {
                        return <div key={emojiCode} className="emoji" onClick={() => { copyEmoji(emoji, index2) }}>
                            {decodeHtml(emojiCode)}
                        </div>
                    })

                })}</div>}
        </div>
    )
}

export default Searching