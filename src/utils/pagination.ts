import { Pagination, PaginationQuery } from '@src/typings/utils/pagination.interface';

export function handlePagination(query: PaginationQuery): Pagination {
	const page = query.page ? Number(query.page) : 1;
	const take = query.limit ? Math.floor(query.limit) : 15;
	const skip = (page - 1) * take;

	return {
		page,
		take,
		limit: take,
		skip,
	};
}
