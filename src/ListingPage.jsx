import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListingPage = ({}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://assignment.8848digitalerp.com/api/method/assignment.API.all_users_api.get_user",
          {
            headers: {
              Authorization: `token eb33bed41ebc137:348f33df4a5e962`,
            },
          }
        );

        setUsers(response.data.message.data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {
        <>
          <h2 className="text-2xl font-bold mb-4">User Details</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Age</th>
                  <th className="border px-4 py-2">Address</th>
                  <th className="border px-4 py-2">Company Name</th>
                  <th className="border px-4 py-2">Designation</th>
                  <th className="border px-4 py-2">Gender</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.name1}
                    className="odd:bg-gray-100 even:bg-white"
                  >
                    <td className="border px-4 py-2">
                      <Link
                        to={`/user/${user.name1}`}
                        className="text-blue-500 hover:underline"
                      >
                        {user.name1}
                      </Link>
                    </td>
                    <td className="border px-4 py-2">
                      <Link to={`/user/${user.name1}`}>{user.age}</Link>
                    </td>
                    <td className="border px-4 py-2">
                      <Link to={`/user/${user.name1}`}>{user.address}</Link>
                    </td>
                    <td className="border px-4 py-2">
                      <Link to={`/user/${user.name1}`}>
                        {user.company_name}
                      </Link>
                    </td>
                    <td className="border px-4 py-2">
                      <Link to={`/user/${user.name1}`}>{user.designation}</Link>
                    </td>
                    <td className="border px-4 py-2">
                      <Link to={`/user/${user.name1}`}>{user.gender}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      }
    </div>
  );
};

export default ListingPage;
