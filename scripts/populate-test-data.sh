# This file should be changed for every project.

BASEDIR="$(dirname "$(dirname "$0")")"

# JS support

JS_DATA_DIR="$BASEDIR/js/tests/data"

mkdir -p "$JS_DATA_DIR"

curl -# 'https://guya.cubari.moe/api/get_all_groups/' -o "$JS_DATA_DIR/allGroups.json"
curl -# 'https://guya.cubari.moe/api/get_all_series/' -o "$JS_DATA_DIR/allSeries.json"
curl -# -X POST 'https://guya.cubari.moe/api/search_index/Kaguya-Wants-To-Be-Confessed-To/' -d 'searchQuery=hello' -o "$JS_DATA_DIR/searchIndex.json"
curl -# 'https://guya.cubari.moe/api/series/Kaguya-Wants-To-Be-Confessed-To/' -o "$JS_DATA_DIR/series.json"
curl -# 'https://guya.cubari.moe/api/get_groups/Kaguya-Wants-To-Be-Confessed-To/' -o "$JS_DATA_DIR/seriesGroups.json"
curl -# 'https://guya.cubari.moe/api/get_volume_cover/Kaguya-Wants-To-Be-Confessed-To/1/' -o "$JS_DATA_DIR/seriesVolumeCover.json"
curl -# 'https://guya.cubari.moe/api/get_volume_covers/Kaguya-Wants-To-Be-Confessed-To/' -o "$JS_DATA_DIR/seriesVolumeCovers.json"
curl -# 'https://guya.cubari.moe/api/series_page_data/Kaguya-Wants-To-Be-Confessed-To/' -o "$JS_DATA_DIR/seriesPageData.json"

# Python support

function jsonToPython() {
    # Usage: jsonToPython <json file> <python file>
    python3 -c $'import json, sys\nprint("data = " + repr(json.loads(sys.stdin.read())))' < "$1" > "$2"
}

PY_DATA_DIR="$BASEDIR/python/tests/examples"

mkdir -p "$PY_DATA_DIR"

jsonToPython "$JS_DATA_DIR/allGroups.json" "$PY_DATA_DIR/allGroups.py"
jsonToPython "$JS_DATA_DIR/allSeries.json" "$PY_DATA_DIR/allSeries.py"
jsonToPython "$JS_DATA_DIR/searchIndex.json" "$PY_DATA_DIR/searchIndex.py"
jsonToPython "$JS_DATA_DIR/series.json" "$PY_DATA_DIR/series.py"
jsonToPython "$JS_DATA_DIR/seriesGroups.json" "$PY_DATA_DIR/seriesGroups.py"
jsonToPython "$JS_DATA_DIR/seriesVolumeCover.json" "$PY_DATA_DIR/seriesVolumeCover.py"
jsonToPython "$JS_DATA_DIR/seriesVolumeCovers.json" "$PY_DATA_DIR/seriesVolumeCovers.py"
jsonToPython "$JS_DATA_DIR/seriesPageData.json" "$PY_DATA_DIR/seriesPageData.py"