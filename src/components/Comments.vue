<template>
    <div class="card bg-dark text-white my-2">
        <div class="card-body d-flex flex-column p-2">
            <span>
                <i class="bi bi-person"></i> {{ comment.username }}
            </span>
            <span>
                <i class="bi bi-alarm"></i> {{ comment.time }}
            </span>
            <p class="lead">
                {{ comment.body }}
            </p>
        </div>
    </div>
</template>

<script setup>
    //define props
    const props = defineProps({
        comment: {
            type: Object,
            required: true
        }
    });
</script>

<style>

</style>