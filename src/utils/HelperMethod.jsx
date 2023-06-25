export const formatDate = (date) => {
	const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
	return date.toLocaleDateString('id-ID', options);
};

export const formatNumber = (number) => {
	const formatted = number.toLocaleString('en-US');
	return formatted;
};

export const formatNumberPrice = (number) => {
	const formattedPrice = number.toLocaleString('id-ID', {
		style: 'currency',
		currency: 'IDR',
	});
	return formattedPrice;
};

export const formatDateTime = (date) => {
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const dateString = date.toLocaleDateString('id-ID', {
		month: '2-digit',
		day: '2-digit',
		year: 'numeric',
	});
	const timeString = `${hours.toString().padStart(2, '0')}.${minutes
		.toString()
		.padStart(2, '0')} WIB`;
	const formattedDateTime = dateString + ' | ' + timeString;
	return formattedDateTime;
};
