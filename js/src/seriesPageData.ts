/**
 * An object containing various metadata about a page.
 */
import { RelativeURL } from "./internal";

export interface SeriesPageData {
    /**
     * The title of the series.
     */
    series: string;
    /**
     * A list of alternate titles for the series.
     */
    alt_titles: string[];
    /**
     * A string containing all alternate titles for the series.
     */
    alt_titles_str: string;
    /**
     * The internal ID of the series.
     */
    series_id: number;
    /**
     * The slug of the series.
     */
    slug: string;
    /**
     * A {@link RelativeURL} to the cover image of the series.
     */
    cover_vol_url: RelativeURL;
    /**
     * An URL similar to {@link cover_vol_url} but the file is a `.webp` file.
     */
    cover_vol_url_webp: RelativeURL;
    /**
     * A list of lists containing the metadata for each volume in the series. Each sub-list is actually a key-value
     * pair, where the first element is the name and the second element is the value. The value can be a string or an
     * integer.
     *
     * So far, the structure of the metadata is as follows:
     *
     * ``json
     *     [
     *         [
     *             "Author",
     *             "<author>"
     *         ],
     *         [
     *             "Artist",
     *             "<artist>"
     *         ],
     *         [
     *             "Views",
     *             123456
     *         ],
     *         [
     *             "Last Updated",
     *             "Ch. <latest chapter number> - <year>-<month>-<day>"
     *         ]
     *     ]
     * ``
     */
    metadata: [
        [string, string],
        [string, string],
        [string, number],
        [string, string]
    ];
    /**
     * The synopsis of the series.
     */
    synopsis: string;
    /**
     * The author of the series.
     */
    author: string;
    /**
     * A list of lists containing information on each chapter.
     *
     * The sub-lists can be thought of as a tuple where the elements mean the following, in order:
     *
     * 1. The chapter number.
     * 2. The chapter number (again).
     * 3. The chapter title.
     * 4. A slugified version of the chapter number. Dots are replaced with dashes. For integer chapter numbers this
     *    value should be the same as the first and second elements.
     * 5. The name of the group that uploaded the chapter or `Multiple Groups` if the chapter is uploaded by multiple
     *    groups.
     * 6. The date and time the chapter was published. This is another tuple-like list that has these elements:
     *     1. The year.
     *     2. The month, starting from 0.
     *     3. The day.
     *     4. The hour.
     *     5. The minute.
     *     6. The second.
     * 7. The chapter's volume (integer) or the string `null`.
     */
    chapter_list: [
        string,
        string,
        string,
        string,
        string,
        [number, number, number, number, number, number],
        number
    ][];
    /**
     * A list of lists containing information on each volume.
     *
     * The sub-lists can be thought of as a tuple where the elements mean the following, in order:
     *
     * 1. The volume number.
     * 2. A list of lists containing chapters in the volume. Each chapter entry can be thought of as a tuple where the
     *    elements mean the following, in order:
     *
     *     1. The chapter number.
     *     2. A slugified version of the chapter number. Dots are replaced with dashes. For integer chapter numbers this
     *        value should be the same as the first and second elements.
     *     3. The name of the group that uploaded the chapter or `Multiple Groups` if the chapter is uploaded by multiple
     *        groups.
     *     4. The date and time the chapter was published. This is another tuple-like list that has these elements:
     *
     *         1. The year.
     *         2. The month, starting from 0.
     *         3. The day.
     *         4. The hour.
     *         5. The minute.
     *         6. The second.
     */
    volume_list: [
        number,
        [
            string,
            string,
            string,
            [number, number, number, number, number, number]
        ][]
    ][];
    /**
     * The root domain of the series. This is a domain name without the protocol.
     */
    root_domain: string;
    /**
     * The full URL to the series page on the website.
     */
    canonical_url: string;
    /**
     * The {@link RelativeURL} to the series page on the website.
     */
    relative_url: RelativeURL;
    /**
     * A list of features that are available for the series. This list is static for all responses.
     */
    available_features: [
        "detailed",
        "compact",
        "volumeCovers",
        "rss",
        "download"
    ];
    /**
     * The part of the {@link relative_url} that does not contain the slug. The modifier can be used in conjunction
     * with {@link slug} to construct the relative url to the series page.
     */
    reader_modifier: string;
    /**
     * A full URL to the image that should be shown for Facebook/Twitter/other social media embeds.
     */
    embed_image: string;
    /**
     * A query string containing the first 7 characters of the git commit's SHA-1 ID that the server is running off
     * of.
     */
    version_query: string;
}
