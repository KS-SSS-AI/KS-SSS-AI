# Public Roadmaps Implementation & Verification Plan

## Implementation Steps
1. **Automation Tooling Setup**:
   - `profile/automation/roadmaps`: TypeScript-based generator querying GitHub Issues via GitHub REST API with exponential backoff.
   - Fallback mechanism to cached state (`profile/data/roadmap-state.json`) in offline or unauthenticated environments.
2. **Deterministic Output & Cache Invalidation**:
   - Compute SHA-256 digest of rendered roadmaps and append as query parameters in markdown image references to bust GitHub image proxy cache (`?v=<hash>`).
3. **Automated Verification**:
   - `test-roadmaps.ts`: Validates that all 10 locales have matching SVG files, XML conforms to SVG specs, and required text nodes are present.
