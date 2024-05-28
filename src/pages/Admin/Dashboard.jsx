import { FaRegCheckCircle, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:3000/users`);
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="rounded w-full">

            <div className="text-center uppercase text-4xl font-bold flex items-center justify-center gap-3">
                <p>Total users: </p>
                <span>{users.length}</span>
            </div>

            <div className="overflow-x-auto w-full mt-12">
                <table className="table w-11/12 mx-auto">
                    {/* head */}
                    <thead>
                        <tr className='text-white'>
                            <th className="text-[20px] bg-secondary text-center rounded-l">#</th>
                            <th className="text-[17px] bg-secondary text-center">Username</th>
                            <th className="text-[17px] bg-secondary text-center">Full Name</th>
                            <th className="text-[17px] bg-secondary text-center">Email</th>
                            <th className="text-[17px] bg-secondary text-center">Phone</th>
                            <th className="text-[17px] bg-secondary text-center">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) =>
                            <tr key={user._id}>
                                <th className="text-center">
                                    {index + 1}
                                </th>
                                <td className='text-center font-semibold'>{user.username}</td>
                                <td className='text-center font-semibold'>{user?.name} </td>
                                <td className='text-center font-semibold'>{user?.name} </td>
                                <td className='text-center font-semibold'>{user?.phone}</td>
                                <td className='text-center mt-3'>
                                    <button
                                        onClick={() => handleDelete(user)} disabled={user.role === 'admin'}
                                        className="p-3 border-2 text-red-500 hover:text-white hover:bg-secondary duration-300 hover:duration-300 mt-1 rounded"
                                    >
                                        <FaTrash size={20} />
                                    </button>
                                </td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;