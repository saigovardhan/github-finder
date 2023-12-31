import {PropTypes} from 'prop-types'
import { Link } from 'react-router-dom'
function UserItem({user:{login, avatar_url}}){
    return(
        <div className='card shadow-md compact side bg-gray-50 text-black'>
            <div className="flex-row items-center space-x-4 card-body">
                <div className='avatar'>
                    <div className='rounded-full shadow w-14 h-13'>
                        <img src={avatar_url} alt = "profile"/>
                    </div>
                </div>
                <div>
                    <h2 className='card-title'>{login}</h2>
                    <Link to="/" className="text-base-content text-opacity-40">
                        {`/users/${login}`}
                    </Link>
                </div>
            </div>
        </div>
    )
}

UserItem.propTypes= {
    user: PropTypes.object.isRequired,
}

export default UserItem