import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    
    return (
        <div className="w-1/3 bg-gray-300 ml-4 mt-2 pt-4 mb-4">
            <div className="text-4xl text-center m-4 bg-purple-600"><h3>Reading Time: {readingTime} Minutes</h3></div>
            <h2 className='text-3xl text-center '>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.prototype ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;