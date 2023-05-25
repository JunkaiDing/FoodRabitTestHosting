import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    plugins: [
        require('windicss/plugin/aspect-ratio'),
    ],
    theme: {
        extend: {
            backgroundImage: {
                banner: "url('/images/banner.png')"
            },
            colors: {
                peach: "#FFEDCF",
                grey: "#878787",
                "light-grey": "#E6E6E8",
                topaz: "#FFC172",
                green: "#178E14"
            },
            fontFamily: {
                sans: ['Poppins', 'ui-sans serif'],
                dm: 'DM Sans',
                losta: 'Losta Masta'
            }
        },
    }
})