//(function(){
    
    var formulario = document.getElementById('formulario'),
        nombre = formulario.nombre,
        correo = formulario.correo,
        sexo = formulario.sexo,
        terminos = formulario.terminos,
        error = document.getElementById('error');
    
    function validar(e){
        if(nombre.value == '' || nombre.value == null){
                error.style.display = 'block';
                error.innerHTML += '<li>Por favor completa el Nombre.</li>';
                e.preventDefault();
        } else{
            error.style.display = 'none';
        }
    }


    
    function validarCorreo(e){
        if(correo.value == '' || correo.value == null){
                error.style.display = 'block';
                error.innerHTML += '<li>Por favor completa el Correo.</li>';
                e.preventDefault();
        } else{
            error.style.display = 'none';
        }
    }    
    
    function validarSexo(e){
        if(sexo.value == '' || sexo.value == null){
                error.style.display = 'block';
                error.innerHTML += '<li>Por favor completa el Sexo.</li>';
                e.preventDefault();
        } else{
            error.style.display = 'none';
        }
    }    

	function validarTerminos(e){
		if (terminos.checked == false){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor acepta los terminos</li>';
			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarFormulario(e){
		error.innerHTML = '';

		validar(e);
		validarCorreo(e);
		validarSexo(e);
		validarTerminos(e);
	}

    formulario.addEventListener('submit', validarFormulario);

//}())