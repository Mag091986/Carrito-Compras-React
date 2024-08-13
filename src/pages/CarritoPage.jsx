import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'


export const CarritoPage = () => {

  const { listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

  return (
    <>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {
              listaCompras.map(item => {
                <tr key={item.id}>
              <th>{item.title}</th>
              <td>{item.price}</td>
              <td>1</td>
              <td>
                <button
                type='button'
                className='btn btn-danger'
                onClick={()=>eliminarCompra(item.id)}
                >Eliminar
                </button>
              </td>
            </tr>
              })
            }
            
          </tbody>
        </table>
      </div>
      <div className='d-grid gap-2'>
        <button className='btn btn-primary'>COMPRAR</button>
      </div>
    </>
  )
}
