const form = document.getElementById('form-register');
form.addEventListener('submit', event=>{
    event.preventDefault();

const Cédula = document.getElementById('Cédula').value;
const Nombre = document.getElementById('Nombre').value;
const Apellido = document.getElementById('Apellido').value;
const Ciudad = document.getElementById('Ciudad').value;
const Dirección = document.getElementById('Dirección').value;
const Teléfono = document.getElementById('Teléfono').value;
const Correo = document.getElementById('Correo').value;
const Contraseña = document.getElementById('Contraseña').value;

    const data={
    Cédula: Contraseña,
    Nombre: Nombre,
    Apellido: Apellido,
    Ciudad: Ciudad,
    Dirección: Dirección,
    Teléfono: Teléfono,
    Correo: Correo,
    Contraseña: Contraseña
};
    console.log(data);
});
