// Formatear fechas
export const formatDate = (dateObj: Date) => {
	return new Date(
		dateObj,
	).toLocaleDateString("es-ES", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};

