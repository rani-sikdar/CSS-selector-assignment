const puppeteer= require('puppeteer');
(async ()=> {
    let url='https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020';
    let browser= await puppeteer.launch();
    let page= await browser.newPage();
    await page.goto(url);
    let data = await page.evaluate( ()=>{
        let pdate= document.querySelector('span.col-sm-6 lbl-licitacao').innerText; //publication date
        let bdate= document.querySelector('span.col-sm-6 lbl-licitacao').innerText; // binding date
        let obj= document.querySelector('span.lbl-licitacao').innerText;
        var links = document.querySelectorAll("a");
        var links_list = []

        for (var i=0; i<links.length; i++){
            var cleanlink = links[i].href;
            links_list.push(cleanlink);
            };

        return{
            pdate,
            bdate,
            obj,

        }
    })

    console.log(data)
    await browser.close();
})();