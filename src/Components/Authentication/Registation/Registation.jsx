import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


const Registation = () => {

    const [formData, setFormData] = useState({
        name: '',
        pin: '',
        mobile: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', formData);
            alert('Registration successful!');
            console.log(response.data);
        } catch (error) {
            console.error(error);
            alert('Registration failed!');
        }
    };


    return (
        <div>
            <div>
                <Link to="/"><button className="btn btn-warning">Back to Home</button></Link>
            </div>
            <section className="relative py-10 bg-gray-900 sm:py-16 lg:py-24">
                <div className="absolute inset-0">
                    <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/signin/2/man-eating-noodles.jpg" alt="" />
                </div>
                <div className="absolute inset-0 bg-gray-900/20"></div>

                <div className="relative max-w-lg px-4 mx-auto sm:px-0">
                    <div className="overflow-hidden bg-white rounded-md shadow-md">
                        <div className="px-4 py-6 sm:px-8 sm:py-7">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-gray-900">Welcome ReadyPay</h2>
                                {/* <p className="mt-2 text-base text-gray-600">Don’t have one? <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">Create a free account</a></p> */}
                            </div>

                            <form onSubmit={handleSubmit} className="mt-8">
                                <div className="space-y-5">

                                    {/* Name Inpute */}
                                    <div>
                                        <label className="text-base flex text-start justify-start font-medium text-gray-900"> Your Name </label>
                                        <div className="mt-2.5">
                                            <input type="text" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" required />
                                        </div>
                                    </div>

                                    {/* Email Inpute */}
                                    <div>
                                        <label className="text-base flex text-start justify-start font-medium text-gray-900"> Email </label>
                                        <div className="mt-2.5">
                                            <input type="email" name="email" placeholder="Inpute your email" value={formData.email} onChange={handleChange} className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" required />
                                        </div>
                                    </div>

                                    {/* Phon Number Inpute */}
                                    <div>
                                        <label className="text-base flex text-start justify-start font-medium text-gray-900"> Phone Number </label>
                                        <div className="mt-2.5">
                                            <input type="number" name="mobile" placeholder="Inpute your Mobile Number" value={formData.mobile} onChange={handleChange} className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" required />
                                        </div>
                                    </div>

                                    {/* Password/PIN Inpute */}
                                    <div>
                                        <label className="text-base flex text-start justify-start font-medium text-gray-900"> Your PIN </label>
                                        <div className="mt-2.5">
                                            <input type="Password" name="pin" placeholder="Inpute your PIN" value={formData.pin} onChange={handleChange} className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" required />
                                        </div>
                                    </div>

                                    <div>
                                        <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">Register Now</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Registation;