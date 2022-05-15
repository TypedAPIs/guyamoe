import {RelativeURL} from "./internal";
/**
 * A series dictionary that contains a subset of the attributes found on a normal {@link Series}.
 * This is returned on the API endpoint for all series.
 */
export interface SeriesSummary {
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
     * An object of group IDs and their respective names.
     *
     * The groups object is the **same** object for all series when obtained
     * via the ``/get_all_series`` endpoint. This object may be different from
     * the one obtained from the individual series endpoint.
     */
    groups: { [groupId: string]: string };
    /**
     * The Unix timestamp of when the series was last updated.
     */
    last_updated: number;
}

/**
 * The root JSON document for all series is an object where the keys are the title
 * of the series and the values are the {@link SeriesSummary} for that series.
 *
 * A sample JSON document can be found at https://guya.moe/api/get_all_series/.
 */
export type AllSeries = { [series: string]: SeriesSummary };