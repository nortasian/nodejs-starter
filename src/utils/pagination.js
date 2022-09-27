export function handlePagination(query) {
	const page = query.page ? Number(query.page) : 1;
	const take = query.limit ? Math.floor(Number(query.limit)) : 15;
	const skip = (page - 1) * take;

	return {
		page,
		take,
		limit: take,
		skip,
	};
}
