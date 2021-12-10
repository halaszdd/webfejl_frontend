import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [rarity, setRarity] = useState(0)
  const [vision, setVison] = useState('')
  const [sex, setSex] = useState('')
  const [constellation, setConstellation] = useState('')
  const onSubmit = (e) => {
      e.preventDefault()

      if(!name) {
          alert('Please add a hero!')
          return
      }

      onAdd({ name, rarity, vision, sex, constellation})

      setName('')
      setRarity(0)
      setSex('')
      setVison('')
      setConstellation('')
  }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Name</label>
                <input type='text' placeholder='Add Hero'
                value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Rarity</label>
                <input type='number' placeholder='Add rarity'
                value={rarity} onChange={(e) => setRarity(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Vision</label>
                <input type='text' placeholder='Add Vision'
                value={vision} onChange={(e) => setVison(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Sex</label>
                <input type='text' placeholder='Add Sex'
                value={sex} onChange={(e) => setSex(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Constellation</label>
                <input type='text' placeholder='Add Constellation'
                value={constellation} onChange={(e) => setConstellation(e.target.value)}/>
            </div>

            <input type='submit' value='Save Hero'
            className='btn btn-block' />
        </form>
    )
}

export default AddTask
