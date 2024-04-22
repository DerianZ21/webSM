function validateForm(formData) {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = "El nombre es obligatorio.";
    }
  
    if (!formData.email.trim()) {
      errors.email = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "El correo electrónico no es válido.";
    }
  
    if (!formData.subject.trim()) {
      errors.subject = "El asunto es obligatorio.";
    }
  
    if (!formData.message.trim()) {
      errors.message = "El mensaje es obligatorio.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "El mensaje debe tener al menos 10 caracteres.";
    }
  
    return errors;
  }

  export default validateForm;