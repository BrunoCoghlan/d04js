/* arreglo de objetos */
const propiedadesAlquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banio: 2,
        costo: '2.000',
        smoke: false,
        pets: true,
        id: 1
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banio: 3,
        costo: '2.500',
        smoke: true,
        pets: true,
        id: 2
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banio: 2,
        costo: '2.200',
        smoke: false,
        pets: false,
        id: 3
    },
    {
        nombre: 'Acogedor departamento en Miami',
        src: 'https://a0.muscache.com/im/pictures/37f452af-f401-43f5-94e8-3faec3f0c290.jpg?im_w=1200',
        descripcion: 'Elegante departamento ubicado en la sona mas VIP de Miami',
        ubicacion: 'SW 28th Terrace',
        habitaciones: 2,
        banio: 1,
        costo: '3.200',
        smoke: true,
        pets: false,
        id: 4
    }
]
const propiedadesVenta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banio: 4,
        costo: '5.000',
        smoke: false,
        pets: false,
        id: 1
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        banio: 1,
        costo: '1.200',
        smoke: true,
        pets: true,
        id: 2
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        banio: 3,
        costo: '4.500',
        smoke: false,
        pets: true,
        id: 3
    },
    {
        nombre: 'Penthouse Scotland',
        src: 'https://assets.savills.com/properties/GBGLRDGLD180128/GLD180128_41_l_lis.jpg',
        descripcion: 'Este penthouse de una comodidad increible con acceso a todos los atractivos turisticos cercanos',
        ubicacion: 'Jeffrey St, Edinburgh EH1 4AE, Reino Unido',
        habitaciones: 2,
        banio: 2,
        costo: '10.500',
        smoke: false,
        pets: true,
        id: 4
    },
]
/* evalua reglas de la comunidad */
const reglaComunidad = (boolean, regla) => {
    if (boolean && regla === 'smoke') {
        return `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
    }
    if (!boolean && regla === 'smoke') {
        return `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
    }
    if (boolean && regla === 'pet') {
        return `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
    }
    if (!boolean && regla === 'pet') {
        return `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`
    }
}
/* se imprimen propiedades en arriendo */
let alquiler = document.querySelector('#alquiler')
let html = ''
for (const propiedadAlquiler of propiedadesAlquiler) {
    if (propiedadAlquiler.id === 4 && alquiler.classList.contains("only3")) break
    if(alquiler.classList.contains('noimprimir')) break
    html += `<div class="col-md-4 mb-4">
    <div class="card">
      <img
        src="${propiedadAlquiler.src}"
        class="card-img-top" alt="Imagen del departamento" />
      <div class="card-body">
        <h5 class="card-title">${propiedadAlquiler.nombre}</h5>
        <p class="card-text">${propiedadAlquiler.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i>${propiedadAlquiler.ubicacion}</p>
        <p>
          <i class="fas fa-bed"></i> ${propiedadAlquiler.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${propiedadAlquiler.banio} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedadAlquiler.costo}</p>
        ${reglaComunidad(propiedadAlquiler.smoke, 'smoke')}
        ${reglaComunidad(propiedadAlquiler.pets, 'pet')}
      </div>
    </div>
  </div>`
}
alquiler.innerHTML = html

/* se imprimen propiedades en ventas */
let venta = document.querySelector('#venta')
let html2 = ''
for (const propiedadVenta of propiedadesVenta) {
    if (propiedadVenta.id === 4 && venta.classList.contains("only3")) break
    if(venta.classList.contains('noimprimir')) break
    html2 += `<div class="col-md-4 mb-4">
    <div class="card">
      <img
        src="${propiedadVenta.src}"
        class="card-img-top" alt="Imagen del departamento" />
      <div class="card-body">
        <h5 class="card-title">${propiedadVenta.nombre}</h5>
        <p class="card-text">${propiedadVenta.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i>${propiedadVenta.ubicacion}</p>
        <p>
          <i class="fas fa-bed"></i> ${propiedadVenta.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${propiedadVenta.banio} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedadVenta.costo}</p>
        ${reglaComunidad(propiedadVenta.smoke, 'smoke')}
        ${reglaComunidad(propiedadVenta.pets, 'pet')}
      </div>
    </div>
  </div>`
}
venta.innerHTML = html2 