import {Header} from "../../../components";

const Dashboard = () => {
    const user = {name: "Adrain"}
    return (
        <main className="dashboard wrapper">
            <Header title={`welcome ${user?.name ?? 'Guest'} 👌`}
                    description={"Track activity, trends and popular destinations in real time"}/>
            Dashboard Page Contents
        </main>
    )
}
export default Dashboard
