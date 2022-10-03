import { mode } from '@chakra-ui/theme-tools';
import { theme as chakraTheme, extendTheme } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
// declare a variable for fonts and set our fonts. I am using Inter with various backups but you can use `Times New Roman`. Note we can set different fonts for the body and heading.
const fonts = {
  ...chakraTheme.fonts,
  body: `'HelveticaNeue Roman', system-ui, sans-serif`,
  heading: `'FoundersGrotesk Bold', system-ui, sans-serif`,
};

// declare a variable for our theme and pass our overrides in the e`xtendTheme` method from chakra
const customTheme = extendTheme({
  fonts,
  colors: {
    brand: '#FFE381',
    hover: '#FFDB5C',
    focusBorderColor: '#FFE381',
  },

  components: {
    Button: {
      baseStyle: {
        fontWeight: '100',
      },
      variants: {
        link: {
          bg: 'transparent',
          color: 'gray',
        },
        linkactive: {
          bg: 'transparent',
          color: '#000',
        },
        brand: {
          color:'black',
          bg: 'brand',
          _disabled: {
            opacity: 0.6,
          },
          _hover: {
            bg: 'hover',
            _disabled: {
              bg: 'brand',
            },
          },
        },
        black: {
          bg: 'black',
          color: 'white',
        },
        large: {
          width: '100%',
          fontSize: 'md',
          padding: 6,
          color:'#000',
          borderRadius: '12px',
          bg: 'brand',
          _hover: {
            
            background:"hover",
            _disabled:{
              background:"hover"
            }
          },
        },
      },
    },
    Text: {
      baseStyle: {
        margin: '10px 0',
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 100,
      },
    },
    FormLabel: {
      baseStyle: {
        marginTop: 4,
      },
    },
    Input: {
      defaultProps: {
        focusBorderColor: 'brand',
      },
    },
    Link:{
      baseStyle:(props:StyleFunctionProps) => ({
        color:mode('#505050', '#dcdcdc')(props)
      }),
      variants:{
        active:(props:StyleFunctionProps) => ({
          textDecoration:'underline',
          color:mode('#000', '#fff')(props)
        })
      }
    }
  },
  breakpoints: {
    sm: '40em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles:{
    global: {
      a:{

      }
    }
  }
});

// export our theme
export default customTheme;
