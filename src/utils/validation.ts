export interface ValidationResult {
  isValid: boolean;
  errors: { [key: string]: string };
}

export interface ContactFormData {
  name: string;
  phone: string;
  babyAge: string;
  serviceType: string;
  message: string;
}

export const validateName = (name: string): string | null => {
  if (!name || name.trim().length === 0) {
    return 'Please enter your name';
  }
  if (name.length < 2) {
    return 'Name must be at least 2 characters';
  }
  if (name.length > 50) {
    return 'Name cannot exceed 50 characters';
  }
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return 'Name can only contain letters and spaces';
  }
  return null;
};

export const validatePhone = (phone: string): string | null => {
  if (!phone || phone.trim().length === 0) {
    return 'Please enter your phone number';
  }
  if (!/^[6-9]\d{9}$/.test(phone)) {
    return 'Please enter a valid 10-digit Indian mobile number';
  }
  return null;
};

export const validateBabyAge = (babyAge: string): string | null => {
  if (!babyAge || babyAge.trim().length === 0) {
    return 'Please specify your baby\'s age';
  }
  return null;
};

export const validateServiceType = (serviceType: string): string | null => {
  if (!serviceType || serviceType.trim().length === 0) {
    return 'Please select a service type';
  }
  return null;
};

export const validateMessage = (message: string): string | null => {
  if (message && message.length > 500) {
    return 'Message cannot exceed 500 characters';
  }
  return null;
};

export const validateContactForm = (formData: ContactFormData): ValidationResult => {
  const errors: { [key: string]: string } = {};

  const nameError = validateName(formData.name);
  if (nameError) errors.name = nameError;

  const phoneError = validatePhone(formData.phone);
  if (phoneError) errors.phone = phoneError;

  const babyAgeError = validateBabyAge(formData.babyAge);
  if (babyAgeError) errors.babyAge = babyAgeError;

  const serviceTypeError = validateServiceType(formData.serviceType);
  if (serviceTypeError) errors.serviceType = serviceTypeError;

  const messageError = validateMessage(formData.message);
  if (messageError) errors.message = messageError;

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
