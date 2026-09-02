# dsh-google-skills

**Google's [Agent Skills](https://github.com/google/skills) for DeepSeek Harness** — 128 bundled `SKILL.md` skills for Google Cloud, BigQuery, GKE, Gemini, Firebase, ads and analytics.

An adaptation of `google/skills` (agent-agnostic SKILL.md, Apache-2.0 upstream) into a DSH bundle plugin.

## Install

```sh
dsh plugin --profile web add dsh-google-skills
```

Then the skills appear in the agent skill catalog (collected into the bundled skill root at install time).

## Skills

Bundled from `google/skills` `skills/` (ads, analytics, cloud, developers):

- Google Cloud / GKE / BigQuery / Bigtable / Spanner / Cloud Run / Cloud SQL basics
- Gemini API / Live / Agents
- Google Ads API / Mobile Ads
- Agent Platform, Genkit, IAM, Data Lineage, and more

## Upstream

https://github.com/google/skills (Apache-2.0)

## License

MIT
