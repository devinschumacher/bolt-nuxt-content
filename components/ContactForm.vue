<template>
  <form @submit.prevent="submitForm" class="space-y-6">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <UFormGroup label="First Name" name="firstName">
        <UInput v-model="form.firstName" placeholder="Enter your first name" />
      </UFormGroup>
      
      <UFormGroup label="Last Name" name="lastName">
        <UInput v-model="form.lastName" placeholder="Enter your last name" />
      </UFormGroup>
    </div>
    
    <UFormGroup label="Email" name="email">
      <UInput 
        v-model="form.email" 
        type="email" 
        placeholder="Enter your email address" 
      />
    </UFormGroup>
    
    <UFormGroup label="Phone" name="phone">
      <UInput 
        v-model="form.phone" 
        placeholder="Enter your phone number" 
      />
    </UFormGroup>
    
    <UFormGroup label="Company" name="company">
      <UInput 
        v-model="form.company" 
        placeholder="Enter your company name" 
      />
    </UFormGroup>
    
    <UFormGroup label="Message" name="message">
      <UTextarea 
        v-model="form.message" 
        placeholder="Tell us about your project" 
        rows="5"
      />
    </UFormGroup>
    
    <UButton 
      type="submit" 
      color="primary" 
      size="lg" 
      block 
      :loading="loading"
      :disabled="loading"
    >
      {{ loading ? 'Sending...' : 'Send Message' }}
    </UButton>
    
    <UAlert 
      v-if="formStatus.show" 
      :variant="formStatus.variant" 
      :title="formStatus.title" 
      :description="formStatus.message" 
      class="mt-4"
    />
  </form>
</template>

<script setup>
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  message: ''
});

const loading = ref(false);
const formStatus = reactive({
  show: false,
  variant: 'success',
  title: '',
  message: ''
});

const submitForm = async () => {
  loading.value = true;
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success response
    formStatus.show = true;
    formStatus.variant = 'success';
    formStatus.title = 'Message sent!';
    formStatus.message = 'Thank you for reaching out. We\'ll get back to you shortly.';
    
    // Reset form
    Object.keys(form).forEach(key => form[key] = '');
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      formStatus.show = false;
    }, 5000);
  } catch (error) {
    // Error handling
    formStatus.show = true;
    formStatus.variant = 'error';
    formStatus.title = 'Error';
    formStatus.message = 'Something went wrong. Please try again later.';
  } finally {
    loading.value = false;
  }
};
</script>