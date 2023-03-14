niz = (rijec) => {
    let x = 0; //brojac
    let max_x = 0; //max broj slova
    let proslo_slovo = '';
    for(let i = 0;i<rijec.length;i++){ 
        let slovo = rijec[i];
        if(slovo === proslo_slovo){ 
            x++;
            if(x > max_x){
                max_x = x;
            }
        }
        else x = 1;

        proslo_slovo = slovo;   
    }
    return max_x;
}

console.log(niz("sssadaaaa"));
console.log(niz("imagineee thaaaat duuuuude"));