import React from 'react';
import { toast } from 'react-toastify';

const UserData = ({ user, setUsers, index }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://calm-lake-97858.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Successfully made an admin`);
                }
            })
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td className='text-start'>{email}</td>
            <td>{
                (role === 'admin')
                    ?
                    <label>Admin User</label>
                    :
                    <button onClick={makeAdmin} className="btn w-xs rounded-full bg-primary">Make Admin</button>
            }</td>
        </tr>
    );
};

export default UserData;