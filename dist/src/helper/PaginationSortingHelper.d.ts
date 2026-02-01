type IOptions = {
    page?: number | string;
    limit?: number | string;
    orderBy?: string;
    order?: 'asc' | 'desc';
};
type OptionReturn = {
    page: number;
    limit: number;
    skip: number;
    orderBy: string;
    order: 'asc' | 'desc';
};
declare const paginationSortingHelper: (options: IOptions) => OptionReturn;
export default paginationSortingHelper;
//# sourceMappingURL=PaginationSortingHelper.d.ts.map