/**
 * An object containing the groups that released chapters for the series.
 */
export interface SeriesGroups {
    /**
     * An object of group IDs and their respective names. Only contains groups that have uploaded to the series.
     */
    groups: { [groupId: string]: string };
}