let car =  JSON.parse(localStorage.getItem("car")) || []



                const tarjeta = document.getElementById("tarjeta")

                const URL = "js/anillos.json"
// Fetch asincronica
                const addAnillo = async () => {
                    const respuesta = await fetch(URL)
                    const datos = await respuesta.json()


                    datos.forEach((anillo) =>{
                        let contenedor = document.createElement("div")
                        contenedor.className = "css"
                        contenedor.innerHTML =  `  
                        <img src="${anillo.picture}">
                        <h3>${anillo.material}</h3>
                        <p class="precio">$${anillo.valor}</p>
                        ` 
                        tarjeta.append(contenedor)
                    
                        let botonComprar = document.createElement("button")
                        botonComprar.innerText = "ADD"
                        botonComprar.className = "botoncss"
                    
                        contenedor.append(botonComprar)
    
                        
                        botonComprar.addEventListener("click", () => {
    
                            const varios = car.some((variosAnillo) => variosAnillo.referencia === anillo.referencia)
                            if (varios === true){
                                car.map((ani) => {
                                    if(ani.referencia === anillo.referencia) {
                                        ani.numero++
                                    }
    
                                })
                            } else {
                            car.push({
                                referencia: anillo.referencia,
                                picture: anillo.picture,
                                material: anillo.material,
                                valor: anillo.valor,
                                numero: anillo.numero,
                                })
                                storageSave()
                            }
                                
                            })
                        
                    })
                }

                addAnillo()
                


                // Local Storage
                const storageSave = () => {
                    localStorage.setItem("car", JSON.stringify (car))
                }

                JSON.parse(localStorage.getItem("car"))

                
                


        
                

                