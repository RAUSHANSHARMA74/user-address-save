import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Home.css';
const apiUrl = import.meta.env.VITE_API_URL;
export default function Home() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [addresses, setAddresses] = useState([
        { address: '', pincode: '', street: '', village: '', state: '', district: '' }
    ]);

    const handleUserChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleAddressChange = (index, e) => {
        const updatedAddresses = [...addresses];
        updatedAddresses[index][e.target.name] = e.target.value;
        setAddresses(updatedAddresses);
    };

    const addNewAddress = () => {
        setAddresses([...addresses, { address: '', pincode: '', street: '', village: '', state: '', district: '' }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSubmit = {
            user,
            address: addresses
        };

        console.log('Submitting data:', dataToSubmit);

        try {
            const response = await fetch(`${apiUrl}/api/userAddress`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSubmit)
            });

            const result = await response.json();
            if (response.ok) {
                console.log('Data saved successfully:', result);
                Swal.fire({
                    title: "Good job!",
                    text: result.message,
                    icon: "success"
                });
            } else {
                console.error('Error saving data:', result);
                alert('Failed to save user and addresses');
            }
        } catch (error) {
            console.error('Error submitting data:', error);
            alert('Error occurred while saving data');
        }
    };

    return (
        <div className="form-container">
            <h2>User and Address Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-content">
                    <div className="user-info-section">
                        <h3>User Details</h3>
                        <div className="user-info">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={handleUserChange}
                                required
                            />

                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleUserChange}
                                required
                            />

                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleUserChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="address-info-section">
                        <button type="button" onClick={addNewAddress} className="add-address-btn">
                            + Add Another Address
                        </button>
                        <h3>Addresses</h3>

                        {addresses.map((addr, index) => (
                            <div key={index} className="address-info">
                                <h4>Address {index + 1}</h4>
                                <label>Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={addr.address}
                                    onChange={(e) => handleAddressChange(index, e)}
                                    required
                                />

                                <label>Pincode</label>
                                <input
                                    type="text"
                                    name="pincode"
                                    value={addr.pincode}
                                    onChange={(e) => handleAddressChange(index, e)}
                                    required
                                />

                                <label>Street</label>
                                <input
                                    type="text"
                                    name="street"
                                    value={addr.street}
                                    onChange={(e) => handleAddressChange(index, e)}
                                    required
                                />

                                <label>Village</label>
                                <input
                                    type="text"
                                    name="village"
                                    value={addr.village}
                                    onChange={(e) => handleAddressChange(index, e)}
                                    required
                                />

                                <label>State</label>
                                <input
                                    type="text"
                                    name="state"
                                    value={addr.state}
                                    onChange={(e) => handleAddressChange(index, e)}
                                    required
                                />

                                <label>District</label>
                                <input
                                    type="text"
                                    name="district"
                                    value={addr.district}
                                    onChange={(e) => handleAddressChange(index, e)}
                                    required
                                />
                            </div>
                        ))}

                    </div>
                </div>
                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
}
