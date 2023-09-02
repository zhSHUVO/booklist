export type IPaginationOptions = {
    page?: number;
    size?: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
};

export type IOptions = {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: string;
};

export type IOptionsResult = {
    page: number;
    limit: number;
    skip: number;
    sortBy: string;
    sortOrder: string;
};
