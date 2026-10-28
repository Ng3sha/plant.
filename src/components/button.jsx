// import React from 'react'

export default function Button({btnname, className = "", icon = null, type}, href) {
  return (
    <>
      <button 
      href={href}
      type={type}
      className={`inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${className}`}
      >
        {icon}
        {btnname}
      </button>
    </>
  )
}
