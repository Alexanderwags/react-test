import { useEffect, useState } from 'react';

import domready from 'domready';
import Reveal from 'resources/js/modules/reveal';

function useReveral() {
  const [loading, setLoadingState] = useState(true);
  useEffect(() => {
    domready(() => {
      Reveal.initialize({
        controls: false,
        progress: false,
        touch: true,
        history: true,
        previewLinks: true,
        center: false,
        width: 1920,
        height: 1080,
        margin: 0,
        mouseWheel: false,
        transition: 'fade', // none/fade/slide/convex/concave/zoom
      });
    });

    Reveal.addEventListener('ready', () => {
      // event.currentSlide, event.indexh, event.indexv
      setLoadingState(false);
      window.onresize = function () {
        document.body.height = window.innerHeight;
      };
      window.onresize();
    });
  }, []);
  return {
    loading,
  };
}

export default useReveral;
