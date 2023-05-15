import { useState } from "react";
import { useParams } from "react-router";

function UserDetails() {
    const params = useParams();
    
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

    const [list, setList] = useState(userList);

    const searchedUser = list.find((i) => i.id == params.id)



    return(
         <div>
            {list.map((i,j) => {
                return(
                <div key={j}>
                    <p><b>Name: </b>{i.name}</p>
                    <p><b>Surname:</b> {i.surname}</p>
                    <p><b>Age:</b> {i.age}</p>
                    <p><b>Country:</b> {i.country}</p>
                </div>
                )
            }) 
            }
            
         </div>
    )
}

export default UserDetails;