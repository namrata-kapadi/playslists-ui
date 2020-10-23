export interface PlayList {
    featuredPlaylists: FeaturedPlaylists;
}

export interface FeaturedPlaylists {
    name: string;
    content: Content[];
}

export interface Content {
    id: string;
    kind: string;
    name: string;
    url: string;
    curator_name: string;
    artwork: string;
}
