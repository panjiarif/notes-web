import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditNote = () => {
const [judul, setJudul] = useState('');
const [isi, setIsi] = useState('');
const navigate = useNavigate();
const { id } = useParams();

useEffect(() => {
    getNoteById();
},[]);

const perbaruiNote = async (e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/notes/${id}`,{
            title: judul,
            content: isi
        });
        navigate('/dashboard');
    } catch (error) {
        console.error(error);
    }
}

const getNoteById = async() => {
    const response = await axios.get(`http://localhost:5000/notes/${id}`);
    setJudul(response.data.title);
    setIsi(response.data.content);
}

  return (
    <div className='columns mt-5 is-centered'>
        <div className="column is-half">
            <div className="title">Perbarui Note</div>
            <form onSubmit={perbaruiNote}>
                <div className="field">
                    <label className="label">Judul</label>
                    <div className="control">
                        <input type="text" className="input" placeholder="Judul" 
                        value={judul} onChange={(e)=>setJudul(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Isi</label>
                    <div className="control">
                        <input type="text" className="input" placeholder="Isi"
                        value={isi} onChange={(e)=>setIsi(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <button type='submit' className='button is-success'>Perbarui</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditNote;
