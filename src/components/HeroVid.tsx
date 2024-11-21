import BG_Webm from "../assets/videos/portfolio-bg.webm"
import BG_Mp4 from "../assets/videos/portfolio-bg.mp4"
import PlaceHolder from "../assets/images/hero-placeholder.png"
import { useState, useEffect, useRef } from "react"

const isSafari = () => {
    const ua = navigator.userAgent.toLowerCase()
    return ua.indexOf("safar") > -1 && ua.indexOf("chrome") < 0
}

const HeroVid = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [shouldUseImg, setShouldUseImg] = useState(false)

    useEffect(() => {
        if (isSafari() && ref.current) {
            const player = ref.current.children[0] as HTMLVideoElement
            if (player) {
                player.controls = false
                player.playsInline = true
                player.muted = true
                player.setAttribute("muted", "")
                player.autoplay = true

                setTimeout(() => {
                    player
                        .play()
                        .then(() => {})
                        .catch(() => {
                            ref.current!.style.display = "none"
                            setShouldUseImg(true)
                        })
                }, 0)
            }
        }
    }, [])

    return shouldUseImg ? (
        <img src={PlaceHolder} className="hero-bg" alt="Image de fond" />
    ) : (
        <div
            ref={ref}
            dangerouslySetInnerHTML={{
                __html: `
                <video
                loop
                muted
                autoplay
                playsinline
                class="hero-bg"
                >
                <source src="${BG_Webm}" type="video/webm" />
                <source src="${BG_Mp4}" type="video/mp4" />
            `,
            }}
        ></div>
    )
}

{
    /* <div
            ref={ref}
            dangerouslySetInnerHTML={{
                __html: `
            <video class="hero-bg" autoplay muted loop>
            <source src=${BG_Webm} type="video/webm" />
            <source src=${BG_Mp4} type="video/mp4" />
        </video>
            `,
            }}
        ></div> */
}

export default HeroVid
