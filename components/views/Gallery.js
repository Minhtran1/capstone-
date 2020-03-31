export default st => `
<section>
${st.pictures.reduce(
  (html, pic) => html + `<img src="${https://raw.githubusercontent.com/Minhtran1/capstone-/master/Pictures/Singapore.JPG}" alt="${pic.title}">`,
  ``
)}
</section>
`;
