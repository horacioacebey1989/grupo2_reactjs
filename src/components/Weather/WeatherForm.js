import React from 'react';

const WeatherForm = props => (
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="city" placeholder="Introduzca la Ciudad" className="form-control" width="50px" autoFocus/>
            </div>
            <button className="btn btn-success btn-block">
                Buscar Papas
            </button>
        </form>
    </div>
);

export default WeatherForm;