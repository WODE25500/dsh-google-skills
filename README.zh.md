# dsh-google-skills

**Google 的 [Agent Skills](https://github.com/google/skills) for DeepSeek Harness** — 128 个打包的 `SKILL.md` 技能,覆盖 Google Cloud、BigQuery、GKE、Gemini、Firebase、广告与分析。

把 `google/skills`(agent 无关的 SKILL.md,上游 Apache-2.0)适配成 DSH bundle 插件。

## 安装

```sh
dsh plugin --profile web add dsh-google-skills
```

装完技能即出现在 agent 技能目录(安装时被收集进 bundled skill root)。

## 技能

源自 `google/skills` 的 `skills/`(ads、analytics、cloud、developers):

- Google Cloud / GKE / BigQuery / Bigtable / Spanner / Cloud Run / Cloud SQL 基础
- Gemini API / Live / Agents
- Google Ads API / Mobile Ads
- Agent Platform、Genkit、IAM、Data Lineage 等

## 上游

https://github.com/google/skills (Apache-2.0)

## 许可

MIT
