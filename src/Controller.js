

export default class Controller{


    static requestKey = async () => {
        let key = localStorage.getItem('apiKey');
        if (key === null){
            key = this.setNewKey();
        }
        return key;
        
    }

    static setNewKey = async () => {
        let key = null;
        while (key === null){
            let result = await this.access(`requestKey`)
            key = result.key;
            if (result.status === "success"){
                localStorage.setItem('apiKey', key);
            }
        }
    }
 
    static submit = async (title, author) => {
        let result = await this.access(`key=${await this.requestKey()}&op=insert&title=${title}&author=${author}`)
        return {
             id: result.id,
             title: title,
             author: author
        }  
    }

    static fetchBooks = async () =>{
        let key = await this.requestKey();
        let result = await this.access(`key=${key}&op=select`);
        return result.data;
    }

    static async access(requestString){
        let i = 0;
        let result;
        do{
            result = await fetch(`https://www.forverkliga.se/JavaScript/api/crud.php?${requestString}`)
            .then(response => response.json())
            i++;
        } while(result.status !== "success" && i<15);
        return result;
    }

    static deleteBook = async (id) =>{
        let key = await this.requestKey();
        this.access(`key=${key}&op=delete&id=${id}`);
    }

    static edit = async (id, title, author) => {
        let key = await this.requestKey();
        this.access(`key=${key}&op=update&id=${id}&title=${title}&author=${author}`);
    }

    

}

