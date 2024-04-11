import UserService from "../services/User.service";

export function Main(): JSX.Element {
    const fetchData = async () => {
        const data = await UserService.getUsersList();
        console.log(data);
    };

    return (
        <div>
            <button onClick={fetchData}>Go</button>
        </div>
    );
}
