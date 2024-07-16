
import UserService from "../UserDashboard/UserService";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>

            {/* Banner section */}
            <div>
                <Banner></Banner>
            </div>

            {/* User Role Service */}
            <div>
                <UserService></UserService>
            </div>

        </div>
    );
};

export default Home;