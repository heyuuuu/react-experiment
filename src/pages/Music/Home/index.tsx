import React, { useState } from "react"

function Home() {
    const [content, setContent] = useState("")
    return <div>
        this is music-home
        <input type="text" value={content} onChange={e => setContent(e.target.value)} />
    </div>
}

export default Home