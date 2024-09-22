import React, { useEffect, useState } from 'react';
import './ShowDetails.css';
const apiUrl = import.meta.env.VITE_API_URL;

export default function ShowDetails() {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/userAddress`);
                const data = await response.json();
                console.log(data);
                setUsers(data.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    const handleUserClick = (userId) => {
        setSelectedUserId(selectedUserId === userId ? null : userId);
    };

    return (
        <div className="showdetails">
            <h2>User List</h2>
            <div className="user-list">
                {users.map((user) => (
                    <div key={user._id} className="user-card" onClick={() => handleUserClick(user._id)}>
                        <div className="user-info">
                            <h3 className='name'>{user.name}</h3>
                            <p>{user.email}</p>
                        </div>
                        <div className={`address-details ${selectedUserId === user._id ? 'active' : ''}`}>
                            <h4>Addresses:</h4>
                            <ul>
                                {user.addresses.map((address, index) => (
                                    <li key={index}>
                                        {address.address}, {address.pincode}, {address.street}, {address.village}, {address.state}, {address.district}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
