// Tell TypeScript to treat *.css imports as valid side-effect modules.
// Next.js handles the actual CSS bundling; this declaration just
// silences the "Cannot find module" error for CSS imports.
declare module "*.css" {
    const styles: { [className: string]: string };
    export default styles;
}
