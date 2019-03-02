exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  const currentPosition = getSavedScrollPosition(location)
  if (location.key === 'initial' && currentPosition)
    return currentPosition
  if (window.document.body.clientWidth <= 768)
    window.document.getElementsByTagName('main')[0].scrollIntoView()
  return false
}