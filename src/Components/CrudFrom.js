import { useEffect, useState } from 'react';

const CrudFrom = ({ selectUser, addCrud, selectCrud, deselectUser }) => {

    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ birthday, setBirthday ] = useState('')

    console.log(selectUser);
    
    
    useEffect(() => {
        if(selectUser !== null){
            setEmail(selectUser.email)
            setLastName(selectUser.last_name)
            setFirstName(selectUser.first_name)
            setPassword(selectUser.password)
            setBirthday(selectUser.birthday)
        }
    }, [ selectUser ])

    const submit = e => {
        e.preventDefault()
        const users = {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
            birthday: birthday

        }
        
        if(selectUser === null){
            addCrud(users)
        } else{
            selectCrud(users)
            deselectUser()
        }
        
    }

    return(
        <div className='Container-CrudFrom'>
            <h3>Users</h3>
            <form onSubmit={submit}>
            <div className='name-container'>
            <div className='input-container'>
                <label htmlFor="firstName"><i className='bx bxs-user'></i></label>
                <input
                placeholder='firstName' 
                type="text"
                id='firstName'
                onChange={e => setFirstName(e.target.value)}
                value={firstName} />
            </div>

            <div className='input-container'>
                <label htmlFor="lastName"></label>
                <input 
                placeholder='lastName' 
                type="text"
                id='lastName' 
                onChange={e => setLastName(e.target.value)}
                value={lastName} />
            </div>

            </div>

            <div className='input-box'>
                <label htmlFor="email"><i className='bx bxl-gmail'></i></label>
                <input
                placeholder='email' 
                type="email"
                id='email'
                onChange={e => setEmail(e.target.value)} 
                value={email} />
            </div>
            <div className='input-box'>
                <label htmlFor="password"><i className='bx bxs-lock-alt'></i></label>
                <input 
                placeholder='password'
                type="password"
                id='password' 
                onChange={e => setPassword(e.target.value)}
                value={password}/>
            </div>
                <div className='input-box'>
                <label htmlFor="birthday"><i className='bx bxs-cake'></i></label>
                <input 
                placeholder='birthday'
                type="date" 
                id='birthday'
                onChange={e => setBirthday(e.target.value)}
                value={birthday}/>
            </div>
            <br />
            <button className='btn-add' type='submit'>Add New User</button> 
            {
                    selectUser !== null && (
                        <button 
                        className="cancel-btn"
                        type='button' 
                        onClick={deselectUser}>
                            Cancel
                        </button>
                    )
                }
            </form>
        </div>
    )
}

export default CrudFrom;