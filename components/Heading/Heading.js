import React from "react"
import { getTextAlign } from "utils/fonts"
import { getFontSizeForHeading } from "utils/fonts"

// level tem o valor default de 2 para quando não há definição pelo editor
export const Heading = ({textAlign, content, level = 2}) => {
   const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML : { __html:content},
    className: `max-w-5xl mx-auto my-5 
        ${getFontSizeForHeading(level)}
        $getTextAlign(textAlign)`
   }) 

    return tag
}