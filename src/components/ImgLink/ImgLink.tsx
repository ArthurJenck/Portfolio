"use client"
import React from "react"
import Logo from "../../../public/icons/logo.svg"
import Image from "next/image"
import linkedinIcon from "../../../public/icons/linkedin-icon.svg"
import githubIcon from "../../../public/icons/github-icon.svg"
import cvIcon from "../../../public/icons/cv-icon.svg"
import extLinkIcon from "../../../public/icons/ext-link.svg"
import Link from "next/link"
import { scrollUser, useMobile } from "@/app/hooks"

const ImgLink = (props: { for: string; link?: string; otherAlt?: string }) => {
  let link = "/"
  let linkMobile = ""
  let icon = Logo
  let alt = "Logo blanc"

  // Les liens sont importés via le .env pour faciliter un éventuel changement d'URL par la suite
  switch (props.for) {
    case "linkedin":
      link = "https://www.linkedin.com/in/arthurjenck/"
      icon = linkedinIcon
      alt = "Lien vers mon compte Linkedin"
      break
    case "github":
      // Pour les projets, un lien spécifique est fourni. On vérifie si ce lien existe, sinon on renvoie le lien GitHub classique
      link = props.link ? props.link : "https://github.com/ArthurJenck"
      icon = githubIcon
      if (props.otherAlt) {
        alt = props.otherAlt
      } else {
        alt = "Lien vers mon compte GitHub"
      }
      break

    case "cv":
      link = "/cv"
      linkMobile = "/CV Arthur Jenck.pdf"
      icon = cvIcon
      alt = "Lien vers mon CV"
      break
    case "projet":
      link = props.link ? props.link : ""
      icon = extLinkIcon
      alt = "Lien vers le site"
      break

    default:
      break
  }

  const isMobile = useMobile()

  return (
    <div>
      {
        // Le CV est un cas particulier, la version bureau amenant vers une page différente avec un lecteur de PDF, la version mobile faisant télécharger le document
        <Link
          href={props.for === "cv" && isMobile ? linkMobile : link}
          // Dans le cas où le composant représente le logo et sert de to-top, on retire le chargement de la page
          onClick={
            props.for === "logo" && !props.link
              ? (e) => {
                  e.preventDefault()
                  scrollUser(0)
                }
              : () => {}
          }
          className={props.for === "logo" ? "logo-link" : "socials-link"}
          target={props.for === "logo" ? "" : "_blank"}
        >
          <Image src={icon} alt={alt} />
        </Link>
      }
    </div>
  )
}

export default ImgLink
