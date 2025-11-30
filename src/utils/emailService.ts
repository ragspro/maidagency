import emailjs from '@emailjs/browser';
import type { ContactFormData } from './validation';

// EmailJS configuration
const SERVICE_ID = 'service_baby_sitter'; // Replace with your EmailJS service ID
const TEMPLATE_ID = 'template_contact'; // Replace with your EmailJS template ID
const PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS public key

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    const templateParams = {
      from_name: formData.name,
      phone: formData.phone,
      baby_age: formData.babyAge,
      service_type: formData.serviceType,
      message: formData.message || 'No additional message',
      to_name: 'Baby Sitter Agency',
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('Unable to send message. Please try again or contact us directly at 9971691558');
  }
};
