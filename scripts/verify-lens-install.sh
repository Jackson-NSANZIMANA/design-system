#!/bin/bash

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m'

echo "=== Lens Installation Verification ==="

check_pkg() {
  local pkg=$1
  local output=$(pnpm list "$pkg" --depth=0 2>/dev/null | grep "$pkg")

  if [ -z "$output" ]; then
    output=$(pnpm list "$pkg" --depth=1 2>/dev/null | grep "$pkg" | head -n 1)
    if [ -z "$output" ]; then
      return 1
    fi
    local version=$(echo "$output" | awk '{print $2}')
    echo -e "${YELLOW}⚠️  $pkg@$version found (but not in your root package.json)${NC}"
    return 0
  fi

  local version=$(echo "$output" | awk '{print $2}')
  echo -e "${GREEN}✅ $pkg@$version installed${NC}"
  return 0
}

# 1. Main Package
echo -e "\n[Core]"
check_pkg "@loomhq/lens" || { echo -e "${RED}❌ @loomhq/lens missing${NC}"; exit 1; }

# 2. Peer Deps
echo -e "\n[Peer Dependencies]"
if ! check_pkg "@emotion/react" && ! check_pkg "@emotion/core"; then
  echo -e "${RED}❌ Emotion (@emotion/react or @emotion/core) NOT found${NC}"
fi
check_pkg "@emotion/styled" || echo -e "${RED}❌ @emotion/styled NOT found${NC}"

# 3. Icons
echo -e "\n[Icons]"
check_pkg "@atlaskit/icon" || echo -e "${YELLOW}⚠️  @atlaskit/icon NOT found (may be optional)${NC}"
check_pkg "@atlaskit/icon-lab" || echo -e "${YELLOW}⚠️  @atlaskit/icon-lab NOT found (may be optional)${NC}"

echo -e "\n=== Verification Finished ==="
