import React, { useState } from 'react'

const Search = ({getValue}) => { 

    const [text,setText] = useState("")

    const onChange=(v)=>{
        setText(v)
        getValue(v)
    }


    return (
        <section className="search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="search character"
            value={text}
            autoFocus
            onChange={(e)=>onChange(e.target.value)}
          />
          
        </form>
      </section>
    )
}

export default Search
