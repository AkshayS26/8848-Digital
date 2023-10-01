import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserPage = ({}) => {
  // State to hold user details
  const [userDetails, setUserDetails] = useState({
    name1: "",
    age: "",
    gender: "",
    company_name: "",
  });

  // Get the 'userName' parameter from the URL
  const { userName } = useParams();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `https://assignment.8848digitalerp.com/api/method/assignment.API.specific_user.get_specific?name1=${userName}`,
          {
            headers: {
              Authorization: `${accessToken}`,
            },
          }
        );

        setUserDetails(response.data.message.data.specific_user);
        // console.log(userDetails);
      } catch (error) {
        console.error("Error fetching user details", error);
      }
    };

    fetchUserDetails();
  }, [userName]);

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    console.log("userDetails:", userDetails);

    try {
      // Make a PUT request to update user details
      await axios.put(
        `https://assignment.8848digitalerp.com/api/resource/Assignment/${userDetails.name1}`,
        userDetails,
        {
          headers: {
            Authorization: `token eb33bed41ebc137:348f33df4a5e962`,
          },
        }
      );
      alert("User details saved!");
    } catch (error) {
      console.error("Error saving user details", error);
    }
  };

  return (
    <div>
      (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">User Page</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Name:
            </label>
            <input
              type="text"
              name="name1"
              defaultValue={userDetails.name1}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Age:
            </label>
            <input
              type="text"
              name="age"
              defaultValue={userDetails.age || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Gender:
            </label>
            <input
              type="text"
              name="gender"
              defaultValue={userDetails.gender || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Company Name:
            </label>
            <input
              type="text"
              name="company_name"
              defaultValue={userDetails.company_name || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
        </form>
        <div className="flex justify-between">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Save
          </button>
          <button className="bg-gray-300 text-blue-500 px-4 py-2 rounded-md  focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            <a href="/users">Go back</a>
          </button>
        </div>
      </div>
      )
    </div>
  );
};

export default UserPage;
