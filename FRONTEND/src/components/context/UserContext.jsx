import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		getUser();
	}, []);

	const getUser = async () => {
		try {
			const token = localStorage.getItem("token"); // Retrieve token from local storage
			const res = await fetch("http://localhost:5000/api/auth/refetch", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			if (!res.ok) {
				throw new Error("Failed to fetch user data");
			}
			const data = await res.json();
			console.log("Data received at UserContext.jsx getUser: ", data);
			setUser(data);
		} catch (err) {
			console.log("Error at UserContext.jsx getUser: ", err);
		}
	};

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}
