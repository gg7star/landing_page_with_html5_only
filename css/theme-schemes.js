import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // ******************************************************
 *
 * Custom theme code schemes
 * Written by Themelize.me (http://themelize.me)
 *
 * Colour customisation example
 *
 ******************************************************
  // ******************************************************
 * Colours - blue is default so not defined
 ******************************************************
  // ***************** BLUE COLOUR ***********************
  // *
 * Background images
  '#headerface': {
    backgroundImage: 'url('../img/backgrounds/face-blue.jpg')',
    backgroundSize: '1400px 492px',
    'all&&-webkit-min-device-pixel-ratio 1.': {
      backgroundImage: 'url('../img/backgrounds/face-blue@2x.jpg')',
      backgroundSize: '1400px 492px'
    }
  },
  '#headerlights': {
    backgroundImage: 'url('../img/backgrounds/lights-blue.jpg')',
    backgroundSize: '1400px 492px',
    'all&&-webkit-min-device-pixel-ratio 1.': {
      backgroundImage: 'url('../img/backgrounds/lights-blue@2x.jpg')',
      backgroundSize: '1400px 492px'
    }
  },
  '#headertracks': {
    backgroundImage: 'url('../img/backgrounds/tracks-blue.jpg')',
    backgroundSize: '1400px 492px',
    'all&&-webkit-min-device-pixel-ratio 1.': {
      backgroundImage: 'url('../img/backgrounds/tracks-blue@2x.jpg')',
      backgroundSize: '1400px 492px'
    }
  },
  '#headerno-bg': {
    backgroundImage: 'none'
  },
  // *
 * Other elements
  'a': {
    color: '#2f9fe6'
  },
  '#header': {
    color: '#addaf1'
  },
  '#header page-title': {
    color: '#ffffff'
  },
  '#header p': {
    color: '#ffffff'
  },
  '#header a': {
    color: '#ffffff'
  },
  '#header h1': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  '#header h2': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  '#header h3': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  '#header h4': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  '#header h5': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'features sub-title': {
    color: '#2f9fe6',
    fontFamily: 'inherit',
    fontWeight: '400'
  },
  'signup-form btn': {
    background: '#2f9fe6',
    color: '#ffffff',
    width: [{ unit: '%H', value: 1 }],
    minWidth: [{ unit: 'px', value: 274 }],
    borderRadius: '50px'
  },
  'medias li btn': {
    background: '#2f9fe6',
    color: '#ffffff',
    width: [{ unit: '%H', value: 1 }],
    minWidth: [{ unit: 'px', value: 274 }],
    borderRadius: '50px'
  },
  'signup-form btn:hover': {
    background: '#1885ca'
  },
  'medias li btn:hover': {
    background: '#1885ca'
  },
  'btn-primary': {
    background: '#2f9fe6',
    color: '#ffffff'
  },
  'btn-primary:hover': {
    background: '#1885ca'
  },
  '#schemes backgrounds aactive': {
    borderColor: '#2f9fe6'
  },
  // ***************** WINE COLOUR ***********************
  // *
 * Background images
  'wine #headerface': {
    backgroundImage: 'url('../img/backgrounds/face-wine.jpg')',
    backgroundSize: '1400px 492px',
    'all&&-webkit-min-device-pixel-ratio 1.': {
      backgroundImage: 'url('../img/backgrounds/face-wine@2x.jpg')',
      backgroundSize: '1400px 492px'
    }
  },
  'wine #headerlights': {
    backgroundImage: 'url('../img/backgrounds/lights-wine.jpg')',
    backgroundSize: '1400px 492px',
    'all&&-webkit-min-device-pixel-ratio 1.': {
      backgroundImage: 'url('../img/backgrounds/lights-wine@2x.jpg')',
      backgroundSize: '1400px 492px'
    }
  },
  'wine #headertracks': {
    backgroundImage: 'url('../img/backgrounds/tracks-wine.jpg')',
    backgroundSize: '1400px 492px',
    'all&&-webkit-min-device-pixel-ratio 1.': {
      backgroundImage: 'url('../img/backgrounds/tracks-wine@2x.jpg')',
      backgroundSize: '1400px 492px'
    }
  },
  'wine #headerno-bg': {
    backgroundImage: 'none'
  },
  'wine #schemes backgrounds aface': {
    backgroundImage: 'url('../img/backgrounds/face-wine.jpg')',
    backgroundSize: 'auto 80px',
    'all&&-webkit-min-device-pixel-ratio 1.': {
      backgroundImage: 'url('../img/backgrounds/face-wine@2x.jpg')',
      backgroundSize: 'auto 80px'
    }
  },
  'wine #schemes backgrounds alights': {
    backgroundImage: 'url('../img/backgrounds/lights-wine.jpg')',
    backgroundSize: 'auto 80px',
    'all&&-webkit-min-device-pixel-ratio 1.': {
      backgroundImage: 'url('../img/backgrounds/lights-wine@2x.jpg')',
      backgroundSize: 'auto 80px'
    }
  },
  'wine #schemes backgrounds atracks': {
    backgroundImage: 'url('../img/backgrounds/tracks-wine.jpg')',
    backgroundSize: 'auto 80px',
    'all&&-webkit-min-device-pixel-ratio 1.': {
      backgroundImage: 'url('../img/backgrounds/tracks-wine@2x.jpg')',
      backgroundSize: 'auto 80px'
    }
  },
  'wine #schemes backgrounds ano-bg': {
    backgroundImage: 'none'
  },
  // *
 * Other elements
  'wine a': {
    color: '#ce2568'
  },
  'wine #header': {
    color: '#c6799b',
    backgroundColor: '#1a0d12'
  },
  'wine #header page-title': {
    color: '#ffffff'
  },
  'wine #header p': {
    color: '#ffffff'
  },
  'wine #header a': {
    color: '#ffffff'
  },
  'wine features sub-title': {
    color: '#ce2568',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 0 }],
    fontFamily: 'inherit',
    fontWeight: '400',
  },
  'wine signup-form btn': {
    background: '#ce2568',
    color: '#ffffff'
  },
  'wine signup-form btn:hover': {
    background: '#a31d52'
  },
  'wine btn-primary': {
    background: '#ce2568',
    color: '#ffffff'
  },
  'wine btn-primary:hover': {
    background: '#a31d52'
  },
  'wine #schemes backgrounds aactive': {
    borderColor: '#ce2568'
  }
});
