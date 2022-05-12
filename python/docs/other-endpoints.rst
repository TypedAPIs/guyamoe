Other Endpoints
---------------

Endpoints in this list are excluded because they do not return JSON responses or are authenticated endpoints only accessible by privileged users.

/download_chapter/{slug}/{chapter_number}
=========================================

Returns a chapter as a zip file containing all of the pages.

/upload_new_chapter/{slug}
==========================

Uploads a new chapter to the series defined by the slug.

/black_hole_mail/
=================

Sends some guyamail to a hidden webhook. Not included in the response list because it only returns a dictionary with the key "success" and a value indicating the status of the request.
