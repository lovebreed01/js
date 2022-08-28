import React, {useContext, useState, useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'


const Header = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
      getCategories().then((newCategories) => setCategories(newCategories))
    })

  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className="border-b w-full inline-block border-blue-200 py-8">
            <div className="md:float-left block">
                <Link href='/'>
                    <span className='logo cursor-pointer font-bold text-4xl text-blue-200'>
                        Lovebreed blog
                    </span>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents ">
                {
                    categories.map((category)=> {
                        return(
                            <Link key={category.slug} href={`/category/${category.slug}`}><span className='md:float-right mt-2 align-middle text-blue500 font-semibold cursor-pointer mx-4 text-blue-100' >
                                {category.name}
                                </span></Link>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Header