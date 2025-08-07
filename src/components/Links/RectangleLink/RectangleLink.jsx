import "./RectangleLink.css"

import BaseLink from "s/components/Links/Link.jsx"

function RectangleLink(linkProps) {
    return (
        <BaseLink {...linkProps} className="rectangle-link" />
    )
}

export default RectangleLink;