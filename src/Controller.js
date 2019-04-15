// Jag hade nog inte valt att göra en klass här
// hade snarare låtit den här filen exportera funktioner direkt
// Finns ingen direkt anleding att introducera en klass

export const requestKey = async () => {
    let key = localStorage.getItem('apiKey');
    if (key === null){
        key = setNewKey();
    }
    return key;
    
}

export const setNewKey = async () => {
    let key = null;
    while (key === null){
        let result = await access(`requestKey`)
        key = result.key;
        if (result.status === "success"){
            localStorage.setItem('apiKey', key);
        }
    }
}

export const submit = async (title, author) => {
    let result = await access(`key=${await requestKey()}&op=insert&title=${title}&author=${author}`)
    return {
        id: result.id,
        title,
        author
    }  
}

export const fetchBooks = async () =>{
    let key = await requestKey();
    let result = await access(`key=${key}&op=select`);
    return result.data;
}
// Din applikation kanske lite väl naiv när den hanterar svar från API:et
export const  access = async (requestString) => {
    let i = 0;
    let result;
    do{
        result = await fetch(`https://www.forverkliga.se/JavaScript/api/crud.php?${requestString}`)
        .then(response => response.json())
        i++;
    } while(result.status !== "success" && i<15);
    return result;
}

export const deleteBook = async (id) =>{
    let key = await requestKey();
    access(`key=${key}&op=delete&id=${id}`);
}

export const edit = async (id, title, author) => {
    let key = await requestKey();
    access(`key=${key}&op=update&id=${id}&title=${title}&author=${author}`);
}





