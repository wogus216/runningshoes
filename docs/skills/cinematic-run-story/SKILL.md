---
name: cinematic-run-story
description: Build a personal running memory as a mobile-first 3D web story with real photos, recorded milestones, and film-style credits. Use when the user wants an immersive running recap or commemorative web experience.
---

# Cinematic Run Story

Turn a real run into a coherent, readable experience. Preserve the user's chosen tone, host site, sound preference, and milestone. Let the story determine the interactions.

## Establish the source of truth

Save a brief separating confirmed events, media evidence, proposed copy, and unresolved facts. Distinguish running date from intended publication date. A planned publication date is not proof that deployment has happened or a scheduler exists.

Inspect the provided folder before asking for more material. Make a contact sheet for photos and sample the route video's ending: a video may contain the exact distance, date, and start time even when no separate record screenshot exists. Do not treat a route animation as a GPX file or reproduce an invented geographic path as GPS evidence.

Preserve source files. Make web-sized copies, lightweight GPU textures, and a video poster in the project. Keep an original-to-output media manifest. Do not strip audio unless the user's scope supports a silent version; preserve the original either way.

Identify people through user confirmation. Do not assign a pictured moment to a kilometre mark, label it a finish photo, or invent dialogue without evidence. Purchased gels and drinks can appear in personal credits as supplies; do not turn them into sponsorship claims.

## Shape the experience

Find the distinctive change in the run: an unplanned distance, a companion's help, a place, or a small moment. Compare genuinely different directions when the aesthetic is unresolved. Recommend one using story fit, available media, and production effort.

Keep main reading and navigation in HTML. Use a focused 3D stage for spatial depth, camera motion, lighting, or objects. When the user requests actual 3D, distinguish WebGL geometry from CSS perspective in both implementation and reporting.

Prototype the uncertain transition before expanding. Use readable captions and actual photos around the 3D treatment. Do not make all the supplied photos load into GPU textures at full resolution; put the wider collection in a lazily loaded gallery.

## Implementation decisions that matter

- Load the 3D module on the commemorative route, conditionally after checking reduced-motion preference. Keep the initial HTML useful before JS, during loading, and when WebGL fails.
- On static-export Next.js sites, optimize source images in advance; image width props alone do not shrink transferred files when image optimization is disabled.
- Keep high-frequency camera and progress values outside React state. Render on demand for scroll-driven scenes; stop when settled, hidden, or out of view.
- Let scroll velocity affect one or two atmospheric properties such as light intensity, trail opacity, or sparse particles. Decay the value after input stops and keep the effect decorative so the story remains readable at every speed.
- Separate chapter reading intervals from camera transitions. Check intermediate opacity, not just chapter centres: two mostly transparent titles can leave an unintended empty screen. Bound progress and verify it stays monotonic.
- Inspect the actual subject position before using a photo as a full-screen background. A portrait with a large sky area may hide the runner beneath a bottom text gradient; a separate frame with a deliberate crop is often clearer.
- A motion-off control must cover CSS effects as well as WebGL. Prefer a small static texture over continuously repainting full-screen grain on mobile.
- Make callbacks passed into renderer effects stable. Opening a photo dialog should not tear down and rebuild a WebGL scene.
- Handle both context-creation failure and context loss. On unmount, cancel frame callbacks, disconnect observers, dispose geometry/materials/textures, remove listeners, and restore DOM attributes written by the director. Late texture callbacks must dispose their results after unmount.
- Test sticky positioning after scrolling. A shared body with overflow-x:hidden may compute overflow-y:auto and become the wrong sticky container. Inspect the actual ancestors; apply a page-scoped correction when needed rather than changing every site's layout.
- Check inherited heading colors on dark pages. An inherited body color does not override an explicit global h1/h2 rule.
- Use scroll and tap on mobile; hover may add subtle motion but cannot be required. Cap GPU resolution to a tested level rather than assuming full device pixel ratio is necessary.

## Credits and photo viewing

Keep credits as semantic text. Auto-roll only while visible; pause when the page is hidden. Provide pause, replay, and skip. Reduced-motion mode should show the full credits statically. If the page exposes a motion-off control, make its scope clear or apply it to the credits too.

Preserve the finished animation state when responding to visibility changes. A finished reel should not quietly become paused and restart on re-entry. Leave a readable closing frame after the reel ends.

For photo dialogs, support an accessible close button, Escape, focus return, and body-scroll restoration. Do not require swipe gestures as the only way to navigate.

## Verify and retain

Check opening, every main transition, the final milestone, gallery, route playback, and credits on mobile and desktop. Check reduced-motion and WebGL failure paths. Verify real image loading, horizontal overflow, focus behavior, and leaving the page. Report emulation separately from real-device testing.

Run the host project's required build/checks. Record observed failures and the narrow fixes that resolved them. Do not describe a technique as verified merely because it compiled. Save the brief, media map, and validation notes so another task can continue without reconstructing the conversation.

Publishing, committing, or scheduling follow the user's actual authorization. A reusable workflow does not grant new permission for external actions.
