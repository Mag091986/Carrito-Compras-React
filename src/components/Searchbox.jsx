import axios from "axios";
import React, { useEffect, useState } from 'react';
import '../styles/Searchbox.css';

const Searchbox = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                console.log(response);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <div className="searchbox-container">
                <input
                    type="text"
                    name="src"
                    className="searchbox-input"
                    placeholder="Buscar..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} // Corregido: e.targer -> e.target
                />
            </div>
            <div className="resultados">
                {data
                    .filter((row) => {
                        if (search === '') {
                            return row;
                        } else if (row.title.toLowerCase().includes(search.toLowerCase())) {
                            return row;
                        }
                        return null;
                    })
                    .map((row, i) => (
                        <div key={i} className="tarjeta">
                            <img src={row.image} alt={row.title} className="tarjeta-imagen" />
                            <div className="tarjeta-contenido">
                                <h3 className="tarjeta-titulo">{row.title}</h3>
                                <p className="tarjeta-descripcion">{row.description}</p>
                                <p className="tarjeta-precio">${row.price}</p>
                                <button
                                    type="button"
                                    className="boton-agregar"
                                    // onClick={() => handleAddToCart(row)} // Funcionalidad para agregar al carrito
                                >
                                    Agregar al Carrito
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Searchbox;
