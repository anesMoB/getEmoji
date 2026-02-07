import './Carousel.css'
import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
function Carousel({ items }) {

    const trackRef = useRef()
    const duplicatedItems = [...items, ...items]
    useEffect(() => {

        const itemsList = gsap.utils.toArray(".item-wrapper")
        var totalWidth = 0
        itemsList.forEach(item => {
            totalWidth += item.offsetWidth + 20
        })
        const tween = gsap.to(itemsList, {
            x: `-=${totalWidth / 2}`,
            duration: 20,
            ease: "linear",
            repeat: -1
        }, [items])
        trackRef.current.addEventListener("mouseenter", () => tween.pause())
        trackRef.current.addEventListener("mouseleave", () => tween.resume())
    }, [items])
    return (
        <div className="carousel-container">
            <div className="carousel-track" ref={trackRef}>
                {duplicatedItems.map((emoji, index) => {
                    return <div key={index} className="item-wrapper">
                        <a href={`#${emoji}`} className='item'>{emoji}
                        </a>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Carousel