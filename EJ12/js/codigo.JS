//Parte 1
const regex = /\b\d{2}\/\d{2}\/\d{4}\b/;
const texto = "Nací el 05/04/1982 en Donostia";
const valid = regex.test(texto);

console.log(valid);

//Parte 2
const regex2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
const email = "marc@tsys.com";
const valid2 = regex2.test(email);

console.log(valid2);

//Parte 3
const replaceValid = [
    [/&/g, '&amp;'],
    [/'/g, '&apos;'],
    [/"(?!>)|"/g, '&quot;'],
    [/</g, '&lt;'],
    [/>/g, '&gt;']
];

replaceValid.forEach(replace => {
    text = text.replace(replace[0], replace[1]);
});

return text;

//Parte 4
const name = "John Smith";
const regex3 = /^(\w+)\s(\w+)$/;
const nameInverted = name.replace(regex3, '$2, $1');

console.log(nameInverted);

//Parte 5
const html = "<p>Marc<script>script</script>Pellicer</p>";
const regex4 = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
const nameReplaced = html.replace(regex4, '');

console.log(nameReplaced);


