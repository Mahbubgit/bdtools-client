import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
// import UserData from './UserData';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl">All users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Email</th>
                            <th>Add Role</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            users.map((user,index) => <UserData
                                key={user._id}
                                index={index}
                                user={user}
                                refetch={refetch}
                            ></UserData>)
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;