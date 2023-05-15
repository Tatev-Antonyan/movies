import {useState} from 'react';
import {useForm} from 'react-hook-form';

function UsersList(){

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data)

    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [age, setAge] = useState()
    const [country, setCountry] = useState()

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeSurname = (e) => {
        setSurname(e.target.value)
    }

    const changeAge = (e) => {
        setAge(e.target.value)
    }

    const changeCountry = (e) => {
        setCountry(e.target.value)
    }

    const handleAddNew = () => {
        setList([...list, {id: Math.random(), name: name, surname: surname, age: age, country: country}])
    }


    let userList = [
        {id: 1, name: "John", surname: "Black", age: 24, country: 'Armenia'},
        {id: 2, name: "James", surname: "Simon", age: 44, country: 'Columbia'},
        {id: 3, name: "Mike", surname: "Tyson", age: 64, country: 'United States'},
        {id: 4, name: "Chris", surname: "Brown", age: 56, country: 'United States'},
        {id: 5, name: "Michael", surname: "Jackson", age: 23, country: 'Russia'},
        {id: 6, name: "Jackie", surname: "Chan", age: 75, country: 'China'},
        {id: 7, name: "Marty", surname: "Mone", age: 43, country: 'Brazil'},
        {id: 8, name: "Simon", surname: "Cowell", age: 21, country: 'Great Britain'},
    ]

    const [list, setList] = useState(userList)
    
 

    const handleRemove = (id) => {
        let arr = list.filter((i) => i.id !== id);
        setList(arr)
    }



    return(
        <div>
            <div>
                 <h1 className='users_header'>Users List</h1>
                 <form className='input_container' onSubmit={handleSubmit(onSubmit)}>
                    <input type='text' 
                            {...register('firstName', {required: true, minLength: 2, maxLength: 25, pattern: /^[A-Za-z]+$/i})} 
                            placeholder='Type your name' 
                            onChange={changeName} 
                            value={name}/>
                            {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
                    <input type='text' 
                            {...register('lastName', {required: true, minLenght: 2, maxLength: 25})} 
                            placeholder='Type your surname' 
                            onChange={changeSurname} 
                            value={surname}/>
                            {errors.lastName?.type === 'required' && <p role="alert">Last name is required</p>}
                    <input type='text' 
                            {...register('age', {required: true, min: 16, max: 99})} 
                            placeholder='Type your age' 
                            onChange={changeAge} 
                            value={age}/>
                            {errors.age?.type === 'required' && <p role="alert">Age is required</p>}
                    <input type='text' 
                            {...register('country')} 
                            placeholder='Where are you from?' 
                            onChange={changeCountry} 
                            value={country}/>
                    <button onClick={handleAddNew}>Add New User</button>
                 </form> 
            </div>
           
         <div>
         <table>
              <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
              <th>Country</th>
              <th className='remove_btn'></th>
              </tr>
            </table>
         </div>
            {
                list.map((i) => {
                    return(
                        <div>
                            <table>
                                <tr>
                                    <td>{i.name}</td>
                                    <td>{i.surname}</td>
                                    <td>{i.age}</td>
                                    <td>{i.country}</td>
                                    <td className='remove_btn'>
                                    <button onClick={() => handleRemove(i.id)}>x</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UsersList;