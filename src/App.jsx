import './App.css'
import { useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { getEmojisGroups } from './api/data'
import Carousel from './components/Carousel/Carousel'
import ShowEmojiGroupe from './components/EmojisGroupe/ShowEmojiGroupe'
import Searching from './components/Searching/Searching'
import { SearchContext } from './context/search_context/SearchContext.jsx'
import gsap from 'gsap'

function App() {
  const [emojisGroups, setEmojisGroups] = useState([])
  const { isSearched } = useContext(SearchContext)

  useLayoutEffect(()=>{
      if (!emojisGroups.length) return

    console.log("before gsap")
    gsap.fromTo(".groupeRef",{
            y:20,
      opacity:0,
    },{
      y:0,
      opacity:1,
      ease:"linear",
      stagger:0.2
    })
  },[emojisGroups])
  useEffect(() => {
    const getEmojisGroupsFunc = async () => {
      const data = await getEmojisGroups()
      let newData = []
      data.map(category => {
        // let item = category;
        let item = category.split(" ")[0];
        let include = newData.indexOf(item)
        if (include == -1) {
          newData.push(item)
        }
      })
      setEmojisGroups(newData)
    }

    getEmojisGroupsFunc()

  }, [])
  const emojisGroupsMemo = useMemo(() => {
    return (emojisGroups.map((groupe, index) => {
      return <div className="groupeRef" key={index} ><ShowEmojiGroupe groupeName={groupe} /></div>
    }))
  }, [emojisGroups])

  useEffect(() => {
    console.log("hgfhfghfg");

  }, [emojisGroups])

  return (
    <div className='Home'>
      <div className="description-section">
        <h1>✂️ Copy and 📋 Paste Emoji 👍 No apps required</h1>
      <div><span>Emojis</span> are <span>supported</span> on iOS, Android, macOS, Windows, Linux and ChromeOS. Copy and paste emojis for <span>Twitter</span>, <span>Facebook</span>, <span>Instagram</span>, <span>Snapchat</span>, <span>Slack</span>, <span>GitHub</span>, <span>Instagram</span>, <span>WhatsApp</span> and <span>more</span>.</div>
      </div>
      <Carousel items={emojisGroups} />
      <Searching />
      {!isSearched && emojisGroupsMemo 

      }


    </div>
  )
}

export default App

