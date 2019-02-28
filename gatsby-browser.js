exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  const currentPosition = getSavedScrollPosition(location)
  if (location.key === 'initial' && currentPosition)
    return currentPosition
  return false
}