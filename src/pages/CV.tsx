import { useEffect } from "react"

const CV = () => {
    useEffect(() => {
        document.title = "Arthur Jenck – CV"
        document.body.style.overflow = "hidden"
    }, [])
    return (
        <embed
            src="/CV Arthur Jenck.pdf#zoom=25"
            width={"100%"}
            height={"100%"}
            style={{ width: "100%", height: "100dvh" }}
            type="application/pdf"
        ></embed>
    )
}

export default CV
