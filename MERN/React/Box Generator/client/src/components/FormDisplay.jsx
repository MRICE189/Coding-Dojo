import React, { useState } from 'react'

const FormDisplay = (props) => {
    console.log(props.allboxes)
    return (
        <div className="d-flex flex-wrap gap-3"> 
            {props.allboxes.map((box, i) => {
                
            return (
                <div key={i} style={{backgroundColor: box.color, height: box.size+"px", width: box.size+"px"}}></div>
                )
            })
            }
        </div>
    )
}

export default FormDisplay