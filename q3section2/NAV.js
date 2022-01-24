const myArgs = process.argv.slice(2);
const fetch = require('node-fetch');
fetch('https://codequiz.azurewebsites.net/',{
    headers:{
        Cookie: "hasCookie=true"
    }
})
    .then(res => res.text())
    .then(text => {
        let sp = text.split("<td>");
        sp = sp.map(c=>{
            c = c.replace("</td>","");
            c = c.replace("</tr><tr>","")
            return c
        })
        for(let i=0; i<sp.length; i++){
            if (sp[i]==myArgs[0]) {
                console.log(sp[i+1]);
            }
        }
})

