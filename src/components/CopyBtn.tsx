import copyIcon from "../assets/icons/copy.svg"
import checkIcon from "../assets/icons/check.svg"
import "../styles/CopyBtn.scss"

const CopyBtn = () => {
    const handleCopyClick = (e: React.MouseEvent<HTMLImageElement>) => {
        const currentCopyBtn = e.target as HTMLImageElement
        const linkElem = currentCopyBtn.parentElement
            ?.firstChild as HTMLLinkElement
        navigator.clipboard.writeText(
            linkElem.href.replace("mailto:", "").replace("tel:", "")
        )
        currentCopyBtn.src = checkIcon
        currentCopyBtn.style.display = "block"
        setTimeout(() => {
            currentCopyBtn.src = copyIcon
            currentCopyBtn.style.display = ""
        }, 1000)
    }

    return (
        <img
            src={copyIcon}
            className="about-links__copy"
            onClick={(e) => handleCopyClick(e)}
        ></img>
    )
}

export default CopyBtn
