import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // ******************************************************
 *
 * Custom theme code styles
 * Written by Themelize.me (http://themelize.me)
 *
 ******************************************************
  clearfix: {
    '*zoom': '1'
  },
  'clearfix:before': {
    display: 'table',
    content: '""',
    lineHeight: [{ unit: 'px', value: 0 }]
  },
  'clearfix:after': {
    display: 'table',
    content: '""',
    lineHeight: [{ unit: 'px', value: 0 }]
  },
  'clearfix:after': {
    clear: 'both'
  },
  'hide-text': {
    font: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'a' }],
    color: 'transparent',
    textShadow: [{ unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }],
    backgroundColor: 'transparent',
    border: [{ unit: 'px', value: 0 }]
  },
  'input-block-level': {
    display: 'block',
    width: [{ unit: '%H', value: 1 }],
    minHeight: [{ unit: 'px', value: 30 }],
    WebkitBoxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    boxSizing: 'border-box'
  },
  'border-box': {
    WebkitBoxSizing: 'border-box',
    // Safari/Chrome, other WebKit
    MozBoxSizing: 'border-box',
    // Firefox, other Gecko
    boxSizing: 'border-box',
    // Opera/IE 8+
  },
  // Font Awesome 3.0
    the iconic font designed for use with Twitter Bootstrap
    -------------------------------------------------------
    The full suite of pictographic icons, examples, and documentation
    can be found at: http://fortawesome.github.com/Font-Awesome/

    License
    -------------------------------------------------------
    • The Font Awesome font is licensed under the SIL Open Font License - http://scripts.sil.org/OFL
    • Font Awesome CSS, LESS, and SASS files are licensed under the MIT License -
      http://opensource.org/licenses/mit-license.html
    • The Font Awesome pictograms are licensed under the CC BY 3.0 License - http://creativecommons.org/licenses/by/3.0/
    • Attribution is no longer required in Font Awesome 3.0, but much appreciated:
      "Font Awesome by Dave Gandy - http://fortawesome.github.com/Font-Awesome"

    Contact
    -------------------------------------------------------
    Email: dave@davegandy.com
    Twitter: http://twitter.com/fortaweso_me
    Work: Lead Product Designer @ http://kyruus.com
  fontFace: {
    fontFamily: ''FontAwesome'',
    src: 'url('fonts/fontawesome/fontawesome-webfont.eot')',
    src: 'url('fonts/fontawesome/fontawesome-webfont.eot?#iefix') format('embedded-opentype'), url('fonts/fontawesome/fontawesome-webfont.woff') format('woff'), url('fonts/fontawesome/fontawesome-webfont.ttf') format('truetype')',
    fontWeight: 'normal',
    fontStyle: 'normal'
  },
  // Font Awesome styles
    -------------------------------------------------------
  // includes sprites.less reset
  '[class^="icon-"]': {
    fontFamily: 'FontAwesome',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'inherit',
    display: 'inline',
    width: [{ unit: 'string', value: 'auto' }],
    height: [{ unit: 'string', value: 'auto' }],
    lineHeight: [{ unit: 'string', value: 'normal' }],
    verticalAlign: 'baseline',
    backgroundImage: 'none !important',
    backgroundPosition: '0% 0%',
    backgroundRepeat: 'repeat'
  },
  '[class*=" icon-"]': {
    fontFamily: 'FontAwesome',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'inherit',
    display: 'inline',
    width: [{ unit: 'string', value: 'auto' }],
    height: [{ unit: 'string', value: 'auto' }],
    lineHeight: [{ unit: 'string', value: 'normal' }],
    verticalAlign: 'baseline',
    backgroundImage: 'none !important',
    backgroundPosition: '0% 0%',
    backgroundRepeat: 'repeat'
  },
  '[class^="icon-"]:before': {
    textDecoration: 'inherit',
    display: 'inline-block',
    speak: 'none'
  },
  '[class*=" icon-"]:before': {
    textDecoration: 'inherit',
    display: 'inline-block',
    speak: 'none'
  },
  // makes sure icons active on rollover in links
  'a [class^="icon-"]': {
    display: 'inline-block'
  },
  'a [class*=" icon-"]': {
    display: 'inline-block'
  },
  // makes the font 33% larger relative to the icon container
  'icon-large:before': {
    verticalAlign: '-10%',
    fontSize: [{ unit: 'em', value: 1.3333333333333333 }]
  },
  'btn [class^="icon-"]': {
    display: 'inline',
    // keeps button heights with and without icons the same
    lineHeight: [{ unit: 'em', value: 0.6 }]
  },
  'nav [class^="icon-"]': {
    display: 'inline',
    // keeps button heights with and without icons the same
    lineHeight: [{ unit: 'em', value: 0.6 }]
  },
  'btn [class*=" icon-"]': {
    display: 'inline',
    // keeps button heights with and without icons the same
    lineHeight: [{ unit: 'em', value: 0.6 }]
  },
  'nav [class*=" icon-"]': {
    display: 'inline',
    // keeps button heights with and without icons the same
    lineHeight: [{ unit: 'em', value: 0.6 }]
  },
  'btn [class^="icon-"]icon-spin': {
    display: 'inline-block'
  },
  'nav [class^="icon-"]icon-spin': {
    display: 'inline-block'
  },
  'btn [class*=" icon-"]icon-spin': {
    display: 'inline-block'
  },
  'nav [class*=" icon-"]icon-spin': {
    display: 'inline-block'
  },
  'li [class^="icon-"]': {
    display: 'inline-block',
    width: [{ unit: 'em', value: 1.25 }],
    textAlign: 'center'
  },
  'li [class*=" icon-"]': {
    display: 'inline-block',
    width: [{ unit: 'em', value: 1.25 }],
    textAlign: 'center'
  },
  'li [class^="icon-"]icon-large': {
    // increased font size for icon-large
    width: [{ unit: 'em', value: 1.5625 }]
  },
  'li [class*=" icon-"]icon-large': {
    // increased font size for icon-large
    width: [{ unit: 'em', value: 1.5625 }]
  },
  ulicons: {
    listStyleType: 'none',
    textIndent: '-0.75em'
  },
  'ulicons li [class^="icon-"]': {
    width: [{ unit: 'em', value: 0.75 }]
  },
  'ulicons li [class*=" icon-"]': {
    width: [{ unit: 'em', value: 0.75 }]
  },
  'icon-muted': {
    color: '#eeeeee'
  },
  'icon-border': {
    border: [{ unit: 'string', value: 'solid' }, { unit: 'px', value: 1 }, { unit: 'string', value: '#eeeeee' }],
    padding: [{ unit: 'em', value: 0.2 }, { unit: 'em', value: 0.25 }, { unit: 'em', value: 0.15 }, { unit: 'em', value: 0.25 }],
    WebkitBorderRadius: '3px',
    MozBorderRadius: '3px',
    borderRadius: '3px'
  },
  'icon-2x': {
    fontSize: [{ unit: 'em', value: 2 }]
  },
  'icon-2xicon-border': {
    borderWidth: '2px',
    WebkitBorderRadius: '4px',
    MozBorderRadius: '4px',
    borderRadius: '4px'
  },
  'icon-3x': {
    fontSize: [{ unit: 'em', value: 3 }]
  },
  'icon-3xicon-border': {
    borderWidth: '3px',
    WebkitBorderRadius: '5px',
    MozBorderRadius: '5px',
    borderRadius: '5px'
  },
  'icon-4x': {
    fontSize: [{ unit: 'em', value: 4 }]
  },
  'icon-4xicon-border': {
    borderWidth: '4px',
    WebkitBorderRadius: '6px',
    MozBorderRadius: '6px',
    borderRadius: '6px'
  },
  'pull-right': {
    float: 'right'
  },
  'pull-left': {
    float: 'left'
  },
  '[class^="icon-"]pull-left': {
    marginRight: [{ unit: 'em', value: 0.35 }]
  },
  '[class*=" icon-"]pull-left': {
    marginRight: [{ unit: 'em', value: 0.35 }]
  },
  '[class^="icon-"]pull-right': {
    marginLeft: [{ unit: 'em', value: 0.35 }]
  },
  '[class*=" icon-"]pull-right': {
    marginLeft: [{ unit: 'em', value: 0.35 }]
  },
  'btn [class^="icon-"]pull-lefticon-2x': {
    marginTop: [{ unit: 'em', value: 0.35 }]
  },
  'btn [class*=" icon-"]pull-lefticon-2x': {
    marginTop: [{ unit: 'em', value: 0.35 }]
  },
  'btn [class^="icon-"]pull-righticon-2x': {
    marginTop: [{ unit: 'em', value: 0.35 }]
  },
  'btn [class*=" icon-"]pull-righticon-2x': {
    marginTop: [{ unit: 'em', value: 0.35 }]
  },
  'btn [class^="icon-"]icon-spinicon-large': {
    height: [{ unit: 'em', value: 0.75 }]
  },
  'btn [class*=" icon-"]icon-spinicon-large': {
    height: [{ unit: 'em', value: 0.75 }]
  },
  'btnbtn-small [class^="icon-"]pull-lefticon-2x': {
    marginTop: [{ unit: 'em', value: 0.45 }]
  },
  'btnbtn-small [class*=" icon-"]pull-lefticon-2x': {
    marginTop: [{ unit: 'em', value: 0.45 }]
  },
  'btnbtn-small [class^="icon-"]pull-righticon-2x': {
    marginTop: [{ unit: 'em', value: 0.45 }]
  },
  'btnbtn-small [class*=" icon-"]pull-righticon-2x': {
    marginTop: [{ unit: 'em', value: 0.45 }]
  },
  'btnbtn-large [class^="icon-"]pull-lefticon-2x': {
    marginTop: [{ unit: 'em', value: 0.2 }]
  },
  'btnbtn-large [class*=" icon-"]pull-lefticon-2x': {
    marginTop: [{ unit: 'em', value: 0.2 }]
  },
  'btnbtn-large [class^="icon-"]pull-righticon-2x': {
    marginTop: [{ unit: 'em', value: 0.2 }]
  },
  'btnbtn-large [class*=" icon-"]pull-righticon-2x': {
    marginTop: [{ unit: 'em', value: 0.2 }]
  },
  'icon-spin': {
    display: 'inline-block',
    MozAnimation: 'spin 2s infinite linear',
    OAnimation: 'spin 2s infinite linear',
    WebkitAnimation: 'spin 2s infinite linear',
    animation: 'spin 2s infinite linear'
  },
  // Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen
    readers do not read off random characters that represent icons
  'icon-glass:before': {
    content: '"\f000"'
  },
  'icon-music:before': {
    content: '"\f001"'
  },
  'icon-search:before': {
    content: '"\f002"'
  },
  'icon-envelope:before': {
    content: '"\f003"'
  },
  'icon-heart:before': {
    content: '"\f004"'
  },
  'icon-star:before': {
    content: '"\f005"'
  },
  'icon-star-empty:before': {
    content: '"\f006"'
  },
  'icon-user:before': {
    content: '"\f007"'
  },
  'icon-film:before': {
    content: '"\f008"'
  },
  'icon-th-large:before': {
    content: '"\f009"'
  },
  'icon-th:before': {
    content: '"\f00a"'
  },
  'icon-th-list:before': {
    content: '"\f00b"'
  },
  'icon-ok:before': {
    content: '"\f00c"'
  },
  'icon-remove:before': {
    content: '"\f00d"'
  },
  'icon-zoom-in:before': {
    content: '"\f00e"'
  },
  'icon-zoom-out:before': {
    content: '"\f010"'
  },
  'icon-off:before': {
    content: '"\f011"'
  },
  'icon-signal:before': {
    content: '"\f012"'
  },
  'icon-cog:before': {
    content: '"\f013"'
  },
  'icon-trash:before': {
    content: '"\f014"'
  },
  'icon-home:before': {
    content: '"\f015"'
  },
  'icon-file:before': {
    content: '"\f016"'
  },
  'icon-time:before': {
    content: '"\f017"'
  },
  'icon-road:before': {
    content: '"\f018"'
  },
  'icon-download-alt:before': {
    content: '"\f019"'
  },
  'icon-download:before': {
    content: '"\f01a"'
  },
  'icon-upload:before': {
    content: '"\f01b"'
  },
  'icon-inbox:before': {
    content: '"\f01c"'
  },
  'icon-play-circle:before': {
    content: '"\f01d"'
  },
  'icon-repeat:before': {
    content: '"\f01e"'
  },
  // \f020 doesn't work in Safari. all shifted one down
  'icon-refresh:before': {
    content: '"\f021"'
  },
  'icon-list-alt:before': {
    content: '"\f022"'
  },
  'icon-lock:before': {
    content: '"\f023"'
  },
  'icon-flag:before': {
    content: '"\f024"'
  },
  'icon-headphones:before': {
    content: '"\f025"'
  },
  'icon-volume-off:before': {
    content: '"\f026"'
  },
  'icon-volume-down:before': {
    content: '"\f027"'
  },
  'icon-volume-up:before': {
    content: '"\f028"'
  },
  'icon-qrcode:before': {
    content: '"\f029"'
  },
  'icon-barcode:before': {
    content: '"\f02a"'
  },
  'icon-tag:before': {
    content: '"\f02b"'
  },
  'icon-tags:before': {
    content: '"\f02c"'
  },
  'icon-book:before': {
    content: '"\f02d"'
  },
  'icon-bookmark:before': {
    content: '"\f02e"'
  },
  'icon-print:before': {
    content: '"\f02f"'
  },
  'icon-camera:before': {
    content: '"\f030"'
  },
  'icon-font:before': {
    content: '"\f031"'
  },
  'icon-bold:before': {
    content: '"\f032"'
  },
  'icon-italic:before': {
    content: '"\f033"'
  },
  'icon-text-height:before': {
    content: '"\f034"'
  },
  'icon-text-width:before': {
    content: '"\f035"'
  },
  'icon-align-left:before': {
    content: '"\f036"'
  },
  'icon-align-center:before': {
    content: '"\f037"'
  },
  'icon-align-right:before': {
    content: '"\f038"'
  },
  'icon-align-justify:before': {
    content: '"\f039"'
  },
  'icon-list:before': {
    content: '"\f03a"'
  },
  'icon-indent-left:before': {
    content: '"\f03b"'
  },
  'icon-indent-right:before': {
    content: '"\f03c"'
  },
  'icon-facetime-video:before': {
    content: '"\f03d"'
  },
  'icon-picture:before': {
    content: '"\f03e"'
  },
  'icon-pencil:before': {
    content: '"\f040"'
  },
  'icon-map-marker:before': {
    content: '"\f041"'
  },
  'icon-adjust:before': {
    content: '"\f042"'
  },
  'icon-tint:before': {
    content: '"\f043"'
  },
  'icon-edit:before': {
    content: '"\f044"'
  },
  'icon-share:before': {
    content: '"\f045"'
  },
  'icon-check:before': {
    content: '"\f046"'
  },
  'icon-move:before': {
    content: '"\f047"'
  },
  'icon-step-backward:before': {
    content: '"\f048"'
  },
  'icon-fast-backward:before': {
    content: '"\f049"'
  },
  'icon-backward:before': {
    content: '"\f04a"'
  },
  'icon-play:before': {
    content: '"\f04b"'
  },
  'icon-pause:before': {
    content: '"\f04c"'
  },
  'icon-stop:before': {
    content: '"\f04d"'
  },
  'icon-forward:before': {
    content: '"\f04e"'
  },
  'icon-fast-forward:before': {
    content: '"\f050"'
  },
  'icon-step-forward:before': {
    content: '"\f051"'
  },
  'icon-eject:before': {
    content: '"\f052"'
  },
  'icon-chevron-left:before': {
    content: '"\f053"'
  },
  'icon-chevron-right:before': {
    content: '"\f054"'
  },
  'icon-plus-sign:before': {
    content: '"\f055"'
  },
  'icon-minus-sign:before': {
    content: '"\f056"'
  },
  'icon-remove-sign:before': {
    content: '"\f057"'
  },
  'icon-ok-sign:before': {
    content: '"\f058"'
  },
  'icon-question-sign:before': {
    content: '"\f059"'
  },
  'icon-info-sign:before': {
    content: '"\f05a"'
  },
  'icon-screenshot:before': {
    content: '"\f05b"'
  },
  'icon-remove-circle:before': {
    content: '"\f05c"'
  },
  'icon-ok-circle:before': {
    content: '"\f05d"'
  },
  'icon-ban-circle:before': {
    content: '"\f05e"'
  },
  'icon-arrow-left:before': {
    content: '"\f060"'
  },
  'icon-arrow-right:before': {
    content: '"\f061"'
  },
  'icon-arrow-up:before': {
    content: '"\f062"'
  },
  'icon-arrow-down:before': {
    content: '"\f063"'
  },
  'icon-share-alt:before': {
    content: '"\f064"'
  },
  'icon-resize-full:before': {
    content: '"\f065"'
  },
  'icon-resize-small:before': {
    content: '"\f066"'
  },
  'icon-plus:before': {
    content: '"\f067"'
  },
  'icon-minus:before': {
    content: '"\f068"'
  },
  'icon-asterisk:before': {
    content: '"\f069"'
  },
  'icon-exclamation-sign:before': {
    content: '"\f06a"'
  },
  'icon-gift:before': {
    content: '"\f06b"'
  },
  'icon-leaf:before': {
    content: '"\f06c"'
  },
  'icon-fire:before': {
    content: '"\f06d"'
  },
  'icon-eye-open:before': {
    content: '"\f06e"'
  },
  'icon-eye-close:before': {
    content: '"\f070"'
  },
  'icon-warning-sign:before': {
    content: '"\f071"'
  },
  'icon-plane:before': {
    content: '"\f072"'
  },
  'icon-calendar:before': {
    content: '"\f073"'
  },
  'icon-random:before': {
    content: '"\f074"'
  },
  'icon-comment:before': {
    content: '"\f075"'
  },
  'icon-magnet:before': {
    content: '"\f076"'
  },
  'icon-chevron-up:before': {
    content: '"\f077"'
  },
  'icon-chevron-down:before': {
    content: '"\f078"'
  },
  'icon-retweet:before': {
    content: '"\f079"'
  },
  'icon-shopping-cart:before': {
    content: '"\f07a"'
  },
  'icon-folder-close:before': {
    content: '"\f07b"'
  },
  'icon-folder-open:before': {
    content: '"\f07c"'
  },
  'icon-resize-vertical:before': {
    content: '"\f07d"'
  },
  'icon-resize-horizontal:before': {
    content: '"\f07e"'
  },
  'icon-bar-chart:before': {
    content: '"\f080"'
  },
  'icon-twitter-sign:before': {
    content: '"\f081"'
  },
  'icon-facebook-sign:before': {
    content: '"\f082"'
  },
  'icon-camera-retro:before': {
    content: '"\f083"'
  },
  'icon-key:before': {
    content: '"\f084"'
  },
  'icon-cogs:before': {
    content: '"\f085"'
  },
  'icon-comments:before': {
    content: '"\f086"'
  },
  'icon-thumbs-up:before': {
    content: '"\f087"'
  },
  'icon-thumbs-down:before': {
    content: '"\f088"'
  },
  'icon-star-half:before': {
    content: '"\f089"'
  },
  'icon-heart-empty:before': {
    content: '"\f08a"'
  },
  'icon-signout:before': {
    content: '"\f08b"'
  },
  'icon-linkedin-sign:before': {
    content: '"\f08c"'
  },
  'icon-pushpin:before': {
    content: '"\f08d"'
  },
  'icon-external-link:before': {
    content: '"\f08e"'
  },
  'icon-signin:before': {
    content: '"\f090"'
  },
  'icon-trophy:before': {
    content: '"\f091"'
  },
  'icon-github-sign:before': {
    content: '"\f092"'
  },
  'icon-upload-alt:before': {
    content: '"\f093"'
  },
  'icon-lemon:before': {
    content: '"\f094"'
  },
  'icon-phone:before': {
    content: '"\f095"'
  },
  'icon-check-empty:before': {
    content: '"\f096"'
  },
  'icon-bookmark-empty:before': {
    content: '"\f097"'
  },
  'icon-phone-sign:before': {
    content: '"\f098"'
  },
  'icon-twitter:before': {
    content: '"\f099"'
  },
  'icon-facebook:before': {
    content: '"\f09a"'
  },
  'icon-github:before': {
    content: '"\f09b"'
  },
  'icon-unlock:before': {
    content: '"\f09c"'
  },
  'icon-credit-card:before': {
    content: '"\f09d"'
  },
  'icon-rss:before': {
    content: '"\f09e"'
  },
  'icon-hdd:before': {
    content: '"\f0a0"'
  },
  'icon-bullhorn:before': {
    content: '"\f0a1"'
  },
  'icon-bell:before': {
    content: '"\f0a2"'
  },
  'icon-certificate:before': {
    content: '"\f0a3"'
  },
  'icon-hand-right:before': {
    content: '"\f0a4"'
  },
  'icon-hand-left:before': {
    content: '"\f0a5"'
  },
  'icon-hand-up:before': {
    content: '"\f0a6"'
  },
  'icon-hand-down:before': {
    content: '"\f0a7"'
  },
  'icon-circle-arrow-left:before': {
    content: '"\f0a8"'
  },
  'icon-circle-arrow-right:before': {
    content: '"\f0a9"'
  },
  'icon-circle-arrow-up:before': {
    content: '"\f0aa"'
  },
  'icon-circle-arrow-down:before': {
    content: '"\f0ab"'
  },
  'icon-globe:before': {
    content: '"\f0ac"'
  },
  'icon-wrench:before': {
    content: '"\f0ad"'
  },
  'icon-tasks:before': {
    content: '"\f0ae"'
  },
  'icon-filter:before': {
    content: '"\f0b0"'
  },
  'icon-briefcase:before': {
    content: '"\f0b1"'
  },
  'icon-fullscreen:before': {
    content: '"\f0b2"'
  },
  'icon-group:before': {
    content: '"\f0c0"'
  },
  'icon-link:before': {
    content: '"\f0c1"'
  },
  'icon-cloud:before': {
    content: '"\f0c2"'
  },
  'icon-beaker:before': {
    content: '"\f0c3"'
  },
  'icon-cut:before': {
    content: '"\f0c4"'
  },
  'icon-copy:before': {
    content: '"\f0c5"'
  },
  'icon-paper-clip:before': {
    content: '"\f0c6"'
  },
  'icon-save:before': {
    content: '"\f0c7"'
  },
  'icon-sign-blank:before': {
    content: '"\f0c8"'
  },
  'icon-reorder:before': {
    content: '"\f0c9"'
  },
  'icon-list-ul:before': {
    content: '"\f0ca"'
  },
  'icon-list-ol:before': {
    content: '"\f0cb"'
  },
  'icon-strikethrough:before': {
    content: '"\f0cc"'
  },
  'icon-underline:before': {
    content: '"\f0cd"'
  },
  'icon-table:before': {
    content: '"\f0ce"'
  },
  'icon-magic:before': {
    content: '"\f0d0"'
  },
  'icon-truck:before': {
    content: '"\f0d1"'
  },
  'icon-pinterest:before': {
    content: '"\f0d2"'
  },
  'icon-pinterest-sign:before': {
    content: '"\f0d3"'
  },
  'icon-google-plus-sign:before': {
    content: '"\f0d4"'
  },
  'icon-google-plus:before': {
    content: '"\f0d5"'
  },
  'icon-money:before': {
    content: '"\f0d6"'
  },
  'icon-caret-down:before': {
    content: '"\f0d7"'
  },
  'icon-caret-up:before': {
    content: '"\f0d8"'
  },
  'icon-caret-left:before': {
    content: '"\f0d9"'
  },
  'icon-caret-right:before': {
    content: '"\f0da"'
  },
  'icon-columns:before': {
    content: '"\f0db"'
  },
  'icon-sort:before': {
    content: '"\f0dc"'
  },
  'icon-sort-down:before': {
    content: '"\f0dd"'
  },
  'icon-sort-up:before': {
    content: '"\f0de"'
  },
  'icon-envelope-alt:before': {
    content: '"\f0e0"'
  },
  'icon-linkedin:before': {
    content: '"\f0e1"'
  },
  'icon-undo:before': {
    content: '"\f0e2"'
  },
  'icon-legal:before': {
    content: '"\f0e3"'
  },
  'icon-dashboard:before': {
    content: '"\f0e4"'
  },
  'icon-comment-alt:before': {
    content: '"\f0e5"'
  },
  'icon-comments-alt:before': {
    content: '"\f0e6"'
  },
  'icon-bolt:before': {
    content: '"\f0e7"'
  },
  'icon-sitemap:before': {
    content: '"\f0e8"'
  },
  'icon-umbrella:before': {
    content: '"\f0e9"'
  },
  'icon-paste:before': {
    content: '"\f0ea"'
  },
  'icon-lightbulb:before': {
    content: '"\f0eb"'
  },
  'icon-exchange:before': {
    content: '"\f0ec"'
  },
  'icon-cloud-download:before': {
    content: '"\f0ed"'
  },
  'icon-cloud-upload:before': {
    content: '"\f0ee"'
  },
  'icon-user-md:before': {
    content: '"\f0f0"'
  },
  'icon-stethoscope:before': {
    content: '"\f0f1"'
  },
  'icon-suitcase:before': {
    content: '"\f0f2"'
  },
  'icon-bell-alt:before': {
    content: '"\f0f3"'
  },
  'icon-coffee:before': {
    content: '"\f0f4"'
  },
  'icon-food:before': {
    content: '"\f0f5"'
  },
  'icon-file-alt:before': {
    content: '"\f0f6"'
  },
  'icon-building:before': {
    content: '"\f0f7"'
  },
  'icon-hospital:before': {
    content: '"\f0f8"'
  },
  'icon-ambulance:before': {
    content: '"\f0f9"'
  },
  'icon-medkit:before': {
    content: '"\f0fa"'
  },
  'icon-fighter-jet:before': {
    content: '"\f0fb"'
  },
  'icon-beer:before': {
    content: '"\f0fc"'
  },
  'icon-h-sign:before': {
    content: '"\f0fd"'
  },
  'icon-plus-sign-alt:before': {
    content: '"\f0fe"'
  },
  'icon-double-angle-left:before': {
    content: '"\f100"'
  },
  'icon-double-angle-right:before': {
    content: '"\f101"'
  },
  'icon-double-angle-up:before': {
    content: '"\f102"'
  },
  'icon-double-angle-down:before': {
    content: '"\f103"'
  },
  'icon-angle-left:before': {
    content: '"\f104"'
  },
  'icon-angle-right:before': {
    content: '"\f105"'
  },
  'icon-angle-up:before': {
    content: '"\f106"'
  },
  'icon-angle-down:before': {
    content: '"\f107"'
  },
  'icon-desktop:before': {
    content: '"\f108"'
  },
  'icon-laptop:before': {
    content: '"\f109"'
  },
  'icon-tablet:before': {
    content: '"\f10a"'
  },
  'icon-mobile-phone:before': {
    content: '"\f10b"'
  },
  'icon-circle-blank:before': {
    content: '"\f10c"'
  },
  'icon-quote-left:before': {
    content: '"\f10d"'
  },
  'icon-quote-right:before': {
    content: '"\f10e"'
  },
  'icon-spinner:before': {
    content: '"\f110"'
  },
  'icon-circle:before': {
    content: '"\f111"'
  },
  'icon-reply:before': {
    content: '"\f112"'
  },
  'icon-github-alt:before': {
    content: '"\f113"'
  },
  'icon-folder-close-alt:before': {
    content: '"\f114"'
  },
  'icon-folder-open-alt:before': {
    content: '"\f115"'
  },
  fontFace: {
    fontFamily: ''IcoMoon'',
    src: 'url('fonts/icomoon/IcoMoon.eot')',
    src: 'url('fonts/icomoon/IcoMoon.eot?#iefix') format('embedded-opentype'), url('fonts/icomoon/IcoMoon.svg#IcoMoon') format('svg'), url('fonts/icomoon/IcoMoon.woff') format('woff'), url('fonts/icomoon/IcoMoon.ttf') format('truetype')',
    fontWeight: 'normal',
    fontStyle: 'normal'
  },
  // Use the following CSS code if you want to use data attributes for inserting your icons
  '[data-icon]:before': {
    fontFamily: ''IcoMoon'',
    content: 'attr(data-icon)',
    speak: 'none'
  },
  // Use the following CSS code if you want to have a class per icon
  '[class^="icomoon-"]:before': {
    fontFamily: ''IcoMoon'',
    fontStyle: 'normal',
    speak: 'none'
  },
  '[class*=" icomoon-"]:before': {
    fontFamily: ''IcoMoon'',
    fontStyle: 'normal',
    speak: 'none'
  },
  // taken from font awesome
  // makes sure icons active on rollover in links
  'a [class^="icomoon-"]': {
    display: 'inline-block'
  },
  'a [class*=" icomoon-"]': {
    display: 'inline-block'
  },
  // makes the font 33% larger relative to the icon container
  'icomoon-large:before': {
    verticalAlign: '-10%',
    fontSize: [{ unit: 'em', value: 1.3333333333333333 }]
  },
  'btn [class^="icomoon-"]': {
    display: 'inline',
    // keeps button heights with and without icons the same
    lineHeight: [{ unit: 'em', value: 0.6 }]
  },
  'nav [class^="icomoon-"]': {
    display: 'inline',
    // keeps button heights with and without icons the same
    lineHeight: [{ unit: 'em', value: 0.6 }]
  },
  'btn [class*=" icomoon-"]': {
    display: 'inline',
    // keeps button heights with and without icons the same
    lineHeight: [{ unit: 'em', value: 0.6 }]
  },
  'nav [class*=" icomoon-"]': {
    display: 'inline',
    // keeps button heights with and without icons the same
    lineHeight: [{ unit: 'em', value: 0.6 }]
  },
  'btn [class^="icomoon-"]icomoon-spin': {
    display: 'inline-block'
  },
  'nav [class^="icomoon-"]icomoon-spin': {
    display: 'inline-block'
  },
  'btn [class*=" icomoon-"]icomoon-spin': {
    display: 'inline-block'
  },
  'nav [class*=" icomoon-"]icomoon-spin': {
    display: 'inline-block'
  },
  'li [class^="icomoon-"]': {
    display: 'inline-block',
    width: [{ unit: 'em', value: 1.25 }],
    textAlign: 'center'
  },
  'li [class*=" icomoon-"]': {
    display: 'inline-block',
    width: [{ unit: 'em', value: 1.25 }],
    textAlign: 'center'
  },
  'li [class^="icomoon-"]icomoon-large': {
    // increased font size for icomoon-large
    width: [{ unit: 'em', value: 1.5625 }]
  },
  'li [class*=" icomoon-"]icomoon-large': {
    // increased font size for icomoon-large
    width: [{ unit: 'em', value: 1.5625 }]
  },
  ulicons: {
    listStyleType: 'none',
    textIndent: '-0.75em'
  },
  'ulicons li [class^="icomoon-"]': {
    width: [{ unit: 'em', value: 0.75 }]
  },
  'ulicons li [class*=" icomoon-"]': {
    width: [{ unit: 'em', value: 0.75 }]
  },
  'icomoon-muted': {
    color: '#eeeeee'
  },
  'icomoon-border': {
    border: [{ unit: 'string', value: 'solid' }, { unit: 'px', value: 1 }, { unit: 'string', value: '#eeeeee' }],
    padding: [{ unit: 'em', value: 0.2 }, { unit: 'em', value: 0.25 }, { unit: 'em', value: 0.15 }, { unit: 'em', value: 0.25 }],
    WebkitBorderRadius: '3px',
    MozBorderRadius: '3px',
    borderRadius: '3px'
  },
  'icomoon-2x': {
    fontSize: [{ unit: 'em', value: 2 }]
  },
  'icomoon-2xicomoon-border': {
    borderWidth: '2px',
    WebkitBorderRadius: '4px',
    MozBorderRadius: '4px',
    borderRadius: '4px'
  },
  'icomoon-3x': {
    fontSize: [{ unit: 'em', value: 3 }]
  },
  'icomoon-3xicomoon-border': {
    borderWidth: '3px',
    WebkitBorderRadius: '5px',
    MozBorderRadius: '5px',
    borderRadius: '5px'
  },
  'icomoon-4x': {
    fontSize: [{ unit: 'em', value: 4 }]
  },
  'icomoon-4xicomoon-border': {
    borderWidth: '4px',
    WebkitBorderRadius: '6px',
    MozBorderRadius: '6px',
    borderRadius: '6px'
  },
  'pull-right': {
    float: 'right'
  },
  'pull-left': {
    float: 'left'
  },
  '[class^="icomoon-"]pull-left': {
    marginRight: [{ unit: 'em', value: 0.35 }]
  },
  '[class*=" icomoon-"]pull-left': {
    marginRight: [{ unit: 'em', value: 0.35 }]
  },
  '[class^="icomoon-"]pull-right': {
    marginLeft: [{ unit: 'em', value: 0.35 }]
  },
  '[class*=" icomoon-"]pull-right': {
    marginLeft: [{ unit: 'em', value: 0.35 }]
  },
  'btn [class^="icomoon-"]pull-lefticomoon-2x': {
    marginTop: [{ unit: 'em', value: 0.35 }]
  },
  'btn [class*=" icomoon-"]pull-lefticomoon-2x': {
    marginTop: [{ unit: 'em', value: 0.35 }]
  },
  'btn [class^="icomoon-"]pull-righticomoon-2x': {
    marginTop: [{ unit: 'em', value: 0.35 }]
  },
  'btn [class*=" icomoon-"]pull-righticomoon-2x': {
    marginTop: [{ unit: 'em', value: 0.35 }]
  },
  'btn [class^="icomoon-"]icomoon-spinicomoon-large': {
    height: [{ unit: 'em', value: 0.75 }]
  },
  'btn [class*=" icomoon-"]icomoon-spinicomoon-large': {
    height: [{ unit: 'em', value: 0.75 }]
  },
  'btnbtn-small [class^="icomoon-"]pull-lefticomoon-2x': {
    marginTop: [{ unit: 'em', value: 0.45 }]
  },
  'btnbtn-small [class*=" icomoon-"]pull-lefticomoon-2x': {
    marginTop: [{ unit: 'em', value: 0.45 }]
  },
  'btnbtn-small [class^="icomoon-"]pull-righticomoon-2x': {
    marginTop: [{ unit: 'em', value: 0.45 }]
  },
  'btnbtn-small [class*=" icomoon-"]pull-righticomoon-2x': {
    marginTop: [{ unit: 'em', value: 0.45 }]
  },
  'btnbtn-large [class^="icomoon-"]pull-lefticomoon-2x': {
    marginTop: [{ unit: 'em', value: 0.2 }]
  },
  'btnbtn-large [class*=" icomoon-"]pull-lefticomoon-2x': {
    marginTop: [{ unit: 'em', value: 0.2 }]
  },
  'btnbtn-large [class^="icomoon-"]pull-righticomoon-2x': {
    marginTop: [{ unit: 'em', value: 0.2 }]
  },
  'btnbtn-large [class*=" icomoon-"]pull-righticomoon-2x': {
    marginTop: [{ unit: 'em', value: 0.2 }]
  },
  'icomoon-home:before': {
    content: '"\e000"'
  },
  'icomoon-newspaper:before': {
    content: '"\e001"'
  },
  'icomoon-pencil:before': {
    content: '"\e002"'
  },
  'icomoon-droplet:before': {
    content: '"\e003"'
  },
  'icomoon-picture:before': {
    content: '"\e004"'
  },
  'icomoon-play:before': {
    content: '"\e005"'
  },
  'icomoon-film:before': {
    content: '"\e006"'
  },
  'icomoon-camera:before': {
    content: '"\e007"'
  },
  'icomoon-microphone:before': {
    content: '"\e008"'
  },
  'icomoon-folder:before': {
    content: '"\e009"'
  },
  'icomoon-folder-2:before': {
    content: '"\e00a"'
  },
  'icomoon-cart:before': {
    content: '"\e00b"'
  },
  'icomoon-basket:before': {
    content: '"\e00c"'
  },
  'icomoon-calculate:before': {
    content: '"\e00d"'
  },
  'icomoon-support:before': {
    content: '"\e00e"'
  },
  'icomoon-mail:before': {
    content: '"\e00f"'
  },
  'icomoon-location:before': {
    content: '"\e010"'
  },
  'icomoon-bell:before': {
    content: '"\e011"'
  },
  'icomoon-bell-2:before': {
    content: '"\e012"'
  },
  'icomoon-bell-3:before': {
    content: '"\e013"'
  },
  'icomoon-calendar:before': {
    content: '"\e014"'
  },
  'icomoon-mouse:before': {
    content: '"\e015"'
  },
  'icomoon-screen:before': {
    content: '"\e016"'
  },
  'icomoon-laptop:before': {
    content: '"\e017"'
  },
  'icomoon-drawer:before': {
    content: '"\e018"'
  },
  'icomoon-drawer-2:before': {
    content: '"\e019"'
  },
  'icomoon-box-add:before': {
    content: '"\e01a"'
  },
  'icomoon-box-remove:before': {
    content: '"\e01b"'
  },
  'icomoon-database:before': {
    content: '"\e01c"'
  },
  'icomoon-comments:before': {
    content: '"\e01d"'
  },
  'icomoon-comments-2:before': {
    content: '"\e01e"'
  },
  'icomoon-user:before': {
    content: '"\e01f"'
  },
  'icomoon-busy:before': {
    content: '"\e020"'
  },
  'icomoon-search:before': {
    content: '"\e021"'
  },
  'icomoon-zoom-in:before': {
    content: '"\e022"'
  },
  'icomoon-zoom-out:before': {
    content: '"\e023"'
  },
  'icomoon-key:before': {
    content: '"\e024"'
  },
  'icomoon-wrench:before': {
    content: '"\e025"'
  },
  'icomoon-equalizer:before': {
    content: '"\e026"'
  },
  'icomoon-cog:before': {
    content: '"\e027"'
  },
  'icomoon-pie:before': {
    content: '"\e028"'
  },
  'icomoon-bars:before': {
    content: '"\e029"'
  },
  'icomoon-stats-up:before': {
    content: '"\e02a"'
  },
  'icomoon-trophy:before': {
    content: '"\e02b"'
  },
  'icomoon-rocket:before': {
    content: '"\e02c"'
  },
  'icomoon-dashboard:before': {
    content: '"\e02d"'
  },
  'icomoon-fire:before': {
    content: '"\e02e"'
  },
  'icomoon-lab:before': {
    content: '"\e02f"'
  },
  'icomoon-remove:before': {
    content: '"\e030"'
  },
  'icomoon-briefcase:before': {
    content: '"\e031"'
  },
  'icomoon-briefcase-2:before': {
    content: '"\e032"'
  },
  'icomoon-cars:before': {
    content: '"\e033"'
  },
  'icomoon-cube:before': {
    content: '"\e034"'
  },
  'icomoon-glasses:before': {
    content: '"\e035"'
  },
  'icomoon-accessibility:before': {
    content: '"\e036"'
  },
  'icomoon-lightning:before': {
    content: '"\e037"'
  },
  'icomoon-playlist:before': {
    content: '"\e038"'
  },
  'icomoon-cloud:before': {
    content: '"\e039"'
  },
  'icomoon-cloud-2:before': {
    content: '"\e03a"'
  },
  'icomoon-download:before': {
    content: '"\e03b"'
  },
  'icomoon-upload:before': {
    content: '"\e03c"'
  },
  'icomoon-upload-2:before': {
    content: '"\e03d"'
  },
  'icomoon-link:before': {
    content: '"\e03e"'
  },
  'icomoon-link-2:before': {
    content: '"\e03f"'
  },
  'icomoon-flag:before': {
    content: '"\e040"'
  },
  'icomoon-flag-2:before': {
    content: '"\e041"'
  },
  'icomoon-eye:before': {
    content: '"\e042"'
  },
  'icomoon-bookmark:before': {
    content: '"\e043"'
  },
  'icomoon-heart:before': {
    content: '"\e044"'
  },
  'icomoon-heart-2:before': {
    content: '"\e045"'
  },
  'icomoon-thumbs-up:before': {
    content: '"\e046"'
  },
  'icomoon-thumbs-down:before': {
    content: '"\e047"'
  },
  'icomoon-happy:before': {
    content: '"\e048"'
  },
  'icomoon-smiley:before': {
    content: '"\e049"'
  },
  'icomoon-neutral:before': {
    content: '"\e04a"'
  },
  'icomoon-checkmark:before': {
    content: '"\e04b"'
  },
  'icomoon-minus:before': {
    content: '"\e04c"'
  },
  'icomoon-plus:before': {
    content: '"\e04d"'
  },
  'icomoon-enter:before': {
    content: '"\e04e"'
  },
  'icomoon-exit:before': {
    content: '"\e04f"'
  },
  'icomoon-loop:before': {
    content: '"\e050"'
  },
  'icomoon-arrow-up-left:before': {
    content: '"\e051"'
  },
  'icomoon-arrow-up:before': {
    content: '"\e052"'
  },
  'icomoon-arrow-up-right:before': {
    content: '"\e053"'
  },
  'icomoon-arrow-right:before': {
    content: '"\e054"'
  },
  'icomoon-arrow-down-right:before': {
    content: '"\e055"'
  },
  'icomoon-arrow-down:before': {
    content: '"\e056"'
  },
  'icomoon-arrow-down-left:before': {
    content: '"\e057"'
  },
  'icomoon-arrow-left:before': {
    content: '"\e058"'
  },
  'icomoon-out:before': {
    content: '"\e059"'
  },
  'icomoon-share:before': {
    content: '"\e05a"'
  },
  'icomoon-mail-2:before': {
    content: '"\e05b"'
  },
  'icomoon-mail-3:before': {
    content: '"\e05c"'
  },
  'icomoon-google-plus:before': {
    content: '"\e05d"'
  },
  'icomoon-google-plus-2:before': {
    content: '"\e05e"'
  },
  'icomoon-gplus:before': {
    content: '"\e05f"'
  },
  'icomoon-facebook:before': {
    content: '"\e060"'
  },
  'icomoon-facebook-2:before': {
    content: '"\e061"'
  },
  'icomoon-facebook-3:before': {
    content: '"\e062"'
  },
  'icomoon-twitter:before': {
    content: '"\e063"'
  },
  'icomoon-twitter-2:before': {
    content: '"\e064"'
  },
  'icomoon-twitter-3:before': {
    content: '"\e065"'
  },
  'icomoon-feed:before': {
    content: '"\e066"'
  },
  'icomoon-feed-2:before': {
    content: '"\e067"'
  },
  'icomoon-feed-3:before': {
    content: '"\e068"'
  },
  'icomoon-dribbble:before': {
    content: '"\e069"'
  },
  'icomoon-dribbble-2:before': {
    content: '"\e06a"'
  },
  'icomoon-dribbble-3:before': {
    content: '"\e06b"'
  },
  '#header': {
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#131c23',
    padding: [{ unit: 'px', value: 60 }, { unit: 'px', value: 0 }, { unit: 'px', value: 60 }, { unit: 'px', value: 0 }],
    WebkitTransition: 'all 0.2s ease-out',
    MozTransition: 'all 0.2s ease-out',
    OTransition: 'all 0.2s ease-out',
    transition: 'all 0.2s ease-out',
    '<w767': {
      textAlign: 'center'
    }
  },
  '#header header': {
    paddingTop: [{ unit: 'em', value: 2 }]
  },
  '#content': {
    padding: [{ unit: 'px', value: 80 }, { unit: 'px', value: 0 }, { unit: 'px', value: 60 }, { unit: 'px', value: 0 }],
    background: '#ffffff',
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ffffff' }],
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#dbdbdb' }]
  },
  '#footer': {
    minHeight: [{ unit: 'px', value: 100 }],
    padding: [{ unit: 'px', value: 40 }, { unit: 'px', value: 0 }, { unit: 'px', value: 40 }, { unit: 'px', value: 0 }],
    color: '#ababab',
    textAlign: 'center',
    background: '#efefef',
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ffffff' }]
  },
  '#footer subfooter': {
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'rgba(255, 255, 255, 0.05)' }],
    marginTop: [{ unit: 'em', value: 1 }],
    paddingTop: [{ unit: 'em', value: 1 }],
    fontSize: [{ unit: '%V', value: 0.8 }]
  },
  '#footer subfooter p': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    color: '#ababab'
  },
  body: {
    fontFamily: '"Open Sans", sans-serif',
    '<w767': {
      paddingLeft: [{ unit: 'px', value: 0 }],
      paddingRight: [{ unit: 'px', value: 0 }]
    }
  },
  html: {
    fontFamily: '"Open Sans", sans-serif',
    '<w767': {
      paddingLeft: [{ unit: 'px', value: 0 }],
      paddingRight: [{ unit: 'px', value: 0 }]
    }
  },
  h1: {
    fontWeight: '100'
  },
  h2: {
    fontWeight: '100'
  },
  h3: {
    fontWeight: '100'
  },
  h4: {
    fontWeight: '100'
  },
  h1: {
    fontSize: [{ unit: 'px', value: 41.300000000000004 }]
  },
  h2: {
    fontSize: [{ unit: 'px', value: 37.1 }]
  },
  h3: {
    fontSize: [{ unit: 'px', value: 27.3 }]
  },
  'p': {
    color: '#6b7175'
  },
  '#header page-title': {
    fontSize: [{ unit: '%V', value: 6 }],
    fontWeight: 'bold',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 0 }]
  },
  '#header page-slogan': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    margin: [{ unit: 'px', value: 33 }, { unit: 'px', value: 0 }, { unit: 'px', value: 5 }, { unit: 'px', value: 0 }]
  },
  '#header p': {
    marginTop: [{ unit: 'em', value: 1 }]
  },
  'count-down': {
    marginTop: [{ unit: 'em', value: 2 }],
    '*zoom': '1'
  },
  'count-down:before': {
    display: 'table',
    content: '""',
    lineHeight: [{ unit: 'px', value: 0 }]
  },
  'count-down:after': {
    display: 'table',
    content: '""',
    lineHeight: [{ unit: 'px', value: 0 }]
  },
  'count-down:after': {
    clear: 'both'
  },
  'count-down count': {
    display: 'inline-block',
    textAlign: 'center',
    '>w768&&<w979': {
      width: [{ unit: 'px', value: 60 }],
      height: [{ unit: 'px', value: 70 }]
    }
  },
  'count-down count-wrap': {
    display: 'inline-block',
    textAlign: 'center',
    '>w768&&<w979': {
      width: [{ unit: 'px', value: 60 }],
      height: [{ unit: 'px', value: 70 }]
    }
  },
  'count-down count-spacer': {
    display: 'inline-block',
    textAlign: 'center',
    '>w768&&<w979': {
      width: [{ unit: 'px', value: 60 }],
      height: [{ unit: 'px', value: 70 }]
    }
  },
  'count-down count-wrap': {
    width: [{ unit: 'px', value: 80 }],
    height: [{ unit: 'px', value: 80 }],
    backgroundColor: '#000000',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    lineHeight: [{ unit: 'px', value: 1 }],
    WebkitBorderRadius: '3px',
    MozBorderRadius: '3px',
    borderRadius: '3px',
    WebkitBoxShadow: '0 0 10px #111111',
    MozBoxShadow: '0 0 10px #111111',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'string', value: '#111111' }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#333' }]
  },
  'count-down count-spacer': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }],
    fontSize: [{ unit: '%V', value: 1.8 }],
    height: [{ unit: 'px', value: 80 }],
    lineHeight: [{ unit: 'px', value: 1 }]
  },
  'count-down digits': {
    display: 'block',
    fontSize: [{ unit: '%V', value: 2.6 }],
    margin: [{ unit: 'px', value: 10 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 0 }]
  },
  'signup-form': {
    marginBottom: [{ unit: 'em', value: 4 }]
  },
  'signup-form form': {
    WebkitBoxShadow: '0 1px 20px #cccccc',
    MozBoxShadow: '0 1px 20px #cccccc',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 1 }, { unit: 'px', value: 20 }, { unit: 'string', value: '#cccccc' }],
    width: [{ unit: '%H', value: 0.5 }]
  },
  'signup-form muted': {
    fontSize: [{ unit: '%V', value: 0.9 }],
    margin: [{ unit: 'px', value: -5 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'features i': {
    fontSize: [{ unit: 'px', value: 42 }],
    float: 'left',
    margin: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'features title': {
    fontWeight: 'bold',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    lineHeight: [{ unit: 'px', value: 1 }]
  },
  'features sub-title': {
    margin: [{ unit: 'em', value: 0.285 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 0 }],
    fontFamily: 'inherit',
    fontWeight: '400',
    fontStyle: 'italic'
  },
  block: {
    padding: [{ unit: 'em', value: 3 }, { unit: 'px', value: 0 }, { unit: 'em', value: 3 }, { unit: 'px', value: 0 }]
  },
  blockthin: {
    padding: [{ unit: 'em', value: 0.5 }, { unit: 'px', value: 0 }, { unit: 'em', value: 0.5 }, { unit: 'px', value: 0 }]
  },
  blockmedium: {
    padding: [{ unit: 'em', value: 1.5 }, { unit: 'px', value: 0 }, { unit: 'em', value: 1.5 }, { unit: 'px', value: 0 }]
  },
  blockgray: {
    backgroundColor: '#eee'
  },
  'block gray': {
    backgroundColor: '#eee'
  },
  'blockgray-light': {
    backgroundColor: '#f9f9f9'
  },
  'block gray-light': {
    backgroundColor: '#f9f9f9'
  },
  blockprimary: {
    backgroundColor: '#fcc71f'
  },
  'block primary': {
    backgroundColor: '#fcc71f'
  },
  'blockprimary-dark': {
    backgroundColor: '#e5af03'
  },
  'block primary-dark': {
    backgroundColor: '#e5af03'
  },
  blockgradient: {
    backgroundColor: '#fdfdfd',
    backgroundImage: '-moz-linear-gradient(top, #ffffff, #f9f9f9)',
    backgroundImage: '-webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#f9f9f9))',
    backgroundImage: '-webkit-linear-gradient(top, #ffffff, #f9f9f9)',
    backgroundImage: '-o-linear-gradient(top, #ffffff, #f9f9f9)',
    backgroundImage: 'linear-gradient(to bottom, #ffffff, #f9f9f9)',
    backgroundRepeat: 'repeat-x',
    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#fff9f9f9', GradientType=0)'
  },
  'block gradient': {
    backgroundColor: '#fdfdfd',
    backgroundImage: '-moz-linear-gradient(top, #ffffff, #f9f9f9)',
    backgroundImage: '-webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#f9f9f9))',
    backgroundImage: '-webkit-linear-gradient(top, #ffffff, #f9f9f9)',
    backgroundImage: '-o-linear-gradient(top, #ffffff, #f9f9f9)',
    backgroundImage: 'linear-gradient(to bottom, #ffffff, #f9f9f9)',
    backgroundRepeat: 'repeat-x',
    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#fff9f9f9', GradientType=0)'
  },
  'blockgradient-reverse': {
    backgroundColor: '#fbfbfb',
    backgroundImage: '-moz-linear-gradient(top, #f9f9f9, #ffffff)',
    backgroundImage: '-webkit-gradient(linear, 0 0, 0 100%, from(#f9f9f9), to(#ffffff))',
    backgroundImage: '-webkit-linear-gradient(top, #f9f9f9, #ffffff)',
    backgroundImage: '-o-linear-gradient(top, #f9f9f9, #ffffff)',
    backgroundImage: 'linear-gradient(to bottom, #f9f9f9, #ffffff)',
    backgroundRepeat: 'repeat-x',
    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9', endColorstr='#ffffffff', GradientType=0)'
  },
  'block gradient-reverse': {
    backgroundColor: '#fbfbfb',
    backgroundImage: '-moz-linear-gradient(top, #f9f9f9, #ffffff)',
    backgroundImage: '-webkit-gradient(linear, 0 0, 0 100%, from(#f9f9f9), to(#ffffff))',
    backgroundImage: '-webkit-linear-gradient(top, #f9f9f9, #ffffff)',
    backgroundImage: '-o-linear-gradient(top, #f9f9f9, #ffffff)',
    backgroundImage: 'linear-gradient(to bottom, #f9f9f9, #ffffff)',
    backgroundRepeat: 'repeat-x',
    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9', endColorstr='#ffffffff', GradientType=0)'
  },
  '#schemes': {
    position: 'fixed',
    top: [{ unit: '%V', value: 0.1 }],
    left: [{ unit: 'px', value: -221 }],
    right: [{ unit: 'px', value: 0 }],
    width: [{ unit: 'px', value: 220 }],
    background: '#ffffff',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#000000' }],
    borderTop: [{ unit: 'string', value: 'none' }],
    WebkitBorderRadius: '0 0 4px 0',
    MozBorderRadius: '0 0 4px 0',
    borderRadius: '0 0 4px 0',
    WebkitTransition: 'all 0.4s ease-out',
    MozTransition: 'all 0.4s ease-out',
    OTransition: 'all 0.4s ease-out',
    transition: 'all 0.4s ease-out',
    zIndex: '500'
  },
  '#schemesshow-hide-open': {
    left: [{ unit: 'px', value: 0 }]
  },
  '#schemes h4': {
    lineHeight: [{ unit: 'px', value: 34 }],
    height: [{ unit: 'px', value: 34 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    background: '#000',
    color: '#ffffff',
    fontSize: [{ unit: 'px', value: 20 }]
  },
  '#schemes ashow-hide': {
    right: [{ unit: 'px', value: -30 }],
    lineHeight: [{ unit: 'px', value: 34 }],
    height: [{ unit: 'px', value: 34 }],
    width: [{ unit: 'px', value: 34 }],
    position: 'absolute',
    background: '#000',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: [{ unit: 'px', value: 22 }]
  },
  '#schemes ashow-hide:hover': {
    textDecoration: 'none'
  },
  '#schemes backgrounds a': {
    display: 'block',
    textIndent: '-10000px',
    height: [{ unit: 'px', value: 80 }],
    margin: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }],
    border: [{ unit: 'px', value: 3 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'transparent' }],
    WebkitBoxSizing: 'border-box',
    // Safari/Chrome, other WebKit
    MozBoxSizing: 'border-box',
    // Firefox, other Gecko
    boxSizing: 'border-box',
    // Opera/IE 8+
  },
  '#schemes colours a': {
    display: 'block',
    textIndent: '-10000px',
    height: [{ unit: 'px', value: 80 }],
    margin: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }],
    border: [{ unit: 'px', value: 3 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'transparent' }],
    WebkitBoxSizing: 'border-box',
    // Safari/Chrome, other WebKit
    MozBoxSizing: 'border-box',
    // Firefox, other Gecko
    boxSizing: 'border-box',
    // Opera/IE 8+
  },
  '#schemes backgrounds aactive': {
    borderColor: '#343331'
  },
  '#schemes colours aactive': {
    borderColor: '#343331'
  },
  '#schemes backgrounds a': {
    display: 'block',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#0f161b'
  },
  '#schemes backgrounds aface': {
    backgroundImage: 'url('../img/backgrounds/face-blue.jpg')',
    backgroundSize: 'auto 80px',
    'all&&-webkit-min-device-pixel-ratio 1.': {
      backgroundImage: 'url('../img/backgrounds/face-blue@2x.jpg')',
      backgroundSize: 'auto 80px'
    }
  },
  '#schemes backgrounds alights': {
    backgroundImage: 'url('../img/backgrounds/lights-blue.jpg')',
    backgroundSize: 'auto 80px',
    'all&&-webkit-min-device-pixel-ratio 1.': {
      backgroundImage: 'url('../img/backgrounds/lights-blue@2x.jpg')',
      backgroundSize: 'auto 80px'
    }
  },
  '#schemes backgrounds atracks': {
    backgroundImage: 'url('../img/backgrounds/tracks-blue.jpg')',
    backgroundSize: 'auto 80px',
    'all&&-webkit-min-device-pixel-ratio 1.': {
      backgroundImage: 'url('../img/backgrounds/tracks-blue@2x.jpg')',
      backgroundSize: 'auto 80px'
    }
  },
  '#schemes backgrounds ano-bg': {
    backgroundImage: 'none'
  },
  '#schemes colours': {
    marginTop: [{ unit: 'em', value: 2 }],
    '*zoom': '1'
  },
  '#schemes colours:before': {
    display: 'table',
    content: '""',
    lineHeight: [{ unit: 'px', value: 0 }]
  },
  '#schemes colours:after': {
    display: 'table',
    content: '""',
    lineHeight: [{ unit: 'px', value: 0 }]
  },
  '#schemes colours:after': {
    clear: 'both'
  },
  '#schemes colours a': {
    float: 'left',
    width: [{ unit: 'px', value: 90 }],
    height: [{ unit: 'px', value: 30 }],
    marginTop: [{ unit: 'px', value: 0 }]
  },
  '#schemes colours ablue': {
    background: '#2f9fe6'
  },
  '#schemes colours awine': {
    background: '#70364e'
  },
  '#schemes reset': {
    margin: [{ unit: 'em', value: 2 }, { unit: 'px', value: 0 }, { unit: 'em', value: 1 }, { unit: 'px', value: 0 }],
    fontWeight: 'bold',
    display: 'block'
  },
  'body social-media': {
    padding: [{ unit: 'px', value: 16 }, { unit: 'px', value: 15 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'body social-media a': {
    textDecoration: 'none',
    color: '#ababab',
    display: 'inline-block',
    lineHeight: [{ unit: 'px', value: 1 }],
    textAlign: 'center',
    margin: [{ unit: 'px', value: 0 }, { unit: 'em', value: 0.5 }, { unit: 'px', value: 0 }, { unit: 'em', value: 0.5 }]
  },
  'body social-media a i': {
    fontSize: [{ unit: 'px', value: 48 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    lineHeight: [{ unit: 'px', value: 48 }],
    width: [{ unit: 'px', value: 48 }],
    height: [{ unit: 'px', value: 48 }],
    textAlign: 'center'
  },
  'body social-media a:hover': {
    textDecoration: 'none',
    color: '#919191'
  },
  'body social-media a:hover i': {
    borderColor: '#ffffff'
  },
  'body social-media alast': {
    paddingBottom: [{ unit: 'px', value: 0 }],
    borderBottom: [{ unit: 'px', value: 0 }]
  },
  'h1 small': {
    display: 'block',
    fontWeight: '300',
    fontSize: [{ unit: 'px', value: 16 }],
    color: '#696762'
  },
  'h2 small': {
    display: 'block',
    fontWeight: '300',
    fontSize: [{ unit: 'px', value: 16 }],
    color: '#696762'
  },
  'h3 small': {
    display: 'block',
    fontWeight: '300',
    fontSize: [{ unit: 'px', value: 16 }],
    color: '#696762'
  },
  'h4 small': {
    display: 'block',
    fontWeight: '300',
    fontSize: [{ unit: 'px', value: 16 }],
    color: '#696762'
  },
  'h5 small': {
    display: 'block',
    fontWeight: '300',
    fontSize: [{ unit: 'px', value: 16 }],
    color: '#696762'
  },
  'h6 small': {
    display: 'block',
    fontWeight: '300',
    fontSize: [{ unit: 'px', value: 16 }],
    color: '#696762'
  },
  fancy: {
    fontFamily: 'serif',
    fontStyle: 'italic'
  },
  'i-float': {
    '*zoom': '1'
  },
  'i-float:before': {
    display: 'table',
    content: '""',
    lineHeight: [{ unit: 'px', value: 0 }]
  },
  'i-float:after': {
    display: 'table',
    content: '""',
    lineHeight: [{ unit: 'px', value: 0 }]
  },
  'i-float:after': {
    clear: 'both'
  },
  'i-float i': {
    float: 'left',
    textAlign: 'left',
    width: [{ unit: '%H', value: 0.14 }],
    display: 'block'
  },
  'i-float span': {
    float: 'left',
    textAlign: 'left',
    width: [{ unit: '%H', value: 0.14 }],
    display: 'block'
  },
  'i-float span': {
    width: [{ unit: '%H', value: 0.84 }]
  },
  h1enlarge: {
    fontSize: [{ unit: 'px', value: 52.5 }]
  },
  h2enlarge: {
    fontSize: [{ unit: 'px', value: 45.5 }]
  },
  h3enlarge: {
    fontSize: [{ unit: 'px', value: 38.5 }]
  },
  h4enlarge: {
    fontSize: [{ unit: 'px', value: 31.5 }]
  },
  h5enlarge: {
    fontSize: [{ unit: 'px', value: 14 }]
  },
  h6enlarge: {
    fontSize: [{ unit: 'px', value: 25.900000000000002 }]
  },
  'address strong': {
    marginTop: [{ unit: 'px', value: 5 }],
    display: 'block'
  },
  'address i': {
    marginRight: [{ unit: 'px', value: 6 }]
  },
  'img-wrap': {
    float: 'left',
    margin: [{ unit: 'px', value: 0 }, { unit: 'em', value: 1 }, { unit: 'em', value: 1 }, { unit: 'px', value: 0 }]
  },
  'img-wrap figcaption': {
    fontSize: [{ unit: 'em', value: 0.9 }],
    fontWeight: 'normal'
  },
  uc: {
    textTransform: 'uppercase'
  },
  'de-em': {
    color: 'rgba(51, 51, 51, 0.8)'
  },
  'a de-em': {
    color: 'inherit'
  },
  'hero de-em': {
    color: 'rgba(252, 199, 31, 0.8)'
  },
  em: {
    color: '#fcc71f'
  },
  blockquote: {
    border: [{ unit: 'string', value: 'none' }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    margin: [{ unit: 'em', value: 1 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    position: 'relative',
    '*zoom': '1',
    background: 'url(../img/bg_blockquote.png) left top no-repeat'
  },
  'blockquote:before': {
    display: 'table',
    content: '""',
    lineHeight: [{ unit: 'px', value: 0 }]
  },
  'blockquote:after': {
    display: 'table',
    content: '""',
    lineHeight: [{ unit: 'px', value: 0 }]
  },
  'blockquote:after': {
    clear: 'both'
  },
  'blockquote p': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'em', value: 1 }, { unit: 'em', value: 1 }, { unit: 'px', value: 0 }],
    textAlign: 'center',
    fontStyle: 'italic',
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
    fontWeight: 'normal',
    lineHeight: [{ unit: 'px', value: 1.55 }]
  },
  'blockquote small': {
    display: 'block',
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }]
  },
  'blockquote small:before': {
    content: '' ''
  },
  'blockquote small strong': {
    color: '#ffffff',
    fontSize: [{ unit: 'px', value: 15 }]
  },
  'blockquote small spacer': {
    color: '#ffffff',
    fontSize: [{ unit: 'px', value: 15 }]
  },
  'blockquote small a': {
    color: '#d0d3d4'
  },
  'blockquote small a:hover': {
    color: '#d0d3d4'
  },
  blockquoteright: {
    background: 'url(../img/bg_blockquote-flipped.png) right top no-repeat'
  },
  'row-fluid-90': {
    marginRight: [{ unit: 'string', value: 'auto' }],
    marginLeft: [{ unit: 'string', value: 'auto' }]
  },
  'row-fluid-80': {
    marginRight: [{ unit: 'string', value: 'auto' }],
    marginLeft: [{ unit: 'string', value: 'auto' }]
  },
  'row-fluid-70': {
    marginRight: [{ unit: 'string', value: 'auto' }],
    marginLeft: [{ unit: 'string', value: 'auto' }]
  },
  'row-fluid-60': {
    marginRight: [{ unit: 'string', value: 'auto' }],
    marginLeft: [{ unit: 'string', value: 'auto' }]
  },
  'row-fluid-50': {
    marginRight: [{ unit: 'string', value: 'auto' }],
    marginLeft: [{ unit: 'string', value: 'auto' }]
  },
  'row-fluid-40': {
    marginRight: [{ unit: 'string', value: 'auto' }],
    marginLeft: [{ unit: 'string', value: 'auto' }]
  },
  'row-fluid-30': {
    marginRight: [{ unit: 'string', value: 'auto' }],
    marginLeft: [{ unit: 'string', value: 'auto' }]
  },
  'row-fluid-20': {
    marginRight: [{ unit: 'string', value: 'auto' }],
    marginLeft: [{ unit: 'string', value: 'auto' }]
  },
  'row-fluid-90': {
    width: [{ unit: '%H', value: 0.9 }]
  },
  'row-fluid-80': {
    width: [{ unit: '%H', value: 0.8 }]
  },
  'row-fluid-70': {
    width: [{ unit: '%H', value: 0.7 }]
  },
  'row-fluid-60': {
    width: [{ unit: '%H', value: 0.6 }]
  },
  'row-fluid-50': {
    width: [{ unit: '%H', value: 0.5 }]
  },
  'row-fluid-40': {
    width: [{ unit: '%H', value: 0.4 }]
  },
  'row-fluid-30': {
    width: [{ unit: '%H', value: 0.3 }]
  },
  'row-fluid-20': {
    width: [{ unit: '%H', value: 0.2 }]
  },
  'pull-right': {
    textAlign: 'right'
  },
  'pull-center': {
    textAlign: 'center'
  },
  'inline-el': {
    display: 'inline-block'
  },
  'inline-el h1': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'inline-el h2': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'inline-el h3': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'inline-el h4': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'inline-el h5': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'inline-el p': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'well-small': {
    padding: [{ unit: 'px', value: 9 }, { unit: 'px', value: 9 }, { unit: 'px', value: 9 }, { unit: 'px', value: 9 }]
  },
  'well-mini': {
    padding: [{ unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }]
  },
  'overlay-wrapper': {
    position: 'relative',
    display: 'block',
    overflow: 'hidden'
  },
  'overlay-wrapperoverlay-wrapper-bordered': {
    borderBottom: [{ unit: 'px', value: 5 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'transparent' }]
  },
  'overlay-wrapperoverlay-wrapper-bordered:hover': {
    borderBottom: [{ unit: 'px', value: 5 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e5af03' }]
  },
  'overlay-wrapper overlay': {
    position: 'absolute',
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: '%V', value: 1 }],
    background: 'rgba(52, 51, 49, 0.6)',
    color: '#ffffff',
    zIndex: '100',
    display: 'block',
    top: [{ unit: '%V', value: 1 }],
    bottom: [{ unit: 'px', value: 0 }],
    right: [{ unit: 'px', value: 0 }],
    left: [{ unit: 'px', value: 0 }],
    WebkitTransition: 'all 220ms ease-out',
    MozTransition: 'all 220ms ease-out',
    OTransition: 'all 220ms ease-out',
    transition: 'all 220ms ease-out',
    textAlign: 'center',
    padding: [{ unit: '%V', value: 0.05 }, { unit: 'px', value: 0 }, { unit: '%V', value: 0.05 }, { unit: 'px', value: 0 }]
  },
  'overlay-wrapper overlayon': {
    top: [{ unit: 'px', value: 0 }]
  },
  'overlay-wrapper underlay': {
    zIndex: '99'
  },
  'overlay-wrapper:hover overlay': {
    top: [{ unit: 'px', value: 0 }]
  },
  'more-link': {
    fontWeight: 'bold'
  },
  'more-link:after': {
    fontFamily: ''IcoMoon'',
    fontStyle: 'normal',
    speak: 'none',
    display: 'inline-block',
    content: '"\e04d"',
    paddingLeft: [{ unit: 'px', value: 5 }],
    fontSize: [{ unit: 'px', value: 10 }]
  },
  hidden: {
    visibility: 'hidden',
    display: 'none'
  },
  scrolltop: {
    width: [{ unit: 'px', value: 40 }],
    height: [{ unit: 'px', value: 40 }],
    lineHeight: [{ unit: 'px', value: 40 }],
    opacity: '0.8',
    filter: 'alpha(opacity=80)',
    position: 'fixed',
    bottom: [{ unit: 'px', value: 0 }],
    right: [{ unit: 'px', value: 10 }],
    display: 'none',
    fontSize: [{ unit: 'px', value: 0 }],
    background: '#343331',
    zIndex: '999999',
    textAlign: 'center',
    color: '#ffffff'
  },
  'scrolltop:hover': {
    textDecoration: 'none',
    opacity: '0.9',
    filter: 'alpha(opacity=90)'
  },
  'scrolltop:before': {
    content: '"\f106"',
    fontFamily: ''FontAwesome'',
    fontSize: [{ unit: 'px', value: 30 }],
    fontStyle: 'normal'
  },
  'spacer-bottom': {
    marginBottom: [{ unit: 'em', value: 1 }]
  },
  'spacer-bottom-large': {
    marginBottom: [{ unit: 'em', value: 3 }]
  },
  'spacer-top': {
    marginTop: [{ unit: 'em', value: 1 }]
  },
  'spacer-top-large': {
    marginTop: [{ unit: 'em', value: 3 }]
  },
  'vert-padding': {
    paddingTop: [{ unit: 'em', value: 1 }],
    paddingBottom: [{ unit: 'em', value: 1 }]
  },
  'vert-padding-large': {
    paddingTop: [{ unit: 'em', value: 3 }],
    paddingBottom: [{ unit: 'em', value: 3 }]
  },
  'vert-padding-massive': {
    paddingTop: [{ unit: 'em', value: 6 }],
    paddingBottom: [{ unit: 'em', value: 6 }]
  },
  'horiz-padding': {
    paddingLeft: [{ unit: 'em', value: 1 }],
    paddingRight: [{ unit: 'em', value: 1 }]
  },
  'horiz-padding-large': {
    paddingLeft: [{ unit: 'em', value: 5 }],
    paddingRight: [{ unit: 'em', value: 5 }]
  },
  'horiz-padding-massive': {
    paddingLeft: [{ unit: 'em', value: 10 }],
    paddingRight: [{ unit: 'em', value: 10 }]
  },
  'bottom-padding-reset': {
    paddingBottom: [{ unit: 'px', value: 0 }, { unit: 'string', value: '!important' }]
  },
  'border-top-bottom': {
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ccc' }],
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ccc' }],
    padding: [{ unit: 'em', value: 1 }, { unit: 'px', value: 0 }, { unit: 'em', value: 1 }, { unit: 'px', value: 0 }],
    margin: [{ unit: 'em', value: 1 }, { unit: 'px', value: 0 }, { unit: 'em', value: 1 }, { unit: 'px', value: 0 }]
  },
  'form-bloat input': {
    height: [{ unit: 'px', value: 80 }],
    lineHeight: [{ unit: 'px', value: 80 }],
    padding: [{ unit: 'px', value: 0 }, { unit: '%H', value: 0.02 }, { unit: 'px', value: 0 }, { unit: '%H', value: 0.02 }]
  },
  'form-bloat button': {
    height: [{ unit: 'px', value: 80 }],
    lineHeight: [{ unit: 'px', value: 80 }],
    padding: [{ unit: 'px', value: 0 }, { unit: '%H', value: 0.02 }, { unit: 'px', value: 0 }, { unit: '%H', value: 0.02 }]
  },
  'form-bloat input': {
    fontSize: [{ unit: 'px', value: 18 }],
    fontStyle: 'italic'
  },
  'form-bloat button': {
    paddingBottom: [{ unit: 'px', value: 0 }],
    paddingTop: [{ unit: 'px', value: 0 }],
    fontSize: [{ unit: 'px', value: 24 }]
  },
  'form-stretch input-append': {
    display: 'block'
  },
  'form-stretch input-prepend': {
    display: 'block'
  },
  'form-stretch input-append input': {
    width: [{ unit: '%H', value: 0.75 }],
    WebkitBoxSizing: 'border-box',
    // Safari/Chrome, other WebKit
    MozBoxSizing: 'border-box',
    // Firefox, other Gecko
    boxSizing: 'border-box',
    // Opera/IE 8+
  },
  'form-stretch input-prepend input': {
    width: [{ unit: '%H', value: 0.75 }],
    WebkitBoxSizing: 'border-box',
    // Safari/Chrome, other WebKit
    MozBoxSizing: 'border-box',
    // Firefox, other Gecko
    boxSizing: 'border-box',
    // Opera/IE 8+
  },
  'form-stretch input-append button': {
    width: [{ unit: '%H', value: 0.25 }],
    WebkitBoxSizing: 'border-box',
    // Safari/Chrome, other WebKit
    MozBoxSizing: 'border-box',
    // Firefox, other Gecko
    boxSizing: 'border-box',
    // Opera/IE 8+
    marginLeft: [{ unit: 'px', value: 1 }],
    marginRight: [{ unit: 'px', value: 0 }]
  },
  'form-stretch input-prepend button': {
    width: [{ unit: '%H', value: 0.25 }],
    WebkitBoxSizing: 'border-box',
    // Safari/Chrome, other WebKit
    MozBoxSizing: 'border-box',
    // Firefox, other Gecko
    boxSizing: 'border-box',
    // Opera/IE 8+
    marginLeft: [{ unit: 'px', value: 1 }],
    marginRight: [{ unit: 'px', value: 0 }]
  },
  'form-stretch input-append btn': {
    width: [{ unit: '%H', value: 0.25 }],
    WebkitBoxSizing: 'border-box',
    // Safari/Chrome, other WebKit
    MozBoxSizing: 'border-box',
    // Firefox, other Gecko
    boxSizing: 'border-box',
    // Opera/IE 8+
    marginLeft: [{ unit: 'px', value: 1 }],
    marginRight: [{ unit: 'px', value: 0 }]
  },
  'form-stretch input-prepend btn': {
    width: [{ unit: '%H', value: 0.25 }],
    WebkitBoxSizing: 'border-box',
    // Safari/Chrome, other WebKit
    MozBoxSizing: 'border-box',
    // Firefox, other Gecko
    boxSizing: 'border-box',
    // Opera/IE 8+
    marginLeft: [{ unit: 'px', value: 1 }],
    marginRight: [{ unit: 'px', value: 0 }]
  },
  btn: {
    textShadow: [{ unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }],
    WebkitBorderRadius: '1px',
    MozBorderRadius: '1px',
    borderRadius: '1px'
  },
  'btn-shadow': {
    WebkitBoxShadow: '0 1px 5px #969696',
    MozBoxShadow: '0 1px 5px #969696',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 1 }, { unit: 'px', value: 5 }, { unit: 'string', value: '#969696' }]
  },
  'btn-primary': {
    color: '#ffffff',
    textShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: -1 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.25)' }],
    backgroundColor: '#f3bd14',
    backgroundImage: '-moz-linear-gradient(top, #fcc71f, #e5af03)',
    backgroundImage: '-webkit-gradient(linear, 0 0, 0 100%, from(#fcc71f), to(#e5af03))',
    backgroundImage: '-webkit-linear-gradient(top, #fcc71f, #e5af03)',
    backgroundImage: '-o-linear-gradient(top, #fcc71f, #e5af03)',
    backgroundImage: 'linear-gradient(to bottom, #fcc71f, #e5af03)',
    backgroundRepeat: 'repeat-x',
    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffcc71f', endColorstr='#ffe5af03', GradientType=0)',
    borderColor: '#e5af03 #e5af03 #997502',
    borderColor: 'rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)',
    '*backgroundColor': '#e5af03',
    // Darken IE7 buttons by default so they stand out more given they won't have borders
    filter: 'progid:DXImageTransform.Microsoft.gradient(enabled = false)'
  },
  'btn-primary:hover': {
    color: '#ffffff',
    backgroundColor: '#e5af03',
    '*backgroundColor': '#cc9c03'
  },
  'btn-primary:active': {
    color: '#ffffff',
    backgroundColor: '#e5af03',
    '*backgroundColor': '#cc9c03'
  },
  'btn-primaryactive': {
    color: '#ffffff',
    backgroundColor: '#e5af03',
    '*backgroundColor': '#cc9c03'
  },
  'btn-primarydisabled': {
    color: '#ffffff',
    backgroundColor: '#e5af03',
    '*backgroundColor': '#cc9c03'
  },
  'btn-primary[disabled]': {
    color: '#ffffff',
    backgroundColor: '#e5af03',
    '*backgroundColor': '#cc9c03'
  },
  'btn-primary:active': {
    backgroundColor: '#b38802 \9'
  },
  'btn-primaryactive': {
    backgroundColor: '#b38802 \9'
  },
  'btn-warning': {
    color: '#ffffff',
    textShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: -1 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.25)' }],
    backgroundColor: '#faa732',
    backgroundImage: '-moz-linear-gradient(top, #fbb450, #f89406)',
    backgroundImage: '-webkit-gradient(linear, 0 0, 0 100%, from(#fbb450), to(#f89406))',
    backgroundImage: '-webkit-linear-gradient(top, #fbb450, #f89406)',
    backgroundImage: '-o-linear-gradient(top, #fbb450, #f89406)',
    backgroundImage: 'linear-gradient(to bottom, #fbb450, #f89406)',
    backgroundRepeat: 'repeat-x',
    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffbb450', endColorstr='#fff89406', GradientType=0)',
    borderColor: '#f89406 #f89406 #ad6704',
    borderColor: 'rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)',
    '*backgroundColor': '#f89406',
    // Darken IE7 buttons by default so they stand out more given they won't have borders
    filter: 'progid:DXImageTransform.Microsoft.gradient(enabled = false)'
  },
  'btn-warning:hover': {
    color: '#ffffff',
    backgroundColor: '#f89406',
    '*backgroundColor': '#df8505'
  },
  'btn-warning:active': {
    color: '#ffffff',
    backgroundColor: '#f89406',
    '*backgroundColor': '#df8505'
  },
  'btn-warningactive': {
    color: '#ffffff',
    backgroundColor: '#f89406',
    '*backgroundColor': '#df8505'
  },
  'btn-warningdisabled': {
    color: '#ffffff',
    backgroundColor: '#f89406',
    '*backgroundColor': '#df8505'
  },
  'btn-warning[disabled]': {
    color: '#ffffff',
    backgroundColor: '#f89406',
    '*backgroundColor': '#df8505'
  },
  'btn-warning:active': {
    backgroundColor: '#c67605 \9'
  },
  'btn-warningactive': {
    backgroundColor: '#c67605 \9'
  },
  'btn-danger': {
    color: '#ffffff',
    textShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: -1 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.25)' }],
    backgroundColor: '#da4f49',
    backgroundImage: '-moz-linear-gradient(top, #ee5f5b, #bd362f)',
    backgroundImage: '-webkit-gradient(linear, 0 0, 0 100%, from(#ee5f5b), to(#bd362f))',
    backgroundImage: '-webkit-linear-gradient(top, #ee5f5b, #bd362f)',
    backgroundImage: '-o-linear-gradient(top, #ee5f5b, #bd362f)',
    backgroundImage: 'linear-gradient(to bottom, #ee5f5b, #bd362f)',
    backgroundRepeat: 'repeat-x',
    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffee5f5b', endColorstr='#ffbd362f', GradientType=0)',
    borderColor: '#bd362f #bd362f #802420',
    borderColor: 'rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)',
    '*backgroundColor': '#bd362f',
    // Darken IE7 buttons by default so they stand out more given they won't have borders
    filter: 'progid:DXImageTransform.Microsoft.gradient(enabled = false)'
  },
  'btn-danger:hover': {
    color: '#ffffff',
    backgroundColor: '#bd362f',
    '*backgroundColor': '#a9302a'
  },
  'btn-danger:active': {
    color: '#ffffff',
    backgroundColor: '#bd362f',
    '*backgroundColor': '#a9302a'
  },
  'btn-dangeractive': {
    color: '#ffffff',
    backgroundColor: '#bd362f',
    '*backgroundColor': '#a9302a'
  },
  'btn-dangerdisabled': {
    color: '#ffffff',
    backgroundColor: '#bd362f',
    '*backgroundColor': '#a9302a'
  },
  'btn-danger[disabled]': {
    color: '#ffffff',
    backgroundColor: '#bd362f',
    '*backgroundColor': '#a9302a'
  },
  'btn-danger:active': {
    backgroundColor: '#942a25 \9'
  },
  'btn-dangeractive': {
    backgroundColor: '#942a25 \9'
  },
  'btn-success': {
    color: '#ffffff',
    textShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: -1 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.25)' }],
    backgroundColor: '#318b20',
    backgroundImage: '-moz-linear-gradient(top, #1b7b00, #51a351)',
    backgroundImage: '-webkit-gradient(linear, 0 0, 0 100%, from(#1b7b00), to(#51a351))',
    backgroundImage: '-webkit-linear-gradient(top, #1b7b00, #51a351)',
    backgroundImage: '-o-linear-gradient(top, #1b7b00, #51a351)',
    backgroundImage: 'linear-gradient(to bottom, #1b7b00, #51a351)',
    backgroundRepeat: 'repeat-x',
    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff1b7b00', endColorstr='#ff51a351', GradientType=0)',
    borderColor: '#51a351 #51a351 #387038',
    borderColor: 'rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)',
    '*backgroundColor': '#51a351',
    // Darken IE7 buttons by default so they stand out more given they won't have borders
    filter: 'progid:DXImageTransform.Microsoft.gradient(enabled = false)'
  },
  'btn-success:hover': {
    color: '#ffffff',
    backgroundColor: '#51a351',
    '*backgroundColor': '#499249'
  },
  'btn-success:active': {
    color: '#ffffff',
    backgroundColor: '#51a351',
    '*backgroundColor': '#499249'
  },
  'btn-successactive': {
    color: '#ffffff',
    backgroundColor: '#51a351',
    '*backgroundColor': '#499249'
  },
  'btn-successdisabled': {
    color: '#ffffff',
    backgroundColor: '#51a351',
    '*backgroundColor': '#499249'
  },
  'btn-success[disabled]': {
    color: '#ffffff',
    backgroundColor: '#51a351',
    '*backgroundColor': '#499249'
  },
  'btn-success:active': {
    backgroundColor: '#408140 \9'
  },
  'btn-successactive': {
    backgroundColor: '#408140 \9'
  },
  'btn-info': {
    color: '#ffffff',
    textShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: -1 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.25)' }],
    backgroundColor: '#49afcd',
    backgroundImage: '-moz-linear-gradient(top, #5bc0de, #2f96b4)',
    backgroundImage: '-webkit-gradient(linear, 0 0, 0 100%, from(#5bc0de), to(#2f96b4))',
    backgroundImage: '-webkit-linear-gradient(top, #5bc0de, #2f96b4)',
    backgroundImage: '-o-linear-gradient(top, #5bc0de, #2f96b4)',
    backgroundImage: 'linear-gradient(to bottom, #5bc0de, #2f96b4)',
    backgroundRepeat: 'repeat-x',
    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5bc0de', endColorstr='#ff2f96b4', GradientType=0)',
    borderColor: '#2f96b4 #2f96b4 #1f6377',
    borderColor: 'rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)',
    '*backgroundColor': '#2f96b4',
    // Darken IE7 buttons by default so they stand out more given they won't have borders
    filter: 'progid:DXImageTransform.Microsoft.gradient(enabled = false)'
  },
  'btn-info:hover': {
    color: '#ffffff',
    backgroundColor: '#2f96b4',
    '*backgroundColor': '#2a85a0'
  },
  'btn-info:active': {
    color: '#ffffff',
    backgroundColor: '#2f96b4',
    '*backgroundColor': '#2a85a0'
  },
  'btn-infoactive': {
    color: '#ffffff',
    backgroundColor: '#2f96b4',
    '*backgroundColor': '#2a85a0'
  },
  'btn-infodisabled': {
    color: '#ffffff',
    backgroundColor: '#2f96b4',
    '*backgroundColor': '#2a85a0'
  },
  'btn-info[disabled]': {
    color: '#ffffff',
    backgroundColor: '#2f96b4',
    '*backgroundColor': '#2a85a0'
  },
  'btn-info:active': {
    backgroundColor: '#24748c \9'
  },
  'btn-infoactive': {
    backgroundColor: '#24748c \9'
  },
  'btn-inverse': {
    color: '#ffffff',
    textShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: -1 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.25)' }],
    backgroundColor: '#1f1f1d',
    backgroundImage: '-moz-linear-gradient(top, #343331, #000000)',
    backgroundImage: '-webkit-gradient(linear, 0 0, 0 100%, from(#343331), to(#000000))',
    backgroundImage: '-webkit-linear-gradient(top, #343331, #000000)',
    backgroundImage: '-o-linear-gradient(top, #343331, #000000)',
    backgroundImage: 'linear-gradient(to bottom, #343331, #000000)',
    backgroundRepeat: 'repeat-x',
    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff343331', endColorstr='#ff000000', GradientType=0)',
    borderColor: '#000000 #000000 #000000',
    borderColor: 'rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)',
    '*backgroundColor': '#000000',
    // Darken IE7 buttons by default so they stand out more given they won't have borders
    filter: 'progid:DXImageTransform.Microsoft.gradient(enabled = false)'
  },
  'btn-inverse:hover': {
    color: '#ffffff',
    backgroundColor: '#000000',
    '*backgroundColor': '#000000'
  },
  'btn-inverse:active': {
    color: '#ffffff',
    backgroundColor: '#000000',
    '*backgroundColor': '#000000'
  },
  'btn-inverseactive': {
    color: '#ffffff',
    backgroundColor: '#000000',
    '*backgroundColor': '#000000'
  },
  'btn-inversedisabled': {
    color: '#ffffff',
    backgroundColor: '#000000',
    '*backgroundColor': '#000000'
  },
  'btn-inverse[disabled]': {
    color: '#ffffff',
    backgroundColor: '#000000',
    '*backgroundColor': '#000000'
  },
  'btn-inverse:active': {
    backgroundColor: '#000000 \9'
  },
  'btn-inverseactive': {
    backgroundColor: '#000000 \9'
  },
  modal: {
    WebkitBorderRadius: '2px',
    MozBorderRadius: '2px',
    borderRadius: '2px'
  },
  'modalmodal-inline': {
    position: 'relative'
  },
  modalsmall: {
    width: [{ unit: 'px', value: 400 }],
    marginLeft: [{ unit: 'px', value: -200 }],
    padding: [{ unit: 'em', value: 1 }, { unit: 'em', value: 1 }, { unit: 'em', value: 1 }, { unit: 'em', value: 1 }]
  },
  modalmedium: {
    width: [{ unit: 'px', value: 600 }],
    marginLeft: [{ unit: 'px', value: -300 }],
    padding: [{ unit: 'em', value: 1 }, { unit: 'em', value: 1 }, { unit: 'em', value: 1 }, { unit: 'em', value: 1 }]
  },
  'modal form': {
    marginBottom: [{ unit: 'px', value: 0 }]
  },
  'modal form input': {
    marginBottom: [{ unit: 'px', value: 5 }]
  },
  'modal form inputlogin': {
    marginTop: [{ unit: 'px', value: 5 }],
    display: 'block',
    width: [{ unit: '%H', value: 1 }]
  },
  'modal modal-header h3': {
    fontWeight: '300'
  },
  'modal modal-body': {
    padding: [{ unit: 'px', value: 30 }, { unit: 'px', value: 30 }, { unit: 'px', value: 30 }, { unit: 'px', value: 30 }],
    maxHeight: [{ unit: 'string', value: 'none' }],
    overflow: 'visible'
  },
  'modal modal-footer': {
    paddingTop: [{ unit: 'px', value: 8 }],
    paddingBottom: [{ unit: 'px', value: 8 }],
    WebkitBorderRadius: '0 0 2px 2px',
    MozBorderRadius: '0 0 2px 2px',
    borderRadius: '0 0 2px 2px'
  },
  'modal modal-footer small': {
    display: 'block'
  },
  'modal a': {
    color: '#fcc71f',
    textTransform: 'none'
  },
  'modal asignup': {
    textTransform: 'uppercase'
  },
  select: {
    WebkitBorderRadius: '1px',
    MozBorderRadius: '1px',
    borderRadius: '1px'
  },
  textarea: {
    WebkitBorderRadius: '1px',
    MozBorderRadius: '1px',
    borderRadius: '1px'
  },
  'input[type="text"]': {
    WebkitBorderRadius: '1px',
    MozBorderRadius: '1px',
    borderRadius: '1px'
  },
  'input[type="password"]': {
    WebkitBorderRadius: '1px',
    MozBorderRadius: '1px',
    borderRadius: '1px'
  },
  'input[type="datetime"]': {
    WebkitBorderRadius: '1px',
    MozBorderRadius: '1px',
    borderRadius: '1px'
  },
  'input[type="datetime-local"]': {
    WebkitBorderRadius: '1px',
    MozBorderRadius: '1px',
    borderRadius: '1px'
  },
  'input[type="date"]': {
    WebkitBorderRadius: '1px',
    MozBorderRadius: '1px',
    borderRadius: '1px'
  },
  'input[type="month"]': {
    WebkitBorderRadius: '1px',
    MozBorderRadius: '1px',
    borderRadius: '1px'
  },
  'input[type="time"]': {
    WebkitBorderRadius: '1px',
    MozBorderRadius: '1px',
    borderRadius: '1px'
  },
  'input[type="week"]': {
    WebkitBorderRadius: '1px',
    MozBorderRadius: '1px',
    borderRadius: '1px'
  },
  'input[type="number"]': {
    WebkitBorderRadius: '1px',
    MozBorderRadius: '1px',
    borderRadius: '1px'
  },
  'input[type="email"]': {
    WebkitBorderRadius: '1px',
    MozBorderRadius: '1px',
    borderRadius: '1px'
  },
  'input[type="url"]': {
    WebkitBorderRadius: '1px',
    MozBorderRadius: '1px',
    borderRadius: '1px'
  },
  'input[type="search"]': {
    WebkitBorderRadius: '1px',
    MozBorderRadius: '1px',
    borderRadius: '1px'
  },
  'input[type="tel"]': {
    WebkitBorderRadius: '1px',
    MozBorderRadius: '1px',
    borderRadius: '1px'
  },
  'input[type="color"]': {
    WebkitBorderRadius: '1px',
    MozBorderRadius: '1px',
    borderRadius: '1px'
  },
  'uneditable-input': {
    WebkitBorderRadius: '1px',
    MozBorderRadius: '1px',
    borderRadius: '1px'
  },
  'input-append input': {
    WebkitBorderRadius: '0 1px 1px 0',
    MozBorderRadius: '0 1px 1px 0',
    borderRadius: '0 1px 1px 0'
  },
  'input-prepend input': {
    WebkitBorderRadius: '0 1px 1px 0',
    MozBorderRadius: '0 1px 1px 0',
    borderRadius: '0 1px 1px 0'
  },
  'input-append select': {
    WebkitBorderRadius: '0 1px 1px 0',
    MozBorderRadius: '0 1px 1px 0',
    borderRadius: '0 1px 1px 0'
  },
  'input-prepend select': {
    WebkitBorderRadius: '0 1px 1px 0',
    MozBorderRadius: '0 1px 1px 0',
    borderRadius: '0 1px 1px 0'
  },
  'input-append uneditable-input': {
    WebkitBorderRadius: '0 1px 1px 0',
    MozBorderRadius: '0 1px 1px 0',
    borderRadius: '0 1px 1px 0'
  },
  'input-prepend uneditable-input': {
    WebkitBorderRadius: '0 1px 1px 0',
    MozBorderRadius: '0 1px 1px 0',
    borderRadius: '0 1px 1px 0'
  },
  'input-append add-on': {
    WebkitBorderRadius: '0',
    MozBorderRadius: '0',
    borderRadius: '0'
  },
  'input-prepend add-on': {
    WebkitBorderRadius: '0',
    MozBorderRadius: '0',
    borderRadius: '0'
  },
  'input-append btn': {
    WebkitBorderRadius: '0',
    MozBorderRadius: '0',
    borderRadius: '0'
  },
  'input-prepend btn': {
    WebkitBorderRadius: '0',
    MozBorderRadius: '0',
    borderRadius: '0'
  },
  'input-append btn-group > dropdown-toggle': {
    WebkitBorderRadius: '0',
    MozBorderRadius: '0',
    borderRadius: '0'
  },
  'input-prepend btn-group > dropdown-toggle': {
    WebkitBorderRadius: '0',
    MozBorderRadius: '0',
    borderRadius: '0'
  },
  'input-prepend add-on:first-child': {
    WebkitBorderRadius: '1px 0 0 1px',
    MozBorderRadius: '1px 0 0 1px',
    borderRadius: '1px 0 0 1px'
  },
  'input-prepend btn:first-child': {
    WebkitBorderRadius: '1px 0 0 1px',
    MozBorderRadius: '1px 0 0 1px',
    borderRadius: '1px 0 0 1px'
  },
  'input-append input': {
    WebkitBorderRadius: '1px 0 0 1px',
    MozBorderRadius: '1px 0 0 1px',
    borderRadius: '1px 0 0 1px'
  },
  'input-append select': {
    WebkitBorderRadius: '1px 0 0 1px',
    MozBorderRadius: '1px 0 0 1px',
    borderRadius: '1px 0 0 1px'
  },
  'input-append uneditable-input': {
    WebkitBorderRadius: '1px 0 0 1px',
    MozBorderRadius: '1px 0 0 1px',
    borderRadius: '1px 0 0 1px'
  },
  'input-append input + btn-group btn:last-child': {
    WebkitBorderRadius: '0 1px 1px 0',
    MozBorderRadius: '0 1px 1px 0',
    borderRadius: '0 1px 1px 0'
  },
  'input-append select + btn-group btn:last-child': {
    WebkitBorderRadius: '0 1px 1px 0',
    MozBorderRadius: '0 1px 1px 0',
    borderRadius: '0 1px 1px 0'
  },
  'input-append uneditable-input + btn-group btn:last-child': {
    WebkitBorderRadius: '0 1px 1px 0',
    MozBorderRadius: '0 1px 1px 0',
    borderRadius: '0 1px 1px 0'
  },
  'input-append add-on:last-child': {
    WebkitBorderRadius: '0 1px 1px 0',
    MozBorderRadius: '0 1px 1px 0',
    borderRadius: '0 1px 1px 0'
  },
  'input-append btn:last-child': {
    WebkitBorderRadius: '0 1px 1px 0',
    MozBorderRadius: '0 1px 1px 0',
    borderRadius: '0 1px 1px 0'
  },
  'input-append btn-group:last-child > dropdown-toggle': {
    WebkitBorderRadius: '0 1px 1px 0',
    MozBorderRadius: '0 1px 1px 0',
    borderRadius: '0 1px 1px 0'
  },
  'input-prependinput-append input': {
    WebkitBorderRadius: '0',
    MozBorderRadius: '0',
    borderRadius: '0'
  },
  'input-prependinput-append select': {
    WebkitBorderRadius: '0',
    MozBorderRadius: '0',
    borderRadius: '0'
  },
  'input-prependinput-append uneditable-input': {
    WebkitBorderRadius: '0',
    MozBorderRadius: '0',
    borderRadius: '0'
  },
  'input-prependinput-append input + btn-group btn': {
    WebkitBorderRadius: '0 1px 1px 0',
    MozBorderRadius: '0 1px 1px 0',
    borderRadius: '0 1px 1px 0'
  },
  'input-prependinput-append select + btn-group btn': {
    WebkitBorderRadius: '0 1px 1px 0',
    MozBorderRadius: '0 1px 1px 0',
    borderRadius: '0 1px 1px 0'
  },
  'input-prependinput-append uneditable-input + btn-group btn': {
    WebkitBorderRadius: '0 1px 1px 0',
    MozBorderRadius: '0 1px 1px 0',
    borderRadius: '0 1px 1px 0'
  },
  'input-prependinput-append add-on:first-child': {
    WebkitBorderRadius: '1px 0 0 1px',
    MozBorderRadius: '1px 0 0 1px',
    borderRadius: '1px 0 0 1px'
  },
  'input-prependinput-append btn:first-child': {
    WebkitBorderRadius: '1px 0 0 1px',
    MozBorderRadius: '1px 0 0 1px',
    borderRadius: '1px 0 0 1px'
  },
  'input-prependinput-append add-on:last-child': {
    WebkitBorderRadius: '0 1px 1px 0',
    MozBorderRadius: '0 1px 1px 0',
    borderRadius: '0 1px 1px 0'
  },
  'input-prependinput-append btn:last-child': {
    WebkitBorderRadius: '0 1px 1px 0',
    MozBorderRadius: '0 1px 1px 0',
    borderRadius: '0 1px 1px 0'
  },
  'product-display': {
    textAlign: 'center',
    position: 'relative',
    marginRight: [{ unit: 'string', value: 'auto' }],
    marginLeft: [{ unit: 'string', value: 'auto' }],
    float: 'right'
  },
  'product-display imgproduct': {
    width: [{ unit: 'string', value: 'auto' }]
  },
  'product-display product-overlay': {
    position: 'absolute',
    top: [{ unit: 'px', value: 0 }],
    right: [{ unit: 'px', value: 0 }]
  },
  'product-displayproduct-display-video video-modal': {
    display: 'block'
  },
  'product-displayproduct-display-video video-modal video-popup-icon': {
    position: 'absolute',
    top: [{ unit: '%V', value: 0.5 }],
    bottom: [{ unit: '%V', value: 0.5 }],
    left: [{ unit: '%H', value: 0.5 }],
    right: [{ unit: '%H', value: 0.5 }],
    fontSize: [{ unit: 'px', value: 40 }],
    lineHeight: [{ unit: 'px', value: 60 }],
    height: [{ unit: 'px', value: 60 }],
    width: [{ unit: 'px', value: 60 }],
    margin: [{ unit: 'px', value: -30 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: -30 }],
    zIndex: '401',
    opacity: '0.7',
    filter: 'alpha(opacity=70)',
    WebkitTransition: 'all 0.4s ease-out',
    MozTransition: 'all 0.4s ease-out',
    OTransition: 'all 0.4s ease-out',
    transition: 'all 0.4s ease-out',
    WebkitBorderRadius: '10px',
    MozBorderRadius: '10px',
    borderRadius: '10px',
    textAlign: 'center',
    background: '#000000'
  },
  'product-displayproduct-display-video video-modal video-popup-icon:before': {
    fontFamily: 'FontAwesome',
    fontStyle: 'normal',
    speak: 'none',
    display: 'inline-block',
    content: '"\f04b"',
    color: '#ffffff'
  },
  'product-displayproduct-display-video video-modal media-image': {
    zIndex: '400'
  },
  'product-displayproduct-display-video video-modal:hover video-popup-icon': {
    opacity: '1',
    filter: 'alpha(opacity=100)'
  },
  'bodyiphone-portrait #header': {
    padding: [{ unit: 'em', value: 2 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 0 }],
    '<w767': {
      paddingTop: [{ unit: 'px', value: 0 }]
    }
  },
  'bodyiphone-portrait #header header': {
    paddingTop: [{ unit: 'px', value: 140 }]
  },
  'bodyiphone-portrait product-display': {
    marginBottom: [{ unit: 'px', value: -60 }],
    maxWidth: [{ unit: 'px', value: 270 }],
    float: 'right'
  },
  'bodyiphone-portrait product-display product-overlay': {
    top: [{ unit: 'px', value: 84 }],
    right: [{ unit: 'px', value: 0 }],
    left: [{ unit: 'px', value: 24 }],
    maxWidth: [{ unit: 'string', value: 'none' }]
  },
  'bodyiphone-portrait product-display-slideshow flexslider': {
    width: [{ unit: 'px', value: 225 }]
  },
  'bodyipad-mini #header': {
    paddingTop: [{ unit: 'px', value: 0 }]
  },
  'bodyipad-mini #header header': {
    paddingTop: [{ unit: 'px', value: 160 }]
  },
  'bodyipad-mini product-display': {
    marginBottom: [{ unit: 'px', value: -80 }],
    marginTop: [{ unit: 'px', value: 80 }],
    maxWidth: [{ unit: 'px', value: 350 }],
    float: 'right',
    '<w480': {
      maxWidth: [{ unit: 'px', value: 280 }]
    }
  },
  'bodyipad-mini product-overlay': {
    position: 'absolute',
    top: [{ unit: 'px', value: 47 }],
    right: [{ unit: 'px', value: 0 }],
    left: [{ unit: 'px', value: 21 }]
  },
  'bodyipad-mini product-overlaymedia-image': {
    maxWidth: [{ unit: 'px', value: 310 }]
  },
  'bodyipad-mini product-display-slideshow flexslider': {
    width: [{ unit: 'px', value: 310 }]
  },
  'bodyipad-portrait #header': {
    paddingTop: [{ unit: 'px', value: 0 }]
  },
  'bodyipad-portrait #header header': {
    paddingTop: [{ unit: 'px', value: 160 }]
  },
  'bodyipad-portrait product-display': {
    marginBottom: [{ unit: 'px', value: -80 }],
    marginTop: [{ unit: 'px', value: 80 }],
    maxWidth: [{ unit: 'px', value: 400 }]
  },
  'bodyipad-portrait product-overlay': {
    position: 'absolute',
    top: [{ unit: 'px', value: 46 }],
    right: [{ unit: 'px', value: 0 }],
    left: [{ unit: 'px', value: 40 }]
  },
  'bodyipad-portrait product-overlaymedia-image': {
    maxWidth: [{ unit: 'px', value: 320 }]
  },
  'bodyipad-portrait product-display-slideshow flexslider': {
    width: [{ unit: 'px', value: 320 }]
  },
  'mfp-bg': {
    opacity: '0.5',
    filter: 'alpha(opacity=50)'
  },
  flexslider: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    background: 'transparent',
    border: [{ unit: 'string', value: 'none' }],
    WebkitBorderRadius: 'none',
    MozBorderRadius: 'none',
    borderRadius: 'none',
    WebkitBoxShadow: 'none',
    MozBoxShadow: 'none',
    boxShadow: [{ unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }]
  },
  'flexslider-wrapper': {
    position: 'relative',
    overflow: 'hidden'
  },
  'flex-direction-nav a': {
    textIndent: '0',
    fontSize: [{ unit: 'px', value: 0 }],
    background: '#343331',
    width: [{ unit: 'px', value: 40 }],
    height: [{ unit: 'px', value: 40 }],
    lineHeight: [{ unit: 'px', value: 40 }],
    color: '#ffffff',
    textAlign: 'center',
    WebkitBorderRadius: '300%',
    MozBorderRadius: '300%',
    borderRadius: '300%',
    bottom: [{ unit: 'string', value: 'auto' }],
    right: [{ unit: 'px', value: 0 }]
  },
  'flex-direction-nav a:before': {
    content: ''\f105'',
    fontFamily: ''FontAwesome'',
    fontSize: [{ unit: 'px', value: 28 }]
  },
  'flex-direction-nav aflex-next': {
    right: [{ unit: 'px', value: 0 }]
  },
  'flex-direction-nav aflex-prev': {
    WebkitBorderRadius: '300%',
    MozBorderRadius: '300%',
    borderRadius: '300%',
    left: [{ unit: 'px', value: 0 }],
    right: [{ unit: 'px', value: 41 }]
  },
  'flex-direction-nav aflex-prev:before': {
    content: ''\f104''
  },
  'flex-direction-nav a:hover': {
    textDecoration: 'none'
  },
  'flex-control-nav': {
    bottom: [{ unit: 'px', value: -22 }],
    right: [{ unit: 'px', value: 0 }],
    width: [{ unit: 'string', value: 'auto' }]
  },
  'flex-control-nav li': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 3 }, { unit: 'px', value: 0 }, { unit: 'px', value: 3 }]
  },
  'flex-control-nav li a': {
    WebkitBorderRadius: '300%',
    MozBorderRadius: '300%',
    borderRadius: '300%',
    height: [{ unit: 'px', value: 10 }],
    width: [{ unit: 'px', value: 10 }],
    border: [{ unit: 'string', value: 'none' }],
    background: '#464b4d'
  },
  'flex-control-nav li a:hover': {
    background: '#999'
  },
  'flex-control-nav li aflex-active': {
    background: '#ccc'
  },
  'flexslider items img': {
    width: [{ unit: 'string', value: 'auto' }],
    display: 'inline'
  },
  'page-index #header at-me': {
    color: '#ffffff'
  },
  'page-index #content': {
    padding: [{ unit: 'px', value: 40 }, { unit: 'px', value: 0 }, { unit: 'px', value: 60 }, { unit: 'px', value: 0 }],
    '<w767': {
      paddingLeft: [{ unit: 'em', value: 2 }],
      paddingRight: [{ unit: 'em', value: 2 }]
    }
  },
  'page-index product-wrap': {
    textAlign: 'center'
  },
  'page-index product-wrap i': {
    height: [{ unit: 'px', value: 300 }],
    width: [{ unit: '%H', value: 1 }],
    display: 'block',
    backgroundPosition: 'bottom center',
    backgroundRepeat: 'no-repeat'
  },
  'page-index product-wrapipad-portrait': {
    minWidth: [{ unit: 'px', value: 230 }],
    '>w768&&<w979': {
      minWidth: [{ unit: 'string', value: 'auto' }]
    }
  },
  'page-index product-wrapipad-portrait i': {
    backgroundImage: 'url('../img/products/ipad-portrait-graphic.png')',
    backgroundSize: '230px auto',
    'all&&-webkit-min-device-pixel-ratio 1.': {
      backgroundImage: 'url('../img/products/ipad-portrait-graphic@2x.png')',
      backgroundSize: '230px auto'
    }
  },
  'page-index product-wrapipad-mini': {
    minWidth: [{ unit: 'px', value: 180 }]
  },
  'page-index product-wrapipad-mini i': {
    backgroundImage: 'url('../img/products/ipad-mini-graphic.png')',
    backgroundSize: '180px auto',
    'all&&-webkit-min-device-pixel-ratio 1.': {
      backgroundImage: 'url('../img/products/ipad-mini-graphic@2x.png')',
      backgroundSize: '180px auto'
    }
  },
  'page-index product-wrapiphone-portrait': {
    minWidth: [{ unit: 'px', value: 95 }]
  },
  'page-index product-wrapiphone-portrait i': {
    backgroundImage: 'url('../img/products/iphone-portrait-graphic.png')',
    backgroundSize: '95px auto',
    'all&&-webkit-min-device-pixel-ratio 1.': {
      backgroundImage: 'url('../img/products/iphone-portrait-graphic@2x.png')',
      backgroundSize: '95px auto'
    }
  },
  'page-index medias': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'em', value: 3 }, { unit: 'px', value: 0 }, { unit: 'em', value: 3 }]
  },
  'page-index medias li': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'em', value: 0.5 }, { unit: 'px', value: 0 }],
    listStyle: 'none'
  },
  'page-index medias li btn': {
    display: 'block',
    paddingTop: [{ unit: 'em', value: 0.8 }],
    paddingBottom: [{ unit: 'em', value: 0.8 }]
  }
});
