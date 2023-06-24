// theme.ts

export interface Theme {
  primaryColor: string;
  secondaryColor: string;
}

export const lightTheme: Theme = {
  primaryColor: "#ffffff",
  secondaryColor: "#000000",
};

export const darkTheme: Theme = {
  primaryColor: "#000000",
  secondaryColor: "#ffffff",
};
