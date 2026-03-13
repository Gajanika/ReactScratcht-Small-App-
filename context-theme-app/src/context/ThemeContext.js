export const  ThemeContext = craeteContext();
export const ThemeProvider =({children})=> {
    const toggleTheme = () => {
        setTheme(theme ==="light" ? "dark":
            "light"
        );
    };

return ( 
    <ThemeContext.Provider value={{them, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
)

};