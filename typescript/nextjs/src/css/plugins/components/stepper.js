/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addVariant, e, theme}) => {
  addVariant('stepper-first', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-stepper].first .${e(`stepper-first${separator}${className}`)}`;
      });
    },
  ]);
  
  addVariant('stepper-between', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-stepper].between .${e(`stepper-between${separator}${className}`)}`;
      });
    },
  ]);

  addVariant('stepper-last', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-stepper].last .${e(`stepper-last${separator}${className}`)}`;
      });
    },
  ]);

  addVariant('stepper-active', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-stepper-item].active.${e(`stepper-active${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `[data-stepper-item].active .${e(`stepper-active${separator}${className}`)}`;
      });
    },
  ]);

  addVariant('stepper-completed', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.completed.${e(`stepper-completed${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.completed .${e(`stepper-completed${separator}${className}`)}`;
      });
    },
  ]);

  addVariant('stepper-pending', [
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.pending.${e(`stepper-pending${separator}${className}`)}`;
      });
    },
    ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        return `.pending .${e(`stepper-pending${separator}${className}`)}`;
      });
    },
  ]);
});