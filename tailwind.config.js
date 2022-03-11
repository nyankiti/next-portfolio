module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './domain/**/*.tsx'],
  darkMode: 'class', // or 'media' or null
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      kaushan: ["Kaushan Script"],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    boxShadow: {
      "custom-light": " 0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    extend: {
      colors: {
        green: {
          DEFAULT: "#00f260",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
        blueGray: {
        //   50: '#f6f9f9',
        //  100: '#e4f1f8',
        //  200: '#c2e0f0',
        //  300: '#91c0db',
        //  400: '#5b9bbf',
        //  500: '#4479a3',
        //  600: '#385f87',
        //  700: '#2d4768',
        //  800: '#203049',
        //  900: '#131d2f',
         50: {
          "--tw-bg-opacity": 1,
          "background-color": "rgba(248, 250, 252, var(--tw-bg-opacity))",
        },
        100 :{
          "--tw-bg-opacity": 1,
          "background-color": "rgba(241, 245, 249, var(--tw-bg-opacity))",
        },
        200: {
          "--tw-bg-opacity": 1,
          "background-color": "rgba(226, 232, 240, var(--tw-bg-opacity))"
        },
        600: {
          "--tw-bg-opacity": 1,
          "background-color": "rgba(71, 85, 105, var(--tw-bg-opacity))",
        },
        700: {
          "--tw-bg-opacity": 1,
          "background-color": "rgba(51, 65, 85, var(--tw-bg-opacity))",
        },
        800: {
          "--tw-bg-opacity": 1,
          "background-color": "rgba(30, 41, 59, var(--tw-bg-opacity))",
        }
        
        
      },
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
     boxShadow: true,
  },
  plugins: [],
}
