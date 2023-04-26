

                const seeCar = document.getElementById("navbarcar")
                const firstContainer = document.getElementById("first-container")

                
                
            
                 // parte primera tarjeta carrito
                

                const deleteCar = () => {
                    firstContainer.innerHTML = ""
                    firstContainer.style.display = "flex"
                    const first = document.createElement("div")
                    first.className = "first"
                    first.innerHTML = `
                    <h1 class="first-head">Anillos</h1>
                    ` 
                firstContainer.append(first)
                // boton de tarjeta carrito
                const firstbutton = document.createElement("h1")
                firstbutton.innerText = "Cerrar"
                firstbutton.className = "first-button"
            
                //boton cerrar
                firstbutton.addEventListener("click", () => {
                    firstContainer.style.display ="none"
                })
                
                first.append(firstbutton)
                
                // parte media tarjeta carrito
                car.forEach((anillo) => {
                    let contenidoCar = document.createElement("div")
                    contenidoCar.className = "second"
                    contenidoCar.innerHTML = `
                    <img src="${anillo.picture}">
                    <h3>${anillo.material}</h3>
                    <p>$${anillo.valor} </p>
                    <p> Unidades: ${anillo.numero}</p>
                    <span class= "borrar-anillo">💍❌</span>
                    `
                
                    firstContainer.append(contenidoCar)   

                    let botonEraser = contenidoCar.querySelector(".borrar-anillo")
                    botonEraser.addEventListener("click", () => {
                        borrarAnillo(anillo.referencia)
                        alerta()
                    })

                    
                })
            
                
                // parte final tarjeta carrito
                const total = car.reduce((acc, ani) => acc + ani.valor, 0)

                const totalDos = document.createElement("div")
                totalDos.className = "total-content"
                totalDos.innerHTML = `Tu pago total es de: $  ${total} us`
                firstContainer.append(totalDos)
            }

            seeCar.addEventListener("click", deleteCar)

            let borrarAnillo = (referencia) => {
                const esRe = car.find((element) => element.referencia === referencia)

                car = car.filter((carRe) => {
                    return carRe !== esRe

                })

                deleteCar()

            }

            // sweet alert

            function alerta() {
                Swal.fire(
                    'Eliminar Anillo?',
                    'Esta seguro de eliminar este anillo?',
                    'question'
                )
            }


            