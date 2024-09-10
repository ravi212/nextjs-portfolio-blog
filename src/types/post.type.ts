type PostType = {
    _id?: string;
    title: string;
    slug: string;
    content: string;
    imageUrl: string;
    featured: boolean;
    pinned: boolean;
    tags: string[];
    createdAt?: any;
}

type CategoryType = {
    _id?: string;
    title: string;
    slug: string;
    createdAt?: any;
}