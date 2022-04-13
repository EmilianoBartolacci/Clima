import React from 'react';
import PropTypes  from 'prop-types';

const Clima = ({resultado}) => {

    // extraer los valores
    const {name, main} = resultado;

    if(!name) return null;

    // grados Kelvin
    const kelvin = 273.15
    return ( 
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>El clima de {name} es: </h2>
                <p className='temperatura'>
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> &#x2103; </span>
                </p>
                <p>Temperatura Maxima:
                    {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span> &#x2103; </span>
                </p>
                <p>Temperatura Minima:
                    {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span> &#x2103; </span>
                </p>
                <p>Porcentaje de Humedad:
                    {main.humidity} <span>%</span>
                </p>
            </div>
        </div>
     );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
export default Clima;