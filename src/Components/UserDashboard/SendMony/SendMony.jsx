import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../Authentication/AuthProvider/AuthProvider';
import useAxios from '../../../Hooks/AxiosPublic/useAxios';

const SendMony = () => {
    const { token, user } = useAuth();
    const axioss = useAxios();
    const [formData, setFormData] = useState({
        senderId: '', // Will populate this from the logged-in user context in useEffect
        receiverId: '',
        amount: '',
        pin: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (user) {
            setFormData((prevData) => ({
                ...prevData,
                senderId: user._id // Assuming `user` has an `_id` property
            }));
        }
    }, [user]);

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
            const response = await axioss.post('/send-money', formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setMessage(response.data.message);
            setError('');
        } catch (err) {
            setError(err.response.data.error || 'Transaction failed');
            setMessage('');
        }
    };

    return (
        <div>
            <div>
                <h2>Send Money</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Receiver ID</label>
                        <input
                            type="text"
                            name="receiverId"
                            value={formData.receiverId}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Amount</label>
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>PIN</label>
                        <input
                            type="password"
                            name="pin"
                            value={formData.pin}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Send Money</button>
                </form>
                {message && <p>{message}</p>}
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default SendMony;
