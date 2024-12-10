import { useEffect } from "react"

const CV = () => {
    useEffect(() => {
        document.title = "Arthur Jenck – CV"
        document.body.style.overflow = "hidden"
    }, [])
    return (
        // Le zoom n'a pas besoin d'être au-dessus de 25%
        <iframe
            src="/CV Arthur Jenck.pdf#zoom=25"
            width={"100%"}
            height={"100%"}
            style={{ width: "100%", height: "100dvh", border: "none" }}
        ></iframe>
    )
}

export default CV
