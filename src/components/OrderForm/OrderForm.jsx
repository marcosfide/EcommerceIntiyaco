import React, { useState } from "react";

const OrderForm = ({ onCreate }) => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(userData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                required
            />

            <label htmlFor="email">Correo electrónico:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                required
            />

            <label htmlFor="phone">Teléfono:</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
                required
            />

            <button type="submit">Enviar</button>
        </form>
    );
};

export default OrderForm;
