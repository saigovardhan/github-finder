import React from "react";
import UserItem from "./UserItem";


function UserResults(){


    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(()=>{
        fetchUsers()
       
    },[])

    const fetchUsers = async ()=>{
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`);
        const data =await response.json()
        console.log(data)
        setUsers(data);
        setLoading(false)

    }
    if(!loading){
    return(
        
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8">

            {users.map((user)=>{
                return(
                <div key={user.id}>
                    <UserItem user={user}/>
                </div>
                );
            })}
        </div>
    );
        }else{
            return(<div>
                <h1 className=" text-5xl font-bold">Loading...</h1>
            </div>)
        }
}

export default UserResults


