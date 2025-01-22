import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="border-b-2 flex items-center justify-between w-full p-4 absolute top-0 left-0">
            {/* Centered third link */}
            <h1 className="text-white text-2xl">Third Link</h1>

            {/* Right-aligned login and signup */}
            <div>
                <ul className="text-white flex gap-10">
                    <li>
                        <Link to='/login'> Login </Link>
                    </li>
                    <li>
                        <Link to="/signup"> Sign Up </Link>
                    </li>
                </ul>
            </div>
        </div>

    );

}

export default Navigation;