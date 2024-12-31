#!/usr/bin/env bash
#
# Validate for broken links (mostly broken anchors)

set -euo pipefail

npm run build

FORCE_COLOR=2 node \
    --no-warnings=ExperimentalWarning \
    --loader ts-node/esm \
    ./validate-links.mts
