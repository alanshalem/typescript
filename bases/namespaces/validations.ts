namespace Validations {
	export const validateText = (text: string): boolean => {
		return text.length > 3 ? true : false;
	};

	export const validateDate = (myDate: Date) => {
		return isNaN(myDate.valueOf()) ? false : true;
	};
}

console.log(Validations.validateText('Alan'));
