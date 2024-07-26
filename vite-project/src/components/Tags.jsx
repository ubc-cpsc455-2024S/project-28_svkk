import React, { useEffect } from 'react'

const Tags = (props) => {
    useEffect(() => {
        console.log(props.tags)
    }, [props.tags])
  return (
    <div className="flex">
            {console.log(props.tags)}
            {props.tags.map((tag) => {
                    console.log(tag);
                    return <div className=" rounded-md bg-sky-400 w-[100px]">HI I am tag</div>
            })}
    </div>  
  )
}

export default Tags
