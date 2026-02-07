import { useEffect, useLayoutEffect, useState } from "react"
import "./ShowEmojiGroupe.css"
import { getEmojisWithinGroupe } from "../../api/data"
import { decodeHtml, copyEmoji } from "../../tools/workWithEmojis"

function ShowEmojiGroupe({ groupeName }) {
    const [emojisList, setEmojisList] = useState([])

    useLayoutEffect(() => {
        const getEmojisWithinGroupeFunc = async () => {
            // const newGroupeName=groupeName.replaceAll(" ","-")
            const data = await getEmojisWithinGroupe(groupeName)
            setEmojisList(data)
        }

        getEmojisWithinGroupeFunc()
    }, [])

    if (emojisList.length == 0) return <></>
    return (

        <details id={groupeName} open >
            <summary>{groupeName}</summary>
            <div className="groupeEmojis">{
                emojisList.map((emoji) => {
                    return emoji.htmlCode.map((emojiCode, index2) => {
                        return <div key={emojiCode + index2} className="emoji" onClick={() => { copyEmoji(emoji, index2) }}>
                            {decodeHtml(emojiCode)}
                        </div>
                    })

                })
            }</div>
        </details>


    )
}

export default ShowEmojiGroupe