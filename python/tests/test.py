from .examples.allGroups import data as allGroups_data
from .examples.allSeries import data as allSeries_data
from .examples.searchIndex import data as searchIndex_data
from .examples.series import data as series_data
from .examples.seriesGroups import data as seriesGroups_data
from .examples.seriesVolumeCover import data as seriesVolumeCover_data
from .examples.seriesVolumeCovers import data as seriesVolumeCovers_data
from guyamoe_api_types import AllGroups, AllSeries, SearchIndex, Series, SeriesGroups, SeriesVolumeCover, \
    SeriesVolumeCovers

allSeries: AllSeries = allSeries_data
series: Series = series_data
seriesGroups: SeriesGroups = seriesGroups_data
allGroups: AllGroups = allGroups_data
seriesVolumeCovers: SeriesVolumeCovers = seriesVolumeCovers_data
seriesVolumeCover: SeriesVolumeCover = seriesVolumeCover_data
searchIndex: SearchIndex = searchIndex_data
