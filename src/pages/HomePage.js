// Alex Joshua (c) 2022

import '../css/HomePage.css';
import { TypeAnimation } from "react-type-animation";

export default function HomePage() {
    return(
        <div class="home">
            <TypeAnimation 
                sequence={[
                    "Practicing JS and CSS in React Framework"
                ]}
                wrapper="div"
                cursor={false}
                className="gradientText"
            />
        </div>
    )
}