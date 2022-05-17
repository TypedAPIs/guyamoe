import {RelativeURL} from "./internal";

/**
 * A chapter of a series.
 */
export interface Chapter {
    /**
     * The volume number of the chapter.
     */
    volume: string;
    /**
     * The title of the chapter.
     */
    title: string;
    /**
     * The folder name for the chapter. This is used to get the pages of the chapter.
     */
    folder: string;
    /**
     * The pages released by each group for the chapter. The key is one of the group IDs from {@link Series.groups},
     * and the value is the ordered list of page filenames.
     *
     * A full page URL can be constructed using {@link Series.slug}, {@link Chapter.folder}, the group ID,
     * and the page filename, by filling the template:
     * `{baseUrl}/media/manga/{slug}/chapters/{folder}/{groupID}/{pageName}`
     *
     * For example, if my base URL is `https://guya.moe`, my slug is `Kaguya-Wants-To-Be-Confessed-To`,
     * my folder is `0259_0ixv0umx`, my group ID is `7`, and the page name is `01.png?v3`,
     * I would point a request to
     * `https://guya.moe/media/manga/Kaguya-Wants-To-Be-Confessed-To/chapters/0259_0ixv0umx/7/01.png?v3`.
     */
    groups: { [groupId: string]: string[] };
    /**
     * The time each group released the chapter. The key is one of the group IDs from {@link Series.groups},
     * and the value is the UNIX timestamp of the release time.
     */
    release_date: { [groupId: string]: number };
    /**
     * A list of the group IDs to prioritize when multiple groups upload the current chapter. This key may be omitted, in which case
     * {@link Series.preferred_sort} should be considered, otherwise follow this array for the current chapter.
     */
    preferred_sort?: string[];
}

/**
 * A full series object containing all the information about a series and it's chapters.
 */
export interface Series {
    /**
     * The author of the series.
     */
    author: string
    /**
     * The artist of the series.
     */
    artist: string
    /**
     * The description of the series. May or may not contain HTML.
     */
    description: string
    /**
     * The id of the series.
     */
    slug: string
    /**
     * A relative url to the series' primary cover.
     */
    cover: RelativeURL
    /**
     * The title of a series.
     */
    title: string
    /**
     * An object of group IDs and their respective names. Only contains groups that have uploaded to the series.
     */
    groups: { [groupId: string]: string };
    /**
     * A list of the group IDs to prioritize when multiple groups upload the same chapter.
     *
     * The values correspond to the group keys in {@link Series.groups}.
     *
     * For example, if group ID `1` and group ID `2` both upload the same chapter, and `preferred_sort` is `[1, 2]`,
     * then the chapter for group ID `1` should be shown as the chapter for the given chapter number.
     */
    preferred_sort: string[];
    /**
     * An object of chapter numbers and their respective chapter information.
     */
    chapters: { [chapterNum: string]: Chapter };
    /**
     * Whether the next release page is enabled for the series.
     */
    next_release_page: boolean;
    /**
     * The UNIX timestamp for the approximate release time of the next chapter.
     */
    next_release_time: number;
    /**
     * The HTML for the next release page.
     */
    next_release_html: string;
}