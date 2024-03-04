"use client"

import MenuMobile from "./menu-mobile"


export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between px-4 h-14">
        <div>logo</div>
          <MenuMobile />
      </header>
    </>
  )
}