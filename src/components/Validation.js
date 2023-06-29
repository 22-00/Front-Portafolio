

export const Validation = (obj) => {
    let regexCel = /^[^a-zA-Z@.!$%^&*=`~]*$/;
    const error = {};
    if(!regexCel.test(obj.cel)) error.cel = "Tienes que poner un numero de telefono valido"
    if(obj.mensaje.length > 300) error.mensaje = "El mensaje no puede contener mas de 300 caracteres"
    return error
}