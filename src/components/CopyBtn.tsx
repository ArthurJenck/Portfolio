import copyIcon from "../assets/icons/copy.svg"
import checkIcon from "../assets/icons/check.svg"
import "../styles/CopyBtn.scss"

const CopyBtn = () => {
    const handleCopyClick = (e: React.MouseEvent<HTMLImageElement>) => {
        // On récupère le bouton-icone sur lequel l'utilisateur a cliqué
        const currentCopyBtn = e.target as HTMLImageElement
        // On trouve ensuite la balise a sibling
        const linkElem = currentCopyBtn.parentElement
            ?.firstChild as HTMLLinkElement
        // On ajoute le href du lien au presse-papier, en retirant les schémas d'url
        navigator.clipboard.writeText(
            linkElem.href.replace("mailto:", "").replace("tel:", "")
        )
        // Pendant une seconde, l'icone se modifie en coche pour signifier le succès de l'opération
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
