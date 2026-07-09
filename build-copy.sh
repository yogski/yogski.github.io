#!/bin/bash

# Parse command-line arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --path)
      INPUT_PATH="$2"
      shift 2
      ;;
    --output)
      OUTPUT_NAME="$2"
      shift 2
      ;;
    --repo-root)
      REPO_ROOT="$2"
      shift 2
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

# Validate mandatory arguments
if [[ -z "$INPUT_PATH" ]] || [[ -z "$OUTPUT_NAME" ]]; then
  echo "Error: --path and --output are mandatory"
  echo "Usage: $0 --path <folder_path> --output <output_name> [--repo-root <repo_root>]"
  exit 1
fi

# Default repo root to current directory if not specified
if [[ -z "$REPO_ROOT" ]]; then
  REPO_ROOT="."
fi

# Check if input path exists
if [[ ! -d "$INPUT_PATH" ]]; then
  echo "Error: Input path does not exist: $INPUT_PATH"
  exit 1
fi

# Navigate to the input path
cd "$INPUT_PATH" || exit 1
echo "Changed to: $(pwd)"

# Find the build folder (checks common names in order)
BUILD_FOLDER=""
for folder in dist build out output target _site public; do
  if [[ -d "$folder" ]]; then
    BUILD_FOLDER="$folder"
    break
  fi
done

if [[ -z "$BUILD_FOLDER" ]]; then
  echo "Error: No build folder found (checked: dist, build, out, output, target, _site, public)"
  exit 1
fi

echo "Found build folder: $BUILD_FOLDER"

# Copy to repo root with new name
cp -r "$BUILD_FOLDER" "$REPO_ROOT/$OUTPUT_NAME"

if [[ ! -d "$REPO_ROOT/$OUTPUT_NAME" ]]; then
  echo "Error: Failed to copy build folder"
  exit 1
fi

echo "Copied $BUILD_FOLDER → $REPO_ROOT/$OUTPUT_NAME"

# Change into the new folder
cd "$REPO_ROOT/$OUTPUT_NAME" || exit 1
echo "Changed to: $(pwd)"

# Replace absolute paths with relative paths in all HTML files
# Converts: href="/" → href="./"
#           src="/"  → src="./"
find . -name "*.html" -type f -exec sed -i 's|="/|="./|g' {} \;

echo "✓ Replaced absolute paths with relative paths in HTML files"
echo "Done! You are now in: $(pwd)"
