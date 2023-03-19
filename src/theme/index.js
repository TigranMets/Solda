import { createTheme } from '@mui/system';

const palette = {
  primary: {
    main: '#FFFFFF',
    secondary: '#FAFBFC',
    third: '#F9F9F9'
  },
  secondary: {
    main: '#06BBEE',
    secondary: '#0B74BA',
    third: '#79BAD1',
    fourth: '#AEDBEA'
  },
  text: {
    h2: '#3B3B3A;',
    placeholder: '#DDE6E7',
    placeholder2: 'rgba(0, 0, 0, 0.5)',
    lightLink: '#9C9D9D',
    accent: '#000000',
    subAccent: '#000003',
    caption: '#454544',
    label: 'rgba(0, 0, 0, 0.7)',
    button: '#FFFFFF',
  },
  border: {
    main: '#ECECEC',
    secondary: '#FDFBF4'
  }
};

const typography = {
  fontFamily: ['Montserrat', 'Calibri', 'Tahoma'],
  h1: {
    color: palette.text.accent,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '22px',
  },
  titleBig: {
    color: palette.text.accent,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '20.7868px',
    lineHeight: '25px',
  },
  label: {
    color: palette.text.label,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16.1675px',
    lineHeight: '20px',
  },
  h2: {
    color: palette.text.h2,
    fontFamily: 'Tahoma',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '8px',
    lineHeight: '10px',
  },
  placeholder: {
    color: palette.text.placeholder,
    fontFamily: 'Calibri',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '9px',
    lineHeight: '11px',
  },
  placeHolder2: {
    color: palette.text.placeholder,
    fontfamily: 'Montserrat',
    fontstyle: 'normal',
    fontweight: 500,
    fontsize: '13.8579px',
    lineheight: '17px',
  },
  button: {
    color: palette.text.button,
    fontFamily: 'Calibri',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '9px',
    lineHeight: '11px',
  }
};

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1920,
    },
  },
  palette,
  typography,

});

const { breakpoints } = defaultTheme;

export const theme = {
  ...defaultTheme,
  overrides: {
    MuiTypography: {
      h2: {
        [breakpoints.down("md")]: {
          fontSize: "9px",
          lineHeight: '11px'
        }
      }

    }
  }
}