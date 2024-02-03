import React, { useState } from "react";
import './OrderForm.css'

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
        <form onSubmit={handleSubmit} className="Form">
            <h2>Generar orden de compra</h2>
            <div className="Inputs">
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
            </div>
            <div className="ButtonSubmit">
                <button type="submit">Enviar</button>
            </div>
        </form>
    );
};

export default OrderForm;
