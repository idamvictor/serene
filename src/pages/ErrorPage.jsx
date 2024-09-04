import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <div id="error-page" className="text-serene flex flex-col justify-center items-center gap-6 h-[38rem] ">
                <h1 className="text-4xl font-bold">Oops!</h1>
                <p className="text-xl tracking-wide font-medium">Sorry, an unexpected error has occurred.</p>
                <p className="text-opacity-25">
                    <i>{error.statusText || error.message}</i>
                </p>
               
            </div>
        </>
    )
}

export default ErrorPage;
