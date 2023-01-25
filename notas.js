let main=document.querySelector('main');
fetch('pagina.md')
.then(res => res.ok?res.text():Promise.reject(res))
.then(text =>{
    main.innerHTML= new showdown.Converter().makeHtml(text);
})
.catch(err => {
    console.log(err);
    let message=err.statusText||'Ocurrió un error';
    main.innerHTML='Error'+err.status+message;
});