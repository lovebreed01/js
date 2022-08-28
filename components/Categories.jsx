import React from 'react'
import { useState , useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
      getCategories().then((newCategories) => setCategories(newCategories))
    })

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-4'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Categories
      </h3>

      {categories.map((category)=>(

        <Link key={category.name} href={`/category/${category.slug}`}>
          <span>{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default Categories