import React from 'react'

export default function Button(props) {
  const { link } = props
  return (
    <div>
      <button className="btn btn-primary" type="submit" onClick={alert('hi')}>
        <i className="fa fa-home"></i>
        Click to see your Dashboard
      </button>
    </div>
  )
}
