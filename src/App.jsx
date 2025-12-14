import React from 'react'
import {Bookmark} from "lucide-react";

const App = () => {
  return (
    <div className="main">
      <div className="card">
        <div className="top">
          <img src="https://imgs.search.brave.com/Yq1s_vzLmldjmFJsyCb4kZoNLvIkoDpt1khXCmX3W-c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy9h/bWF6b24tb2ZmaWNp/YWwtbG9nby03MDE3/NTE2OTQ3OTE5NjUx/ZXBveWhrcW9yLnBu/Zw" alt="" />
          <button>SAVE <Bookmark /></button>
        </div>
        <div className="center">
          <h3>amazon <span>5 days ago</span></h3>
          <h2>Senior ui/Ux designer</h2>
        </div>
        <div className="bottom">
          <div>
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai,India</p>
            </div>
            <button>Apply now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
