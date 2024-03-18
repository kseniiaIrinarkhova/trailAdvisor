import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

export default function ErrorPage() {
    const error = useRouteError();
    let errorMessage = 'Unknown Error';

    if (isRouteErrorResponse(error)) errorMessage = error.statusText
    else if (error instanceof Error) errorMessage = error.message

    return (
        <>
            <NavBar />
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{errorMessage}</i>
                </p>
            </div>
            <Footer />
        </>

    );
}