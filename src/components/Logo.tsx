import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <a href="/" className="header-logo">
      <img src="https://shopsonmoi.vn/assets/uploads/files/60be3-logo.png" alt="Logo" style={{ width: 60, height: 60 }} />
    </a>
  )
}

export default Banner