import { createContext } from "react";
import React from "react";
const GithubContext = createContext()

export const GithubProvider = ({children})=>{
     const [users, setUsers] = React.useState([]);
     const [loading, setLoading] = React.useState(true);

     const fetchUsers = async () => {
       const response = await fetch(
         `${process.env.REACT_APP_GITHUB_URL}/users`
       );
       const data = await response.json();
       setUsers(data);
       setLoading(false);
     };

     return(<GithubContext.Provider
     values={{users,loading, fetchUsers}}>
        {children}
     </GithubContext.Provider>)
}
export default GithubContext

