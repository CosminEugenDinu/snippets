#!/usr/bin/env bash

# chmod +x open_soffice_socket.sh
# ./open_soffice_socket.sh

soffice --headless --nologo --nofirststartwizard \
--accept="socket,host=localhost,port=2002;urp;StarOffice.ComponentContext"

# soffice --accept="socket,host=localhost,port=2002;urp;" --norestore --nologo --nodefault # --headless

