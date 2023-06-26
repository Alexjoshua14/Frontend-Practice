// Alex Joshua (c) 2022

import '../../styles/splitText.css';

export default function SplitText() {
    let text = "Here is some example text";
    
    return (
        <div class="stc">
            <div class="innerContainer"> 
                <div class="rectangle"></div>
                <span class="innerText">{text}</span>
            </div>
            <span class="outerText">{text}</span>
        </div>
    )
}
