//Alex Joshua (c) 2022
'use client'

import "../../styles/typingAnim.css";
import { TypeAnimation } from "react-type-animation";

export default function TypingAnim() {
    return (
        <div class="ta px-20">
            <TypeAnimation
                sequence={[
                    'Here is some sample text',
                    3000,
                    'Here is some sample text. And here is a bit more text'
                ]}
                wrapper="div"
                cursor={false}
                className="typedText"
            />
        </div>
    )
}
