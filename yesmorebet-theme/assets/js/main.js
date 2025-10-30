/**
 * YesMoreBet Theme JavaScript
 */

(function($) {
    'use strict';

    // Mobile Menu Toggle
    function initMobileMenu() {
        const menuToggle = $('.mobile-menu-toggle');
        const mobileNav = $('.mobile-nav');
        const menuIcon = $('.menu-icon');
        const closeIcon = $('.close-icon');

        menuToggle.on('click', function() {
            const isOpen = mobileNav.hasClass('open');

            if (isOpen) {
                mobileNav.removeClass('open');
                menuIcon.show();
                closeIcon.hide();
                $(this).attr('aria-expanded', 'false');
            } else {
                mobileNav.addClass('open');
                menuIcon.hide();
                closeIcon.show();
                $(this).attr('aria-expanded', 'true');
            }
        });

        // Close mobile menu when clicking on a link
        mobileNav.find('a').on('click', function() {
            mobileNav.removeClass('open');
            menuIcon.show();
            closeIcon.hide();
            menuToggle.attr('aria-expanded', 'false');
        });
    }

    // Smooth Scroll for Anchor Links
    function initSmoothScroll() {
        $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').on('click', function(e) {
            const targetHash = this.hash;
            const targetElement = $(targetHash);

            if (targetElement.length) {
                e.preventDefault();

                $('html, body').animate({
                    scrollTop: targetElement.offset().top - 100
                }, 800, function() {
                    // Update URL without jumping
                    if (history.pushState) {
                        history.pushState(null, null, targetHash);
                    }
                });
            }
        });
    }

    // Active Navigation Link
    function updateActiveNavLink() {
        const currentPath = window.location.pathname;

        $('.nav-link, .mobile-nav a').each(function() {
            const linkPath = $(this).attr('href');

            if (linkPath === currentPath || (currentPath === '/' && linkPath === '/')) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }

    // Scroll to Top on Page Load
    function scrollToTopOnLoad() {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }

    // Fade In Animation on Scroll
    function initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.feature-card, .faq-category, .section-header').forEach(el => {
            observer.observe(el);
        });
    }

    // Contact Form Handler
    function initContactForm() {
        const contactForm = $('#contact-form');

        if (contactForm.length) {
            contactForm.on('submit', function(e) {
                e.preventDefault();

                const submitBtn = $(this).find('.form-submit');
                const originalText = submitBtn.text();

                // Disable submit button
                submitBtn.prop('disabled', true).text('Envoi en cours...');

                // Get form data
                const formData = {
                    action: 'yesmorebet_contact',
                    nonce: yesmorebetData.nonce,
                    name: $(this).find('input[name="name"]').val(),
                    email: $(this).find('input[name="email"]').val(),
                    phone: $(this).find('input[name="phone"]').val(),
                    message: $(this).find('textarea[name="message"]').val()
                };

                // Send AJAX request
                $.ajax({
                    url: yesmorebetData.ajaxUrl,
                    type: 'POST',
                    data: formData,
                    success: function(response) {
                        if (response.success) {
                            // Show success message
                            alert(response.data.message);
                            contactForm[0].reset();
                        } else {
                            alert(response.data.message);
                        }
                    },
                    error: function() {
                        alert('Une erreur est survenue. Veuillez réessayer.');
                    },
                    complete: function() {
                        submitBtn.prop('disabled', false).text(originalText);
                    }
                });
            });
        }
    }

    // Header Scroll Effect
    function initHeaderScroll() {
        let lastScroll = 0;
        const header = $('.site-header');

        $(window).on('scroll', function() {
            const currentScroll = $(this).scrollTop();

            if (currentScroll > 100) {
                header.css('background-color', 'rgba(0, 0, 0, 0.95)');
            } else {
                header.css('background-color', 'rgba(0, 0, 0, 0.08)');
            }

            lastScroll = currentScroll;
        });
    }

    // Initialize on Document Ready
    $(document).ready(function() {
        initMobileMenu();
        initSmoothScroll();
        updateActiveNavLink();
        initContactForm();
        initHeaderScroll();

        // Init scroll animations if IntersectionObserver is supported
        if ('IntersectionObserver' in window) {
            initScrollAnimations();
        }
    });

    // Initialize on Window Load
    $(window).on('load', function() {
        scrollToTopOnLoad();
    });

})(jQuery);
