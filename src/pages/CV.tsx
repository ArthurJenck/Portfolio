import { useEffect } from "react"

const CV = () => {
    useEffect(() => {
        document.title = "Arthur Jenck – CV"
        document.body.style.overflow = "hidden"
    }, [])
    return (
        <iframe
            src="/CV Arthur Jenck.pdf#Fit"
            width={"100%"}
            height={"100%"}
            style={{ width: "100%", height: "100dvh", border: "none" }}
        ></iframe>
    )
}

export default CV
