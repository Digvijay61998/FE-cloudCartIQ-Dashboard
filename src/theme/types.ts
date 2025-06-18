declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      dark: string
      main: string
      light: string
      bodyBg: string
      trackBg: string
      tooltipBg: string
      darkPaperBg: string
      lightPaperBg: string
      tableHeaderBg: string
      headerBgColor?: any
      drawerBgColor?: any
    };
    golden:Palette['primary'];
    customThemeColors:{
      textMenuColor: string 
      menuBGColor: string 
      headerBGColor: string 
      menuGroupTextColor: string 
      menuSelectedColor: string 
      secondary: string 
    };
    botColor: {
      purple: string 
      grey: string 
      green: string 
      red: string 
      yellow: string 
      blue: string 
      navyblue: string 
    }
    bgColors:{
      headerBGColor: string
      menuBGColor: string

    }
  }
  interface PaletteOptions {
    customColors?: {
      dark?: string
      main?: string
      light?: string
      bodyBg?: string
      trackBg?: string
      tooltipBg: string
      darkPaperBg?: string
      lightPaperBg?: string
      tableHeaderBg?: string
      headerBgColor?: any
      drawerBgColor?: any
    };
    golden:PaletteOptions['primary'];
    customThemeColors:{
      textMenuColor: string | undefined
      menuBGColor: string | undefined
      headerBGColor: string | undefined
      menuSelectedColor: string | undefined
      menuGroupTextColor: string | undefined
      secondary: string | undefined
    };
    botColor?:{
      purple?: string 
      grey?: string 
      green?: string 
      red?: string 
      yellow?: string 
      blue?: string 
      navyblue?: string 
    }
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    golden: true;
  }
}
export {}
