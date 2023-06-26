// Alex Joshua (c) 2022

import "../../styles/spinLoader.css";

export default function SpinLoader() {
  return ( 
    //Note that resizing window will change how much of the border is
    //actually taking on color at any given time
    //This can be changed but I like the variation for now.
    <div class="slc">
        <div class="outerContainer">
            <div class="spinner"></div>
            <div class="innerContainer">
                <h1>Spinning!</h1>
            </div>
        </div>
    </div>
  )
}
