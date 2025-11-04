import React from 'react'
import "../stylesheats/ExtensionCard.css"

export const ExtensionCard = () => {
  return (
    <>
    <h1 className='title'>Card Extension</h1>
    
    <div className="card">
    <div className="info">
    <div className="icon">🧭</div>
    <div>
      <h3>DevLens</h3>
      <p>Quickly inspect page layouts and visualize element boundaries.</p>
    </div>
    </div>
    <div className="actions">
    <button>Remove</button>
    <label className="switch">
      <input type="checkbox" checked />
      <span className="slider"></span>
    </label>
    </div>
    </div>
    </>
  )
}
