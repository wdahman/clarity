export function scrollToGuard(from, to) {
  // Use this to handle two use cases related to routing
  // 1. User bookmarks a page with an anchortag (/componment/alert/#size
  // 2. User is alreadh on /componment/alert/ and uses the toc links to navigate to a different anchor tag
  //    e.g. - /components/alert/#placement-2
  console.log('scrollToGuard', from.path, to.path, to.hash);
  if (from.fullPath === to.fullPath && to.hash) {
    console.log('activate scrolling');
    return true;

    // const scroll
  }
  return false;
}
