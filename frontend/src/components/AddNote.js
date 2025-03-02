import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddNote = () => {
const [judul, setJudul] = useState('');
const [isi, setIsi] = useState('');
const navigate = useNavigate();

const simpanNote = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/notes',{
            title: judul,
            content: isi
        });
        navigate('/dashboard');
    } catch (error) {
        console.error(error);
    }
}

  return (
    <div className='columns mt-5 is-centered'>
        <div className="column is-half">
            <div className="title">Note Baru</div>
            <form onSubmit={simpanNote}>
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
                    <button type='submit' className='button is-success'>Simpan</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddNote;
