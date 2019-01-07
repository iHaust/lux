<template>
	<button
		class="lux-btn"
		@click="handleClick"
		:disabled="buttonDisabled"
		:class="[
			type ? `lux-btn--${type}` : '',
			buttonSize ? `lux-button--${buttonSize}` : '',
			{
				'is-disabled': buttonDisabled
			}
		]">
		<span v-if="$slots.default"><slot></slot></span>
	</button>
</template>

<script>
export default {
	name: 'LuxButton',
	props: {
		type: {
      type: String,
      default: 'default'
    },
    size: String,
    disabled: Boolean
	},
	computed: {
		buttonSize() {
			return this.size;
		},
		buttonDisabled() {
			return this.disabled;
		}	
	},
	methods: {
		handleClick(event) {
			if (this.disabled) return;

			this.$emit('click', event);
		}
	}
}
</script>