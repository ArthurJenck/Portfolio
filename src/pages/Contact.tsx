import React from "react"

const Contact = ({
    spiralTurn = (e: React.MouseEvent) => {
        e
    },
}) => {
    return (
        <section
            id="contact"
            onMouseMove={(e) => {
                spiralTurn(e)
            }}
        >
            <h2>On va boire un verre ?</h2>
        </section>
    )
}

export default Contact
