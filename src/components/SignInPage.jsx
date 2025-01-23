const LoginPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center h-96 w-96 border border-indigo-600 p-4">
                <h1 className="mb-4 text-xl font-semibold">Sign In to Third Link</h1>
                <div className="p-2">
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded">
                        Sign In with Google
                    </button>
                    <p className="text-center p-4 text-sm">Or SignUp here</p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
