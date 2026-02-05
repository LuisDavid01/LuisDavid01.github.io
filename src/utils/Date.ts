// Formatear fechas

export const formatDate = (dateObj: Date, locale: string) => {
	return new Date(
		dateObj,
	).toLocaleDateString(locale, {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};

