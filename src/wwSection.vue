<template>
  <section class="smart-section" :style="sectionStyle">
    <div class="smart-section__container" :class="`align-${content?.alignment || 'center'}`">
      <div class="smart-section__content">
        <!-- Heading -->
        <h1
          v-if="content?.heading"
          class="smart-section__heading"
          :style="headingStyle"
        >
          {{ content?.heading }}
        </h1>

        <!-- Subheading -->
        <p
          v-if="content?.subheading"
          class="smart-section__subheading"
        >
          {{ content?.subheading }}
        </p>

        <!-- CTA Button -->
        <a
          v-if="content?.showCTA"
          :href="content?.ctaLink || '#'"
          class="smart-section__cta"
          :style="ctaStyle"
          @click="handleCTAClick"
        >
          {{ content?.ctaText || 'Get Started' }}
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'SmartSection',
  props: {
    content: { type: Object, required: true },
  },
  emits: ['trigger-event'],
  setup(props, { emit }) {
    // Section styles - fully reactive
    const sectionStyle = computed(() => {
      const styles = {
        '--bg-color': props.content?.backgroundColor || '#1a1a2e',
        '--text-color': props.content?.textColor || '#ffffff',
        '--min-height': props.content?.minHeight || '400px',
        '--padding': props.content?.padding || '40px',
        '--border-radius': props.content?.borderRadius || '12px',
        '--heading-size-desktop': props.content?.headingSize || '48px',
        '--heading-size-mobile': props.content?.headingSizeMobile || '32px',
      };

      // Add gradient if enabled
      if (props.content?.useGradient) {
        const bgColor = props.content?.backgroundColor || '#1a1a2e';
        const gradientColor = props.content?.gradientColor || '#16213e';
        styles.background = `linear-gradient(135deg, ${bgColor} 0%, ${gradientColor} 100%)`;
      } else {
        styles.backgroundColor = props.content?.backgroundColor || '#1a1a2e';
      }

      return styles;
    });

    // Heading styles - responsive
    const headingStyle = computed(() => ({
      color: props.content?.textColor || '#ffffff',
    }));

    // CTA button styles - fully reactive
    const ctaStyle = computed(() => ({
      '--btn-bg': props.content?.buttonBackground || '#0f3460',
      '--btn-text': props.content?.buttonTextColor || '#ffffff',
      '--btn-hover-bg': props.content?.buttonHoverBackground || '#e94560',
      backgroundColor: props.content?.buttonBackground || '#0f3460',
      color: props.content?.buttonTextColor || '#ffffff',
    }));

    // Handle CTA click
    const handleCTAClick = (event) => {
      // Prevent default if it's just a trigger (no real link)
      if (props.content?.ctaLink === '#' || !props.content?.ctaLink) {
        event.preventDefault();
      }

      // Emit trigger event for WeWeb workflows
      emit('trigger-event', {
        name: 'cta-click',
        event: {
          value: props.content?.ctaText || 'Get Started',
          link: props.content?.ctaLink || '#',
        },
      });
    };

    return {
      sectionStyle,
      headingStyle,
      ctaStyle,
      handleCTAClick,
    };
  },
};
</script>

<style lang="scss" scoped>
.smart-section {
  // Use CSS variables for all dynamic properties
  min-height: var(--min-height);
  padding: var(--padding);
  color: var(--text-color);

  // CRITICAL: No fixed width - sections must be fluid
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  // Smooth transitions
  transition: all 0.3s ease;
}

.smart-section__container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  // Alignment classes
  &.align-left {
    text-align: left;

    .smart-section__content {
      align-items: flex-start;
    }
  }

  &.align-center {
    text-align: center;

    .smart-section__content {
      align-items: center;
    }
  }

  &.align-right {
    text-align: right;

    .smart-section__content {
      align-items: flex-end;
    }
  }
}

.smart-section__content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: fadeInUp 0.6s ease-out;
}

.smart-section__heading {
  // Mobile first - use mobile size
  font-size: var(--heading-size-mobile);
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  letter-spacing: -0.02em;

  // Smooth text rendering
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  // Responsive - desktop size
  @media (min-width: 768px) {
    font-size: var(--heading-size-desktop);
  }
}

.smart-section__subheading {
  font-size: 18px;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
  max-width: 600px;

  // Mobile optimization
  @media (max-width: 767px) {
    font-size: 16px;
  }

  // Desktop
  @media (min-width: 768px) {
    font-size: 20px;
  }
}

.smart-section__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  outline: none;

  // Touch-friendly size for mobile
  min-height: 48px;
  min-width: 160px;

  // Hover effect (desktop only)
  @media (hover: hover) {
    &:hover {
      background-color: var(--btn-hover-bg) !important;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
  }

  // Active state (mobile tap feedback)
  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  // Mobile optimization
  @media (max-width: 767px) {
    width: 100%;
    max-width: 300px;
    font-size: 15px;
    padding: 14px 28px;
  }
}

// Fade in animation
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Mobile-specific optimizations
@media (max-width: 767px) {
  .smart-section {
    // Reduce padding on mobile for better space usage
    padding: calc(var(--padding) * 0.75);
  }

  .smart-section__container {
    padding: 0 16px;
  }

  .smart-section__content {
    gap: 20px;
  }
}

// Tablet optimizations
@media (min-width: 768px) and (max-width: 1023px) {
  .smart-section__container {
    padding: 0 24px;
  }
}

// Large desktop
@media (min-width: 1440px) {
  .smart-section__container {
    max-width: 1400px;
  }
}
</style>
