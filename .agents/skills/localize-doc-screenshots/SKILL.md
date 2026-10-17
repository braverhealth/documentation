---
name: localize-doc-screenshots
description: Localize UI screenshots in translated Braver Starlight pages. Use for replacement images and exact text and layout review before PR previews; not for general illustrations.
---

# Localize documentation screenshots

Use this skill for screenshots referenced by pages under `site/src/content/docs/`. The translated English pages may import images from `~/assets/guides-fr/`; update the Starlight page and its assets within the requested scope. Do not regenerate the GitBook source folders just to change a translated Starlight page.

## Prepare the replacement

1. Check `site/english-screenshot-ledger.md`, confirm the target PR branch, and inspect the complete page. Map every screenshot import to the step or caption that uses it. If a PR branch is already active elsewhere, preserve that work and integrate any newer remote commits before delivery.
2. Open each source image at native resolution. Record **all** visible text before generating: headings, menu actions, messages, names, dates, timestamps, small badges, and annotations. Translate the text deliberately and check product UI labels against available English strings when exact wording matters.
3. For each image, treat the source screenshot as the edit target. Give the image editor the exact English text and explicit invariants: aspect ratio, app chrome, icon count, names, colors, arrow targets, menu placement, and any text hidden by an overlay. For a sequence showing the same screen, use an accepted English image as a consistency reference for the next step.
4. Treat every generated output as a candidate. If the built-in image tool saves it outside the repo, copy the selected file into `site/src/assets/guides-en/` with a descriptive name. Preserve the French original. Do not rely on an inline preview or paste image base64 into source files.

## Visual and text acceptance gate

Review each source and replacement side by side at full size, then compare the replacements with one another. Read **every visible glyph** in the rendered pixels, including the start of each word and any diacritic. Check spelling, capitalization, punctuation, patient and staff names, dates, menu labels, and the `pre-prod` ribbon. A prompt containing correct text does not prove that the generated image rendered it correctly.

OCR can help transcribe and compare text, but it is not a sign-off. In this task, OCR read **“Àbout”** as **“About”** and missed the rogue accent above the capital A. Zoom in and inspect headings and other short labels yourself, even when OCR reports the expected words.

Compare layout as carefully as text: count controls and icons; check arrow start and tip, menu position, overlay size, and which parts of a message the menu covers. One generated copy-menu image moved the menu too far right while keeping the words correct. Keep the source's visual relationship between a step and its highlighted control. Matching aspect ratio alone is insufficient.

If any glyph or layout detail is wrong, make a focused correction to that image and repeat the **whole** visual gate on the new output. Recheck the other images in the sequence for wording and style consistency. Do not report “no typos” from OCR or a quick glance.

## Integrate and deliver

- Update the page's image imports to `~/assets/guides-en/` and give each `Figure` useful alt text. Confirm the displayed size still suits the page.
- Update the screenshot ledger after checking every image on the page; its OCR flags identify candidates, not verified translations.
- After the final image change, run the static site build from `site/`, confirm the built English page references the new assets, and run `git diff --check`. This documentation workflow does not require a local development cluster; do not mutate one without the user's explicit approval in the current turn.
- When the user requests a PR preview, make a signed commit and push normally to the PR branch. If that branch advanced, integrate its new commits without rewriting remote history. Verify the exact pushed SHA, signature, Netlify deployment result, and that the target preview page loads. Report a pending deployment as pending.
- Say that generated images are recreations of the product UI, and call out any remaining visual differences that matter to a reader.
