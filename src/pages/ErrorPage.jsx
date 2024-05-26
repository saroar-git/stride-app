import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { error, status } = useRouteError();

    return (
        <div className="flex flex-col justify-center items-center h-screen text-center py-32 w-full bg-red-50">
            <h1 className=" text-7xl font-extrabold mb-8">Error {status || 404}</h1>
            <p className="lg:text-3xl">{error?.message}</p>
            <button className="btn btn-success text-white font-bold mt-8">
                <Link to="/">Back to HomePage</Link>
            </button>
        </div>
    );
};

export default ErrorPage;