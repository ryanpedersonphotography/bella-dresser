#!/bin/bash

# Script to convert WebM with transparency to MOV for Safari
# Usage: ./convert-video-for-safari.sh input.webm output.mov

if [ $# -ne 2 ]; then
    echo "Usage: $0 input.webm output.mov"
    exit 1
fi

INPUT="$1"
OUTPUT="$2"

# Check if input file has VP8/VP9 alpha mode
echo "Checking for alpha channel in input video..."
if ffprobe -v error -show_entries stream_tags=alpha_mode -of default=noprint_wrappers=1:nokey=1 "$INPUT" | grep -q "1"; then
    echo "VP8/VP9 alpha mode detected. Converting with transparency to ProRes 4444..."
    # Convert WebM with VP8/VP9 alpha to ProRes 4444 with alpha channel
    ffmpeg -y -i "$INPUT" -c:v prores_ks -profile:v 4444 -pix_fmt yuva444p10le -c:a aac "$OUTPUT"
    echo "Converted to ProRes 4444 with alpha channel preserved"
else
    # Check for actual alpha pixel formats
    if ffprobe -v error -show_entries stream=pix_fmt -of default=noprint_wrappers=1:nokey=1 "$INPUT" | grep -q "yuva\|rgba\|bgra"; then
        echo "Alpha pixel format detected. Converting with transparency..."
        ffmpeg -y -i "$INPUT" -c:v prores_ks -profile:v 4444 -pix_fmt yuva444p10le -c:a aac "$OUTPUT"
    else
        echo "No alpha channel detected. Converting without transparency..."
        # Convert to HEVC without alpha
        ffmpeg -y -i "$INPUT" -c:v hevc_videotoolbox -tag:v hvc1 -c:a aac "$OUTPUT"
    fi
fi

echo "Conversion complete: $OUTPUT"