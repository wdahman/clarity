export function scrollToGuard(to, from) {
  if (from.path === '/' && to.hash) {
    // bookmarked links with anchor hash needs to wait for Vue to render DOM
    document.onreadystatechange = () => {
      if (document.readyState == 'complete') {
        // TODO should smooth scrolling work with Firefox? It doesn't at first implementation.
        document.getElementById(to.hash.substring(1)).scrollIntoView({ behavior: 'smooth' });
      }
    };
  } else if (to.hash) {
    // In page navigation doesn't work with smooth scrolling behavior
    document.getElementById(to.hash.substring(1)).scrollIntoView(); // TODO: (investigate why the { behavior: 'smooth' } option doesn't work
  }
}
