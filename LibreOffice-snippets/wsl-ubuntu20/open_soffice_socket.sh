#!/usr/bin/env bash

soffice --headless --nologo --nofirststartwizard \
--accept="socket,host=localhost,port=2002;urp;StarOffice.ComponentContext"
