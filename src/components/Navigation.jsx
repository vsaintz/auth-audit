import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="w-full p-4 absolute top-0 left-0">
            <div>
                <ul className="flex gap-10 text-white justify-center">
                    <li className='hover:underline'>
                        <Link to='/signin'> SignIn </Link>
                    </li>
                    <li className='hover:underline'>
                        <Link to="/signup"> SignUp </Link>
                    </li>
                </ul>
            </div>
        </div>

    );

}

export default Navigation;