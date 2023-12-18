import { useRouteError } from "react-router-dom";

const Error = () => {
    const a = useRouteError();
    return (
        <div>
            <h1>Error: {a.status}</h1>
            <h2>Something went wrong</h2>
            <h3>{a.statusText}</h3>
        </div>
    )
}

export default Error;