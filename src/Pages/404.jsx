import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex flex-col gap-4 justify-center h-screen items-center">
            <h1 className="text-red-500 text-4xl font-bold">Oops!</h1>
            <p className="text-red-800">Sorry, an unexpected error has occurred.</p>
            <p className="text-lg">
                {error.statusText || error.message}
            </p>
        </div>
    )
}

export default ErrorPage