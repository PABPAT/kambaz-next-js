const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function EnvironmentVariables() {
    return (
        <div id="wd-environment-variables">
            <h3>Environment Variables</h3>
            <p>
                The HTTP Remote Server URL is: <strong>{HTTP_SERVER}</strong>
            </p><hr />
        </div>
    );
}