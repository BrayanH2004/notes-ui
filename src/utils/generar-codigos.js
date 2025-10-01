export function generarToken() {
    let token=0;
    for(let i=0;i<20;i++){
        token+=Math.random().toString(36).substring(2);
        
}}
return token;