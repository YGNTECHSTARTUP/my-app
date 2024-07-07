import React from 'react'
import { CircleArrowDown } from 'lucide-react'
import { Sheet, SheetContent,  SheetHeader,  SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
const NavLinks = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/AboutMe" },
  { name: "My Tech Stack", href: "/MyTechStack" },
  { name: "Projects", href: "/Projects" },
  { name: "GuestBook", href: "/GuestBook" },
  { name: "Contact Me", href: "/ContactMe" }
];

const navlink = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/AboutMe" },
  { name: "GuestBook", href: "/GuestBook" }
];

const nav = [
  { name: "My Tech Stack", href: "/MyTechStack" },
  { name: "Projects", href: "/Projects" },
  { name: "Contact Me", href: "/ContactMe" }
];

const navbar = () => {
  return (
    <div className='md:ml-[2%] flex w-full z-20   h-16 justify-between bg-slate-100 rounded-full  text-center p-2 mt-[5%] sm:w-[95%]  mx-auto'>
   <Link href={'/'}>
   <div className='text-3xl font-extrabold mt-2 ml-[50%] cursor-pointer hover:underline hover:text-teal-700 '>YGN</div>
   </Link>
    
    <div className='md:hidden'>
    <Sheet>
      <SheetTrigger>
      <CircleArrowDown fill="black" size={45} className='mt-1 animate-pulse text-white'/>
      </SheetTrigger>
      <SheetContent side={'top'} className='transition '>
      <SheetHeader>
        {
          NavLinks.map((link) => (
            <Link key={link.href} href={link.href}>
            <Button  variant='link' className='text-2xl font-bold hover:text-teal-700'>{link.name}</Button>
            
            </Link>
          ))
        
        }
        </SheetHeader>
      </SheetContent>
    </Sheet>
    </div>
    <div className='hidden md:flex lg:hidden mt-2 hover:underline '>
     {
         navlink.map((link)=><Link key={link.name} href={link.href}><Button variant='link' className='text-2xl font-bold hover:text-teal-700'>{link.name}</Button></Link>)
     }
    <Sheet>
      <SheetTrigger>
      <CircleArrowDown fill="black" size={45} className='-mt-1 animate-pulse text-white'/>
      </SheetTrigger>
      <SheetContent side={'top'} className='transition '>
      <SheetHeader>
        {
          nav.map((link) => (
            <Link key={link.name} href={link.href}>
            <Button  variant='link' className='text-2xl font-bold hover:text-teal-700'>{link.name}</Button>
            </Link>
          ))
        
        }
        </SheetHeader>
      </SheetContent>
    </Sheet>
    </div>
    <div className='mt-3 hidden lg:block text-xl font-extrabold  '>
      {
        NavLinks.map((link)=>
            <Link key={link.name} href={link.href} className='ml-10 hover:underline hover:text-teal-600' >
            {link.name}
            </Link>
          )
        
      }
      
    </div>
    
    
  
    </div>
  )
}

export default navbar