#!/bin/bash
git pull origin main

IMAGE_BASE="portflio"

if docker images --format '{{.Repository}}:{{.Tag}}' | grep -q "${{IMAGE_BASE}}"; then
    