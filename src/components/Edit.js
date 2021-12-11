import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import  { FaArrowLeft } from 'react-icons/fa';

const Edit = ({ onEdit, tasks }) => {
    const params=useParams()
    const taskId=Number(params.id)
    const task = tasks.find(other => other.id === taskId)
    const [name, setName] = useState(task.name)
    const [rarity, setRarity] = useState(task.rarity)
    const [vision, setVison] = useState(task.vision)
    const [sex, setSex] = useState(task.sex)
    const [constellation, setConstellation] = useState(task.constellation)
    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please add a hero name!')
            return
        }

        onEdit(taskId, { name, rarity, vision, sex, constellation })
    }

    return (
        <>
            <Link to="/"><FaArrowLeft/>Return</Link>
            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Name</label>
                    <input type='text' placeholder='Edit HeroName'
                        value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Rarity</label>
                    <input type='number' placeholder='Edit rarity'
                        value={rarity} onChange={(e) => setRarity(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Vision</label>
                    <input type='text' placeholder='Edit Vision'
                        value={vision} onChange={(e) => setVison(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Sex</label>
                    <input type='text' placeholder='Edit Sex'
                        value={sex} onChange={(e) => setSex(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Constellation</label>
                    <input type='text' placeholder='Edit Constellation'
                        value={constellation} onChange={(e) => setConstellation(e.target.value)} />
                </div>

                <input type='submit' value='Edit Hero Attributes'
                    className='btn btn-block' />
            </form>
        </>
    )
}

export default Edit
