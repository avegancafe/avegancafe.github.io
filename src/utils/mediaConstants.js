const mediaConstants = {
  'screen-sm': '719px',
  'screen-sm-min': '0',
  'screen-sm-hz': '420px',
  'screen-md': '1024px',
  'screen-md-min': '720px',
  'screen-lg': '1025px',
  'screen-lg-min': '1025px',
  desktop() {
    return `only screen and (min-width: ${this['screen-lg-min']})`;
  },
  tablet() {
    return `only screen and (min-width: ${this['screen-md-min']}) and (max-width: ${this['screen-md']})`;
  },
  phone() {
    return `only screen and (min-width: ${this['screen-sm-min']}) and (max-width: ${this['screen-sm']})`;
  },
  phoneHorizontal() {
    return `only screen and (min-height: ${this['screen-sm-min']}) and (max-height: ${this['screen-sm-hz']})`;
  },
};

export default mediaConstants;
