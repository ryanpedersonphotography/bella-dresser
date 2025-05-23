#!/bin/bash

# Script to convert WebM with transparency to HEVC MOV for Safari
# Usage: ./convert-video-for-safari.sh input.webm output.mov

if [ $# -ne 2 ]; then
    echo "Usage: $0 input.webm output.mov"
    exit 1
fi

INPUT="$1"
OUTPUT="$2"

# Convert WebM to HEVC with alpha channel preserved
ffmpeg -i "$INPUT" -c:v hevc_videotoolbox -allow_sw 1 -alpha_quality 0.9 -vtag hvc1 "$OUTPUT"

echo "Conversion complete: $OUTPUT"