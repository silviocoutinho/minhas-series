import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { realpath } from 'fs';
import { Link } from 'react-router-dom'
import { log } from 'util';

const Generos = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('/api/genres').then(res => {
            setData(res.data.data)
        })
    }, [])

    const deleteGenero = id => {
        axios.delete('/api/genres/' + id)
        .then(res => {
            const filtrado = data.filter(item => item.id !== id)
            setData(filtrado)
            
        })
    }

    const renderizaLinha = record => {
        return (
                <tr key={record.id}>
                    <th scope='row'>{record.id}</th>
                    <td>{record.name}</td>
                    <td>
                        <button type='button' className='btn btn-danger' onClick={() => deleteGenero(record.id)}>Remover</button>
                        <Link to={'/generos/' + record.id}><button type='button' className='btn btn-success'>Editar</button></Link>                    
                    </td>
                </tr>
        )
    }

    if(data.length === 0) {
        return(
            <div className='container'>
                <h1>Gêneros</h1>
                <Link to='/generos/novo'><button type='button' className='btn btn-primary'>Novo Gênero</button></Link>
                <div className='alert alert-warning' role='alert'>
                    Você não possui gêneros criados
                </div>
            </div>
        )
    }



    return (
    <div className='container'>
        <h1>Gêneros</h1>
        <Link to='/generos/novo' className='btn btn-primary'>Novo Gênero</Link>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>Nome</th>
                    <th scope='col'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {data.map(renderizaLinha)}
            </tbody>
        </table>         
    </div>
    )
  }

export default Generos