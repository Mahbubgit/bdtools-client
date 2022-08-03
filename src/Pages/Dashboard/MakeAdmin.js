import React, { useEffect, useState } from 'react';
import UserData from './UserData';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://calm-lake-97858.herokuapp.com/allUser', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                setUsers(data)
            });
    }, []);

    return (
        <div>
            <div className="overflow-x-auto my-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Email</th>
                            <th>Add Admin Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserData
                                key={user._id}
                                index={index}
                                user={user}
                                setUsers={setUsers}
                            ></UserData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;