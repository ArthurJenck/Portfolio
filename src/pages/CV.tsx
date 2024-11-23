import { useEffect } from "react"
import cvFile from "/CV Arthur Jenck.pdf"

// Changement du style du body car la balise embed cause un scroll inutile
const CV = () => {
    useEffect(() => {
        document.title = "Arthur Jenck – CV"
        document.body.style.overflow = "hidden"
    }, [])
    return (
        <embed
            src={`${cvFile}#zoom=25`}
            width={"100%"}
            height={"100%"}
            style={{ width: "100%", height: "100dvh" }}
            type="application/pdf"
        ></embed>
    )
}

export default CV
