import {RelativeURL} from "./internal";
/**
 * A 4-element tuple containing the following elements:
 *
 * 1. The volume number.
 * 2. A {@link RelativeURL} to the png image of the cover.
 * 3. A {@link RelativeURL} to the webp image of the cover.
 * 4. A {@link RelativeURL} to the blurred png image of the cover.
 */
export type SeriesVolumeCover = [number, RelativeURL, RelativeURL, RelativeURL];