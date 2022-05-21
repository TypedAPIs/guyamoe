import * as allGroups from "./data/allGroups.json";
import * as allSeries from "./data/allSeries.json";
import * as searchIndex from "./data/searchIndex.json";
import * as series from "./data/series.json";
import * as seriesGroups from "./data/seriesGroups.json";
import * as seriesVolumeCover from "./data/seriesVolumeCover.json";
import * as seriesVolumeCovers from "./data/seriesVolumeCovers.json";
import {
    AllGroups,
    AllSeries,
    SearchIndex,
    Series,
    SeriesGroups,
    SeriesVolumeCover,
    SeriesVolumeCovers,
} from "../src";

export const allGroupsJS: AllGroups = allGroups;
export const allSeriesJS: AllSeries = allSeries;
export const searchIndexJS: SearchIndex = searchIndex;
export const seriesJS: Series = series;
export const seriesGroupsJS: SeriesGroups = seriesGroups;
/*
We use these exceptions because TypeScript is unable to read the JSON data as a constant-length array.
 */
// @ts-ignore
export const seriesVolumeCoverJS: SeriesVolumeCover = seriesVolumeCover;
// @ts-ignore
export const seriesVolumeCoversJS: SeriesVolumeCovers = seriesVolumeCovers;
