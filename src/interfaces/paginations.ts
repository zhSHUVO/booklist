export type IPaginationOptions = {
    page?: number;
    size?: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
};

export type IOptions = {
    page?: number;
    size?: number;
    sortBy?: string;
    sortOrder?: string;
};

export type IOptionsResult = {
    page: number;
    size: number;
    skip: number;
    sortBy: string;
    sortOrder: string;
};
