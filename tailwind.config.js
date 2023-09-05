/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bg-light-cream': '#FFF5E1',
        'bg-pale-green':'#B2DFDB',
        'bg-peachy-pink':'#FFB6C1'
      }, 
      colors:{
        'text-charcoal-gray':'#333333',
        'text-dark-green':'#00695C',
        'text-slate-blue':'#5E90A7'
      }
    },
  },
  plugins: [],
}

