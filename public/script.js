// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Close mobile menu when clicking on links
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form validation and submission
const contactForm = document.getElementById('contact-form');
const contactSuccess = document.getElementById('contact-success');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        nome: document.getElementById('contact-nome').value,
        email: document.getElementById('contact-email').value,
        telefone: document.getElementById('contact-telefone').value,
        tipoAtendimento: document.getElementById('contact-tipo').value,
        mensagem: document.getElementById('contact-mensagem').value
    };
    
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (result.success) {
            contactSuccess.classList.add('show');
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                contactSuccess.classList.remove('show');
            }, 5000);
        } else {
            alert('Erro ao enviar mensagem: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
    }
});

// Schedule form
const scheduleForm = document.getElementById('schedule-form');
const scheduleSuccess = document.getElementById('schedule-success');
const scheduleData = document.getElementById('schedule-data');
const scheduleHorario = document.getElementById('schedule-horario');

// Set minimum date to today
const today = new Date().toISOString().split('T')[0];
scheduleData.setAttribute('min', today);

// Load available times when date is selected
scheduleData.addEventListener('change', async () => {
    const selectedDate = scheduleData.value;
    if (selectedDate) {
        try {
            const response = await fetch(`/api/available-times?date=${selectedDate}`);
            const data = await response.json();
            
            // Clear existing options
            scheduleHorario.innerHTML = '<option value="">Selecione um horário</option>';
            
            // Add available times
            data.availableTimes.forEach(time => {
                const option = document.createElement('option');
                option.value = time;
                option.textContent = time;
                scheduleHorario.appendChild(option);
            });
        } catch (error) {
            console.error('Error loading available times:', error);
        }
    }
});

scheduleForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        nome: document.getElementById('schedule-nome').value,
        email: document.getElementById('schedule-email').value,
        telefone: document.getElementById('schedule-telefone').value,
        data: document.getElementById('schedule-data').value,
        horario: document.getElementById('schedule-horario').value,
        tipoSessao: document.getElementById('schedule-tipo').value
    };
    
    try {
        const response = await fetch('/api/schedule', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (result.success) {
            scheduleSuccess.classList.add('show');
            scheduleForm.reset();
            
            // Open WhatsApp link if available
            if (result.whatsappLink) {
                setTimeout(() => {
                    window.open(result.whatsappLink, '_blank');
                }, 2000);
            }
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                scheduleSuccess.classList.remove('show');
            }, 5000);
        } else {
            alert('Erro ao agendar: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Erro ao agendar. Tente novamente mais tarde.');
    }
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('shadow-lg');
    } else {
        header.classList.add('shadow-lg');
    }
    
    lastScroll = currentScroll;
});

// Phone number formatting
function formatPhone(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length <= 11) {
        if (value.length <= 2) {
            value = value;
        } else if (value.length <= 7) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else {
            value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
        }
    }
    
    input.value = value;
}

// Apply phone formatting to phone inputs
document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('input', () => formatPhone(input));
});

// Form field animations
document.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('focus', () => {
        field.parentElement.classList.add('transform', 'scale-105');
    });
    
    field.addEventListener('blur', () => {
        field.parentElement.classList.remove('transform', 'scale-105');
    });
});

// Loading states
function addLoadingState(button, originalText) {
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Processando...';
}

function removeLoadingState(button, originalText) {
    button.disabled = false;
    button.innerHTML = originalText;
}

// Apply loading states to forms
contactForm.addEventListener('submit', function() {
    const submitButton = this.querySelector('button[type="submit"]');
    addLoadingState(submitButton, 'Enviar Mensagem');
    
    // Reset button after 3 seconds (in case of errors)
    setTimeout(() => {
        removeLoadingState(submitButton, 'Enviar Mensagem');
    }, 3000);
});

scheduleForm.addEventListener('submit', function() {
    const submitButton = this.querySelector('button[type="submit"]');
    addLoadingState(submitButton, 'Confirmar Agendamento');
    
    // Reset button after 3 seconds (in case of errors)
    setTimeout(() => {
        removeLoadingState(submitButton, 'Confirmar Agendamento');
    }, 3000);
});

// WhatsApp functionality
const whatsappBtn = document.getElementById('whatsapp-btn');
const whatsappSuccess = document.getElementById('whatsapp-success');

whatsappBtn.addEventListener('click', () => {
    const nome = document.getElementById('whatsapp-nome').value;
    const telefone = document.getElementById('whatsapp-telefone').value;
    const mensagem = document.getElementById('whatsapp-mensagem').value;
    const tipo = document.getElementById('whatsapp-tipo').value;
    
    if (!nome || !telefone || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Format phone number (remove non-digits)
    const phoneClean = telefone.replace(/\D/g, '');
    
    // Build WhatsApp message
    let whatsappMessage = `Olá! Meu nome é ${nome}.\n\n`;
    
    if (tipo) {
        const tipoText = {
            'individual': 'Atendimento Individual',
            'casal': 'Terapia de Casal',
            'infantil': 'Atendimento Infantil',
            'duvida': 'Dúvida Geral'
        }[tipo] || tipo;
        whatsappMessage += `Tipo de atendimento: ${tipoText}\n\n`;
    }
    
    whatsappMessage += `Mensagem:\n${mensagem}\n\n`;
    whatsappMessage += `Telefone: ${telefone}`;
    
    // Show success message
    whatsappSuccess.style.display = 'block';
    
    // Build WhatsApp URL
    const whatsappUrl = `https://wa.me/5511987654321?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp after 1.5 seconds
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        document.getElementById('whatsapp-nome').value = '';
        document.getElementById('whatsapp-telefone').value = '';
        document.getElementById('whatsapp-mensagem').value = '';
        document.getElementById('whatsapp-tipo').value = '';
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            whatsappSuccess.style.display = 'none';
        }, 5000);
    }, 1500);
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Site da Dra. Marina Costa - Carregado com sucesso!');
});
