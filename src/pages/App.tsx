import { useEffect } from "react"

const App = () => {
    useEffect(() => {
        const link = document.querySelector(
            "link[rel~='icon']"
        ) as HTMLLinkElement
        link.href = "./src/assets/icons/logo.svg"
    }, [])
    return <></>
}

export default App
