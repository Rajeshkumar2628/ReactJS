import React from 'react'

function Title() {
    console.log("Title Page")
  return (
    <div>
      Welcome to App
    </div>
  )
}

export default React.memo(Title)