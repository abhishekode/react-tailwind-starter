import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto flex justify-center items-center h-20 bg-slate-900 text-white mt-10">
                <h1>Footer</h1>
                <span className=' text-base font-mono'>&nbsp;&copy;{ new Date().getFullYear()}</span>
            </div>
        </footer>
    )
}

export default Footer
