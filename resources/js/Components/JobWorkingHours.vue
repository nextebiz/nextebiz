<template>
    <span>
        {{ hours }}
    </span>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
    'working_hours': String
})

const hours = computed({
    get() {
        switch (props.working_hours) {
            case '9to5':
                return '9:00 a.m. to 5:00 p.m.';
                break;
            case '2xto10':
                return '2:00 p.m. to 10:00 p.m.';
                break;
            case '6to3':
                return '6:00 p.m. to 3:00 a.m.';
                break;
            case 'x': return 'malik'; break;
            default: return 'Flexible hours';
        }
    }
});
</script>


<style lang="scss" scoped></style>
