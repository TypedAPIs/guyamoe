from typing import Dict, List

from typing_extensions import TypedDict

class Chapter(TypedDict):
    """
    Chapter(data) -> Chapter
    Chapter(**attrs) -> Chapter
    A chapter of a series."""
    volume: str
    """The volume number for the chapter."""

    title: str
    """The title of the chapter."""

    folder: str
    """The folder name for the chapter. This is used to get the pages of the chapter."""

    groups: Dict[str, List[str]]
    """The pages released by each group for the chapter. The key is one of the group IDs from :attr:`.Series.groups`,
    and the value is the ordered list of page filenames.
    
    A full page URL can be constructed using :attr:`.Series.slug`, :attr:`.folder`, the group ID,
    and the page filename, by filling the template:
    ``{baseUrl}/media/manga/{slug}/chapters/{folder}/{groupID}/{pageName}``
    
    For example, if my base URL is ``https://guya.moe``, my slug is ``Kaguya-Wants-To-Be-Confessed-To``,
    my folder is ``0259_0ixv0umx``, my group ID is ``7``, and the page name is ``01.png?v3``,
    I would point a request to 
    ``https://guya.moe/media/manga/Kaguya-Wants-To-Be-Confessed-To/chapters/0259_0ixv0umx/7/01.png?v3``.
    """

    release_date: Dict[str, int]
    """The time each group released the chapter. The key is one of the group IDs from :attr:`.Series.groups`,
    and the value is the UNIX timestamp of the release time."""

class Series(TypedDict):
    """
    Series(data) -> Series
    Series(**attrs) -> Series
    A full series dictionary containing all the information about a series and it's chapters."""

    slug: str
    """The slug of the series."""

    title: str
    """The title of the series."""

    description: str
    """The description of the series."""

    author: str
    """The author of the series."""

    artist: str
    """The artist of the series."""

    groups: Dict[str, str]
    """A dictionary of group IDs and their respective names."""

    cover: str
    """A **relative url** to the cover image of the series. The URL is always relative to the root of the site.

    For example, if a given URL is ``/media/manga/Kaguya-Wants-To-Be-Confessed-To/volume_covers/25/18665.jpg``, 
    and the site root is ``https://guya.moe``, then the cover image URL will be 
    ``https://guya.moe/media/manga/Kaguya-Wants-To-Be-Confessed-To/volume_covers/25/18665.jpg``.
    """

    preferred_sort: List[str]
    """A list of the group IDs to prioritize when multiple groups upload the same chapter.
    
    The values correspond to the group keys in :attr:`.groups`.
    
    For example, if group ID ``1`` and group ID ``2`` both upload the same chapter, and ``preferred_sort`` is ``[1, 2]``,
    then the chapter for group ID ``1`` should be shown as the chapter for the given chapter number.
    """

    chapters: Dict[str, Chapter]
    """A dictionary of chapter numbers and their respective chapter information."""

    next_release_page: bool
    """Whether or not the next release page is enabled for the series."""

    next_release_time: float
    """The UNIX timestamp for the approximate release time of the next chapter."""

    next_release_html: str
    """The HTML for the next release page."""

