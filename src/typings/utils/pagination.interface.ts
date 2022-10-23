export interface PaginationQuery {
	page?: number | null;
	limit?: number | null;
}

export interface Pagination {
	page: number;
	limit: number;
	take: number;
	skip: number;
	offset: number;
}
