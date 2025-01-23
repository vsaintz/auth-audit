import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="flex items-center justify-between w-full p-4 absolute top-0 left-0">
            <h1 className="text-white text-2xl">Third Link</h1>

            <div>
                <ul className="text-white flex gap-10">
                    <li>
                        <Link to='/signin'> SignIn </Link>
                    </li>
                    <li>
                        <Link to="/signup"> SignUp </Link>
                    </li>
                </ul>
            </div>
        </div>

    );

}

export default Navigation;