import PropTypes from 'prop-types';
import {FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title,cover,author_img,reading_time,author,posted_date,hashtags} = blog;
    console.log(blog);

    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-4' src={cover} alt={`Cover picture of title : ${title}`} />

            <div className='flex justify-between  mb-8'>
                <div className='flex '>
                    <img className='w-14' src={author_img} alt="author_img" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-4xl mb-4'>{title}</h1>
            <p className='mb-3'>
                {
                    hashtags.map((hash,idx) => <span key={idx}> <a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={()=> handleMarkAsRead(id, reading_time)} className='text-purple-800 font-bold underline'>Mark As Read</button>


        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;