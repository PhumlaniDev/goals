import { useState, useEffect } from "react";

const useRegisterHook = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { name, email, password, confirmPassword } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.prevState.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
	};

	return { name, email, password, confirmPassword, onSubmit, onChange };
};

export default useRegisterHook;
