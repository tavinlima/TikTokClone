import '../style/sidebar.css'
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

export default function Sidebar({likes,messages,shares}) {
    const [liked, setLiked] = useState(false);

    function handleLike() {
        setLiked(!liked)
    }

    return (
        <div className='sidebar'>
            <div
                onClick={handleLike}
                className='sidebar__options'
            >
                {
                    liked ? <FavoriteIcon fontSize='large' /> :
                        <FavoriteBorderIcon fontSize='large' />
                }
                <p>{ liked? likes + 1 : likes}</p>
            </div>
            <div className='sidebar__options'>
                <ChatIcon fontSize='large' />
                <p>{messages}</p>
            </div>
            <div className='sidebar__options'>
                <ShareIcon fontSize='large' />
                <p>{shares}</p>
            </div>
        </div>
    )
}