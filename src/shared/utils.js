export const onChangeHandler = (setter) => (event) => {
	setter(event.target.value);
};

export const onChangeHandlerCheckBox = (setter) => (event) => {
	setter(event.target.checked);
};
