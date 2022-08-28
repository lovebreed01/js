import React from 'react'
import moment from 'moment'
import Link from 'next/link'
const PostCard = ({post}) => {
  console.log(post);
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
        <div className='relative overflow-hidden shadow-md pb-80 mb-6'>

            <img src={post.featuredimage.url}
             alt={post.title}
             className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg  transition duration-200 hover:scale-110' 
             />
          
        </div>
        <h1 className='transition duration-500  text-center mb-0 cursor-pointer hover:text-blue-600 capitalize text-2xl  font-semibold '>
          <Link href={`/post/${post.slug}`}>
            {post.title}
          </Link>
        </h1>
        <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
            { post.authors.map((author)=>{
              return  (
          <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 ">
              
              
              <img src={author.image.url} alt={author.name} 
              height='30px'
              width='30px'
              className='align-middle rounded-full'
              
              />
              <p className='inline align-middle text-gray-700 ml-2 text-lg'> by {author.name}</p>
           
          </div>
             )
            })}
            <div className="font-medium text-gray-700">
              <div className="flex flex-row  justify-center gap-3 ">
               <img src="calendar.svg" className='h-6' alt="" srcset="" />
               <span> {moment(post.createdAt).format(' MMM DD, YYYY')} </span>
              </div>
              
            </div>
        </div>
        <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>{post.excerpt}</p>
        <div className="text-center">
          <Link href={`/post/${post.slug}`}>
            <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
          </Link>
        </div>
        
    </div>
  )
}

export default PostCard