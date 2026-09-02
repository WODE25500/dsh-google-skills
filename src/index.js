// dsh-google-skills
// The bundle's value is its 128 bundled Google agent skills (skills/*/SKILL.md),
// collected by dsh's skill-filesystem provider into the bundled skill root at
// install time. This plugin has no runtime behavior; it exists so the bundle
// registers as a profile layer via its cordis.patch.
export const name = 'google-skills'
export function apply(ctx, config = {}) {
  // intentionally empty: skills are the whole bundle
}
