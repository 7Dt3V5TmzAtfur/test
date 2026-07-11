# AGENTS.md

This repo uses GitHub Harness workflow.

## Goal

Use GitHub as the control plane for AI work. Do not keep long project state only in chat.

## Core Rule

Before implementation, make sure there is one of these:

- a demand Discussion with a demand confirmation commit;
- a task issue with goal, scope, acceptance, and evidence requirements.

If neither exists, stop and create or request one.

## Workflow

1. Read the relevant Discussion, issue, PR, and previous comments.
2. Restate the current goal, boundary, acceptance, and evidence target.
3. Execute only inside the stated scope.
4. If scope changes, return to Discussion or split a new issue.
5. When finished, write an evidence comment.
6. Do not claim completion without evidence.

## Evidence Comment Requirements

Every completion comment must include:

- what changed;
- where to review it;
- what was not done;
- risks or open questions;
- recommended next step: close, continue, split, or return to Discussion.

## Human Review

The human reviews four things:

- direction;
- boundary;
- evidence;
- next step.

## Public / Private Boundary

Do not expose credentials, private paths, private project material, or account-specific settings.

## Skills

Use these local skills when available:

- `github-harness-workflow`: run the demand -> task -> evidence loop.
- `github-cognitive-surface-lite`: write readable GitHub issues, PR bodies, and comments.

## Branch & PR Conventions

- Branch naming for execution issues: `feat/<issue#>-<slug>` (e.g. `feat/5-props`).
- PR body must include `Closes #<task-issue#>` for execution issues. Control surfaces (parent Epic / truth-source) use `Refs`, never `Closes`.
- **Never commit directly to `main`.** All work goes through a `feat/` branch + PR. Bypassing this is a harness violation (came up around `b982357`).
- **Do not delete `feat/<n>-<slug>` after merge.** The user wants per-task branches to stay in the GitHub log so the history is traceable. If `--delete-branch` was applied by mistake, re-create the branch from the merge commit SHA and push it back.
- **Default merge strategy: `--merge` (regular merge commit), not `--squash`.** Squash collapses the task's per-file commits into one and hides the original commit history. `--merge` keeps every commit on the branch tip. Confirm with the human before each PR.
- **Do not auto-merge.** Open the PR, post the evidence comment, then stop and use AskUserQuestion to let the human review direction / boundary / evidence / next step. Only merge after explicit "merge" reply.

## Local Environment

- Network proxy (needed for `brew`, `npm`, GitHub API in this region):
  ```
  export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=http://127.0.0.1:7890
  ```
- Install `gh` CLI:
  ```
  brew install gh
  gh auth login --hostname github.com --git-protocol https --web
  ```
  Browser login flow needs `repo` scope. Verify with `gh auth status`.

## Lessons Log

- 2026-07-11 · Task 3 (#5): `--delete-branch` removed `feat/5-props` after squash merge; user pushed back wanting the branch kept. Re-created branch from merge commit SHA, switched future default to `--merge` so per-commit history survives.
- 2026-07-11 · Task 3 (#5): commit `b982357` was pushed directly to `main` (bypassing `feat/` branch). Cleaned up in PR #11; added the "no direct-to-main" rule above.