import React from 'react'

const Header = () => {
  return (
    <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
        <h2>sheryians</h2>
        <div>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/product">Product</a>
            <a href="/contact">Contact</a>
        </div>
</div>
)


}

export default Header