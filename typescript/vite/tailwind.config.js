module.exports = {
  content: [
    './src/**/*.{ts,tsx}', 
  ],
  safelist: [
    'hidden',
    'ki-outline',
    'ki-duotone',
    'ki-solid',
    { pattern: /^apexcharts-.*$/ }
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          100: 'var(--tw-gray-100)',
          200: 'var(--tw-gray-200)',
          300: 'var(--tw-gray-300)',
          400: 'var(--tw-gray-400)',
          500: 'var(--tw-gray-500)',
          600: 'var(--tw-gray-600)',
          700: 'var(--tw-gray-700)',
          800: 'var(--tw-gray-800)',
          900: 'var(--tw-gray-900)',
        },       
        primary: {
          DEFAULT: 'var(--tw-primary)',
          active: 'var(--tw-primary-active)',
          light: 'var(--tw-primary-light)',
          clarity: 'var(--tw-primary-clarity)',
          inverse: 'var(--tw-primary-inverse)',
        },
        success: {
          DEFAULT: 'var(--tw-success)',
          active: 'var(--tw-success-active)',
          light: 'var(--tw-success-light)',
          clarity: 'var(--tw-success-clarity)',
          inverse: 'var(--tw-success-inverse)',
        },
        warning: {
          DEFAULT: 'var(--tw-warning)',
          active: 'var(--tw-warning-active)',
          light: 'var(--tw-warning-light)',
          clarity: 'var(--tw-warning-clarity)',
          inverse: 'var(--tw-warning-inverse)',
        },
        danger: {
          DEFAULT: 'var(--tw-danger)',
          active: 'var(--tw-danger-active)',
          light: 'var(--tw-danger-light)',
          clarity: 'var(--tw-danger-clarity)',
          inverse: 'var(--tw-danger-inverse)',
        },
        info: {
          DEFAULT: 'var(--tw-info)',
          active: 'var(--tw-info-active)',
          light: 'var(--tw-info-light)',
          clarity: 'var(--tw-info-clarity)',
          inverse: 'var(--tw-info-inverse)',
        },
        dark: {
          DEFAULT: 'var(--tw-dark)',
          active: 'var(--tw-dark-active)',
          light: 'var(--tw-dark-light)',
          clarity: 'var(--tw-dark-clarity)',
          inverse: 'var(--tw-dark-inverse)',
        },
        secondary: {
          DEFAULT: 'var(--tw-secondary)',
          active: 'var(--tw-secondary-active)',
          light: 'var(--tw-secondary-light)',
          clarity: 'var(--tw-secondary-clarity)',
          inverse: 'var(--tw-secondary-inverse)',
        },
        light: {
          DEFAULT: 'var(--tw-light)',
          active: 'var(--tw-light-active)',
          light: 'var(--tw-light-light)',
          clarity: 'var(--tw-light-clarity)',
          inverse: 'var(--tw-light-inverse)',
        },
        brand: {
          DEFAULT: 'var(--tw-brand)',
          active: 'var(--tw-brand-active)',
          light: 'var(--tw-brand-light)',
          clarity: 'var(--tw-brand-clarity)',
          inverse: 'var(--tw-brand-inverse)',
        },

        coal: {
          100: '#15171C',
          200: '#13141A',
          300: '#111217',
          400: '#0F1014',
          500: '#0D0E12',
          600: '#0B0C10',
          black: '#000000',
          clarity: 'rgba(24, 25, 31, 0.50)',
        },
        'light-dark': {
          DEFAULT: 'var(--tw-dark-light)',
          active: 'var(--tw-dark-active-light)',
          light: 'var(--tw-dark-light-light)',
          clarity: 'var(--tw-dark-clarity-light)',
          inverse: 'var(--tw-dark-inverse-light)',
        },
        'dark-dark': {
          DEFAULT: 'var(--tw-dark-dark)',
          active: 'var(--tw-dark-active-dark)',
          light: 'var(--tw-dark-light-dark)',
          clarity: 'var(--tw-dark-clarity-dark)',
          inverse: 'var(--tw-dark-inverse-dark)',
        },  
      },
      boxShadow: {
        card: 'var(--tw-card-box-shadow)',
        default: 'var(--tw-box-shadow)',
        primary: 'var(--tw-primary-box-shadow)',
        success: 'var(--tw-success-box-shadow)',
        danger: 'var(--tw-danger-box-shadow)',
        info: 'var(--tw-info-box-shadow)',
        warning: 'var(--tw-warning-box-shadow)',
        dark: 'var(--tw-dark-box-shadow)',
      },
      fontSize: {
        '3xs': ['0.6rem', { // 10px
          lineHeight: '0.8125rem' // 13px
        }],
        '2xs': ['0.6875rem', { // 11px
          lineHeight: '0.75rem' // 12px
        }],
        '2sm': ['0.8125rem', { // 13px
          lineHeight: '1.125rem' // 18px
        }],
        'md': ['0.9375rem', {  // 15px
          lineHeight: '1.375rem' // 22px
        }],
        '1.5xl': ['1.375rem', { // 22px
          lineHeight: '1.8125rem' // 29px
        }],
        '2.5xl': ['1.625rem', { // 26px
          lineHeight: '2.125rem' // 34px
        }],
      },
      lineHeight: {
        '5.5': '1.375rem', // 22px
      },
      zIndex: {
        '1': '1',
        '5': '5',
        '15': '15',
        '25': '25',
      },
      borderWidth: {
        '3': '3px',
      },
      spacing: {
        '0.75': '0.1875rem', 
        '5.5': '1.375rem', 
        '6.5': '1.625rem', 
        '7.5': '1.875rem', 
        '1.75': '0.4375rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    custom: ({ theme }) => ({
      layouts: {
        demo1: {
          sidebar: {
            width: {
              desktop: '280px',
              desktopMinimize: '80px',
              mobile: '250px',
            },
          },
          header: {
            height: {
              desktop: '70px',
              mobile: '60px',
            },
          },
        },
      },
      components: {
        common: {
          borderRadius: {
            btn: theme('borderRadius.lg'),
            progress: theme('borderRadius.lg'),
            dropdown: theme('borderRadius.lg'),
            badge: theme('borderRadius.lg'),
            card: theme('borderRadius.xl'),
            tooltip: theme('borderRadius.lg'),
            popover: theme('borderRadius.lg'),
            modal: theme('borderRadius.xl'),
          },
        },              
        container: {
          fixed: {
            px: {
              DEFAULT: theme('spacing.6'),
              xl: theme('spacing.8'),
            },
            'max-width': theme('screens.xl'),
          }, 
          fluid: {
            px: {
              DEFAULT: theme('spacing.6'),
              lg: theme('spacing.8'),
            },
          },
        },
        btn: {
          xs: {
            height: '24px',
            px: '0.5rem',
            gap: '0.25rem',
            fontSize: theme('fontSize.2xs'),
            fontWeight: '500',
            iconFontSize: '0.95rem',
            onlyIconFontSize: '1.05rem',
          },
          sm: {
            height: '32px',
            px: '0.625rem',
            gap: '0.275rem',
            fontSize: theme('fontSize.xs'),
            fontWeight: '500',
            iconFontSize: '1rem',
            onlyIconFontSize: '1rem',
          },
          DEFAULT: {
            height: '40px',
            px: '1rem',
            gap: '0.375rem',
            fontSize: theme('fontSize.2sm'),
            fontWeight: '500',
            iconFontSize: '1.15rem',
            onlyIconFontSize: '1.25rem',
          },
          lg: {
            height: '48px',
            px: '1.5rem',
            gap: '0.5rem',
            fontSize: theme('fontSize.sm'),
            fontWeight: '500',
            iconFontSize: '1.25rem',
            onlyIconFontSize: '1.5rem',
          },
        },
        card: {
          border: '1px solid var(--tw-gray-200)',   
          px: theme('spacing')['7.5'],
          py: {
            header: theme('spacing.3'),
            body: theme('spacing.5'),
            footer: theme('spacing.3'),
            group: theme('spacing.3'),
          },         
        },
        table: {
          border: '1px solid var(--tw-gray-200)',   
          px: theme('spacing')['4'],
          py: {
            head: theme('spacing')['2.5'],
            body: theme('spacing.4'),
          },                
        },
        badge: {
          xs: {
            px: '0.3rem',
            py: '0.3rem',
            fontSize: '0.6875rem',
            fontWeight: '500',
          },
          sm: {
            px: '0.4rem',
            py: '0.375rem',
            fontSize: '0.6875rem',
            fontWeight: '500',
          },
          DEFAULT: {
            px: '0.5rem',
            py: '0.5rem',
            fontSize: '0.6875rem',
            fontWeight: '500',
          },
          lg: {
            px: '0.6875rem',
            py: '0.5625rem',
            fontSize: '0.8125rem',
            fontWeight: '500',
          },
        },
      },      
    }),
  },
  plugins: [
    require('./src/css/plugins/common'),
    require('./src/css/plugins/container'),
    require('./src/css/plugins/menu'),
    require('./src/css/plugins/forms'),
    require('./src/css/plugins/image-input'),
    require('./src/css/plugins/modal'),
    require('./src/css/plugins/drawer'),
    require('./src/css/plugins/tooltip'),
    require('./src/css/plugins/btn'),
    require('./src/css/plugins/btn-group'),
    require('./src/css/plugins/card'),
    require('./src/css/plugins/table'),
    require('./src/css/plugins/badge'),
    require('./src/css/plugins/scrollable'),
    require('./src/css/plugins/stepper'),
    require('./src/css/plugins/progress'),
    require('./src/css/plugins/apexcharts'),
    require('./src/css/plugins/prismjs'),
  ],
};
               