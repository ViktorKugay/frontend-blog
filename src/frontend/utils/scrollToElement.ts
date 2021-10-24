export const scrollToElement = (elementId: string): void => {
  const scrollTo = document.getElementById(elementId);
  if (scrollTo) {
    scrollTo.scrollIntoView({block: 'start', behavior: 'smooth'});
  }
};

export function scrollIntoView(htmlElementId: string) {
  const element = document.getElementById(htmlElementId);
  if (element) {
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }
}
