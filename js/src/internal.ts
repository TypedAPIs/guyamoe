/**
 * This module contains types that do not exist in the Python version of the documentation.
 * Unlike in sphinx, it is not possible to create documentation from non-code source files.
 * @module
 */

/**
 * A **relative url** is a URL that is relative to a given base. In the context of the
 * guya.moe API, this means URLs that are relative to the base URL of the website.
 * For example, if the api is located at `https://guya.moe/api/`, then the relative
 * URL base is located at `https://guya.moe`. If I have a relative URL such as
 * `/media/manga/Kaguya-Wants-To-Be-Confessed-To/volume_covers/25/18665.jpg`,
 * then the absolute URL is
 * `https://guya.moe/media/manga/Kaguya-Wants-To-Be-Confessed-To/volume_covers/25/18665.jpg`.
 */
export type RelativeURL = string;
