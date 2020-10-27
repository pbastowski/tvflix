<template>
    <div
        class="px-1 arrow"
        :class="[{ right, left }]"
        @click="scroll()"
        :style="{ height: height + 'px' }"
    >
        <v-icon x-large style="height: 100%"
            >mdi mdi-arrow-{{ left ? 'right' : 'left' }}-bold</v-icon
        >
    </div>
</template>

<script>
    const size = document.body.scrollWidth * 0.8

    export default {
        props: {
            right: { type: Boolean, default: false },
            left: { type: Boolean, default: false },
            height: { type: Number, default: 350 }
        },

        methods: {
            scroll() {
                this.$emit('scroll', this.scrollRow)
            },

            scrollRow(el) {
                if (el.length) el = el[0]
                el.scrollBy((this.right ? -1 : 1) * size * 0.8, 0)
            }
        }
    }
</script>

<style scoped>
    .arrow {
        position: absolute;
        opacity: 0.5;
        background: rgba(128, 128, 128, 0.3);
        z-index: 4;
        height: 350px;
    }

    .left {
        right: 0;
    }

    .right {
        left: 0;
    }

    .arrow:hover {
        opacity: 1;
        background: rgba(128, 128, 128, 0.5);
    }
</style>
