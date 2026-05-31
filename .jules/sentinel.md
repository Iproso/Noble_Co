## 2024-05-31 - Cross-Site Scripting (XSS) in GlobeHero Component
**Vulnerability:** The `GlobeHero` component took a `title` prop and rendered it directly using `dangerouslySetInnerHTML={{ __html: title }}` without any sanitization.
**Learning:** Even internal props containing HTML structures must be sanitized to prevent malicious script injection if the origin of the prop string can be manipulated. React components should not trust their input for HTML rendering directly unless properly sanitized.
**Prevention:** Use a sanitization library like `isomorphic-dompurify` on strings containing HTML prior to passing them to `dangerouslySetInnerHTML`.
