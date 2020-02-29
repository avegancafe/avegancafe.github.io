import { useMediaQuery } from 'react-responsive'
import mediaConstants from './mediaConstants'

const useMedia = () => ({
  isDesktop: useMediaQuery({ query: mediaConstants.desktop() }),
  isTablet: useMediaQuery({ query: mediaConstants.tablet() }),
  isMobile: useMediaQuery({ query: mediaConstants.phone() }),
  isHorizontalMobile: useMediaQuery({
    query: mediaConstants.phoneHorizontal(),
  }),
})

export default useMedia
