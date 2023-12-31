import { useEffect, useState } from "react";

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading,setAdminLoading]=useState(true);
    useEffect(() => {
        const { email } = user;
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: "GET", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },

            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                    setAdminLoading(false)
                })
        }
    }, [user]);

    return [admin,adminLoading]

}
export default useAdmin;