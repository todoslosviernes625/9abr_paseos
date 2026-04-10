

// Función para abrir un modal específico
 /* ====== */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('is-active'); // Añade la clase para mostrarlo
    }
}

// Función para cerrar un modal específico
 /* ====== */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('is-active'); // Quita la clase para ocultarlo
    }
}

// Función clave: oculta el modal actual y abre el nuevo
 /* ====== */
function changeModal(nextModalId) {
    // Encuentra el modal actualmente activo y ciérralo
    const currentActiveModal = document.querySelector('.modal.is-active');
    if (currentActiveModal) {
        currentActiveModal.classList.remove('is-active');
    }
    
    // Abre el nuevo modal
    openModal(nextModalId);
}

// Cierra cualquier modal si el usuario hace clic fuera del contenido
 /* ====== */
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('is-active');
    }
}

 // Esperar a que el DOM esté completamente cargado
 /* =============================  */
        document.addEventListener('DOMContentLoaded', function() {
            const modal = document.getElementById('Modales');
            const closeBtn = document.querySelector('.close_btn');
           
			

// Mostrar el modal
/* ============================= */
            modal.style.display = 'block';
            
// Cerrar al hacer clic en la X
            closeBtn.addEventListener('click', function() {
                modal.style.display = 'none';
            });
            
// Cerrar al hacer clic fuera del modal
/* ============================= */
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });
		
		
				

// Función app1.js
 /* ====== */


// Función se esta cargando al reinicio
 /* ====== */
 /* ============================= */		
// script.js
document.addEventListener("DOMContentLoaded", function() {
  // Simula una carga lenta para el ejemplo
  setTimeout(function() {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("contenido").style.display = "block";
  }, 2500); // Espera 2 segundos (simulando carga)
});

// Función clave: oculta el modal actual y abre el nuevo
 /* ====== */
        // Script para mostrar el modal
        $(document).ready(function(){
            $('#miModalAlCargar').modal('show');
        });
		
		